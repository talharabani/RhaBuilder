"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPinIcon, ArrowRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { StatusBadge, TypeBadge } from "@/components/ui/Badge";
import type { Project } from "@/lib/data/projects";
import { ProjectQuickDetailModal } from "@/components/ui/ProjectQuickDetailModal";

interface ProjectCardProps {
  project: Project;
  onOpenQuickView?: (project: Project) => void;
}

// Fallback gradient for missing images
const FALLBACK_STYLE = {
  background:
    "linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
};

export function ProjectCard({ project, onOpenQuickView }: ProjectCardProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (onOpenQuickView) {
      e.preventDefault();
      onOpenQuickView(project);
    } else {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <article
        onClick={handleCardClick}
        className="rha-card group bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(26,43,74,0.15)] hover:-translate-y-1 flex flex-col border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer"
        aria-label={`${project.name} — ${project.type.join(", ")} project in ${project.city}`}
      >
        {/* Compact Widescreen Image (16:10 aspect ratio) */}
        <div className="relative z-10 aspect-[16/10] overflow-hidden bg-slate-950">
          {project.coverImage || project.heroImage ? (
            <img
              src={project.coverImage || project.heroImage}
              alt={project.coverImageAlt || project.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div style={FALLBACK_STYLE} className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 text-xs font-sans font-semibold">[Project Image]</span>
            </div>
          )}

          {/* Status badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
            <StatusBadge status={project.status} />
            {project.type.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
          </div>

          {/* Quick inspect overlay button on image hover */}
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md text-blue-900 text-xs font-extrabold uppercase tracking-wider shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
              <EyeIcon className="w-4 h-4 text-blue-900" />
              Quick View Details
            </span>
          </div>

          {/* Glossy blue fade effect */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-white/5 to-transparent backdrop-blur-[1px] opacity-70 group-hover:opacity-90 transition-opacity"
            aria-hidden="true"
          />
        </div>

        {/* Card Content - Clean & Minimalist */}
        <div className="relative z-10 p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-white/80 transition-colors font-sans mb-1.5">
              <MapPinIcon className="w-3.5 h-3.5 shrink-0 text-[#1a2b4a] group-hover:text-white transition-colors" aria-hidden="true" />
              <span className="truncate">{project.locationName}, {project.city}</span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 mb-2 leading-snug group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>

          <div>
            {/* Key fact / spec pill */}
            {project.keyFacts[0] && (
              <div className="mt-2 pt-3 border-t border-slate-100 group-hover:border-white/20 transition-colors flex items-center justify-between">
                <span className="text-xs text-slate-500 group-hover:text-white/80 transition-colors font-sans">
                  {project.keyFacts[0].label}
                </span>
                <span className="text-xs font-extrabold font-sans text-[#1a2b4a] group-hover:text-[#0052cc] bg-slate-100 group-hover:bg-white transition-colors px-2 py-0.5 rounded-md border border-slate-200 group-hover:border-white">
                  {project.keyFacts[0].value}
                </span>
              </div>
            )}

            {/* Action Link */}
            <div className="mt-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1a2b4a] group-hover:text-blue-900 transition-colors">
              <span>Inspect Details & Plans</span>
              <ArrowRightIcon
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Quick View Modal */}
      {!onOpenQuickView && (
        <ProjectQuickDetailModal
          project={showModal ? project : null}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
