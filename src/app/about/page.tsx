import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  TrophyIcon,
  CheckBadgeIcon,
  PhoneIcon,
  ClockIcon,
  AcademicCapIcon,
  HandThumbUpIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { CTABand } from "@/components/sections/CTABand";
import { AboutStatsBanner } from "@/components/sections/AboutStatsBanner";
import { AboutInteractiveProcess } from "@/components/sections/AboutInteractiveProcess";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About RHA Builder | Commercial Plazas & Residential Development Excellence",
  description:
    "Discover RHA Builder: established in 2006 by CEO Faryad Hussain. Premier commercial plazas, 25% advance shop sales with 3-year payment plans, and turnkey residential house construction in Lahore & Islamabad.",
  alternates: { canonical: "https://rhabuilder.com/about" },
};

const VALUES = [
  {
    icon: TrophyIcon,
    title: "Uncompromising Structural Quality",
    description:
      "We enforce high specification benchmarks, structural concrete testing, and premium material selection across every square foot we construct.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Absolute Integrity & Transparency",
    description:
      "Fixed 3-year quarterly payment plans, transparent shop contracts, and zero hidden costs for investors and home buyers.",
  },
  {
    icon: SparklesIcon,
    title: "Commercial & Residential Innovation",
    description:
      "Engineered multi-floor commercial shops with high-speed lifts, 24/7 power backup, and modern residential house finishes.",
  },
  {
    icon: DocumentCheckIcon,
    title: "On-Time Delivery & Guarantee",
    description:
      "Proven track record of handing over completed commercial plazas and residential houses within agreed timeframes.",
  },
];

const MILESTONES = [
  {
    year: "2006",
    title: "Establishment of RHA Builders",
    description:
      "Founded by CEO Faryad Hussain as a real estate development and construction firm in Shahalmi, Lahore.",
  },
  {
    year: "2012",
    title: "Expansion into Commercial Plazas",
    description:
      "Pioneered multi-story commercial shop sales with structured quarterly installment plans for Lahore business owners.",
  },
  {
    year: "2018",
    title: "Flagship Ansa Tower Development",
    description:
      "Initiated the premier Ansa Tower project in Shahalmi Market, offering 25% advance booking options.",
  },
  {
    year: "2026",
    title: "Multi-City Turnkey Leadership",
    description:
      "Delivering turnkey residential houses and commercial plaza projects across Lahore and Islamabad.",
  },
];

const QUALITY_BENCHMARKS = [
  {
    number: "01",
    title: "Seismic & Concrete Structural Integrity",
    description: "Rigorous grade-A concrete pouring and steel reinforcement designed for high durability and earthquake safety.",
  },
  {
    number: "02",
    title: "25% Advance & Fixed 3-Year Installment Plan",
    description: "Clear, transparent shop purchasing contract with fixed quarterly payments over 3 years.",
  },
  {
    number: "03",
    title: "High-Traffic Commercial Plaza Architecture",
    description: "Multi-floor shop designs engineered for high footfall, passenger lifts, and 24/7 security backup.",
  },
  {
    number: "04",
    title: "Snag-Free Residential Handover",
    description: "Complete interior tile work, custom kitchens, sanitary fittings, and utility integration before key delivery.",
  },
];

