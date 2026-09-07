"use client";

import React, { useState } from "react";
import { SITE_CONTACT } from "@/lib/constants";

interface GoogleMapSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function GoogleMapSection({
  title = "Visit Our Corporate Office",
  subtitle = "Mochi, Ghalib Street #20, Barkat, Outside Nawazish Ali Rd, Gate, Lahore, 54000, Pakistan",
  className = "",
}: GoogleMapSectionProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(18);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Exact location query focused on Mochi Gate, Ghalib Street #20, Barkat, Lahore
  const locationQuery = encodeURIComponent(
    "Ghalib Street 20, Barkat, Mochi Gate, Lahore, Pakistan"
  );

  // Real Google Maps embed URL with dynamic high zoom level (z=18 street level detail) and pin drop (iwloc=B)
  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${locationQuery}&zoom=${zoomLevel}`
    : `https://maps.google.com/maps?q=${locationQuery}&t=m&z=${zoomLevel}&ie=UTF8&iwloc=B&output=embed`;

  return (
    <section
      className={`py-10 md:py-16 bg-[#fafaf8] border-y border-slate-200 ${className}`}
      aria-label="RHA Builders Google Maps Location"
    >
      <div className="container-site">
        {/* Header Title & Address Subtitle */}
        <div className="max-w-3xl mb-6 md:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#1a2b4a]/10 text-[#1a2b4a] mb-2">
            <svg
              style={{ width: "14px", height: "14px", minWidth: "14px", minHeight: "14px" }}
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-red-600"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Pinned & Zoomed Location
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Dedicated Map Container with Centered Zoom Lens Indicator */}
        <div className="relative w-full rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-100 group">
          {/* Interactive Google Map Embed */}
          <div className="w-full h-[380px] sm:h-[440px] md:h-[500px] relative">
            <iframe
              title="RHA Builders Office Location Zoomed Google Map"
              src={embedUrl}
              className="w-full h-full border-0 filter contrast-[1.04] saturate-[1.08]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Centered Magnifying Lens Overlay with Red Location Pin Indicator (Matching User Reference Image) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Outer Pulsating Ring */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-red-500/40 animate-ping opacity-75" />
              
              {/* Circular Lens Frame matching attached reference artwork */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white/90 shadow-[0_0_40px_rgba(0,0,0,0.35)] ring-4 ring-red-500/40 flex items-center justify-center backdrop-contrast-125 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full border border-white/50 bg-red-500/5 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-md" />
                </div>
              </div>

              {/* Big Red Marker Pin centered over Lens */}
              <div className="absolute -top-10 sm:-top-12 flex flex-col items-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                <svg
                  style={{ width: "56px", height: "56px", minWidth: "56px", minHeight: "56px" }}
                  fill="#dc2626"
                  viewBox="0 0 24 24"
                  className="filter drop-shadow-lg transform hover:scale-110 transition-transform"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating Top Location Tag */}
          <div className="absolute top-4 left-4 z-20 max-w-[90vw] sm:max-w-md bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <svg
                style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a2b4a] block">
                RHA Builders Pinned Location
              </span>
              <p className="text-xs sm:text-sm font-sans font-extrabold text-slate-900 leading-snug">
                Mochi, Ghalib Street #20, Barkat, Lahore
              </p>
              <span className="text-[11px] text-slate-500 font-sans block mt-0.5">
                Street-Level Zoomed View (54000)
              </span>
            </div>
          </div>

          {/* Floating Zoom Controls & Navigation Button */}
          <div className="absolute bottom-4 right-4 z-20 flex flex-wrap items-center gap-2">
            {/* Dynamic Zoom Level Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-xl">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(z + 1, 20))}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-[#1a2b4a] hover:text-white font-bold text-slate-800 flex items-center justify-center transition-colors text-base"
                title="Zoom In"
              >
                +
              </button>
              <span className="text-[11px] font-mono font-bold px-2 text-slate-700">
                Zoom {zoomLevel}
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(z - 1, 14))}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-[#1a2b4a] hover:text-white font-bold text-slate-800 flex items-center justify-center transition-colors text-base"
                title="Zoom Out"
              >
                -
              </button>
            </div>

            {/* Direct Google Maps Directions Link */}
            <a
              href={SITE_CONTACT.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1a2b4a] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-slate-900 transition-all shadow-2xl border border-blue-700/50 hover:scale-105 cursor-pointer"
            >
              <svg
                style={{ width: "16px", height: "16px", minWidth: "16px", minHeight: "16px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-red-400"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Get Directions</span>
              <svg
                style={{ width: "14px", height: "14px", minWidth: "14px", minHeight: "14px" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Clean Contact Information Strip below the map */}
        <div className="mt-6 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={SITE_CONTACT.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-800 hover:text-[#1a2b4a] transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100 shadow-sm">
              <svg
                style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Official Head Office Address
              </span>
              <p className="text-xs sm:text-sm font-sans font-extrabold text-slate-900 group-hover:underline">
                {SITE_CONTACT.address}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-xs font-sans text-slate-600 shrink-0">
            <span className="hidden md:inline font-medium">Mon–Sat: 9am–6pm PKT</span>
            <a
              href={SITE_CONTACT.phone1Tel}
              className="font-bold text-[#1a2b4a] hover:underline"
            >
              {SITE_CONTACT.phone1Display}
            </a>
            <a
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-white font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
