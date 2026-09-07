"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "blue" | "white" | "auto";
  scrolled?: boolean;
  className?: string;
  height?: number;
}

export function Logo({
  variant = "auto",
  scrolled = false,
  className,
  height = 40,
}: LogoProps) {
  // Determines whether to use white or blue logo variant based on header scroll state
  const isWhite = variant === "white" || (variant === "auto" && !scrolled);
  const logoSrc = isWhite ? "/images/rha-logo-white.png" : "/images/rha-logo-blue.png";

  return (
    <div className={cn("inline-flex items-center shrink-0 py-1", className)}>
      <img
        src={logoSrc}
        alt="RHA Builders"
        style={{
          height: `${height}px`,
          maxHeight: `${height}px`,
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
        className="transition-opacity duration-200 select-none"
      />
    </div>
  );
}
