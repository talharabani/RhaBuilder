"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Determine if the page is already fully loaded
    if (document.readyState === "complete") {
      // Small delay just to let the animation play out beautifully if it's super fast
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        // Once window load fires, wait just a tiny bit for rendering to settle
        setTimeout(() => setIsLoading(false), 500);
      };
      
      window.addEventListener("load", handleLoad);
      
      // Fallback timeout just in case something hangs
      const fallbackTimer = setTimeout(() => setIsLoading(false), 3000);
      
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a2b4a] overflow-hidden"
        >
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-white font-sans uppercase">
              RHA Builders
            </h1>
            <p className="mt-2 text-[10px] sm:text-xs text-slate-400 tracking-[0.2em] uppercase font-semibold">
              Excellence Since 2006
            </p>
          </motion.div>

          {/* Construction Progress Line */}
          <div className="relative w-64 sm:w-80 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#0052cc]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
