"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  HeartIcon,
  HomeIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { projects, filterProjects, type Project } from "@/lib/data/projects";
import { ProjectQuickDetailModal } from "@/components/ui/ProjectQuickDetailModal";

const TYPE_FILTERS = [
  { value: "all", label: "All Types" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
];

const STATUS_FILTERS = [
  { value: "all", label: "All Status" },
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
];

export function ThreeDProjectsGallery() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayProjects = filterProjects(
    selectedType === "all" ? null : selectedType,
    selectedStatus === "all" ? null : selectedStatus
  );

  const totalProjects = displayProjects.length;

  const handleNext = () => {
    if (totalProjects === 0) return;
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    if (totalProjects === 0) return;
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedType, selectedStatus]);

  // Auto-slide every 5 seconds if not paused
  useEffect(() => {
    if (!isAutoPlay || totalProjects <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, activeIndex, totalProjects]);

  const activeProject = displayProjects[activeIndex] || displayProjects[0] || projects[0];

  return (
    <section className="bg-white text-[var(--color-text-primary)] relative overflow-hidden pt-4 pb-12 md:pt-6 md:pb-20">
      {/* Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(201, 169, 110, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full px-8">
        {/* ─── SECTION HEADER ───────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pt-4">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
              Our Projects
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4a] tracking-tight leading-[1.1] font-sans">
              Places that <br className="hidden sm:block" /> move life forward.
            </h3>
          </div>
          <div className="shrink-0 max-w-full overflow-x-auto no-scrollbar">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end">
              <div className="flex flex-wrap items-center gap-3">
                {/* Type Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {TYPE_FILTERS.map((f) => {
                    const isActive = selectedType === f.value;
                    return (
                      <button
                        key={f.value}
                        type="button"
                        onClick={() => setSelectedType(f.value)}
                        className={`px-5 py-2 text-xs sm:text-sm font-sans font-bold rounded-xl border-2 transition-all duration-150 cursor-pointer active:translate-y-[2px] active:border-b-2 ${
                          isActive
                            ? "bg-[#0052cc] text-white border-[#00398f] shadow-[inset_0_3px_6px_rgba(0,0,0,0.3)] translate-y-[2px] border-b-2"
                            : "bg-white text-slate-600 border-slate-200 border-b-4 hover:bg-slate-50 hover:text-[#0052cc]"
                        }`}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Result Count */}
              <p className="text-xs sm:text-sm font-sans text-slate-500 font-medium shrink-0">
                {totalProjects === 1 ? "1 project" : `${totalProjects} projects`}
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* ─── 3D PERSPECTIVE GALLERY VIEWPORT ─────────────────────────────────── */}
        {totalProjects > 0 ? (
          <div
            className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center py-4 overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* 3D Perspective Container */}
            <div
              className="w-full max-w-5xl relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]"
              style={{ perspective: isMobile ? "800px" : "1200px" }}
            >
              {displayProjects.map((project, index) => {
                // Calculate offset relative to active index
                let offset = index - activeIndex;

                if (offset > Math.floor(totalProjects / 2)) {
                  offset -= totalProjects;
                } else if (offset < -Math.floor(totalProjects / 2)) {
                  offset += totalProjects;
                }

                const isActive = offset === 0;

                // 3D Transformation Math with Responsive Mobile Support
                const rotateY = isMobile ? (isActive ? 0 : offset * -12) : offset * -35;
                const translateX = isMobile ? offset * 20 : offset * 260;
                const translateZ = isActive ? (isMobile ? 10 : 100) : -Math.abs(offset) * 160;
                const scale = isActive ? 1 : isMobile ? 0.85 : Math.max(0.75, 1 - Math.abs(offset) * 0.18);
                const opacity = isActive ? 1 : isMobile ? 0 : Math.max(0.5, 1 - Math.abs(offset) * 0.35);
                const zIndex = 20 - Math.abs(offset) * 5;

                return (
                  <motion.div
                    key={project.slug}
                    onClick={() => {
                      if (isActive) {
                        router.push(`/projects/${project.slug}`);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    animate={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 24,
                    }}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                      willChange: "transform, opacity",
                    }}
                    className={`absolute w-[88vw] max-w-[340px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                      isActive
                        ? "border-transparent shadow-[0_20px_40px_-15px_rgba(26,43,74,0.5)] bg-slate-950"
                        : "border-transparent bg-slate-900 shadow-xl opacity-80"
                    }`}
                  >
                    {/* Card Background Image */}
                    <div className="absolute inset-0 overflow-hidden bg-slate-950" style={{ transformStyle: 'flat' }}>
                      {/* Sharp image */}
                      <img
                        src={project.coverImage || project.heroImage}
                        alt={project.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? "scale-105" : "scale-100 opacity-70"
                        }`}
                      />
                      
                      {/* Dark overlay for inactive cards */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-[#050505]/40 transition-opacity" />
                      )}

                      {/* Blurred duplicate image — smoothly fades in from middle to bottom */}
                      {isActive && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '65%',
                            overflow: 'hidden',
                            transformStyle: 'flat',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                          }}
                        >
                          <img
                            src={project.coverImage || project.heroImage}
                            alt=""
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              height: '440px',
                              objectFit: 'cover',
                              transform: 'scale(1.05) translateZ(0)',
                              filter: 'blur(18px)',
                              willChange: 'transform',
                            }}
                          />
                          {/* Dark blue tint over blurred area */}
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'rgba(10, 25, 50, 0.50)',
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Top Badge Overlay */}
                    <div className="relative z-10 p-4 sm:p-5 flex justify-between items-start">
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-widest px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg bg-slate-950/80 text-white backdrop-blur-sm">
                        {project.status === "ongoing" ? "Ongoing" : "Completed"}
                      </span>

                      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors shadow-lg backdrop-blur-md bg-white/20 hover:bg-white/40">
                        <HeartIcon className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    {/* Card Footer Details */}
                    <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 space-y-1">
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-none drop-shadow-md line-clamp-1 text-white">
                        {project.name.replace("Completed Residential Houses — ", "").replace("Completed Projects — ", "")}
                      </h3>

                      <div className="text-sm font-medium truncate pt-1 drop-shadow-sm pb-2 text-slate-300">
                        {project.locationName}, {project.city}, PK
                      </div>

                      <hr className="my-3 border-white/20" />

                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium pt-1 text-white/90">
                        <div className="flex items-center gap-1.5">
                          <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>{project.type[0] === "commercial" ? "Commercial" : "Residential"}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Square2StackIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="truncate max-w-[120px]">{project.keyFacts[3] ? project.keyFacts[3].value.split(' ')[0] : "Turnkey"}</span>
                        </div>
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-4"
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalProject(project);
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1a2b4a] text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:bg-slate-100 hover:shadow-2xl transition-all shadow-xl cursor-pointer"
                          >
                            Inspect 3D Details & Plans
                            <ArrowRightIcon className="w-4 h-4 shrink-0" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Controls Left & Right */}
            {totalProjects > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-1 sm:left-4 md:left-8 z-30 p-3 rounded-full bg-white text-[var(--color-brand-primary)] border border-slate-200 hover:bg-[#1a2b4a] hover:text-white transition-all shadow-xl cursor-pointer"
                  aria-label="Previous 3D Project"
                >
                  <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-1 sm:right-4 md:right-8 z-30 p-3 rounded-full bg-white text-[var(--color-brand-primary)] border border-slate-200 hover:bg-[#1a2b4a] hover:text-white transition-all shadow-xl cursor-pointer"
                  aria-label="Next 3D Project"
                >
                  <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 my-8">
            <h4 className="font-sans font-bold text-xl text-[var(--color-text-primary)] mb-2">
              No Projects Found
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] font-sans mb-4">
              No projects match the selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedType("all");
                setSelectedStatus("all");
              }}
              className="px-5 py-2 rounded-xl bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ─── FOCUSED PROJECT QUICK SPECIFICATION BAR ────────────────────── */}
        {activeProject && totalProjects > 0 && (
          <div 
            className="w-full border-b border-slate-200"
            style={{ marginTop: '40px', paddingTop: '0px', paddingBottom: '40px', marginBottom: '40px' }}
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[1600px] mx-auto px-4 sm:px-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0052cc] font-sans">
                  Focused Project Details
                </span>
                <h4 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1a2b4a] tracking-tight max-w-4xl">
                  {activeProject.name.replace("Completed Residential Houses — ", "")} — {activeProject.locationName}, {activeProject.city}
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-sm font-sans">
                  <span className="flex items-center gap-1.5 font-bold text-slate-600">
                    <CheckCircleIcon className="w-4 h-4 text-[#0052cc]" />
                    {activeProject.status === "ongoing" ? "25% Advance Booking" : "Ready For Possession"}
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-slate-600">
                    <ClockIcon className="w-4 h-4 text-[#0052cc]" />
                    {activeProject.status === "ongoing" ? "3-Year Installment Plan" : "Turnkey Handover"}
                  </span>
                </div>
              </div>

              <Link
                href={`/projects/${activeProject.slug}`}
                className="group inline-flex items-center justify-center gap-2 text-sm font-bold text-[#0052cc] hover:text-[#00398f] transition-colors pb-1 mt-2"
              >
                View Full Project Page
                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Project Quick Detail Modal */}
      <ProjectQuickDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
