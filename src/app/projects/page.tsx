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
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "450px", backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Projects page header"
      >
        <Image
          src="/images/projects-hero-bg.jpg"
          alt="RHA Builder Portfolio & Projects - Residential and Commercial Developments"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 55%, rgba(15, 23, 42, 0.25) 100%)" }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 pb-16 pt-36">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-sans text-white/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>
                Projects
              </li>
            </ol>
          </nav>
          <h1 className="font-display font-semibold text-white max-w-2xl drop-shadow-md" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
            Our Projects
          </h1>
          <p className="mt-4 text-lg max-w-xl text-white/90 drop-shadow">
            Explore RHA Builder developments across residential and commercial categories.
          </p>
        </div>
      </section>

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
