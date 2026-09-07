import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center" style={{ backgroundColor: "var(--color-surface-dark)" }}>
      <div className="container-site py-24 text-center">
        {/* 404 Large */}
        <p
          className="font-display font-semibold mb-4 select-none"
          style={{ fontSize: "clamp(6rem, 15vw, 14rem)", color: "var(--color-brand-primary)", lineHeight: 1 }}
          aria-hidden="true"
        >
          404
        </p>

        <h1
          className="font-display font-semibold text-white text-3xl mb-4"
        >
          Page Not Found
        </h1>
        <p
          className="text-base max-w-md mx-auto mb-10"
          style={{ color: "var(--color-text-on-dark-muted)" }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved. Try
          exploring our projects or get in touch with the team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200"
            style={{ backgroundColor: "var(--color-brand-accent)", color: "var(--color-brand-primary)" }}
          >
            View Projects
            <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-[var(--radius-button)] border-2 text-white transition-all duration-200 hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-[var(--radius-button)] border-2 text-white transition-all duration-200 hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
