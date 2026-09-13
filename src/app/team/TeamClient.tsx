"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamCard } from "@/components/cards/TeamCard";
import { CTABand } from "@/components/sections/CTABand";
import type { TeamMember } from "@/lib/data/team";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface TeamClientProps {
  teamMembers: TeamMember[];
}

export function TeamClient({ teamMembers }: TeamClientProps) {
  const ceo = teamMembers.find((m) => m.slug === "faryad-hussain") || teamMembers[0];
  const executives = teamMembers.filter((m) => m.slug !== "faryad-hussain");

  return (
    <>
      {/* ─── 1. PAGE HERO ─────────────────────────────────────────── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[58vh] md:min-h-[540px] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="Our Team page hero"
        >
          <Image
            src="/images/team.png"
            alt="RHA Builders Team"
            fill
            priority
            className="object-cover object-[center_top] lg:object-[right_top] drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 15%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0) 45%)",
            }}
            aria-hidden="true"
          />
          <div className="w-full relative z-10 py-12 sm:py-16 lg:py-20 p-8 md:p-12 lg:p-[4.5rem]">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm sm:text-base font-sans text-slate-500 font-medium">
                  <li>
                    <Link href="/" className="hover:text-[#0052cc] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">
                    Our Team
                  </li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
                Our Team
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                The executive leadership, sales, engineering, and administrative professionals driving RHA Builders.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 2. CEO SPOTLIGHT CARD ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#fafaf8]" aria-labelledby="ceo-spotlight-heading">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
          <Link
            href={`/team/${ceo.slug}`}
            className="rha-card group bg-white border border-slate-200 hover:border-[#0052cc] shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] p-4 sm:p-6 md:p-8 cursor-pointer relative block"
            style={{ borderRadius: '1.75rem' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* CEO Portrait Column */}
              <div className="lg:col-span-4 relative">
                <div
                  className="relative aspect-[3/4] overflow-hidden bg-slate-900 border border-slate-200/60 shadow-sm z-10"
                  style={{ borderRadius: '1.25rem' }}
                >
                  {ceo.portrait && !ceo.portrait.includes("placeholder") ? (
                    <Image
                      src={ceo.portrait}
                      alt={ceo.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-900 text-center">
                      <div className="w-24 h-24 rounded-full bg-[#1a2b4a] border-2 border-blue-400 flex items-center justify-center text-white font-display font-bold text-3xl mb-4">
                        FH
                      </div>
                      <span className="text-sm font-sans font-bold text-white tracking-wide uppercase">
                        {ceo.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* CEO Details Column */}
              <div className="lg:col-span-8 relative z-10">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#eef5ff] text-[#0052cc] group-hover:bg-transparent group-hover:text-white shadow-sm uppercase tracking-wider mb-3 border border-blue-200 group-hover:border-white transition-colors">
                  Founder & CEO
                </span>
                <h2
                  id="ceo-spotlight-heading"
                  className="font-sans font-extrabold text-3xl md:text-4xl text-[#0b1b3d] group-hover:text-white transition-colors duration-300 tracking-tight mb-1"
                >
                  {ceo.name}
                </h2>
                <p className="text-sm sm:text-base font-bold text-[#0052cc] group-hover:text-white transition-colors duration-300 mb-4 font-sans">
                  {ceo.jobTitle} — RHA Builders
                </p>
                <div className="space-y-3 text-sm sm:text-base text-slate-500 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed">
                  <p>{ceo.fullBio || ceo.shortBio}</p>
                  <p>
                    Under his direction, RHA Builders established its hallmark commercial plaza project—<strong className="text-[#0b1b3d] group-hover:text-white transition-colors font-bold">Ansa Tower</strong> in Shahalmi, Lahore—providing buyers with a 25% advance booking option and a flexible 3-year quarterly payment plan.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between border-t border-slate-100 group-hover:border-white pt-5 transition-colors">
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#f0f8fe] group-hover:bg-transparent border border-transparent group-hover:border-white transition-all duration-300 px-3.5 py-2 rounded-xl">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0052cc] group-hover:text-white transition-colors font-sans mb-0.5">Established</p>
                      <p className="text-sm font-extrabold text-[#1a2b4a] group-hover:text-white transition-colors font-sans">2006 (20+ Years)</p>
                    </div>
                    <div className="bg-[#f0f8fe] group-hover:bg-transparent border border-transparent group-hover:border-white transition-all duration-300 px-3.5 py-2 rounded-xl">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0052cc] group-hover:text-white transition-colors font-sans mb-0.5">Core Focus</p>
                      <p className="text-sm font-extrabold text-[#1a2b4a] group-hover:text-white transition-colors font-sans">Commercial Plazas & Shops</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#0052cc] group-hover:text-white transition-colors duration-300">
                    View Full Profile <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── 3. EXECUTIVES & KEY PEOPLE SECTION (FAN ARC) ─────────── */}
      <section
        className="py-16 md:py-24 bg-[#fafaf8] border-t border-slate-200 overflow-hidden"
        aria-labelledby="executives-heading"
      >
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans block">
              Leadership & Contributors
            </span>
            <h2
              id="executives-heading"
              className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0b1b3d] tracking-tight"
            >
              Key People & Contributors.
            </h2>
          </div>

          {/* Fan Arc Layout */}
          <style>{`
            .fan-arc-container .fan-card {
              transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease, filter 0.4s ease;
            }
            .fan-arc-container:hover .fan-card {
              opacity: 0.5;
              filter: blur(1px) grayscale(0.3);
              transform: scale(0.92) !important;
            }
            .fan-arc-container .fan-card:hover {
              opacity: 1 !important;
              filter: none !important;
              transform: scale(1.15) rotateY(0deg) translateZ(60px) !important;
              z-index: 50 !important;
            }
          `}</style>
          <div className="fan-arc-container relative w-full flex items-end justify-center gap-2 sm:gap-3 md:gap-4 py-8" style={{ perspective: '1200px' }}>
            {executives.map((member, index) => {
              const total = executives.length;
              const mid = (total - 1) / 2;
              const offset = index - mid;
              const rotateY = offset * 8;
              const translateZ = -Math.abs(offset) * 30;
              const scale = 1 - Math.abs(offset) * 0.04;

              return (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="fan-card group relative flex-shrink-0"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    zIndex: total - Math.abs(offset) * 2,
                    width: 'clamp(110px, 16vw, 230px)',
                  }}
                  aria-label={`View profile for ${member.name}, ${member.jobTitle}`}
                >
                  {/* Card */}
                  <div
                    className="relative overflow-hidden bg-white border-2 border-slate-200 group-hover:border-[#0052cc] shadow-md group-hover:shadow-[0_20px_60px_-10px_rgba(0,82,204,0.4)] transition-all duration-500"
                    style={{ borderRadius: '1.25rem', aspectRatio: '3/4' }}
                  >
                    {/* Photo */}
                    {member.portrait && !member.portrait.includes("placeholder") ? (
                      <Image
                        src={member.portrait}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        sizes="280px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200">
                        <span className="text-2xl font-bold text-[#1a2b4a]">
                          {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-[#0b1b3d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end p-4">
                      <span className="text-white text-xs sm:text-sm font-bold font-sans text-center leading-tight mb-1">
                        {member.name}
                      </span>
                      <span className="text-white text-[10px] sm:text-xs font-sans text-center leading-tight">
                        {member.jobTitle}
                      </span>
                    </div>
                  </div>

                  {/* Name Label below card */}
                  <div className="mt-3 text-center transition-opacity">
                    <p className="text-xs sm:text-sm font-bold text-[#0b1b3d] font-sans truncate leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-[#0052cc] font-sans truncate leading-tight mt-0.5">
                      {member.jobTitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. CTA BAND ─────────────────────────────────────────── */}
      <CTABand
        title="Invest Smart, Live Better"
        description="Connect with RHA Builders leadership to enquire about Ansa Tower commercial shops for sale or residential house projects."
        primaryLabel="Contact Executive Office"
        primaryHref="/contact"
      />
    </>
  );
}
