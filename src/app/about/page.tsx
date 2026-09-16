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
  ChevronRightIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  MapPinIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { CTABand } from "@/components/sections/CTABand";
import { AboutInteractiveProcess } from "@/components/sections/AboutInteractiveProcess";
import { SITE_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About RHA Builder | Commercial Plazas & Residential Development Excellence",
  description:
    "Discover RHA Builder: established in 2006 by CEO Faryad Hussain. Premier commercial plazas, 25% advance shop sales with 3-year payment plans, and turnkey residential house construction in Lahore & Islamabad.",
  alternates: { canonical: "https://rhabuilder.com/about" },
};

const STATS = [
  {
    icon: CalendarDaysIcon,
    value: "2006",
    label: "Established Year",
    description: "20+ years of real estate & construction excellence",
  },
  {
    icon: ClockIcon,
    value: "2 Years",
    label: "Typical Completion",
    description: "Standard timeframe for commercial plaza delivery",
  },
  {
    icon: BanknotesIcon,
    value: "3-Year",
    label: "Flexible Payment Plan",
    description: "25% advance with quarterly shop installment options",
  },
  {
    icon: MapPinIcon,
    value: "2 Cities",
    label: "Primary Service Hubs",
    description: "Serving Lahore & Islamabad market regions",
  },
];

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
    icon: HomeModernIcon,
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

