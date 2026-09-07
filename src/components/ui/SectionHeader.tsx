import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase font-sans mb-3",
            onDark
              ? "text-[var(--color-brand-accent)]"
              : "text-[var(--color-brand-accent)]"
          )}
          aria-hidden="true"
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-display font-semibold",
          onDark ? "text-white" : "text-[var(--color-text-primary)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onDark
              ? "text-[var(--color-text-on-dark-muted)]"
              : "text-[var(--color-text-muted)]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
