"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const SHOWCASE_ITEMS = [
  {
    id: "ansa-tower",
    title: "Ansa Tower — Flagship Commercial Plaza",
    location: "Shahalmi, Lahore",
    category: "Commercial Development",
    description:
      "A 9-story luxury commercial plaza constructed by RHA Builders featuring 25% advance booking and flexible 3-year quarterly payment plans.",
    image: "/images/about/about-hero-architecture.jpg",
    stats: "25% Booking · 3-Year Plan",
  },
  {
    id: "site-engineering",
    title: "Precision Structural Engineering & Quality Assurance",
    location: "Lahore & Islamabad",
    category: "Site Operations",
    description:
      "Our site engineers and construction managers enforce strict ISO structural testing, concrete core sampling, and safety standards.",
    image: "/images/about/about-story-engineering.jpg",
    stats: "100% Quality Audited",
  },
  {
    id: "residential-houses",
    title: "Custom House Building & Ready Turnkey Residences",
    location: "Lahore & Islamabad Housing Societies",
    category: "Residential Construction",
    description:
      "Delivering turnkey family houses built on custom plots and offering move-in ready residences crafted with premium marble and thermal glazing.",
    image: "/images/about/about-craftsmanship-finish.jpg",
    stats: "Turnkey Handover",
  },
  {
    id: "commercial-hubs",
    title: "High-Traffic Retail & Commercial Plazas",
    location: "Shahalmi Furniture Market, Lahore",
    category: "Real Estate Investment",
    description:
      "Designing multi-floor commercial shops with high rental yield returns, high-speed escalators, passenger lifts, and 24/7 power backup.",
    image: "/images/about/about-construction-site.jpg",
    stats: "High Capital Growth",
  },
];

export function AboutAnimatedShowcase() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const total = SHOWCASE_ITEMS.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  const activeItem = SHOWCASE_ITEMS[currentIndex];

  return (
    <div
      className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 75% White / 25% Blue Contrast Header Bar */}
      <div className="bg-[#1a2b4a] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-[var(--color-brand-accent)]" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
            Transitive Visual Showcase
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
          <span>0{currentIndex + 1}</span>
          <span className="text-slate-500">/</span>
          <span>0{total}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] md:min-h-[500px]">
        {/* Animated Image Viewport (Left / Top) */}
        <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[400px] bg-slate-950 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Controls Overlay */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-950/80 text-white hover:bg-white hover:text-[#1a2b4a] transition-all border border-white/20 shadow-xl backdrop-blur-md cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-950/80 text-white hover:bg-white hover:text-[#1a2b4a] transition-all border border-white/20 shadow-xl backdrop-blur-md cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transitive Captions & Meta (Right / Bottom — White 75%) */}
        <div className="lg:col-span-5 bg-white p-8 md:p-10 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1a2b4a] border border-blue-200">
                  {activeItem.category}
                </span>
                <span className="text-xs font-bold text-[var(--color-brand-accent)] font-mono">
                  {activeItem.location}
                </span>
              </div>

              <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-[#1a2b4a] leading-tight tracking-tight">
                {activeItem.title}
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] font-sans leading-relaxed">
                {activeItem.description}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#1a2b4a]">
                <CheckCircleIcon className="w-4 h-4 text-[var(--color-brand-accent)]" />
                <span>{activeItem.stats}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Thumbnail Nav */}
          <div className="pt-6 border-t border-slate-100 flex items-center gap-2">
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-[#1a2b4a]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
