"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 18,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: "80%",
    },
  };

  return (
    <Component className={`flex flex-wrap max-w-full gap-x-[0.25em] ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        className="flex flex-wrap max-w-full gap-x-[0.25em]"
      >
        {words.map((word, idx) => {
          if (word === "\n") {
            return <div key={`br-${idx}`} className="w-full h-0 basis-full" />;
          }
          return (
            <span key={idx} className="inline-block max-w-full overflow-hidden pb-1">
              <motion.span variants={childVariants} className="inline-block max-w-full break-words">
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
