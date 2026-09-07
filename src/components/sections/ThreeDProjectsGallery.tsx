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
    <section className="section-pad bg-white text-[var(--color-text-primary)] relative overflow-hidden py-12 md:py-20 border-y border-[var(--color-border)]">
      {/* Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(201, 169, 110, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* ─── PROJECT FILTER BAR ────────────────── */}
        <div className="border-y py-4 mb-10 bg-white" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Filter Pills Groups */}
            <div className="flex flex-wrap items-center gap-3 max-w-full overflow-x-auto no-scrollbar">
              {/* Type Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {TYPE_FILTERS.map((f) => {
                  const isActive = selectedType === f.value;
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setSelectedType(f.value)}
                      className={`px-3.5 py-1.5 text-xs sm:text-sm font-sans font-medium rounded-md border transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-[#1a2b4a] text-white border-[#1a2b4a] shadow-sm font-semibold"
                          : "bg-white text-[var(--color-text-secondary)] border-slate-200 hover:border-slate-400 hover:text-[#1a2b4a]"
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:block w-px h-6 bg-slate-200" />

              {/* Status Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {STATUS_FILTERS.map((f) => {
                  const isActive = selectedStatus === f.value;
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setSelectedStatus(f.value)}
                      className={`px-3.5 py-1.5 text-xs sm:text-sm font-sans font-medium rounded-md border transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-[#1a2b4a] text-white border-[#1a2b4a] shadow-sm font-semibold"
                          : "bg-white text-[var(--color-text-secondary)] border-slate-200 hover:border-slate-400 hover:text-[#1a2b4a]"
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
                    }}
                    className={`absolute w-[88vw] max-w-[340px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-brand-accent)] shadow-[0_20px_50px_rgba(26,43,74,0.3)] ring-2 ring-[var(--color-brand-accent)]/60 bg-slate-950"
                        : "border-slate-300 hover:border-[var(--color-brand-accent)] bg-slate-900 shadow-xl opacity-80"
                    }`}
                  >
                    {/* Card Background Image */}
                    <div className="absolute inset-0 overflow-hidden bg-slate-950">
                      <img
                        src={project.coverImage || project.heroImage}
                        alt={project.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? "scale-105" : "scale-100 opacity-70"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 transition-opacity ${
                          isActive
                            ? "bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90"
                            : "bg-slate-950/70"
                        }`}
                      />
                    </div>

                    {/* Top Badge Overlay */}
                    <div className="relative z-10 p-4 sm:p-5 flex justify-between items-start">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest bg-slate-950/90 backdrop-blur-md text-[#c9a96e] px-3 py-1 rounded-full border border-[#c9a96e]/40 shadow-md">
                        {project.city}
                      </span>

                      {project.status === "ongoing" ? (
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider bg-slate-950/90 backdrop-blur-md text-amber-300 border border-amber-500/50 px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          Ongoing
                        </span>
                      ) : (
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider bg-slate-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/50 px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Card Footer Details - Clean & Minimalist */}
                    <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#f59e0b] font-sans font-bold uppercase tracking-wider drop-shadow-sm">
                        <MapPinIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                        <span className="truncate">{project.locationName}</span>
                      </div>

                      {/* Clean Single Line Title */}
                      <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug drop-shadow-md line-clamp-1">
                        {project.name.replace("Completed Residential Houses — ", "")}
                      </h3>

                      {/* Single Spec Pill */}
                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="text-[11px] font-sans font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                          {project.type[0] === "commercial"
                            ? "Commercial Plaza"
                            : project.type[0] === "residential"
                            ? "Residential Houses"
                            : project.type[0]}
                          {project.keyFacts[3] ? ` • ${project.keyFacts[3].value}` : ""}
                        </span>
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2"
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalProject(project);
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1a2b4a] text-xs font-extrabold uppercase tracking-wider hover:bg-slate-100 hover:shadow-2xl transition-all shadow-xl cursor-pointer"
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
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-secondary)] font-sans">
                  Focused Project Details
                </span>
                <h4 className="font-sans font-extrabold text-xl sm:text-2xl text-[var(--color-text-primary)]">
                  {activeProject.name} — {activeProject.locationName}, {activeProject.city}
                </h4>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-[var(--color-text-muted)] font-sans">
                  <span className="flex items-center gap-1.5 font-semibold text-[var(--color-text-primary)]">
                    <CheckCircleIcon className="w-4 h-4 text-[var(--color-brand-secondary)]" />
                    25% Advance Booking
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-[var(--color-text-primary)]">
                    <ClockIcon className="w-4 h-4 text-[var(--color-brand-secondary)]" />
                    3-Year Installment Plan
                  </span>
                </div>
              </div>

              <Link
                href={`/projects/${activeProject.slug}`}
                className="px-6 py-3 rounded-full bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0f172a] transition-all shadow-md shrink-0 inline-flex items-center gap-2"
              >
                Open Dedicated Project Page
                <ArrowRightIcon className="w-4 h-4 text-white" />
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
