"use client";

import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_CONTACT } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={SITE_CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need Assistance? Message us on WhatsApp"
      className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center bg-[#0052cc] hover:bg-[#003d99] text-white rounded-full p-2 sm:p-2.5 shadow-2xl border border-blue-400/30 transition-all duration-500 ease-in-out hover:pl-5 hover:pr-2.5"
    >
      {/* Expanded Left Content (Hidden by default, shown smoothly on hover) */}
      <div className="flex items-center gap-3 max-w-0 opacity-0 overflow-hidden group-hover:max-w-[260px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-white shrink-0" aria-hidden="true" />
        <div className="w-[1px] h-7 bg-white/20 shrink-0" aria-hidden="true" />
        <div className="flex flex-col text-left pr-2 whitespace-nowrap">
          <span className="text-white font-bold text-sm leading-tight font-sans">
            Need Assistance?
          </span>
          <span className="text-white/75 text-xs font-normal font-sans">
            Message us on WhatsApp
          </span>
        </div>
      </div>

      {/* Green WhatsApp Circle Icon (Always visible) */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34E775] flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <WhatsAppIcon className="w-6 h-6 fill-current" />
      </div>
    </a>
  );
}
