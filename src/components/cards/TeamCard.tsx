import type { TeamMember } from "@/lib/data/team";
import Image from "next/image";
import Link from "next/link";
import { UserIcon, ArrowRightIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  // Generate initials for avatar fallback
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Link
      href={`/team/${member.slug}`}
      className="rha-card group relative flex flex-col items-center text-center bg-white p-3 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer block h-full"
      style={{ borderRadius: '1.75rem' }}
      aria-label={`View profile for ${member.name}, ${member.jobTitle}`}
    >
      {/* Portrait Photo Wrapper */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-slate-900 z-10 border border-slate-200/60 shadow-sm"
        style={{ borderRadius: '1.25rem' }}
      >
        {member.portrait && !member.portrait.includes("placeholder") ? (
          <Image
            src={member.portrait}
            alt={member.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-center">
            <div className="w-20 h-20 rounded-full bg-[#1a2b4a]/15 border-2 border-[#1a2b4a]/40 flex items-center justify-center text-[#1a2b4a] font-display font-bold text-2xl mb-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
              {initials || <UserIcon className="w-10 h-10" />}
            </div>
            <span className="text-xs text-slate-400 font-sans tracking-wider uppercase font-semibold">
              RHA Leadership
            </span>
          </div>
        )}

        {/* Hover Overlay with View Profile Prompt */}
        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2b4a] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/20">
            <InformationCircleIcon className="w-4 h-4 text-blue-300" />
            View Full Profile
          </span>
        </div>
      </div>

      {/* Details Container with z-10 relative for liquid fill */}
      <div className="pt-4 px-3 pb-3 relative z-10 flex flex-col flex-1 justify-between w-full">
        <div>
          {/* Name */}
          <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug mb-1 tracking-tight">
            {member.name}
          </h3>

          {/* Job Title / Role */}
          <p className="text-xs font-bold text-blue-700 group-hover:text-white transition-colors duration-300 font-sans tracking-wide uppercase">
            {member.jobTitle}
          </p>

          {/* Short Bio / Description */}
          {member.shortBio && (
            <p className="mt-2.5 text-xs text-slate-500 group-hover:text-white transition-colors duration-300 font-sans leading-relaxed line-clamp-3">
              {member.shortBio}
            </p>
          )}
        </div>

        {/* View Profile Action */}
        <div className="mt-4 pt-3 border-t border-slate-100 group-hover:border-blue-400/50 w-full flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 group-hover:text-white transition-colors duration-300">
          <span>View Full Profile</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}


