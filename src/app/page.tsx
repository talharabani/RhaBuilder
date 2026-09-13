import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  ChevronRightIcon,
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
import { HeroCarouselBackground } from "@/components/sections/HeroCarouselBackground";
import { HeroHeading } from "@/components/sections/HeroHeading";
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
    bgImage: "/images/projects/ansa-tower-int.jpg",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear, regular communication with clients, occupiers and investors throughout the development process.",
    bgImage: "/images/projects/bahria-town-p7-int.jpg",
  },
  {
    title: "Practical Planning",
    description:
      "Schemes designed to work in practice — for the people who live and work in them, and for those who invest in them.",
    bgImage: "/images/projects/f10-markaz-int.jpg",
  },
  {
    title: "Residential & Commercial Capability",
    description:
      "Experience across residential and commercial development, with the ability to deliver mixed-use schemes.",
    bgImage: "/images/projects/federation-society-int.jpg",
  },
  {
    title: "End-to-End Coordination",
    description:
      "We coordinate design, planning, construction and handover — providing clients with continuity and accountability.",
    bgImage: "/images/projects/g11-markaz-int.jpg",
  },
  {
    title: "Experienced Professionals",
    description:
      "A team with broad experience across the development and construction disciplines needed to deliver complex projects.",
    bgImage: "/images/projects/pakistani-town-p1-int.jpg",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const services = getFeaturedServices().slice(0, 6);
  const blogPosts = getLatestBlogPosts(3);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[50vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] shadow-2xl w-full"
          style={{ backgroundColor: "var(--color-surface-dark)" }}
          aria-label="Hero"
        >
        {/* Background — Image Carousel + gradient overlay */}
        <HeroCarouselBackground />

        <div className="w-full relative z-10 py-12 sm:py-16 lg:py-20 px-6 sm:px-12 md:pl-[3rem] md:pr-[2rem]">
          <div className="max-w-3xl text-left">
            {/* Eyebrow */}
            <FadeInWhenVisible direction="down" delay={0.1}>
              <p
                className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5 font-sans"
                style={{ color: "var(--color-brand-accent)" }}
              >
                Real Estate Development & Construction
              </p>
            </FadeInWhenVisible>

            {/* H1 */}
            <HeroHeading />

            {/* Subheading */}
            <FadeInWhenVisible direction="up" delay={0.4}>
              <p
                className="hidden sm:block text-sm sm:text-base leading-relaxed mb-5 sm:mb-7 max-w-xl font-sans text-slate-600 text-left"
              >
                Delivering excellence in commercial plazas and premium residential homes. <br className="hidden sm:block" />
                We build spaces designed for structural integrity and lasting value.
              </p>
            </FadeInWhenVisible>

            {/* CTAs */}
            <FadeInWhenVisible direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <InteractiveHover scale={1.03}>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold rounded-xl group btn-hero-primary shadow-md"
                  >
                    Explore Projects
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </InteractiveHover>
                <InteractiveHover scale={1.03}>
                  <Link
                    href="/contact"
                    style={{ borderColor: '#0052cc', color: '#0052cc' }}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold rounded-xl group border-2 bg-transparent hover:bg-[#0052cc] hover:!text-white transition-colors"
                  >
                    Discuss a Project
                  </Link>
                </InteractiveHover>
              </div>
            </FadeInWhenVisible>

            {/* Contact strip */}
            <FadeInWhenVisible direction="up" delay={0.6}>
              <div
                className="inline-flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t w-fit pr-10"
                style={{ borderColor: "rgba(0,0,0,0.4)" }}
              >
                <a
                  href={SITE_CONTACT.phone1Tel}
                  className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#333333] transition-colors hover:text-[#0052cc]"
                >
                  <PhoneIcon className="w-5 h-5 shrink-0 text-[#0052cc]" aria-hidden="true" />
                  {SITE_CONTACT.phone1Display}
                </a>
                <a
                  href={SITE_CONTACT.phone2Tel}
                  className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#333333] transition-colors hover:text-[#0052cc]"
                >
                  <PhoneIcon className="w-5 h-5 shrink-0 text-[#0052cc]" aria-hidden="true" />
                  {SITE_CONTACT.phone2Display}
                </a>
                <a
                  href={SITE_CONTACT.emailMailto}
                  className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#333333] transition-colors hover:text-[#0052cc] truncate max-w-full"
                >
                  <EnvelopeIcon className="w-5 h-5 shrink-0 text-[#0052cc]" aria-hidden="true" />
                  <span className="truncate">{SITE_CONTACT.email}</span>
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
      </div>

      {/* ─── STATS BAR ─────────────────────────────────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <StatsBar />
      </FadeInWhenVisible>

      {/* ─── 3D PHOTO GALLERY & PROJECTS SHOWCASE ────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <ThreeDProjectsGallery />
      </FadeInWhenVisible>

      {/* ─── COMPANY VIDEO SHOWCASE ─────────────────────────────── */}
      <section
        className="pt-0 pb-12 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="about-intro-heading"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <div className="mb-10 max-w-4xl px-8">
              <h2
                className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans"
              >
                About RHA Builders
              </h2>
              <h3
                id="about-intro-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4a] tracking-tight leading-[1.1] font-sans"
              >
                Commercial Plazas &amp; Residential <br className="hidden sm:block" />Excellence Since 2006.
              </h3>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="up" delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950" style={{ height: '620px', maxHeight: '620px' }}>
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/images/IMG_0716.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Dark Gradient Overlay (Inline to guarantee rendering) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 5
                }}
              />
              
              {/* Text Overlay */}
              <div 
                className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-end"
                style={{ zIndex: 10 }}
              >
                <p 
                  className="max-w-4xl leading-relaxed"
                  style={{ 
                    color: '#ffffff', 
                    fontSize: '0.875rem', 
                    fontWeight: 400, 
                    textShadow: '0 2px 10px rgba(0,0,0,1)' 
                  }}
                >
                  Established in 2006 under the leadership of CEO <strong>Faryad Hussain</strong>, <strong>RHA Builders</strong> is a real estate development and construction firm operating across Lahore and Islamabad. We specialize in the construction of multi-story commercial plazas and the sale of prime commercial shops, offering flexible 3-year quarterly installment plans.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────── */}
      <FadeInWhenVisible direction="up" delay={0.1}>
        <NetflixServicesShowcase />
      </FadeInWhenVisible>

      {/* ─── WHY RHA ───────────────────────────────────────────── */}
      <section
        className="pt-4 pb-12 md:pt-8 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="why-rha-heading"
      >

        <div className="w-full max-w-[1600px] mx-auto px-8">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <div className="mb-14 max-w-4xl">
              <h2
                className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans"
              >
                Why RHA Builder
              </h2>
              <h3
                id="why-rha-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4a] tracking-tight leading-[1.1] font-sans"
              >
                Our Approach to <br className="hidden sm:block" />Development.
              </h3>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {WHY_RHA.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <InteractiveHover scale={1.02} y={-4} className="h-full">
                  <div
                    className="rha-card p-3 bg-white border border-slate-200 hover:border-[#0052cc] shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] group flex flex-col h-full"
                    style={{ borderRadius: '1.75rem' }}
                  >
                    {/* Top Image */}
                    <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-slate-100 z-10" style={{ borderRadius: '1.25rem' }}>
                      <Image
                        src={item.bgImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                      {/* Bottom Text Content */}
                    <div className="pt-4 px-3 pb-3 flex flex-col flex-1 relative z-10 justify-between">
                      <div>
                        <h3 className="font-sans font-extrabold text-base text-[#0b1b3d] group-hover:text-white transition-colors duration-300 leading-snug mb-1.5 pr-4 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-500 group-hover:text-white transition-colors duration-300 pr-6">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Arrow Icon at bottom right */}
                      <div className="absolute bottom-1 right-1 text-[#0052cc] group-hover:text-white transition-colors duration-300">
                        <ChevronRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </InteractiveHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>



      {/* ─── BLOG PREVIEW ──────────────────────────────────────── */}
      <section
        className="pt-4 pb-12 md:pt-8 md:pb-20 px-3 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="blog-heading"
      >
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <FadeInWhenVisible direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 max-w-full">
              <div className="max-w-4xl">
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#0052cc] mb-3 font-sans">
                  News & Insights
                </h2>
                <h3 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b4a] tracking-tight leading-[1.1] font-sans mb-4">
                  Latest from RHA Builder.
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 max-w-xl">
                  Project updates, property insights and company news.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold shrink-0 transition-all text-[#0052cc] hover:gap-3"
              >
                View All Articles
                <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <InteractiveHover scale={1.03} className="h-full">
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
        className="px-3 sm:px-6 lg:px-8"
        style={{ paddingTop: '4rem', paddingBottom: '6rem', backgroundColor: '#eef5ff' }}
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
                      className="rha-card flex items-center gap-5 p-5 bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                      style={{ borderRadius: '1.5rem' }}
                    >
                      <div className="flex items-center justify-center shrink-0 text-[#0052cc] group-hover:text-white transition-colors duration-300">
                        <MapPinIcon className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold font-sans text-[#0052cc]/70 group-hover:text-white/80 transition-colors duration-300 mb-0.5">
                          Corporate Head Office
                        </p>
                        <p className="text-[15px] font-bold text-[#1a2b4a] group-hover:text-white transition-colors duration-300 leading-snug">
                          {SITE_CONTACT.address}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>

                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.phoneTel}
                      className="rha-card flex items-center gap-5 p-5 bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                      style={{ borderRadius: '1.5rem' }}
                    >
                      <div className="flex items-center justify-center shrink-0 text-[#0052cc] group-hover:text-white transition-colors duration-300">
                        <PhoneIcon className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold font-sans text-[#0052cc]/70 group-hover:text-white/80 transition-colors duration-300 mb-0.5">
                          Call Us Directly
                        </p>
                        <p className="text-[15px] font-bold text-[#1a2b4a] group-hover:text-white transition-colors duration-300 leading-snug">
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
                      className="rha-card flex items-center gap-5 p-5 bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                      style={{ borderRadius: '1.5rem' }}
                    >
                      <div className="flex items-center justify-center shrink-0 text-[#0052cc] group-hover:text-white transition-colors duration-300">
                        <WhatsAppIcon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold font-sans text-[#0052cc]/70 group-hover:text-white/80 transition-colors duration-300 mb-0.5">
                          WhatsApp Us
                        </p>
                        <p className="text-[15px] font-bold text-[#1a2b4a] group-hover:text-white transition-colors duration-300 leading-snug">
                          {SITE_CONTACT.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </InteractiveHover>

                  <InteractiveHover scale={1.02}>
                    <a
                      href={SITE_CONTACT.emailMailto}
                      className="rha-card flex items-center gap-5 p-5 bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                      style={{ borderRadius: '1.5rem' }}
                    >
                      <div className="flex items-center justify-center shrink-0 text-[#0052cc] group-hover:text-white transition-colors duration-300">
                        <EnvelopeIcon className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold font-sans text-[#0052cc]/70 group-hover:text-white/80 transition-colors duration-300 mb-0.5">
                          Email Us
                        </p>
                        <p className="text-[15px] font-bold text-[#1a2b4a] group-hover:text-white transition-colors duration-300 leading-snug">
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
                className="bg-white p-8 sm:p-10 border border-slate-200 shadow-[0_8px_32px_rgba(0,82,204,0.06)]"
                style={{ borderRadius: '2rem' }}
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
