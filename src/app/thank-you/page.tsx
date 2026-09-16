import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Thank You | RHA Builders",
  description: "Thank you for your enquiry. The RHA Builders team will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center" style={{ backgroundColor: "var(--color-surface-secondary)" }}>
      <div className="container-site py-24">
        <div
          className="max-w-lg mx-auto text-center bg-white p-12 rounded-[var(--radius-card)] border shadow-[var(--shadow-card)]"
          style={{ borderColor: "var(--color-border)" }}
        >
          <CheckCircleIcon className="w-16 h-16 mx-auto mb-5" style={{ color: "var(--color-success)" }} aria-hidden="true" />
          <h1 className="font-display font-semibold text-3xl mb-3" style={{ color: "var(--color-text-primary)" }}>
            Thank You
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
            Your enquiry has been received. A member of the RHA Builders team will
            be in touch with you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200"
              style={{ backgroundColor: "var(--color-brand-primary)", color: "white" }}
            >
              Explore Projects
              <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-button)] border-2 transition-all duration-200"
              style={{ borderColor: "var(--color-brand-primary)", color: "var(--color-brand-primary)" }}
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
