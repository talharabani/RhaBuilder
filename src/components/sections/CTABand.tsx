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
        variant === "accent" && "bg-[var(--color-brand-accent)]",
        variant === "light" && "bg-[var(--color-surface-secondary)]"
      )}
      style={variant === "dark" ? { background: "linear-gradient(135deg, #0052cc 0%, #4da6ff 100%)" } : {}}
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
        <style dangerouslySetInnerHTML={{__html: `
          .cta-text-align {
            text-align: center;
          }
          @media (min-width: 768px) {
            .cta-text-align {
              text-align: left !important;
            }
          }
        `}} />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl cta-text-align">
            <h2
              className={cn(
                "font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1]",
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
                  "mt-4 text-base md:text-lg leading-relaxed font-medium",
                  variant === "dark"
                    ? ""
                    : variant === "accent"
                    ? "text-[var(--color-brand-primary)]/80"
                    : "text-[var(--color-text-muted)]"
                )}
                style={variant === "dark" ? { color: "#e6f0fa" } : undefined}
              >
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <style dangerouslySetInnerHTML={{__html: `
              .cta-btn-3d-light {
                box-shadow: 0 6px 0 #cbd5e1;
                transform: translateY(0);
              }
              .cta-btn-3d-light:hover {
                box-shadow: 0 4px 0 #94a3b8;
                transform: translateY(2px);
              }
              .cta-btn-3d-light:active {
                box-shadow: 0 0 0 #cbd5e1;
                transform: translateY(6px);
              }
              .cta-btn-3d-dark {
                box-shadow: 0 6px 0 #003380;
                transform: translateY(0);
              }
              .cta-btn-3d-dark:hover {
                box-shadow: 0 4px 0 #002255;
                transform: translateY(2px);
              }
              .cta-btn-3d-dark:active {
                box-shadow: 0 0 0 #003380;
                transform: translateY(6px);
              }
            `}} />
            <Link
              href={primaryHref}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 text-[15px] font-extrabold rounded-full transition-all duration-150 font-sans cursor-pointer",
                variant === "dark" || variant === "accent"
                  ? "bg-white text-[#0b1b3d] cta-btn-3d-light"
                  : "bg-[#0052cc] text-white cta-btn-3d-dark"
              )}
            >
              {primaryLabel}
              <ArrowRightIcon className="w-5 h-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 text-[15px] font-extrabold rounded-full transition-all duration-150 font-sans cursor-pointer",
                  variant === "dark"
                    ? "text-white border-2 border-white/40 hover:bg-white/10 hover:border-white"
                    : variant === "accent"
                    ? "text-[var(--color-brand-primary)] border-2 border-[var(--color-brand-primary)]/40 hover:bg-[var(--color-brand-primary)]/10"
                    : "text-[#0052cc] border-2 border-[#0052cc] hover:bg-[#0052cc]/5"
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