const TESTIMONIALS = [
  {
    quote: "RHA Builders delivered our commercial shop in Ansa Tower on schedule. The 3-year quarterly payment plan made property investment seamless for our business.",
    author: "Commercial Shop Owner",
    location: "Shahalmi Market, Lahore",
  },
  {
    quote: "The structural build quality of our 10 Marla house in Islamabad exceeded our expectations. CEO Faryad Hussain and his engineering team maintained total transparency throughout.",
    author: "Resident Family",
    location: "Pakistani Town, Islamabad",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fafaf8] text-[var(--color-text-primary)] font-sans min-h-screen">
      {/* ─── 1. LUXURY HERO BANNER ────────────────────────────────────────── */}
      <section
        className="relative flex items-center min-h-[500px] md:min-h-[580px] overflow-hidden bg-slate-950"
        aria-label="About RHA Builder hero"
      >
        <Image
          src="/images/about/about-hero-architecture.jpg"
          alt="RHA Builder Architectural Development Tower"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-site relative z-10 py-32 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full border bg-black/60 backdrop-blur-md text-[#c9a96e] border-[#c9a96e]/40 shadow-md">
              <CheckBadgeIcon className="w-4 h-4 text-[#c9a96e]" />
              Established 2006 Real Estate & Construction Leadership
            </span>

            <h1 className="font-sans font-extrabold text-white leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Constructing Commercial Plazas & Residential Excellence Since 2006
            </h1>

            <p className="text-base md:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
              RHA Builder delivers landmark commercial plazas, shop sales on 25% advance and 3-year installment plans, and custom residential houses across Lahore & Islamabad.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. STATS BANNER ──────────────────────────────────────────── */}
      <section className="relative -mt-10 z-20 container-site mb-16">
        <AboutStatsBanner />
      </section>

      {/* ─── 3. COMPANY STORY & EXECUTIVE NARRATIVE ───────────────────── */}
      <section className="py-16 bg-[#fafaf8]" aria-labelledby="overview-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-200 bg-slate-950">
                <Image
                  src="/images/about/about-story-engineering.jpg"
                  alt="RHA Builder executive engineering leadership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#1a2b4a] text-white p-6 rounded-3xl border border-slate-800 shadow-2xl max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a96e] text-slate-950 flex items-center justify-center font-bold">
                    <BuildingOffice2Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-sans font-extrabold text-white">
                      Since 2006
                    </p>
                    <p className="text-xs text-[#c9a96e] font-mono">
                      20 Years Legacy
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-sans border-t border-slate-700/60 pt-2 leading-relaxed">
                  Founded by CEO Faryad Hussain in Shahalmi, Lahore.
                </p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-2">
                  Company History & Vision
                </span>
                <h2 id="overview-heading" className="font-sans font-extrabold text-3xl md:text-4xl text-[#1a2b4a] tracking-tight">
                  Established Real Estate & Construction Leadership
                </h2>
              </div>

              <div className="space-y-4 text-base text-[var(--color-text-muted)] font-sans leading-relaxed">
                <p>
                  Established in <strong className="text-[#1a2b4a]">2006</strong> by CEO <strong className="text-[#1a2b4a]">Faryad Hussain</strong>, <strong className="text-[#1a2b4a]">RHA Builders</strong> is a trusted real estate development and construction firm headquartered in Shahalmi Furniture Market, Lahore.
                </p>
                <p>
                  Our primary focus is the construction of multi-story commercial plazas and commercial shop sales. We offer flexible <strong className="text-[#1a2b4a]">25% advance booking</strong> and structured <strong className="text-[#1a2b4a]">3-year quarterly payment plans</strong>, making commercial property ownership accessible and secure.
                </p>
                <p>
                  Additionally, RHA Builders provides turnkey residential construction services, building custom family houses on plot sites and offering move-in ready residences across major housing societies in Lahore and Islamabad.
                </p>
              </div>

              {/* Core Feature Bullet Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1a2b4a] bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  Commercial Plaza Construction
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1a2b4a] bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  25% Booking & 3-Year Payment Plans
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1a2b4a] bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  Residential Houses & Custom Builds
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1a2b4a] bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  Lahore & Islamabad Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. QUALITY BENCHMARKS GRID (EXPANDED CONTENT) ─────────────── */}
      <section className="py-16 bg-[#fafaf8] border-b border-slate-200" aria-labelledby="benchmarks-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-1">
              Engineering Standards
            </span>
            <h2 id="benchmarks-heading" className="font-sans font-extrabold text-3xl text-[#1a2b4a]">
              The RHA Quality & Construction Benchmark
            </h2>
            <p className="text-sm text-slate-600 font-sans mt-2">
              How we ensure structural integrity, investor security, and superior property value across all commercial and residential developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_BENCHMARKS.map((b) => (
              <div
                key={b.number}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-3xl font-mono font-extrabold text-[#1a2b4a] opacity-40 block mb-3 group-hover:text-blue-600 group-hover:opacity-100 transition-all">
                    {b.number}
                  </span>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. COMPANY MILESTONES TIMELINE ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200" aria-labelledby="milestones-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-1">
              Our Journey
            </span>
            <h2 id="milestones-heading" className="font-sans font-extrabold text-3xl text-[#1a2b4a]">
              RHA Builders Milestone History
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {MILESTONES.map((m) => (
              <div
                key={m.year}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm relative group hover:border-[#1a2b4a] hover:bg-white transition-all"
              >
                <span className="text-2xl font-sans font-extrabold text-[#1a2b4a] font-mono block mb-2">
                  {m.year}
                </span>
                <h3 className="font-sans font-bold text-lg text-[#1a2b4a] mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INTERACTIVE PROCESS FRAMEWORK ─────────────────────────── */}
      <section className="py-16 bg-[#fafaf8] border-b border-slate-200" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-1">
              Development Lifecycle
            </span>
            <h2 id="process-heading" className="font-sans font-extrabold text-3xl text-[#1a2b4a]">
              The RHA 4-Stage Construction Methodology
            </h2>
          </div>

          <AboutInteractiveProcess />
        </div>
      </section>

      {/* ─── 8. CORE VALUES GRID ──────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-1">
              Our Core Principles
            </span>
            <h2 id="values-heading" className="font-sans font-extrabold text-3xl text-[#1a2b4a]">
              Core Values Driving Every Build
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a2b4a] flex items-center justify-center mb-6 group-hover:bg-[#1a2b4a] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-xl text-[#1a2b4a] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. TRUST PROOF & CLIENT HIGHLIGHTS ───────────────────────── */}
      <section className="py-16 bg-[#fafaf8]" aria-labelledby="trust-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans block mb-1">
              Client & Investor Trust
            </span>
            <h2 id="trust-heading" className="font-sans font-extrabold text-3xl text-[#1a2b4a]">
              Delivering Value for Business Owners & Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    <HandThumbUpIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold font-mono text-[#1a2b4a] uppercase">Verified Client Feedback</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 font-sans">{t.author}</span>
                  <span className="text-[#1a2b4a] font-semibold font-mono">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CTA BAND ─────────────────────────────────────────────── */}
      <CTABand
        title="Ready to Discuss Your Real Estate Project?"
        description="Connect with RHA Builder's CEO Faryad Hussain and executive team to discuss shop bookings, payment plans, or residential house builds."
        primaryLabel="Contact Executive Team"
        primaryHref="/contact"
        secondaryLabel="Meet the Team"
        secondaryHref="/team"
      />
    </div>
  );
}
