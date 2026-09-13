import type { Metadata } from "next";
import Image from "next/image";
import { ThreeDProjectsGallery } from "@/components/sections/ThreeDProjectsGallery";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Projects | RHA Builder Residential & Commercial Developments",
  description:
    "Explore ongoing and completed RHA Builder projects, including residential and commercial developments. Filter the portfolio and view project details.",
  alternates: { canonical: "https://rhabuilder.com/projects" },
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[45vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="Projects page header"
        >
          <Image
            src="/images/projects-hero-bg.jpg"
            alt="RHA Builder Portfolio & Projects - Residential and Commercial Developments"
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
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm sm:text-base font-sans text-slate-500 font-medium">
                  <li>
                    <a href="/" className="hover:text-[#0052cc] transition-colors">Home</a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-[#1a2b4a] font-bold">
                    Projects
                  </li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-5">
                Our Projects
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                Explore RHA Builder developments across residential and commercial categories.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 3D PHOTO GALLERY & PROJECTS SHOWCASE ────────────── */}
      <ThreeDProjectsGallery />

      {/* ─── CTA BAND ───────────────────────────────────────── */}
      <CTABand
        title="Interested in a Project?"
        description="Speak with our team about residential, commercial or investment enquiries."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel={undefined}
        secondaryHref={undefined}
      />
    </>
  );
}
