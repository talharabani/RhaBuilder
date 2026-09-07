import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "link"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center font-semibold font-sans transition-all duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-brand-accent)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer";

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-button)] gap-1.5",
  md: "px-6 py-3 text-sm rounded-[var(--radius-button)] gap-2",
  lg: "px-8 py-4 text-base rounded-[var(--radius-button)] gap-2",
};

const variantStyles = {
  primary:
    "bg-[#1a2b4a] text-white hover:bg-[#0f172a] shadow-md hover:shadow-xl font-bold border border-transparent",
  secondary:
    "bg-white text-[#1a2b4a] hover:bg-slate-100 shadow-md hover:shadow-xl font-bold border border-slate-200",
  outline:
    "border-2 border-[#1a2b4a] text-[#1a2b4a] bg-transparent hover:bg-[#1a2b4a] hover:text-white hover:shadow-md font-bold",
  ghost:
    "text-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white font-bold",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  as,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (as === "link") {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...(linkRest as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
