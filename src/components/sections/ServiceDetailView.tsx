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
      {/* ─── 1. LUXURY HERO BANNER ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[380px] md:min-h-[420px] flex items-end overflow-hidden bg-slate-950"
        aria-label={`${service.title} service hero`}
      >
        {service.heroImage && (
          <img
            src={service.heroImage}
            alt={`${service.title} - RHA Builder`}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-site relative z-10 pb-12 pt-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-sans text-slate-300 font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[var(--color-brand-accent)] font-semibold">{service.title}</li>
            </ol>
          </nav>

          <span
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border font-sans"
            style={{
              color: "var(--color-brand-accent)",
              borderColor: "var(--color-brand-accent)",
              backgroundColor: "rgba(201, 169, 110, 0.15)",
            }}
          >
            <BuildingOffice2Icon className="w-4 h-4" />
            RHA Builders Service Specification
          </span>

          <h1 className="font-sans font-extrabold text-white max-w-3xl drop-shadow-md text-3xl md:text-5xl leading-tight tracking-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-sm md:text-base max-w-2xl text-slate-300 font-sans leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT BODY & SIDEBAR ────────────────────────────────── */}
      <section className="py-14 bg-[#fafaf8]" aria-labelledby="service-detail-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Service Image - Vibrant & Attractive */}
              {service.heroImage && (
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-100">
                  <img
                    src={service.heroImage}
                    alt={`${service.title} - RHA Builder`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Service Overview */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2
                  id="service-detail-heading"
                  className="font-sans font-extrabold text-2xl md:text-3xl text-[var(--color-text-primary)] mb-4 tracking-tight"
                >
                  Service Overview & Operational Scope
                </h2>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed font-sans">
                  {service.fullDescription}
                </p>
              </div>

              {/* Process Steps */}
              {service.processSteps.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="font-sans font-extrabold text-2xl text-[var(--color-text-primary)] mb-6 tracking-tight">
                    Step-by-Step Delivery Methodology
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.processSteps.map((step) => (
                      <div
                        key={step.step}
                        className="p-6 rounded-2xl bg-[var(--color-surface-secondary)] border border-[var(--color-border)] shadow-sm"
                      >
                        <span className="text-xs font-mono font-bold text-[var(--color-brand-accent)] uppercase block mb-2">
                          Step 0{step.step}
                        </span>
                        <h4 className="font-sans font-bold text-lg text-[var(--color-text-primary)] mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Accordion */}
              {service.faqs.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="font-sans font-extrabold text-2xl text-[var(--color-text-primary)] mb-6 tracking-tight">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 p-4 transition-all"
                      >
                        <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-sm text-[var(--color-text-primary)] font-sans list-none select-none">
                          <span>{faq.question}</span>
                          <ArrowRightIcon className="w-4 h-4 shrink-0 text-[var(--color-brand-accent)] transition-transform group-open:rotate-90" />
                        </summary>
                        <p className="mt-3 pt-3 border-t border-slate-200 text-xs text-[var(--color-text-muted)] leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Deliverables Card */}
              {service.deliverables.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--color-text-secondary)] font-sans leading-relaxed">
                        <DocumentCheckIcon className="w-5 h-5 text-[var(--color-brand-secondary)] shrink-0 mt-0.5" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits Card */}
              {service.benefits.length > 0 && (
                <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-4">
                    Key Advantages
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--color-text-secondary)] font-sans leading-relaxed">
                        <CheckCircleIcon className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
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

