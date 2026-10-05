"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Dynamic playback rate: starts slow (0.5x), gets faster over time
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    const startTime = Date.now();
    
    // Interval to increase speed over time
    const speedInterval = setInterval(() => {
      if (videoRef.current) {
        const elapsedSeconds = (Date.now() - startTime) / 1000;
        // Speed up gradually from 0.5x to a maximum of 2.5x over time
        const newSpeed = Math.min(2.5, 0.5 + elapsedSeconds * 0.6);
        videoRef.current.playbackRate = newSpeed;
      }
    }, 100);

    // Set a minimum display time so the user can enjoy the video
    const MIN_TIME = 3500; 

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_TIME - elapsedTime);
      
      setTimeout(() => setIsLoading(false), remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback in case window load never fires
      const fallbackTimer = setTimeout(() => setIsLoading(false), MIN_TIME + 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
        clearInterval(speedInterval);
      };
    }
    
    return () => clearInterval(speedInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(8px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1122] overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* The Video Element */}
          <video
            ref={videoRef}
            src="/loader.webm"
            autoPlay
            muted
            playsInline
            loop
            className="relative z-10 w-full h-full max-w-2xl max-h-[80vh] object-contain drop-shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
