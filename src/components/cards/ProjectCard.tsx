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
        className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#1a2b4a]/40 hover:-translate-y-1 flex flex-col border border-slate-200 cursor-pointer relative"
        aria-label={`${project.name} — ${project.type.join(", ")} project in ${project.city}`}
      >
        {/* Compact Widescreen Image (16:10 aspect ratio) */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
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
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-[#1a2b4a] text-xs font-extrabold uppercase tracking-wider shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
              <EyeIcon className="w-4 h-4 text-[#1a2b4a]" />
              Quick View Details
            </span>
          </div>

          {/* Hover overlay gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
            aria-hidden="true"
          />
        </div>

        {/* Card Content - Clean & Minimalist */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans mb-1.5">
              <MapPinIcon className="w-3.5 h-3.5 shrink-0 text-[#1a2b4a]" aria-hidden="true" />
              <span className="truncate">{project.locationName}, {project.city}</span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 mb-2 leading-snug group-hover:text-[#1a2b4a] transition-colors">
              {project.name}
            </h3>
          </div>

          <div>
            {/* Key fact / spec pill */}
            {project.keyFacts[0] && (
              <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-sans">
                  {project.keyFacts[0].label}
                </span>
                <span className="text-xs font-extrabold font-sans text-[#1a2b4a] bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
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
