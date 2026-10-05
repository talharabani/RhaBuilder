"use client";

import { WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-3 group">
      
      {/* Tooltip on Hover */}
      <div className="opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 hidden sm:flex items-center pointer-events-none">
        <div className="bg-white text-[#1a2b4a] px-4 py-2.5 rounded-2xl shadow-xl shadow-black/10 font-sans text-sm font-semibold border border-gray-100 whitespace-nowrap">
          Chat with us
        </div>
      </div>

      <a
        href={SITE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Need Assistance? Message us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 outline-none"
      >
        {/* Glowing Rings (Ping Effect) */}
        <span 
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" 
          style={{ animationDuration: '2.5s' }} 
        />
        <span 
          className="absolute -inset-1.5 rounded-full border-[1.5px] border-[#25D366] opacity-30 animate-pulse" 
          style={{ animationDuration: '2s' }} 
        />

        {/* Shaking Green Button */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.6 }}
          className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34E775] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md" />
        </motion.div>
      </a>
    </div>
  );
}
