"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";

interface MediaLightboxModalProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  title?: string;
}

export function MediaLightboxModal({
  images,
  selectedIndex,
  onClose,
  onSelectIndex,
  title = "Media Showcase Preview",
}: MediaLightboxModalProps) {
  const isOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < images.length;
  const currentImg = isOpen ? images[selectedIndex] : null;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    onSelectIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    onSelectIndex((selectedIndex + 1) % images.length);
  };

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && currentImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 md:p-8 bg-black/95 backdrop-blur-2xl text-white select-none overflow-hidden"
          onClick={onClose}
        >
          {/* Top Bar Controls */}
          <div
            className="w-full max-w-6xl flex items-center justify-between z-10 pb-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/15 px-3 py-1 rounded-full border border-[var(--color-brand-accent)]/30">
                Media {selectedIndex + 1} of {images.length}
              </span>
              <span className="text-sm font-sans font-medium text-slate-300 hidden sm:inline">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1a2b4a] transition-all border border-white/20 shadow-lg cursor-pointer"
                aria-label="Close Lightbox"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Image Display Area */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative w-full h-full max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 flex items-center justify-center"
            >
              <img
                src={currentImg}
                alt={`${title} view ${selectedIndex + 1}`}
                className="w-full h-full object-contain max-h-[75vh] select-none"
              />
            </motion.div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-white hover:text-[#1a2b4a] transition-all border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-white hover:text-[#1a2b4a] transition-all border border-white/20 shadow-2xl backdrop-blur-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          {images.length > 1 && (
            <div
              className="w-full max-w-4xl flex items-center justify-center gap-3 overflow-x-auto pt-2 pb-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => {
                const isCurrent = i === selectedIndex;
                return (
                  <button
                    key={i}
                    onClick={() => onSelectIndex(i)}
                    className={`relative w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      isCurrent
                        ? "border-[var(--color-brand-accent)] scale-105 ring-2 ring-[var(--color-brand-accent)]/50 opacity-100"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
