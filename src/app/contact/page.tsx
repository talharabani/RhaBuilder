import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/sections/LeadForm";
import { SITE_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact RHA Builder | Corporate Office & Project Enquiries",
  description:
    "Contact RHA Builder or visit our corporate office at Mochi, Ghalib Street #20, Barkat, Outside Nawazish Ali Rd, Gate, Lahore. Speak with our team.",
  alternates: { canonical: "https://rhabuilder.com/contact" },
};

export default function ContactPage() {
  const encodedAddress = encodeURIComponent(
    "Ghalib Street 20, Barkat, Mochi Gate, Lahore, Pakistan"
  );
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Real Google Maps Embed URL matching reference design
  const mapEmbedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=16`
    : `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <>
      {/* Hero */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[45vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="Contact page hero"
        >
          <Image
            src="/images/contact-hero-bg.jpg"
            alt="Contact RHA Builder Development & Construction Team"
            fill
            priority
            className="object-cover object-[70%_center]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 25%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0) 70%)",
            }}
            aria-hidden="true"
          />
          <div className="w-full relative z-10 py-12 sm:py-16 lg:py-20 p-8 md:p-12 lg:p-[4.5rem]">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm sm:text-base font-sans text-slate-500 font-medium">
                  <li>
                    <a href="/" className="hover:text-[#0052cc] transition-colors">
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">
                    Contact
                  </li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
                Contact Us
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                Get in touch with RHA Builder corporate office and project consultation team.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Main 2-Column Section */}
      <section className="py-12 md:py-20 bg-[#e6f0fa] relative overflow-hidden" aria-labelledby="contact-heading">

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ─── LEFT COLUMN: CONTACT INFO + EMBEDDED GOOGLE MAP ─── */}
            <div className="lg:col-span-5 space-y-8 bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1a2b4a] block mb-1">
                  Head Office Communications
                </span>
                <h2
                  id="contact-heading"
                  className="font-sans font-extrabold text-2xl text-slate-900 mb-6 tracking-tight"
                >
                  Contact Info
                </h2>

                <div className="space-y-6">
                  {/* Address Item */}
                  <a
                    href={SITE_CONTACT.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg
                        style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-sans font-semibold text-slate-800 group-hover:text-[#1a2b4a] leading-relaxed transition-colors flex items-center gap-1.5">
                        <span>{SITE_CONTACT.address}</span>
                        <svg
                          className="text-slate-400 group-hover:text-[#1a2b4a] shrink-0"
                          style={{ width: "14px", height: "14px", minWidth: "14px", minHeight: "14px" }}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </p>
                    </div>
                  </a>

                  {/* Phone Item */}
                  <a
                    href={SITE_CONTACT.phone1Tel}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg
                        style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-sans font-semibold text-slate-800 group-hover:text-[#1a2b4a] transition-colors">
                        {SITE_CONTACT.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  {/* Email Item */}
                  <a
                    href={SITE_CONTACT.emailMailto}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <svg
                        style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-sans font-semibold text-slate-800 group-hover:text-[#1a2b4a] transition-colors">
                        {SITE_CONTACT.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map (Directly under Contact Info in Left Column) */}
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-100 relative group mt-6">
                <div className="w-full h-[320px] sm:h-[360px] relative">
                  <iframe
                    title="RHA Builders Office Embedded Google Map"
                    src={mapEmbedUrl}
                    className="w-full h-full border-0 filter contrast-[1.03]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Directions Bar Overlay */}
                <div className="p-3.5 bg-[#1a2b4a] text-white flex items-center justify-between gap-3 text-xs font-sans shadow-md">
                  <span className="font-semibold truncate text-slate-200">
                    Mochi Gate, Ghalib Street #20, Lahore
                  </span>
                  <a
                    href={SITE_CONTACT.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#3b82f6] text-white font-bold uppercase text-[10px] tracking-wider hover:bg-blue-600 transition-colors shrink-0 shadow-sm"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: SEND US A MESSAGE / LEAD FORM ─── */}
            <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/90">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1a2b4a] block mb-1">
                Direct Client Support
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3 tracking-tight">
                Send us a Message
              </h2>
              <p className="text-sm text-slate-600 font-sans mb-8 leading-relaxed">
                Whether you have an enquiry about commercial plazas, residential developments, or investment options in Lahore & Islamabad, reach out to us below.
              </p>

              <LeadForm title="" description="" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
