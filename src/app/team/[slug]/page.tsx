import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckBadgeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { getTeamMemberBySlug, teamMembers } from "@/lib/data/team";
import { CTABand } from "@/components/sections/CTABand";
import { TeamCard } from "@/components/cards/TeamCard";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.jobTitle} | RHA Builders`,
    description: member.shortBio,
    alternates: { canonical: `https://rhabuilder.com/team/${slug}` },
  };
}

export default async function TeamMemberDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const otherMembers = teamMembers
    .filter((m) => m.slug !== member.slug && m.slug !== "faryad-hussain")
    .slice(0, 3);

  return (
    <>
      {/* ─── 1. UNIFIED HERO BANNER (Matches All Site Subpages) ───────── */}
      <section
        className="relative flex items-center min-h-[360px] md:min-h-[420px] overflow-hidden bg-slate-950 text-white"
        aria-label={`${member.name} team profile hero`}
      >
        <Image
          src="/images/about/about-hero-architecture.jpg"
          alt="RHA Builders Architectural Leadership"
          fill
          priority
          className="object-cover object-center opacity-30"
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
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white font-semibold">
                Profile Showcase
              </li>
            </ol>
          </nav>
          <h1
            className="font-sans font-extrabold text-white tracking-tight drop-shadow-md"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Team Leadership &amp; Experts
          </h1>
          <p className="mt-2 text-base md:text-lg max-w-xl text-slate-300 font-sans font-medium">
            Discover the background, role scope, and professional experience driving RHA Builders.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN PROFILE CARD SECTION ───────────────────────────── */}
      <section className="section-pad bg-[#fafaf8]">
        <div className="container-site">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 md:p-12 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xl">
                  {member.portrait && !member.portrait.includes("placeholder") ? (
                    <Image
                      src={member.portrait}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
                      <div className="w-24 h-24 rounded-full bg-[#1a2b4a] border-2 border-blue-400 flex items-center justify-center text-white font-display font-bold text-3xl mb-4 shadow-xl">
                        {initials || <UserIcon className="w-12 h-12" />}
                      </div>
                      <span className="text-xs text-slate-300 font-sans tracking-widest uppercase font-semibold">
                        RHA Leadership
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Bio & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#1a2b4a] text-white shadow-sm uppercase tracking-wider mb-3 border border-blue-800">
                    {member.department}
                  </span>
                  <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-lg font-bold text-[#1a2b4a] font-sans">
                    {member.jobTitle} — RHA Builders
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold">
                    Professional Profile &amp; Bio
                  </h3>
                  <p className="text-base text-slate-600 font-sans leading-relaxed">
                    {member.fullBio || member.shortBio}
                  </p>
                </div>

                {/* Key Credentials */}
                {member.credentials && member.credentials.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-1.5">
                      <CheckBadgeIcon className="w-4 h-4 text-blue-800" />
                      Key Credentials &amp; Role Scope
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((cred, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-sans font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          <BriefcaseIcon className="w-4 h-4 text-[#1a2b4a]" />
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Areas of Expertise */}
                {member.specialisms && member.specialisms.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-1.5">
                      <AcademicCapIcon className="w-4 h-4 text-blue-800" />
                      Core Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialisms.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-sans font-bold bg-[#1a2b4a]/10 text-[#1a2b4a] border border-[#1a2b4a]/20"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action CTAs */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                  <a
                    href={SITE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
                    WhatsApp Consultation
                  </a>

                  <Link
                    href={`/contact?enquiry=${encodeURIComponent(member.name + " (" + member.jobTitle + ")")}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-all shadow-md"
                  >
                    Consult Team Member
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OTHER TEAM MEMBERS SHOWCASE ─────────────────────────── */}
      {otherMembers.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a2b4a] font-sans mb-1">
                  RHA Leadership &amp; Team
                </p>
                <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900">
                  Other Team Members
                </h2>
              </div>
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2b4a] hover:text-blue-900"
              >
                View Full Team Directory →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherMembers.map((m) => (
                <TeamCard key={m.slug} member={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
