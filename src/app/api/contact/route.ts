import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2).max(100),
  phone: z.string().min(6).max(30),
  email: z.string().email(),
  whatsapp: z.string().max(30).optional(),
  interest: z.string().min(1).max(50),
  projectOfInterest: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  consent: z.boolean().refine((v) => v === true),
  honeypot: z.string().max(0), // Must be empty
});

// Simple rate limiting store (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const record = requestCounts.get(key);
  if (!record || record.resetAt < now) {
    requestCounts.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit check
    const ip = getRateLimitKey(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot check — bots fill this, humans don't
    const raw = body as Record<string, unknown>;
    if (raw.honeypot && String(raw.honeypot).length > 0) {
      // Silently accept but don't process
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate with Zod
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed.", issues: result.error.flatten() },
        { status: 422 }
      );
    }

    const data = result.data;

    // TODO: Integrate with your CRM/email delivery here.
    // Options:
    //   - Send email via Resend / Nodemailer / SendGrid
    //   - POST to a CRM webhook (HubSpot, Pipedrive, etc.)
    //   - Save to a database
    //
    // Example (uncomment and configure):
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "noreply@rhabuilder.com",
    //     to: process.env.ENQUIRY_EMAIL,
    //     subject: `New Enquiry — ${data.interest} — ${data.fullName}`,
    //     text: `
    //       Name: ${data.fullName}
    //       Phone: ${data.phone}
    //       Email: ${data.email}
    //       WhatsApp: ${data.whatsapp ?? "Not provided"}
    //       Interest: ${data.interest}
    //       Project: ${data.projectOfInterest ?? "Not specified"}
    //       Message: ${data.message ?? "None"}
    //     `.trim(),
    //   }),
    // });

    // For now, log to server console (remove in production)
    console.log("[RHA Builder] New enquiry:", {
      name: data.fullName,
      phone: data.phone,
      email: data.email,
      interest: data.interest,
      project: data.projectOfInterest,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[RHA Builder] Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
