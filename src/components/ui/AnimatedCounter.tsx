"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // duration in seconds
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2.0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out expo formula for smooth decelerating count up
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`inline-block font-display font-bold ${className}`}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
}

export interface StatItem {
  id: string;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const DEFAULT_STATS: StatItem[] = [
  {
    id: "experience",
    target: 20,
    suffix: "+",
    label: "Years Experience (Since 2006)",
  },
  {
    id: "handover",
    target: 2,
    suffix: " Months",
    label: "Ansa Tower Handover",
  },
  {
    id: "payment-plan",
    target: 3,
    suffix: "-Year",
    label: "Quarterly Payment Plan",
  },
];

interface StatsBarProps {
  stats?: StatItem[];
  className?: string;
}

export function StatsBar({ stats = DEFAULT_STATS, className = "" }: StatsBarProps) {
  return (
    <section
      className={`border-b border-t border-[var(--color-border)] bg-[var(--color-surface-secondary)]/50 py-10 ${className}`}
      aria-label="Company overview statistics"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
          {stats.map((stat) => (
            <div key={stat.id} className="py-6 sm:py-2 px-6 text-center group">
              <div className="flex items-center justify-center">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  className="text-4xl lg:text-5xl tracking-tight text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mt-2 font-sans text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
