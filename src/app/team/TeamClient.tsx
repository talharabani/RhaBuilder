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
      <section
        className="relative flex items-center min-h-[380px] md:min-h-[440px] overflow-hidden bg-slate-950"
        aria-label="Our Team page hero"
      >
        <Image
          src="/images/about/about-hero-architecture.jpg"
          alt="RHA Builders Architectural Leadership"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"
          aria-hidden="true"
        />
        <div className="container-site relative z-10 py-28 md:py-36">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-sans text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white font-semibold">
                Our Team
              </li>
            </ol>
          </nav>
          <h1
            className="font-sans font-extrabold text-white tracking-tight drop-shadow-md"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Our Team
          </h1>
          <p className="mt-3 text-base md:text-lg max-w-xl text-slate-300 font-sans leading-relaxed">
            The executive leadership, sales, engineering, and administrative professionals driving RHA Builders.
          </p>
        </div>
      </section>

      {/* ─── 2. CEO SPOTLIGHT CARD ──────────────────────────────────── */}
      <section className="section-pad bg-[#fafaf8]" aria-labelledby="ceo-spotlight-heading">
        <div className="container-site">
          <Link
            href={`/team/${ceo.slug}`}
            className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl p-6 md:p-10 cursor-pointer hover:border-[#1a2b4a] transition-all duration-300 relative block"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* CEO Portrait Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xl">
                  {ceo.portrait && !ceo.portrait.includes("placeholder") ? (
                    <Image
                      src={ceo.portrait}
                      alt={ceo.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
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
              <div className="lg:col-span-7">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#1a2b4a] text-white shadow-sm uppercase tracking-wider mb-3 border border-blue-800">
                  Founder & CEO
                </span>
                <h2
                  id="ceo-spotlight-heading"
                  className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-2 group-hover:text-[#1a2b4a] transition-colors"
                >
                  {ceo.name}
                </h2>
                <p className="text-base font-bold text-[#1a2b4a] mb-5 font-sans">
                  {ceo.jobTitle} — RHA Builders
                </p>
                <div className="space-y-4 text-base text-slate-600 font-sans leading-relaxed">
                  <p>{ceo.fullBio || ceo.shortBio}</p>
                  <p>
                    Under his direction, RHA Builders established its hallmark commercial plaza project—<strong className="text-slate-900">Ansa Tower</strong> in Shahalmi, Lahore—providing buyers with a 25% advance booking option and a flexible 3-year quarterly payment plan.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between border-t border-slate-200 pt-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-500 font-sans">Established</p>
                      <p className="text-sm font-bold text-slate-900 font-sans">2006 (20+ Years)</p>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-500 font-sans">Core Focus</p>
                      <p className="text-sm font-bold text-slate-900 font-sans">Commercial Plazas & Shops</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#1a2b4a] group-hover:text-blue-900">
                    View Full Profile Screen <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── 3. EXECUTIVES & KEY PEOPLE SECTION ───────────────────── */}
      <section
        className="section-pad bg-white border-t border-slate-200"
        aria-labelledby="executives-heading"
      >
        <div className="container-site">
          <div className="text-center mb-14">
            <h2
              id="executives-heading"
              className="font-sans font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight"
            >
              Key People &amp; Contributors
            </h2>
            <p className="mt-2 text-xs font-bold tracking-widest uppercase font-sans text-[#1a2b4a]">
              CLICK ANY MEMBER TO VIEW DEDICATED PROFILE SCREEN
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            {executives.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
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
