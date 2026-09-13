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
import { InteractiveHover } from "@/components/animation/InteractiveHover";

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
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[45vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="Services page hero"
        >
          <Image
            src="/images/services/services-hero-bg.png"
            alt="RHA Builder Development & Construction Services Hero Background"
            fill
            priority
            className="object-cover object-[70%_center]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 25%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0) 70%)' }}
            aria-hidden="true"
          />
          <div className="w-full relative z-10 py-12 sm:py-16 lg:py-20 p-8 md:p-12 lg:p-[4.5rem]">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm sm:text-base font-sans text-slate-500 font-medium">
                  <li><a href="/" className="hover:text-[#0052cc] transition-colors">Home</a></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">Services</li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-5">
                Our Services
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                Development and construction services across residential and commercial sectors.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── INTERACTIVE SHOWCASE ──────────────────────────────── */}
      <NetflixServicesShowcase />

      {/* ─── PROCESS ───────────────────────────────────────────── */}
      <section
        className="py-12 md:py-20 px-3 sm:px-6 lg:px-8 bg-[#fafaf8] border-t border-slate-200"
        aria-labelledby="process-heading"
      >
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-[4.5rem]">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <div className="mb-14 max-w-4xl">
              <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
                How We Work
              </h2>
              <h3
                id="process-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4a] tracking-tight leading-[1.1] font-sans"
              >
                Our Development Process.
              </h3>
              <p className="mt-4 text-base text-slate-500 font-sans leading-relaxed max-w-2xl">
                A general overview of how RHA Builder approaches development and construction projects. Click any stage card below to view process details.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step} className="h-full">
                <InteractiveHover scale={1.02} y={-4} className="h-full">
                  <Link
                    href={step.href}
                    className="rha-card p-3 bg-white border border-slate-200 hover:border-[#0052cc] shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] group flex flex-col h-full"
                    style={{ borderRadius: '1.75rem' }}
                  >
                    {/* Top Image */}
                    {step.image && (
                      <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-slate-100 z-10 shrink-0" style={{ borderRadius: '1.25rem' }}>
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-sans text-white shadow-md z-20 bg-[#1a2b4a]">
                          {step.step}
                        </div>
                      </div>
                    )}
                    
                    {/* Bottom Text Content */}
                    <div className="pt-4 px-3 pb-3 flex flex-col flex-1 relative z-10 justify-between">
                      <div>
                        {!step.image && (
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-sans mb-3 text-white bg-[#1a2b4a]">
                            {step.step}
                          </div>
                        )}
                        <h3 className="font-sans font-extrabold text-base text-[#0b1b3d] group-hover:text-white transition-colors duration-300 leading-snug mb-1.5 pr-4 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-500 group-hover:text-white transition-colors duration-300 pr-6">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* View Details at bottom */}
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0052cc] group-hover:text-white transition-colors duration-300 font-sans">
                        <span>View Details</span>
                        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                </InteractiveHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="mt-10 text-xs italic text-center font-sans text-slate-500">
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
