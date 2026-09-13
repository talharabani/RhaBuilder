"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export function NetflixServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/projects/ansa-tower-cover.jpg",
    "/images/projects/rha-heights-cover.jpg",
    "/images/projects/f10-markaz-cover.jpg",
  ];

  return (
    <section className="py-12 md:py-20 px-3 sm:px-6 lg:px-8 bg-white" aria-label="Services Showcase">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Main Banner Container */}
        <div className="p-8 md:p-12 lg:p-[4.5rem]" style={{ backgroundColor: '#e6f0fa', borderRadius: '2.5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[#0052cc] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-sans">
                Our Core Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1b3d] leading-[1.15] tracking-tight font-sans">
                End-to-End Real Estate &amp; Construction.
              </h2>
              <p className="text-slate-500 leading-relaxed font-sans text-sm md:text-base">
                From commercial plaza construction and shop sales with flexible installment plans to luxury residential builds and turnkey advisory. We combine experience, discipline, and a people-first approach.
              </p>
              <div className="pt-2">
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-[#0052cc] text-sm md:text-base font-bold font-sans hover:gap-3 transition-all"
                >
                  View All Services <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Middle Column - Features List */}
            <div className="lg:col-span-4 space-y-8 lg:px-4">
              {/* Feature 1 */}
              <div 
                className="flex gap-4 sm:gap-5 cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveIndex(0)}
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircleIcon className="w-8 h-8 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className={`font-bold text-base md:text-lg mb-1 font-sans text-[#0b1b3d]`}>
                    Commercial Plazas
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    High-yield commercial developments and shop sales with structured 3-year quarterly payment plans.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div 
                className="flex gap-4 sm:gap-5 cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveIndex(1)}
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircleIcon className="w-8 h-8 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className={`font-bold text-base md:text-lg mb-1 font-sans text-[#0b1b3d]`}>
                    Residential Builds
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    Custom residential construction and ready-to-move homes built with unparalleled structural integrity.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div 
                className="flex gap-4 sm:gap-5 cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveIndex(2)}
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircleIcon className="w-8 h-8 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className={`font-bold text-base md:text-lg mb-1 font-sans text-[#0b1b3d]`}>
                    Turnkey Advisory
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    Professional project management, architectural design coordination, and strategic investment consultation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Dynamic Image */}
            <div className="lg:col-span-4 h-full min-h-[350px] lg:min-h-[450px] relative overflow-hidden" style={{ borderRadius: '1.5rem' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[activeIndex]}
                    alt={`Construction Service ${activeIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}