import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/lib/data/services";
import { NetflixServicesShowcase } from "@/components/sections/NetflixServicesShowcase";
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/animation/StaggerContainer";

export const metadata: Metadata = {
  title: "Real Estate Development & Construction Services | RHA Builder",
  description:
    "Discover RHA Builder's development and construction services for residential, commercial and property clients.",
  alternates: { canonical: "https://rhabuilder.com/services" },
};

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your requirements, objectives and constraints to understand what success looks like.",
    image: "/images/services/consultation.png",
    href: "/contact",
  },
  {
    step: 2,
    title: "Planning",
    description: "We develop a clear programme, appraisal and approach for your project.",
    image: "/images/services/planning.png",
    href: "/services/commercial-development",
  },
  {
    step: 3,
    title: "Design Coordination",
    description: "We coordinate the design team to produce a consented, deliverable and well-specified scheme.",
    image: "/images/services/design-coordination.jpg",
    href: "/services/design-planning-coordination",
  },
  {
    step: 4,
    title: "Execution",
    description: "We manage construction delivery with regular reporting and quality oversight.",
    image: "/images/services/execution.jpg",
    href: "/services/construction-management",
  },
  {
    step: 5,
    title: "Quality Review",
    description: "We inspect, snag and commission to ensure the project meets the required standard.",
    image: "/images/services/quality-review.png",
    href: "/services/residential-house-construction",
  },
  {
    step: 6,
    title: "Handover",
    description: "We hand over a completed project with all documentation, warranties and aftercare in place.",
    image: "/images/services/handover.png",
    href: "/services/turnkey-solutions",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "420px", backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Services page hero"
      >
        <Image
          src="/images/services/services-hero-bg.png"
          alt="RHA Builder Development & Construction Services Hero Background"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 55%, rgba(15, 23, 42, 0.25) 100%)" }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 pb-16 pt-36">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-sans text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>Services</li>
            </ol>
          </nav>
          <h1 className="font-sans font-extrabold text-white max-w-2xl drop-shadow-md text-3xl md:text-5xl leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg max-w-xl text-white/90 font-sans leading-relaxed drop-shadow">
            Development and construction services across residential and commercial sectors.
          </p>
        </div>
      </section>

      {/* ─── INTERACTIVE SHOWCASE ──────────────────────────────── */}
      <NetflixServicesShowcase />

      {/* ─── PROCESS ───────────────────────────────────────────── */}
      <section
        className="section-pad bg-[#fafaf8] border-t border-slate-200"
        aria-labelledby="process-heading"
      >
        <div className="container-site">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <SectionHeader
              eyebrow="How We Work"
              title="Our Development Process"
              description="A general overview of how RHA Builder approaches development and construction projects. Click any stage card below to view process details."
              align="center"
              className="mx-auto mb-14"
              id="process-heading"
            />
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <Link
                  href={step.href}
                  className="group relative bg-white hover:bg-[var(--color-brand-primary)] rounded-3xl overflow-hidden border border-slate-200 hover:border-[var(--color-brand-accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {step.image && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--color-surface-secondary)]">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-sans text-white shadow-md z-10" style={{ backgroundColor: "var(--color-brand-primary)" }}>
                          {step.step}
                        </div>
                      </div>
                    )}

                    <div className="p-7">
                      {!step.image && (
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold font-sans mb-4 text-white"
                          style={{ backgroundColor: "var(--color-brand-primary)" }}
                          aria-hidden="true"
                        >
                          {step.step}
                        </div>
                      )}
                      <h3 className="font-sans font-extrabold text-xl text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] group-hover:text-white/80 transition-colors duration-300 leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-2 flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300 font-sans">
                    <span>View Details</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-8 text-xs italic text-center font-sans text-slate-500">
            [Process description is indicative and subject to confirmation with RHA Builder]
          </p>
        </div>
      </section>

      <CTABand
        title="Discuss Your Development or Construction Project"
        description="Contact the RHA Builder team to explore how we can support your requirements."
        primaryLabel="Discuss Your Project"
        primaryHref="/contact"
        secondaryLabel="View Our Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
