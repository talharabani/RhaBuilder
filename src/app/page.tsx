import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { LeadForm } from "@/components/sections/LeadForm";
import { getFeaturedProjects } from "@/lib/data/projects";
import { getFeaturedServices } from "@/lib/data/services";
import { getLatestBlogPosts } from "@/lib/data/blog";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_CONTACT } from "@/lib/constants";
import { AboutImageSlider } from "@/components/ui/AboutImageSlider";
import { StatsBar } from "@/components/ui/AnimatedCounter";
import { ThreeDProjectsGallery } from "@/components/sections/ThreeDProjectsGallery";
import { NetflixServicesShowcase } from "@/components/sections/NetflixServicesShowcase";
import { FadeInWhenVisible } from "@/components/animation/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/animation/StaggerContainer";
import { TextReveal } from "@/components/animation/TextReveal";
import { InteractiveHover } from "@/components/animation/InteractiveHover";

export const metadata: Metadata = {
  title: "RHA Builder | Residential & Commercial Real Estate Development",
  description:
    "Explore RHA Builder's residential and commercial developments, construction capabilities, project updates and opportunities. Speak with our team.",
  alternates: { canonical: "https://rhabuilder.com" },
};

const WHY_RHA = [
  {
    title: "Quality-Focused Execution",
    description:
      "We prioritise workmanship and specification quality across every project, from structural works through to final fit-out.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear, regular communication with clients, occupiers and investors throughout the development process.",
  },
  {
    title: "Practical Planning",
    description:
      "Schemes designed to work in practice — for the people who live and work in them, and for those who invest in them.",
  },
  {
    title: "Residential & Commercial Capability",
    description:
      "Experience across residential and commercial development, with the ability to deliver mixed-use schemes.",
  },
  {
    title: "End-to-End Coordination",
    description:
      "We coordinate design, planning, construction and handover — providing clients with continuity and accountability.",
  },
  {
    title: "Experienced Professionals",
    description:
      "A team with broad experience across the development and construction disciplines needed to deliver complex projects.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const services = getFeaturedServices().slice(0, 6);
  const blogPosts = getLatestBlogPosts(3);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Hero"
      >
        {/* Background — Image + gradient overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/home-hero-bg.jpg"
            alt="RHA Builders Construction & Real Estate Development"
            fill
            priority
            className="object-cover object-[82%_70%] sm:object-[84%_70%] lg:object-[88%_70%] opacity-100 transition-transform duration-1000 scale-102"
            sizes="100vw"
            quality={95}
          />
          {/* Responsive Gradient overlay for text contrast and seamless blending */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(15, 26, 46, 0.95) 0%, rgba(15, 26, 46, 0.8) 42%, rgba(15, 26, 46, 0.3) 72%, rgba(15, 26, 46, 0.05) 100%)",
            }}
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15, 26, 46, 0.94) 0%, rgba(15, 26, 46, 0.75) 55%, rgba(15, 26, 46, 0.35) 100%)",
            }}
          />
        </div>

        <div className="container-site relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <FadeInWhenVisible direction="down" delay={0.1}>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 font-sans"
                style={{ color: "var(--color-brand-accent)" }}
              >
                Real Estate Development & Construction
              </p>
            </FadeInWhenVisible>

            {/* H1 */}
            <TextReveal
              text="Building Places for Life, Business and What Comes Next."
              as="h1"
              className="font-sans font-extrabold text-white leading-tight mb-6 text-2.5xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg max-w-full break-words"
              delay={0.2}
            />

            {/* Subheading */}
            <FadeInWhenVisible direction="up" delay={0.4}>
              <p
                className="text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl font-sans text-slate-200"
              >
                RHA Builder develops thoughtful residential and commercial spaces
                with a focus on quality, functionality and lasting value.
              </p>
            </FadeInWhenVisible>

            {/* CTAs */}
            <FadeInWhenVisible direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <InteractiveHover scale={1.03}>
                  <Link
                    href="/projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 text-sm font-bold rounded-[var(--radius-button)] group btn-hero-primary"
                  >
                    Explore Projects
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </InteractiveHover>
                <InteractiveHover scale={1.03}>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 text-sm font-semibold rounded-[var(--radius-button)] group btn-hero-secondary"
                  >
                    Discuss a Project
                  </Link>
                </InteractiveHover>
              </div>
            </FadeInWhenVisible>

            {/* Contact strip */}
            <FadeInWhenVisible direction="up" delay={0.6}>
              <div
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <a
                  href={SITE_CONTACT.phone1Tel}
                  className="flex items-center gap-2 text-xs sm:text-sm transition-colors hover:text-white"
                  style={{ color: "var(--color-text-on-dark-muted)" }}
                >
                  <PhoneIcon className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-accent)" }} aria-hidden="true" />
                  {SITE_CONTACT.phone1Display}
                </a>
                <a
                  href={SITE_CONTACT.phone2Tel}
                  className="flex items-center gap-2 text-xs sm:text-sm transition-colors hover:text-white"
                  style={{ color: "var(--color-text-on-dark-muted)" }}
                >
                  <PhoneIcon className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-accent)" }} aria-hidden="true" />
                  {SITE_CONTACT.phone2Display}
                </a>
                <a
                  href={SITE_CONTACT.emailMailto}
                  className="flex items-center gap-2 text-xs sm:text-sm transition-colors hover:text-white truncate max-w-full"
                  style={{ color: "var(--color-text-on-dark-muted)" }}
                >
                  <EnvelopeIcon className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-accent)" }} aria-hidden="true" />
                  <span className="truncate">{SITE_CONTACT.email}</span>
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-surface-primary))",
          }}
        />
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <StatsBar />
      </FadeInWhenVisible>

      {/* ─── 3D PHOTO GALLERY & PROJECTS SHOWCASE ────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <ThreeDProjectsGallery />
      </FadeInWhenVisible>

      {/* ─── COMPANY INTRO ─────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
        aria-labelledby="about-intro-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeInWhenVisible direction="right" delay={0.2}>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase font-sans mb-4"
                  style={{ color: "var(--color-brand-accent)" }}
                >
                  About RHA Builders
                </p>
                <h2
                  id="about-intro-heading"
                  className="font-sans font-extrabold mb-6 text-[#1a2b4a] text-2xl sm:text-3xl lg:text-4xl leading-tight"
                >
                  Commercial Plazas & Residential Excellence Since 2006.
                </h2>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Established in 2006 under the leadership of CEO <strong>Faryad Hussain</strong>, <strong>RHA Builders</strong> is a real estate development and construction firm operating across Lahore and Islamabad. We specialize in the construction of multi-story commercial plazas and the sale of prime commercial shops, offering flexible 3-year quarterly installment plans.
                </p>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  In addition, RHA Builders constructs custom residential houses on housing plots and offers completed, ready-to-move family houses for sale — built with structural integrity and designed to deliver lasting value.
                </p>
                <div className="flex flex-wrap gap-3">
                  <InteractiveHover scale={1.04}>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200 shadow-sm hover:shadow-md"
                      style={{
                        backgroundColor: "var(--color-brand-primary)",
                        color: "white",
                      }}
                    >
                      About RHA Builder
                      <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </InteractiveHover>
                  <InteractiveHover scale={1.04}>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-button)] border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] bg-transparent hover:bg-[var(--color-brand-primary)] hover:!text-white transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      Meet the Team
                    </Link>
                  </InteractiveHover>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Visual Image Slider */}
            <FadeInWhenVisible direction="left" delay={0.3}>
              <AboutImageSlider intervalMs={4000} />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <NetflixServicesShowcase />
      </FadeInWhenVisible>

      {/* ─── WHY RHA ───────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface-dark)" }}
        aria-labelledby="why-rha-heading"
      >
        <div className="container-site">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <SectionHeader
              eyebrow="Why RHA Builder"
              title="Our Approach to Development"
              description="What sets RHA Builder apart is not a claim — it's an approach. These are the principles we work by."
              align="center"
              onDark
              className="mx-auto mb-14"
            />
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_RHA.map((item) => (
              <StaggerItem key={item.title}>
                <InteractiveHover scale={1.02} y={-4}>
                  <div
                    className="p-7 rounded-[var(--radius-card)] border transition-all duration-200 hover:border-[var(--color-brand-accent)]/50 shadow-md"
                    style={{
                      backgroundColor: "var(--color-surface-dark-secondary)",
                      borderColor: "var(--color-border-dark)",
                    }}
                  >
                    <div
                      className="w-8 h-1 rounded-full mb-5"
                      style={{ backgroundColor: "var(--color-brand-accent)" }}
                      aria-hidden="true"
                    />
                    <h3
                      className="font-sans font-bold text-lg text-white mb-3"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-on-dark-muted)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </InteractiveHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>



      {/* ─── BLOG PREVIEW ──────────────────────────────────────── */}
      <section
        className="section-pad"
        aria-labelledby="blog-heading"
      >
        <div className="container-site">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <SectionHeader
                eyebrow="News & Insights"
                title="Latest from RHA Builder"
                description="Project updates, property insights and company news."
                id="blog-heading"
              />
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-colors hover:text-[var(--color-brand-primary)]"
                style={{ color: "var(--color-brand-secondary)" }}
              >
                View All Articles
                <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <InteractiveHover scale={1.03}>
                  <BlogCard post={post} />
                </InteractiveHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA BAND ──────────────────────────────────────────── */}
      <CTABand />

      {/* ─── LEAD FORM / GET IN TOUCH ──────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
        aria-labelledby="lead-form-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <FadeInWhenVisible direction="right" delay={0.2}>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase font-sans mb-4"
                  style={{ color: "var(--color-brand-accent)" }}
                >
                  Get in Touch
                </p>
                <h2
                  id="lead-form-heading"
                  className="font-sans font-extrabold mb-5 text-[#1a2b4a] text-2xl sm:text-3xl lg:text-4xl"
                >
                  Tell Us About Your Project
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Whether you're looking for a home, exploring an investment
                  opportunity or need a construction partner, we'd like to hear
                  from you. Complete the form and a member of our team will be
                  in touch.
                </p>
                {/* Contact cards */}
                <div className="space-y-4">
                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] border hover:border-[var(--color-brand-accent)]/50 hover:shadow-sm transition-all duration-200 group"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-brand-accent)",
                        }}
                      >
                        <MapPinIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider font-semibold font-sans"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          Corporate Head Office
                        </p>
                        <p
                          className="text-sm font-semibold group-hover:text-[var(--color-brand-secondary)] transition-colors"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {SITE_CONTACT.address}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>

                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.phoneTel}
                      className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] border hover:border-[var(--color-brand-accent)]/50 hover:shadow-sm transition-all duration-200 group"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-brand-accent)",
                        }}
                      >
                        <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider font-semibold font-sans"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          Call Us Directly
                        </p>
                        <p
                          className="text-sm font-semibold group-hover:text-[var(--color-brand-secondary)] transition-colors"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {SITE_CONTACT.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>

                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] border hover:border-[#25D366]/50 hover:shadow-sm transition-all duration-200 group"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-[#25D366]/10 text-[#25D366]"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-current" aria-hidden="true" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider font-semibold font-sans"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          WhatsApp Us
                        </p>
                        <p
                          className="text-sm font-semibold group-hover:text-[#25D366] transition-colors"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {SITE_CONTACT.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>

                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.emailMailto}
                      className="flex items-center gap-4 p-4 bg-white rounded-[var(--radius-card)] border hover:border-[var(--color-brand-accent)]/50 hover:shadow-sm transition-all duration-200 group"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-brand-accent)",
                        }}
                      >
                        <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider font-semibold font-sans"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          Email Us
                        </p>
                        <p
                          className="text-sm font-semibold group-hover:text-[var(--color-brand-secondary)] transition-colors"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {SITE_CONTACT.email}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Right: form */}
            <FadeInWhenVisible direction="left" delay={0.3}>
              <div
                className="bg-white p-8 rounded-[var(--radius-card)] border shadow-lg"
                style={{ borderColor: "var(--color-border)" }}
              >
                <LeadForm
                  title=""
                  description=""
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </>
  );
}
