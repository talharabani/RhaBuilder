"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface SlideItem {
  id: string;
  src: string;
  alt: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: "slide-blueprint",
    src: "/images/about-slider/slide-4.jpg",
    alt: "Architectural Blueprint & Wireframe Planning",
  },
  {
    id: "slide-groundwork",
    src: "/images/about-slider/slide-1.jpg",
    alt: "Groundwork & Excavation Phase",
  },
  {
    id: "slide-scaffolding",
    src: "/images/about-slider/slide-2.jpg",
    alt: "Concrete Structure & Scaffolding Execution",
  },
  {
    id: "slide-frame",
    src: "/images/about-slider/slide-5.jpg",
    alt: "Multi-Story Concrete Structure Framework",
  },
  {
    id: "slide-twilight",
    src: "/images/about-slider/slide-3.jpg",
    alt: "Structural Framing & Heavy Crane Lift",
  },
  {
    id: "slide-transition",
    src: "/images/about-slider/slide-7.jpg",
    alt: "Modern Facade & Glazing Transition",
  },
  {
    id: "slide-modern-building",
    src: "/images/about-slider/slide-6.jpg",
    alt: "Illuminated Modern Commercial & Residential Landmark",
  },
  {
    id: "slide-completed",
    src: "/images/about-homepage.jpg",
    alt: "Completed Luxury Real Estate Development",
  },
];

interface AboutImageSliderProps {
  slides?: SlideItem[];
  intervalMs?: number; // default 4000ms (between 3 to 5 sec)
  className?: string;
}

export function AboutImageSlider({
  slides = DEFAULT_SLIDES,
  intervalMs = 4000,
  className = "",
}: AboutImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play timer effect (3 to 5 sec interval)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext, isPaused, intervalMs]);

  return (
    <div
      className={`relative rounded-[var(--radius-card)] overflow-hidden aspect-[4/3] shadow-2xl border border-slate-200/20 group select-none bg-slate-900 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Construction and development showcase slider"
    >
      {/* 
        Persistent Slide Stack for 100% Blink-Free & Smooth Cross-Fading.
        All images remain mounted so there is zero white flash or decoding delay.
      */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: intervalMs / 1000 + 1.2, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: isActive ? 10 : 1 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        );
      })}

      {/* Sleek Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden pointer-events-none">
        <motion.div
          key={`progress-${currentIndex}-${isPaused}`}
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "0%" : "100%" }}
          transition={{
            duration: isPaused ? 0 : intervalMs / 1000,
            ease: "linear",
          }}
          className="h-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_var(--color-brand-accent)]"
        />
      </div>

      {/* Navigation Chevrons */}
      <button
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2 focus:opacity-100 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2 focus:opacity-100 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-400 ${
              idx === currentIndex
                ? "w-6 bg-[var(--color-brand-accent)] shadow-[0_0_6px_var(--color-brand-accent)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Gold accent bar at the bottom frame */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-30 pointer-events-none"
        style={{ backgroundColor: "var(--color-brand-accent)" }}
      />
    </div>
  );
}
