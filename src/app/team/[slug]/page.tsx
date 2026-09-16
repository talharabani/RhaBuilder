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
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[58vh] md:min-h-[540px] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label={`${member.name} team profile hero`}
        >
          <Image
            src="/images/faryad.png"
            alt="RHA Builders Architectural Leadership"
            fill
            priority
            className="object-cover object-[85%_center] lg:object-right drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.2) 38%, rgba(255,255,255,0) 52%)",
            }}
            aria-hidden="true"
          />
          <div className="w-full relative z-10 py-10 sm:py-16 lg:py-20 p-5 sm:p-8 md:p-12 lg:p-[4.5rem]">
            <div className="w-[45%] sm:w-[65%] md:w-full max-w-2xl">
              <nav aria-label="Breadcrumb" className="mb-3 sm:mb-6">
                <ol className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-base font-sans text-slate-500 font-medium">
                  <li>
                    <Link href="/" className="hover:text-[#0052cc] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/team" className="hover:text-[#0052cc] transition-colors">
                      Our Team
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">
                    Profile Showcase
                  </li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-3 sm:mb-5">
                Team Leadership &amp; Experts
              </h1>
              <p className="mt-2 sm:mt-4 text-[10px] sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed w-[95%] sm:w-full max-w-xl">
                <span className="block sm:inline">Discover the background,</span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">role scope, and professional</span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">experience driving RHA Builders.</span>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 2. MAIN PROFILE CARD SECTION ───────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-4 relative w-[65%] mx-auto lg:w-full">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xl">
                  {member.portrait && !member.portrait.includes("placeholder") ? (
                    <Image
                      src={member.portrait}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
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
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div>
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-sans font-bold bg-transparent text-[#0052cc] shadow-sm uppercase tracking-wider mb-4 border border-blue-200">
                    {member.department}
                  </span>
                  <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#0b1b3d] tracking-tight mb-1.5">
                    {member.name}
                  </h2>
                  <p className="text-base font-bold text-[#0052cc] font-sans mb-6">
                    {member.jobTitle} — RHA Builders
                  </p>
                </div>

                <div className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed space-y-4">
                  <p>{member.fullBio || member.shortBio}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-y-6">
                  {member.credentials && member.credentials.length > 0 && (
                    <div className="flex flex-col">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0052cc] font-sans mb-1.5">Credentials & Role</p>
                      <p className="text-sm font-extrabold text-[#1a2b4a] font-sans leading-relaxed">{member.credentials.join(" • ")}</p>
                    </div>
                  )}
                  {member.specialisms && member.specialisms.length > 0 && (
                    <div className="flex flex-col">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0052cc] font-sans mb-1.5">Core Focus</p>
                      <p className="text-sm font-extrabold text-[#1a2b4a] font-sans leading-relaxed">{member.specialisms.join(" • ")}</p>
                    </div>
                  )}
                </div>

                {/* Action CTAs */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?enquiry=${encodeURIComponent(member.name + " (" + member.jobTitle + ")")}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0052cc] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-blue-800 transition-all shadow-sm"
                  >
                    Consult Team Member
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={SITE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[#0052cc] border border-blue-200 text-[11px] font-bold uppercase tracking-wider hover:bg-[#f0f8fe] transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-[#0052cc]" />
                    WhatsApp
                  </a>
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
