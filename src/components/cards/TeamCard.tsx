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
      className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#1a2b4a]/60 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer block"
      aria-label={`View profile for ${member.name}, ${member.jobTitle}`}
    >
      {/* Portrait Photo Wrapper */}
      <div className="relative w-full aspect-[3/4] min-h-[300px] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-200/60 shadow-inner">
        {member.portrait && !member.portrait.includes("placeholder") ? (
          <Image
            src={member.portrait}
            alt={member.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2b4a] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/20">
            <InformationCircleIcon className="w-4 h-4 text-blue-300" />
            View Full Profile Screen
          </span>
        </div>
      </div>

      {/* Name with trailing Dash */}
      <h3 className="font-sans font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight group-hover:text-[#1a2b4a] transition-colors duration-200">
        {member.name} <span className="text-[#1a2b4a] font-light">—</span>
      </h3>

      {/* Job Title / Role */}
      <p className="mt-1 text-xs md:text-sm font-bold text-[#1a2b4a] font-sans tracking-wide uppercase">
        {member.jobTitle}
      </p>

      {/* Short Bio / Description */}
      {member.shortBio && (
        <p className="mt-3 text-xs md:text-sm text-slate-500 font-sans leading-relaxed max-w-xs mx-auto line-clamp-3">
          {member.shortBio}
        </p>
      )}

      {/* View Profile Action */}
      <div className="mt-5 pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2b4a] group-hover:text-blue-900 transition-colors">
        <span>View Full Profile Screen</span>
        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}


