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
      <section
        className="relative min-h-[480px] md:min-h-[540px] flex items-end overflow-hidden bg-slate-950"
        aria-label={`${project.name} project hero`}
      >
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.heroImageAlt || project.name}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-45 cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-site relative z-10 pb-20 pt-36">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-sans text-slate-300 font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white font-semibold">{project.name}</li>
            </ol>
          </nav>

          {/* High-Contrast Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            {project.status === "ongoing" ? (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#1a2b4a] text-white shadow-md uppercase tracking-wider border border-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                In Progress / Ongoing
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#1a2b4a] text-white shadow-md uppercase tracking-wider border border-blue-800">
                Completed Project
              </span>
            )}

            {project.type.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-slate-800 text-slate-100 shadow-md uppercase tracking-wider border border-slate-700"
              >
                {t === "residential" ? "Residential Development" : t === "commercial" ? "Commercial Development" : t}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h1 className="font-sans font-extrabold text-white max-w-3xl drop-shadow-md text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {project.name}
          </h1>

          {/* Location Badge */}
          <p className="mt-3 flex items-center gap-2 text-sm md:text-base text-slate-200 font-sans font-semibold">
            <MapPinIcon className="w-5 h-5 text-blue-400 shrink-0" />
            {project.locationName}, {project.city} ({project.region})
          </p>

          {/* Short Narrative */}
          <p className="mt-3 text-sm md:text-base max-w-2xl text-slate-300 font-sans leading-relaxed">
            {project.shortDescription}
          </p>

          {/* High-Contrast Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-all shadow-xl border border-blue-800"
            >
              Register Interest
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-700 transition-all shadow-xl border border-slate-700"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
              WhatsApp Enquiry
            </a>
            <button
              onClick={() => setLightboxIndex(0)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#1a2b4a] border border-white/20 transition-all backdrop-blur-md"
            >
              <MagnifyingGlassPlusIcon className="w-4 h-4 text-blue-300" />
              Inspect High-Res Photos
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. KEY FACTS CONTAINER (LUXURY WHITE CARD WITH BLUE ACCENT) ───── */}
      {project.keyFacts.length > 0 && (
        <section className="container-site -mt-10 relative z-20 mb-12">
          <div className="bg-white rounded-3xl border border-slate-200 border-t-4 border-t-[#1a2b4a] shadow-xl p-6 md:p-8">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {project.keyFacts.slice(0, 6).map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <dt className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold mb-1">
                    {fact.label}
                  </dt>
                  <dd className="font-sans font-extrabold text-base md:text-lg text-[var(--color-text-primary)]">
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
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)] mb-4 tracking-tight">
                  Project Overview
                </h2>
                <p className="text-base text-[var(--color-text-muted)] font-sans leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Photo Gallery Grid */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4 flex items-center justify-between">
                  <span>Project Architectural & Construction Gallery</span>
                  <span className="text-xs text-[#1a2b4a] font-bold uppercase font-sans">
                    Click Any Photo To Expand ({galleryImages.length} Views)
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((imgUrl, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-[#1a2b4a] transition-all cursor-pointer group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.name} Gallery View ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <MagnifyingGlassPlusIcon className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Progress Timeline */}
              {project.progress && project.progress.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="font-sans font-extrabold text-2xl text-[var(--color-text-primary)] mb-6 tracking-tight">
                    Construction Timeline & Milestones
                  </h3>
                  <div className="space-y-4">
                    {project.progress.map((milestone, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-xs font-mono font-bold text-[#1a2b4a] uppercase block mb-1">
                            {milestone.date}
                          </span>
                          <h4 className="font-sans font-bold text-lg text-[var(--color-text-primary)]">
                            {milestone.title}
                          </h4>
                          <p className="text-xs text-[var(--color-text-muted)] font-sans mt-1 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>

                        {milestone.percentage !== undefined && (
                          <div className="bg-[#1a2b4a] text-white px-4 py-2 rounded-xl text-xs font-mono font-bold shrink-0 shadow-sm">
                            {milestone.percentage}% Completed
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Unit Types Card */}
              {project.unitTypes && project.unitTypes.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4">
                    Available Unit Specifications
                  </h3>
                  <div className="space-y-3">
                    {project.unitTypes.map((unit) => (
                      <div
                        key={unit.name}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <span className="text-xs font-bold text-[var(--color-text-primary)] font-sans">
                          {unit.name}
                        </span>
                        {unit.area && (
                          <span className="text-xs font-semibold text-[#1a2b4a] font-mono">
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
                <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4">
                    Key Investment Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--color-text-secondary)] font-sans leading-relaxed">
                        <CheckCircleIcon className="w-5 h-5 text-[#1a2b4a] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Building Infrastructure Card */}
              {project.amenities && project.amenities.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4">
                    Building Infrastructure & Amenities
                  </h3>
                  <ul className="space-y-3">
                    {project.amenities.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--color-text-secondary)] font-sans leading-relaxed">
                        <DocumentCheckIcon className="w-5 h-5 text-[#1a2b4a] shrink-0 mt-0.5" />
                        <span>{a}</span>
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
      <section id="enquiry" className="py-16 bg-white border-t border-slate-200">
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
              <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm space-y-3">
                <span className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold">
                  Project Reference File
                </span>
                <p className="font-sans font-extrabold text-xl text-[var(--color-text-primary)]">
                  {project.name} ({project.city})
                </p>
                <p className="text-xs text-[var(--color-text-muted)] font-sans">
                  {project.address || project.locationName}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
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
