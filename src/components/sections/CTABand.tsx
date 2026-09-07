import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface CTABandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "accent" | "light";
}

export function CTABand({
  title = "Planning Your Next Property or Construction Project?",
  description = "Speak with the RHA Builder team to discuss your requirements.",
  primaryLabel = "Talk to Our Team",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "dark",
}: CTABandProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "dark" && "bg-[var(--color-surface-dark)]",
        variant === "accent" && "bg-[var(--color-brand-accent)]",
        variant === "light" && "bg-[var(--color-surface-secondary)]"
      )}
      aria-label="Call to action"
    >
      {/* Subtle background pattern */}
      {variant === "dark" && (
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-brand-accent) 0, var(--color-brand-accent) 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div className="container-site relative py-8 sm:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2
              className={cn(
                "font-display font-semibold",
                variant === "dark"
                  ? "text-white"
                  : variant === "accent"
                  ? "text-[var(--color-brand-primary)]"
                  : "text-[var(--color-text-primary)]"
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "mt-3 text-base leading-relaxed",
                  variant === "dark"
                    ? "text-[var(--color-text-on-dark-muted)]"
                    : variant === "accent"
                    ? "text-[var(--color-brand-primary)]/80"
                    : "text-[var(--color-text-muted)]"
                )}
              >
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <Link
              href={primaryHref}
              className={cn(
                "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-extrabold rounded-[var(--radius-button)] transition-all duration-200 shadow-md font-sans hover:-translate-y-0.5 active:translate-y-0 cursor-pointer",
                variant === "dark" || variant === "accent"
                  ? "bg-white text-[#1a2b4a] hover:bg-slate-100 hover:shadow-xl"
                  : "bg-[var(--color-brand-primary)] text-white hover:bg-[#15233d] hover:shadow-xl"
              )}
            >
              {primaryLabel}
              <ArrowRightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={cn(
                  "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200 border-2 font-sans cursor-pointer",
                  variant === "dark"
                    ? "text-white border-white/40 hover:bg-white/10 hover:border-white"
                    : variant === "accent"
                    ? "text-[var(--color-brand-primary)] border-[var(--color-brand-primary)]/40 hover:bg-[var(--color-brand-primary)]/10"
                    : "text-[var(--color-brand-primary)] border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5"
                )}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
