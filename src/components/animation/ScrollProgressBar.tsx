"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-brand-accent)] via-blue-600 to-[var(--color-brand-accent)] origin-left z-[100] shadow-[0_2px_10px_rgba(201,169,110,0.5)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
