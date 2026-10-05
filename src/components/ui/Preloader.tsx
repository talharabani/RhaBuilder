"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum time to ensure the intricate motion graphics can play out
    const MIN_TIME = 2800; 
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

  // Motion graphics easing curve (sharp and snappy)
  const motionEase = [0.87, 0, 0.13, 1];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            borderBottomLeftRadius: "30%", 
            borderBottomRightRadius: "30%",
            opacity: 0
          }}
          transition={{ duration: 0.9, ease: motionEase }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#e6f0fa] overflow-hidden"
        >
          
          {/* Subtle Dot Grid Background */}
          <div className="absolute inset-0 z-0">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="w-full h-full opacity-[0.05]"
               style={{
                 backgroundImage: 'radial-gradient(#1a2b4a 2px, transparent 2px)',
                 backgroundSize: '40px 40px'
               }}
             />
             {/* Sweeping dynamic light reflection */}
             <motion.div
               initial={{ x: "-150%", skewX: -45 }}
               animate={{ x: "200%" }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
               className="absolute top-0 bottom-0 w-2/3 bg-white/40 blur-2xl z-0"
             />
          </div>

          {/* Abstract Motion Graphics Decor */}
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: motionEase, delay: 0.2 }}
            className="absolute left-[-5%] top-[10%] w-64 h-64 border-[1px] border-[#1a2b4a]/10 rounded-full z-0"
          />
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: motionEase, delay: 0.4 }}
            className="absolute right-[-10%] bottom-[-10%] w-96 h-96 border-[1px] border-[#c9a96e]/20 rounded-full z-0"
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* Main Typographic Animation */}
            <div className="flex flex-col items-center">
               
               {/* Alternating RHA Reveal */}
               <div className="flex overflow-hidden px-4 pb-2">
                 {"RHA".split("").map((char, i) => (
                   <motion.span
                     key={i}
                     initial={{ y: i % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
                     animate={{ y: "0%", opacity: 1 }}
                     transition={{ 
                       duration: 0.8, 
                       ease: motionEase, 
                       delay: 0.2 + (i * 0.1) 
                     }}
                     className="text-7xl sm:text-8xl md:text-9xl font-display font-black text-[#1a2b4a] uppercase tracking-tighter leading-[0.85] drop-shadow-sm"
                   >
                     {char}
                   </motion.span>
                 ))}
               </div>
               
               {/* Snappy Connecting Line */}
               <motion.div
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 0.8, ease: motionEase, delay: 0.7 }}
                 className="h-[4px] sm:h-[6px] bg-[#c9a96e] my-2 w-[120%] max-w-[400px] origin-center shadow-sm"
               />
               
               {/* Alternating BUILDERS Reveal */}
               <div className="flex overflow-hidden pt-2">
                 {"BUILDERS".split("").map((char, i) => (
                   <motion.span
                     key={i}
                     initial={{ y: i % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
                     animate={{ y: "0%", opacity: 1 }}
                     transition={{ 
                       duration: 0.8, 
                       ease: motionEase, 
                       delay: 0.5 + (i * 0.05) 
                     }}
                     className="text-4xl sm:text-5xl md:text-[4.5rem] font-sans font-extrabold text-[#2d4a7a] uppercase tracking-widest leading-[0.9]"
                   >
                     {char}
                   </motion.span>
                 ))}
               </div>
            </div>

            {/* Staggered Subtitle */}
            <div className="mt-8 overflow-hidden h-8 flex items-center justify-center">
               <motion.div
                 initial="hidden"
                 animate="visible"
                 variants={{
                   hidden: {},
                   visible: {
                     transition: { staggerChildren: 0.04, delayChildren: 1.3 }
                   }
                 }}
                 className="flex space-x-[2px]"
               >
                 {"CONSTRUCTING EXCELLENCE".split("").map((char, i) => (
                   <motion.span
                     key={i}
                     variants={{
                       hidden: { y: 20, opacity: 0, rotateX: 90 },
                       visible: { 
                         y: 0, 
                         opacity: 1, 
                         rotateX: 0,
                         transition: { duration: 0.5, ease: "easeOut" } 
                       }
                     }}
                     className={`text-[10px] sm:text-xs md:text-sm text-[#1a2b4a] font-bold tracking-[0.3em] ${char === ' ' ? 'w-2 sm:w-4' : ''}`}
                   >
                     {char}
                   </motion.span>
                 ))}
               </motion.div>
            </div>
            
            {/* Minimal Loader Progress Indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear", delay: 0.2 }}
              className="absolute bottom-[-40px] h-[1px] bg-[#1a2b4a]/30"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-[#c9a96e]"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
