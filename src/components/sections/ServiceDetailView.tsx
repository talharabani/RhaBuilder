"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getServiceBySlug } from "@/lib/data/services";
import { getProjectBySlug } from "@/lib/data/projects";
import { CTABand } from "@/components/sections/CTABand";

interface ServiceDetailViewProps {
  slug: string;
}

export function ServiceDetailView({ slug }: ServiceDetailViewProps) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = (service.relatedProjectSlugs ?? [])
    .map(getProjectBySlug)
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="bg-[#fafaf8] text-[var(--color-text-primary)] font-sans min-h-screen">
      {/* ─── 1. LUXURY CINEMATIC HERO BANNER ─────────────────────────────────── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[50vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label={`${service.title} service hero`}
        >
          {service.heroImage && (
            <img
              src={service.heroImage}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
            />
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 25%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0) 65%)' }}
            aria-hidden="true"
          />

          <div className="w-full relative z-10 py-12 sm:py-16 lg:py-20 p-8 md:p-12 lg:p-[4.5rem]">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm sm:text-base font-sans text-slate-500 font-medium">
                  <li><a href="/" className="hover:text-[#0052cc] transition-colors">Home</a></li>
                  <li aria-hidden="true">/</li>
                  <li><a href="/services" className="hover:text-[#0052cc] transition-colors">Services</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">{service.title}</li>
                </ol>
              </nav>

              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 border font-sans"
                style={{
                  color: "var(--color-brand-accent)",
                  borderColor: "var(--color-brand-accent)",
                  backgroundColor: "rgba(201, 169, 110, 0.15)",
                }}
              >
                <BuildingOffice2Icon className="w-4 h-4" />
                RHA Builders Service Specification
              </span>

              <h1 className="font-figtree font-bold text-[#1a2b4a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
                {service.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-slate-600 font-sans leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 2. MAIN CONTENT BODY & SIDEBAR ────────────────────────────────── */}
      <section className="py-14 bg-[#fafaf8]" aria-labelledby="service-detail-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Service Overview */}
              <div className="rha-card group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative z-10">
                  <h2
                    id="service-detail-heading"
                    className="font-sans font-extrabold text-2xl md:text-3xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-4 tracking-tight"
                  >
                    Service Overview & Operational Scope
                  </h2>
                  <p className="text-base text-slate-500 group-hover:text-white transition-colors duration-300 leading-relaxed font-sans">
                    {service.fullDescription}
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              {service.processSteps.length > 0 && (
                <div className="rha-card group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-2xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-6 tracking-tight">
                      Step-by-Step Delivery Methodology
                    </h3>
                    <div className="flex flex-col">
                      {service.processSteps.map((step) => (
                        <div
                          key={step.step}
                          className="py-6 border-b border-slate-100 group-hover:border-white/20 transition-colors duration-300 last:border-0"
                        >
                          <span className="text-sm font-sans font-bold text-[#0052cc] group-hover:text-white block mb-1 transition-colors">
                            Step 0{step.step}
                          </span>
                          <h4 className="font-sans font-bold text-lg text-[#0b1b3d] group-hover:text-white mb-2 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-sm text-slate-500 group-hover:text-white leading-relaxed font-sans transition-colors">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FAQs Accordion */}
              {service.faqs.length > 0 && (
                <div className="rha-card group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-2xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-6 tracking-tight">
                      Frequently Asked Questions
                    </h3>
                    <div className="flex flex-col">
                      {service.faqs.map((faq, i) => (
                        <details
                          key={i}
                          className="group/faq py-5 border-b border-slate-100 group-hover:border-white/20 transition-colors duration-300 last:border-0"
                        >
                          <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-base text-[#0b1b3d] group-hover:text-white transition-colors font-sans list-none select-none">
                            <span>{faq.question}</span>
                            <ArrowRightIcon className="w-5 h-5 shrink-0 text-[#0052cc] group-hover:text-white transition-transform group-open/faq:rotate-90" />
                          </summary>
                          <p className="mt-3 text-sm text-slate-500 group-hover:text-white/90 leading-relaxed font-sans transition-colors">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Deliverables Card */}
              {service.deliverables.length > 0 && (
                <div 
                  className="rha-card group p-6 rounded-3xl border border-blue-100/60 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#eef5ff' }}
                >
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-4">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed">
                          <DocumentCheckIcon className="w-5 h-5 text-[#0052cc] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Benefits Card */}
              {service.benefits.length > 0 && (
                <div 
                  className="rha-card group p-6 rounded-3xl border border-blue-100/60 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#eef5ff' }}
                >
                  <div className="relative z-10">
                    <h3 className="font-sans font-extrabold text-xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 mb-4">
                      Key Advantages
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed">
                          <CheckCircleIcon className="w-5 h-5 text-[#0052cc] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Executive Consultation Box */}
              <div className="p-6 rounded-3xl border border-slate-200 bg-[#1a2b4a] text-white shadow-xl">
                <h3 className="font-sans font-extrabold text-xl mb-2 text-white">
                  {service.ctaLabel}
                </h3>
                <p className="text-xs text-slate-300 mb-6 font-sans leading-relaxed">
                  Speak directly with RHA Builders leadership regarding commercial shop booking, 3-year payment plans, or residential house construction.
                </p>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="block w-full text-center px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider rounded-xl bg-white text-[#1a2b4a] hover:bg-slate-100 hover:shadow-xl transition-all shadow-md"
                >
                  Request Dedicated Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. RELATED PROJECTS SHOWCASE ───────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-14 bg-[#fafaf8] border-t border-slate-200">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-secondary)] font-sans mb-1">
                  Portfolio Highlights
                </p>
                <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)]">
                  Related Projects & Commercial Plazas
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-secondary)] hover:text-[var(--color-brand-primary)] font-semibold"
              >
                View Full Projects Showcase →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.filter(Boolean).map((p) => p && <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. CTA BAND ────────────────────────────────────────────────────── */}
      <CTABand
        title="Start Your Project With RHA Builders"
        description="Connect with our CEO Faryad Hussain and executive leadership team to enquire about Ansa Tower shop sales or custom residential house builds."
        primaryLabel="Contact Executive Team"
        primaryHref="/contact"
      />
    </div>
  );
}

