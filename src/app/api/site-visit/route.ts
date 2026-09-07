import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const siteVisitSchema = z.object({
  projectSlug: z.string().min(1),
  projectName: z.string().min(1),
  tourType: z.string().min(1),
  visitDate: z.string().min(1),
  visitTimeSlot: z.string().min(1),
  fullName: z.string().min(2).max(100),
  phone: z.string().min(6).max(30),
  email: z.string().email(),
  attendeesCount: z.number().min(1).max(10),
  notes: z.string().max(1000).optional(),
});

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const result = siteVisitSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed.", issues: result.error.flatten() },
        { status: 422 }
      );
    }

    const data = result.data;
    const bookingReference = `RHA-VISIT-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log("[RHA Builder] New Site Visit Booking:", {
      reference: bookingReference,
      project: data.projectName,
      date: data.visitDate,
      time: data.visitTimeSlot,
      visitor: data.fullName,
      phone: data.phone,
      email: data.email,
    });

    return NextResponse.json(
      {
        success: true,
        bookingReference,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[RHA Builder] Site visit booking error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
