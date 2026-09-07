"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveHoverProps {
  children: ReactNode;
  scale?: number;
  y?: number;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHover({
  children,
  scale = 1.03,
  y = -4,
  className = "",
  onClick,
}: InteractiveHoverProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        y,
        transition: { type: "spring" as const, stiffness: 300, damping: 18 },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