export default function AboutPage() {
  return (
    <>
      {/* ─── 1. HERO BANNER (White gradient style matching other pages) ── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[45vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="About RHA Builder hero"
        >
          <Image
            src="/images/helicopter.png"
            alt="RHA Builder Architectural Development"
            fill
            priority
            className="object-cover object-[70%_center]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 25%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0) 70%)",
            }}
            aria-hidden="true"
          />
          <div className="w-full relative z-10 py-10 sm:py-16 lg:py-20 p-5 sm:p-8 md:p-12 lg:p-[4.5rem]">
            <div className="w-[45%] sm:w-[65%] md:w-full max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-3 sm:mb-6">
                <ol className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-base font-sans text-slate-500 font-medium">
                  <li>
                    <Link href="/" className="hover:text-[#0052cc] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">
                    About
                  </li>
                </ol>
              </nav>

              <p className="text-[8px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-4 font-sans text-[#0052cc]">
                <span className="block sm:inline">Established 2006</span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">Real Estate &</span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">Construction Leadership</span>
              </p>

              <h1 className="font-figtree font-bold text-[#1a2b4a] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-3 sm:mb-5">
                About RHA Builders
              </h1>

              <p className="mt-2 sm:mt-4 text-[10px] sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed w-[85%] sm:w-full max-w-2xl">
                Delivering commercial plazas, shop sales on 25% advance and 3-year installment plans, and custom residential houses across Lahore & Islamabad since 2006.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 2. STATS BAR (Matching homepage StatsBar design) ──────── */}
      <section className="bg-white pb-16 md:pb-24 px-3 sm:px-6 lg:px-8">
        <div className="w-[90%] sm:w-full max-w-6xl mx-auto -mt-8 sm:-mt-10 relative z-20">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div className="text-[#0052cc] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 stroke-[1.5]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-sans font-extrabold text-lg sm:text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-600 font-sans font-medium mt-0.5 sm:mt-1 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. COMPANY STORY (Left-aligned header matching homepage) ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white" aria-labelledby="overview-heading">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl bg-slate-950">
                <Image
                  src="/images/faryad_group.png"
                  alt="RHA Builder executive engineering leadership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white text-slate-900 p-5 rounded-2xl border border-slate-200 shadow-xl max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[#0052cc] flex items-center justify-center font-bold">
                    <BuildingOffice2Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-xl font-sans font-extrabold text-slate-900">
                      Since 2006
                    </p>
                    <p className="text-xs text-[#0052cc] font-sans font-bold">
                      20 Years Legacy
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-sans border-t border-slate-100 pt-2 leading-relaxed">
                  Founded by CEO Faryad Hussain in Shahalmi, Lahore.
                </p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
                  Company History & Vision
                </h2>
                <h3 id="overview-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
                  Established Real Estate & Construction Leadership
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-500 font-sans leading-relaxed">
                <p>
                  Established in <strong className="text-slate-900">2006</strong> by CEO <strong className="text-slate-900">Faryad Hussain</strong>, <strong className="text-slate-900">RHA Builders</strong> is a trusted real estate development and construction firm headquartered in Shahalmi Furniture Market, Lahore.
                </p>
                <p>
                  Our primary focus is the construction of multi-story commercial plazas and commercial shop sales. We offer flexible <strong className="text-slate-900">25% advance booking</strong> and structured <strong className="text-slate-900">3-year quarterly payment plans</strong>, making commercial property ownership accessible and secure.
                </p>
                <p>
                  Additionally, RHA Builders provides turnkey residential construction services, building custom family houses on plot sites and offering move-in ready residences across major housing societies in Lahore and Islamabad.
                </p>
              </div>

              {/* Core Feature Checkmarks */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Commercial Plaza Construction",
                  "25% Booking & 3-Year Payment Plans",
                  "Residential Houses & Custom Builds",
                  "Lahore & Islamabad Operations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-bold text-[#0052cc] bg-transparent py-2">
                    <CheckCircleIcon className="w-5 h-5 text-[#0052cc] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. QUALITY BENCHMARKS ─────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white" aria-labelledby="benchmarks-heading">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
              Engineering Standards
            </h2>
            <h3 id="benchmarks-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
              The RHA Quality &<br className="hidden sm:block" /> Construction Benchmark.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_BENCHMARKS.map((b) => (
              <div
                key={b.number}
                className="rha-card p-3 bg-white border border-slate-200 hover:border-[#0052cc] shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] group flex flex-col"
                style={{ borderRadius: '1.75rem' }}
              >
                <div className="p-5 flex flex-col flex-1 relative z-10">
                  <span className="text-4xl font-sans font-extrabold text-[#0052cc] opacity-30 block mb-4 group-hover:opacity-100 transition-all">
                    {b.number}
                  </span>
                  <h3 className="font-sans font-extrabold text-base text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug mb-2 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. MILESTONES TIMELINE ─────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white" aria-labelledby="milestones-heading">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
              Our Journey
            </h2>
            <h3 id="milestones-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
              RHA Builders Milestone History.
            </h3>
          </div>

          {/* Desktop: Horizontal Arrow Timeline */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {MILESTONES.map((m, idx) => (
                <div key={m.year} className="flex items-start" style={{ flex: 1 }}>
                  {/* Milestone Content */}
                  <div className="flex flex-col items-center text-center group relative" style={{ flex: 1 }}>
                    {/* Year Circle */}
                    <div className="w-20 h-20 rounded-full bg-[#0052cc] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(0,82,204,0.15)] transition-all duration-300 relative z-10">
                      <span className="text-lg font-sans font-extrabold text-white">{m.year}</span>
                    </div>

                    {/* Title Pill */}
                    <div className="bg-transparent border border-[#0052cc]/20 rounded-full px-4 py-1.5 mb-3 group-hover:border-[#0052cc]/40 transition-all duration-300">
                      <h3 className="font-sans font-bold text-xs text-[#0052cc] whitespace-nowrap">
                        {m.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-[200px] mx-auto">
                      {m.description}
                    </p>
                  </div>

                  {/* Arrow Connector (between items) */}
                  {idx < MILESTONES.length - 1 && (
                    <div className="flex items-center justify-center shrink-0 mt-8" style={{ width: '50px' }}>
                      <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="10" x2="36" y2="10" stroke="#0052cc" strokeWidth="2" strokeDasharray="4 3" />
                        <polygon points="36,4 48,10 36,16" fill="#0052cc" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Arrow Timeline */}
          <div className="md:hidden relative">
            {/* Vertical dashed line */}
            <div className="absolute left-[23px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-[#0052cc]/30" aria-hidden="true" />

            <div className="space-y-10">
              {MILESTONES.map((m, idx) => (
                <div key={m.year} className="relative">
                  <div className="flex items-start gap-5">
                    {/* Year Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#0052cc] flex items-center justify-center shadow-md shrink-0 relative z-10">
                      <span className="text-xs font-sans font-extrabold text-white">{m.year}</span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="font-sans font-bold text-base text-[#0052cc] mb-1 leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-sans leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Down Arrow (between items) */}
                  {idx < MILESTONES.length - 1 && (
                    <div className="flex justify-center ml-[17px] mt-3">
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="7,20 0,10 14,10" fill="#0052cc" opacity="0.4" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. INTERACTIVE PROCESS FRAMEWORK ──────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white" aria-labelledby="process-heading">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
              Development Lifecycle
            </h2>
            <h3 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
              The RHA 4-Stage<br className="hidden sm:block" /> Construction Methodology.
            </h3>
          </div>

          <AboutInteractiveProcess />
        </div>
      </section>

      {/* ─── 7. CORE VALUES GRID ──────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white" aria-labelledby="values-heading">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
              Our Core Principles
            </h2>
            <h3 id="values-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-sans">
              Core Values Driving<br className="hidden sm:block" /> Every Build.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rha-card p-3 bg-white border border-slate-200 hover:bg-[#0052cc] hover:border-[#0052cc] shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] group flex flex-col"
                  style={{ borderRadius: '1.75rem' }}
                >
                  <div className="p-5 flex flex-col flex-1 relative z-10">
                    <div className="text-[#0052cc] flex items-center mb-5 group-hover:text-white transition-colors">
                      <Icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="font-sans font-extrabold text-base text-slate-900 group-hover:text-white transition-colors duration-300 mb-2 leading-snug tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-xs text-slate-500 group-hover:text-white transition-colors duration-300 leading-relaxed font-sans">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA BAND ─────────────────────────────────────────── */}
      <CTABand
        title="Ready to Discuss Your Real Estate Project?"
        description="Connect with RHA Builder's CEO Faryad Hussain and executive team to discuss shop bookings, payment plans, or residential house builds."
        primaryLabel="Contact Executive Team"
        primaryHref="/contact"
        secondaryLabel="Meet the Team"
        secondaryHref="/team"
      />
    </>
  );
}
