"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  XMarkIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { TeamMember } from "@/lib/data/team";
import { SITE_CONTACT } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-lg border border-white/20"
          aria-label="Close details"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Left Column: Portrait Photo */}
        <div className="w-full md:w-5/12 bg-slate-950 relative min-h-[320px] md:min-h-[480px] flex items-center justify-center shrink-0 overflow-hidden">
          {member.portrait && !member.portrait.includes("placeholder") ? (
            <Image
              src={member.portrait}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
              <div className="w-24 h-24 rounded-full bg-[#1a2b4a] border-2 border-blue-400/40 flex items-center justify-center text-white font-display font-bold text-3xl mb-4 shadow-xl">
                {initials || <UserIcon className="w-12 h-12" />}
              </div>
              <span className="text-xs text-slate-300 font-sans tracking-widest uppercase font-semibold">
                RHA Builders Leadership
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-bold bg-[#1a2b4a] uppercase tracking-wider mb-1 border border-blue-700">
              {member.department}
            </span>
            <h2 className="text-xl font-bold font-sans">{member.name}</h2>
            <p className="text-xs text-slate-300 font-semibold">{member.jobTitle}</p>
          </div>
        </div>

        {/* Right Column: Member Details */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            {/* Department Badge & Title (Desktop) */}
            <div className="hidden md:block">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-sans font-bold bg-[#1a2b4a] text-white shadow-sm uppercase tracking-wider mb-3 border border-blue-800">
                {member.department}
              </span>
              <h2
                id="member-modal-title"
                className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight"
              >
                {member.name}
              </h2>
              <p className="mt-1 text-base font-bold text-[#1a2b4a] font-sans">
                {member.jobTitle} — RHA Builders
              </p>
            </div>

            {/* Narrative Bio */}
            <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold">
                Professional Profile & Experience
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {member.fullBio || member.shortBio}
              </p>
              {member.fullBio && member.shortBio && member.fullBio !== member.shortBio && (
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                  &quot;{member.shortBio}&quot;
                </p>
              )}
            </div>

            {/* Key Credentials */}
            {member.credentials && member.credentials.length > 0 && (
              <div className="mt-5 space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-1.5">
                  <CheckBadgeIcon className="w-4 h-4 text-blue-800" />
                  Key Credentials & Role Scope
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      <BriefcaseIcon className="w-3.5 h-3.5 text-[#1a2b4a]" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Areas of Expertise / Specialisms */}
            {member.specialisms && member.specialisms.length > 0 && (
              <div className="mt-5 space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1a2b4a] font-bold flex items-center gap-1.5">
                  <AcademicCapIcon className="w-4 h-4 text-blue-800" />
                  Core Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialisms.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-sans font-bold bg-[#1a2b4a]/10 text-[#1a2b4a] border border-[#1a2b4a]/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
              WhatsApp Consultation
            </a>

            <Link
              href={`/contact?enquiry=${encodeURIComponent(member.name + " (" + member.jobTitle + ")")}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a2b4a] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-all shadow-md"
            >
              Consult Team Member
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href={`/team/${member.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200 ml-auto"
            >
              Full Profile Page →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
