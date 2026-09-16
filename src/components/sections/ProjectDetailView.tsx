"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  DocumentCheckIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as SolidCheckCircleIcon } from "@heroicons/react/24/solid";
import { LeadForm } from "@/components/sections/LeadForm";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTABand } from "@/components/sections/CTABand";
import { MediaLightboxModal } from "@/components/ui/MediaLightboxModal";
import {
  getProjectBySlug,
  projects,
  getProjectBySlug as findProject,
} from "@/lib/data/projects";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface ProjectDetailViewProps {
  slug: string;
}

export function ProjectDetailView({ slug }: ProjectDetailViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = (project.relatedProjectSlugs ?? [])
    .map(findProject)
    .filter(Boolean)
    .slice(0, 3);

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? Array.from(new Set(project.gallery.map((g) => g.src)))
      : [project.coverImage || project.heroImage, project.heroImage || project.coverImage].filter(Boolean);

  return (
    <div className="bg-[#fafaf8] text-[var(--color-text-primary)] font-sans min-h-screen">
      {/* ─── 1. LUXURY CINEMATIC HERO BANNER ───────────────────────────────── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[50vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-[#f0f8fe]"
          aria-label={`${project.name} project hero`}
        >
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.heroImageAlt || project.name}
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f0f8fe 5%, rgba(240,248,254,0.9) 35%, rgba(240,248,254,0) 65%)' }}
          aria-hidden="true"
        />

        <div className="w-full relative z-10 py-10 sm:py-16 lg:py-20 p-5 sm:p-8 md:p-12 lg:p-[4.5rem]">
          <div className="w-[85%] sm:w-[65%] md:w-full max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-3 sm:mb-6">
              <ol className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-sans text-slate-500 font-medium">
                <li><a href="/" className="hover:text-[#0052cc] transition-colors">Home</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/projects" className="hover:text-[#0052cc] transition-colors">Projects</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-[#1a2b4a] font-semibold truncate max-w-[120px] sm:max-w-none">{project.name}</li>
              </ol>
            </nav>

            {/* Eyebrow / Tagline */}
            <p className="text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-6 font-sans text-[#0052cc]">
              {project.status === "ongoing" ? "In Progress / Ongoing" : "Completed Project"}
              {" • "}
              {project.type.map((t) => (t === "residential" ? "Residential" : t === "commercial" ? "Commercial" : t)).join(" & ")} Development
            </p>

            {/* Project Title */}
            <h1 className="font-figtree font-bold text-[#1a2b4a] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-3 sm:mb-4">
              {project.name}
            </h1>

            {/* Location Badge */}
            <p className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm md:text-base text-slate-600 font-sans font-semibold mb-4 sm:mb-6">
              <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0052cc] shrink-0" />
              {project.locationName}, {project.city} <span className="hidden sm:inline">({project.region})</span>
            </p>

            {/* Short Narrative */}
            <p className="text-[11px] sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-10 max-w-xl font-sans text-slate-600">
              {project.shortDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-[95%] sm:w-auto">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-sm font-bold rounded-xl group btn-hero-primary"
              >
                Register Interest
                <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setLightboxIndex(0)}
                style={{ borderColor: '#0052cc', color: '#0052cc' }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-sm font-semibold rounded-xl group border-2 bg-transparent hover:bg-[#0052cc] hover:!text-white transition-colors"
              >
                <MagnifyingGlassPlusIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Inspect High-Res Photos
              </button>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* ─── 2. KEY FACTS CONTAINER (LUXURY WHITE CARD WITH BLUE ACCENT) ───── */}
      {project.keyFacts.length > 0 && (
        <section className="container-site -mt-10 relative z-20 mb-12 w-[90%] sm:w-full mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-4 sm:p-6 md:p-8">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
              {project.keyFacts.slice(0, 6).map((fact) => (
                <div key={fact.label} className="flex flex-col text-center">
                  <dt className="text-[9px] sm:text-xs uppercase tracking-widest font-mono text-[#0052cc] font-bold mb-0.5 sm:mb-1">
                    {fact.label}
                  </dt>
                  <dd className="font-figtree font-extrabold text-[11px] sm:text-base md:text-lg text-[var(--color-text-primary)]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ─── 3. MAIN CONTENT BODY & SIDEBAR ────────────────────────────────── */}
      <section id="overview" className="pb-16 pt-4 bg-[#fafaf8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Cover Image */}
              {project.coverImage && (
                <div
                  onClick={() => setLightboxIndex(0)}
                  className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer group"
                >
                  <img
                    src={project.coverImage}
                    alt={project.coverImageAlt || project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950/80 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                      <MagnifyingGlassPlusIcon className="w-4 h-4 text-blue-300" />
                      Expand High-Res Photo
                    </span>
                  </div>
                </div>
              )}

              {/* Detailed Narrative Overview */}
              <div className="rha-card group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative z-10">
                  <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-4 tracking-tight">
                    Project Overview
                  </h2>
                  <p className="text-base text-slate-500 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              {/* Photo Gallery Grid */}
              <div className="rha-card group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                <h3 className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 relative z-10">
                  <span className="font-sans font-extrabold text-2xl text-[var(--color-text-primary)] group-hover:text-white transition-colors duration-300 tracking-tight">
                    Project Architectural & Construction Gallery
                  </span>
                  <span className="text-xs text-[#1a2b4a] group-hover:text-white/90 transition-colors duration-300 font-bold uppercase font-sans">
                    Click Any Photo To Expand ({galleryImages.length} Views)
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {galleryImages.map((imgUrl, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-[#1a2b4a] transition-all cursor-pointer group/item"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.name} Gallery View ${i + 1}`}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover/item:bg-slate-950/50 transition-colors flex items-center justify-center opacity-0 group-hover/item:opacity-100 z-10">
                        <MagnifyingGlassPlusIcon className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Progress Timeline */}
              {project.progress && project.progress.length > 0 && (
                <div className="rha-card group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-2xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-6 tracking-tight">
                      Construction Timeline & Milestones
                    </h3>
                    <div className="flex flex-col">
                      {project.progress.map((milestone, i) => (
                        <div
                          key={i}
                          className="py-6 border-b border-slate-100 group-hover:border-white/20 transition-colors duration-300 last:border-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        >
                          <div>
                            <span className="text-sm font-sans font-bold text-[#0052cc] group-hover:text-white transition-colors duration-300 block mb-1">
                              {milestone.date}
                            </span>
                            <h4 className="font-sans font-bold text-lg text-[#0b1b3d] group-hover:text-white transition-colors duration-300">
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-slate-500 group-hover:text-white transition-colors duration-300 font-sans mt-1 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>

                          {milestone.percentage !== undefined && (
                            <div className="bg-[#0052cc] text-white group-hover:!bg-white group-hover:!text-[#0052cc] transition-colors duration-300 px-4 py-2 rounded-xl text-xs font-sans font-bold shrink-0 shadow-sm">
                              {milestone.percentage}% Completed
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Unit Types Card */}
              {project.unitTypes && project.unitTypes.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl" style={{ backgroundColor: '#e6f0fa' }}>
                  <h3 className="font-sans font-extrabold text-xl text-[#0b1b3d] mb-5">
                    Available Unit Specifications
                  </h3>
                  <div className="space-y-3">
                    {project.unitTypes.map((unit) => (
                      <div
                        key={unit.name}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/60 border border-white"
                      >
                        <span className="text-sm font-bold text-[#0b1b3d] font-sans">
                          {unit.name}
                        </span>
                        {unit.area && (
                          <span className="text-sm font-semibold text-[#0052cc] font-sans text-right">
                            {unit.area}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Investment Highlights Card */}
              {project.features && project.features.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl" style={{ backgroundColor: '#e6f0fa' }}>
                  <h3 className="font-sans font-extrabold text-xl text-[#0b1b3d] mb-5">
                    Key Investment Highlights
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-sans leading-relaxed">
                        <SolidCheckCircleIcon className="w-6 h-6 text-[#0052cc] shrink-0" />
                        <span className="pt-0.5">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Building Infrastructure Card */}
              {project.amenities && project.amenities.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl" style={{ backgroundColor: '#e6f0fa' }}>
                  <h3 className="font-sans font-extrabold text-xl text-[#0b1b3d] mb-5">
                    Building Infrastructure & Amenities
                  </h3>
                  <ul className="space-y-4">
                    {project.amenities.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-sans leading-relaxed">
                        <SolidCheckCircleIcon className="w-6 h-6 text-[#0052cc] shrink-0" />
                        <span className="pt-0.5">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. LEAD ENQUIRY FORM ───────────────────────────────────────────── */}
      <section id="enquiry" className="py-16 border-t border-slate-200" style={{ backgroundColor: '#eef5ff' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-2">
                Executive Consultation & Enquiry
              </span>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4 tracking-tight">
                Register Your Interest
              </h2>
              <p className="text-base text-[var(--color-text-muted)] font-sans leading-relaxed mb-6">
                Fill out the enquiry form below for <strong>{project.name}</strong>. Our team will get in touch with you shortly with full project details, floor plans, and pricing.
              </p>
              <div className="rha-card group p-6 rounded-3xl border border-slate-200 bg-white transition-all duration-300">
                <div className="relative z-10 flex flex-col space-y-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#0052cc] group-hover:text-white/90 transition-colors duration-300 font-bold">
                    Project Reference File
                  </span>
                  <p className="font-sans font-extrabold text-xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300">
                    {project.name} ({project.city})
                  </p>
                  <p className="text-xs text-slate-500 group-hover:text-white/90 transition-colors duration-300 font-sans">
                    {project.address || project.locationName}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <LeadForm preselectedProject={project.name} title="" description="" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. RELATED PROJECTS SHOWCASE ───────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#fafaf8] border-t border-slate-200">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans mb-1">
                  Portfolio Highlights
                </p>
                <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)]">
                  Related Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a2b4a] hover:text-blue-900 font-semibold"
              >
                View Full Projects Showcase →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.filter(Boolean).map((p) => p && (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />

      {/* ─── FULL-SCREEN MEDIA LIGHTBOX MODAL ───────────────────────────────── */}
      <MediaLightboxModal
        images={galleryImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
        title={`${project.name} Photo Gallery`}
      />
    </div>
  );
}
