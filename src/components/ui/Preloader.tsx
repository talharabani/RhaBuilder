"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.1 }
    }
  })
};

const fillVariants = {
  hidden: { fillOpacity: 0 },
  visible: {
    fillOpacity: 0.1,
    transition: { delay: 1.2, duration: 1 }
  }
};

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum time to ensure the beautiful animation can be seen
    const MIN_TIME = 2200; 
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_TIME - elapsedTime);
      
      setTimeout(() => setIsLoading(false), remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback
      const fallbackTimer = setTimeout(() => setIsLoading(false), MIN_TIME + 2000);
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1122] overflow-hidden"
        >
          {/* Blueprint Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Blueprint Construction Icon */}
            <motion.svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              className="mb-8"
              fill="#0052cc"
              stroke="#0052cc"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Ground Line */}
              <motion.path
                d="M 5 90 L 95 90"
                fill="none"
                custom={0}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Residential House */}
              <motion.path
                d="M 15 90 V 55 L 35 40 L 55 55 V 90 Z"
                custom={1}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M 15 90 V 55 L 35 40 L 55 55 V 90 Z"
                variants={fillVariants}
                initial="hidden"
                animate="visible"
                stroke="none"
              />

              {/* Commercial Building */}
              <motion.path
                d="M 55 90 V 25 H 85 V 90 Z"
                custom={2}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M 55 90 V 25 H 85 V 90 Z"
                variants={fillVariants}
                initial="hidden"
                animate="visible"
                stroke="none"
              />

              {/* House Windows/Door */}
              <motion.path
                d="M 30 75 H 40 V 90 H 30 Z"
                fill="none"
                custom={3}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M 35 55 A 5 5 0 1 0 35.1 55"
                fill="none"
                custom={4}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Commercial Building Windows */}
              <motion.path
                d="M 63 35 H 77 M 63 45 H 77 M 63 55 H 77 M 63 65 H 77 M 63 75 H 77"
                fill="none"
                custom={5}
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-white font-sans uppercase">
                RHA Builders
              </h1>
              <p className="mt-3 text-[10px] sm:text-xs text-[#0052cc] tracking-[0.3em] uppercase font-bold">
                Constructing Excellence
              </p>
            </motion.div>

            {/* Loader Progress Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="relative mt-8 w-48 sm:w-64 h-[1px] bg-white/20 overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 bg-[#0052cc] w-1/2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
