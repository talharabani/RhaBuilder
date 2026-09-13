"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/animation/TextReveal";

const HEADINGS = [
  "Your next chapter \n starts here.",
  "Constructing visions \n into reality.",
  "Premium development \n for lasting value."
];

export function HeroHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // This timer aligns exactly with HeroCarouselBackground's 5s interval
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HEADINGS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-5 sm:mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full"
        >
          <TextReveal
            text={HEADINGS[currentIndex]}
            as="h1"
            className="font-sans font-extrabold text-[#1a2b4a] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full break-words tracking-tight text-left"
            delay={0.1}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
