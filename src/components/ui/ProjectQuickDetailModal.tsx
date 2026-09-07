"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  XMarkIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  ClockIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { Project } from "@/lib/data/projects";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface ProjectQuickDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectQuickDetailModal({
  project,
  onClose,
}: ProjectQuickDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? Array.from(new Set(project.gallery.map((g) => g.src)))
      : [project.coverImage || project.heroImage, project.heroImage || project.coverImage].filter(Boolean) as string[];

  const currentImage = galleryImages[activeImageIndex] || project.coverImage || project.heroImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-lg border border-white/20 cursor-pointer"
          aria-label="Close project details"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Modal Top Hero Showcase */}
        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] bg-slate-950 shrink-0 overflow-hidden">
          {currentImage ? (
            <img
              src={currentImage}
              alt={project.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a2b4a] to-slate-950 text-white/50 font-sans font-bold">
              [Project Image Showcase]
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-slate-950/90 text-[#c9a96e] border border-[#c9a96e]/40 shadow-md">
              {project.city}
            </span>

            {project.status === "ongoing" ? (
              <span className="px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-slate-950/90 text-amber-300 border border-amber-500/50 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Near Completion / Ongoing
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-slate-950/90 text-emerald-300 border border-emerald-500/50 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Completed Project
              </span>
            )}

            {project.type.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-slate-900/90 text-slate-200 border border-slate-700 shadow-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bottom Title Header over Image */}
          <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-[#f59e0b] font-sans font-bold uppercase tracking-wider">
              <MapPinIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span>{project.locationName}, {project.city} ({project.region})</span>
            </div>
            <h2
              id="project-modal-title"
              className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-md"
            >
              {project.name}
            </h2>
          </div>

          {/* Gallery Thumbnails Overlay (if multiple photos available) */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-slate-950/70 p-1.5 rounded-2xl backdrop-blur-md border border-white/20">
              {galleryImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-10 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? "border-amber-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 max-h-[60vh]">
          {/* Key Facts Summary Bar */}
          {project.keyFacts.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold mb-3 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-amber-600" />
                Key Project Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {project.keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-center"
                  >
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      {fact.label}
                    </span>
                    <span className="text-sm sm:text-base font-sans font-extrabold text-[#1a2b4a] mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Narrative & Description */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-2">
              <BuildingOffice2Icon className="w-4 h-4 text-[#1a2b4a]" />
              Complete Project Overview
            </h3>
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 text-sm text-slate-700 font-sans leading-relaxed space-y-3">
              <p className="font-semibold text-slate-900 text-base">
                {project.shortDescription}
              </p>
              {project.fullDescription && project.fullDescription !== project.shortDescription && (
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                  {project.fullDescription}
                </p>
              )}
            </div>
          </div>

          {/* Unit Specifications Grid */}
          {project.unitTypes && project.unitTypes.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-2">
                <BanknotesIcon className="w-4 h-4 text-[#1a2b4a]" />
                Available Units & Layouts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.unitTypes.map((unit) => (
                  <div
                    key={unit.name}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#1a2b4a] block font-sans">
                        {unit.name}
                      </span>
                      {unit.area && (
                        <span className="text-xs text-slate-500 font-mono mt-1 block">
                          Area: {unit.area}
                        </span>
                      )}
                    </div>
                    {unit.description && (
                      <p className="text-[11px] text-slate-600 font-sans mt-2 pt-2 border-t border-slate-100">
                        {unit.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features & Amenities Split Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Investment Highlights */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-blue-800" />
                  Key Investment Highlights
                </h3>
                <ul className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans leading-relaxed">
                      <CheckCircleIcon className="w-4 h-4 text-[#1a2b4a] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Building Infrastructure */}
            {project.amenities && project.amenities.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-2">
                  <DocumentCheckIcon className="w-4 h-4 text-blue-800" />
                  Building Infrastructure & Services
                </h3>
                <ul className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {project.amenities.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans leading-relaxed">
                      <CheckCircleIcon className="w-4 h-4 text-[#1a2b4a] shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Construction Progress Milestones if available */}
          {project.progress && project.progress.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#1a2b4a]" />
                Construction Progress & Milestones
              </h3>
              <div className="space-y-2">
                {project.progress.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#1a2b4a] uppercase">
                        {m.date}
                      </span>
                      <p className="text-xs font-bold text-slate-900 font-sans">{m.title}</p>
                    </div>
                    {m.percentage !== undefined && (
                      <span className="px-3 py-1 rounded-lg bg-[#1a2b4a] text-white text-xs font-mono font-bold shrink-0">
                        {m.percentage}% Done
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
              WhatsApp Inquiry
            </a>

            <Link
              href={`/contact?enquiry=${encodeURIComponent(project.name)}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1a2b4a] text-xs font-extrabold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-md cursor-pointer"
            >
              Book Site Visit / Register
            </Link>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-all border border-blue-700/60 shadow-md ml-auto cursor-pointer"
          >
            Dedicated Project Page
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
