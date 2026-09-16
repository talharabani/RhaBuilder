import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { getActiveJobs } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers | RHA Builders — Join Our Team",
  description:
    "Explore career opportunities at RHA Builders. We are always looking for talented professionals across real estate development, construction and commercial management.",
  alternates: { canonical: "https://rhabuilder.com/careers" },
};

const BENEFITS = [
  { title: "Varied Projects", description: "Work across residential and commercial developments of different scale and complexity." },
  { title: "Collaborative Environment", description: "A team-focused culture where people are encouraged to take ownership and contribute ideas." },
  { title: "Professional Development", description: "Support for professional qualifications and continuing development in your discipline." },
  { title: "Stable Organisation", description: "A company with an established project pipeline and a clear direction." },
];

export default function CareersPage() {
  const jobs = getActiveJobs();

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "400px", backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Careers page hero"
      >
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 60%, var(--color-brand-secondary) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 pb-14 pt-36">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-sans" style={{ color: "var(--color-text-on-dark-muted)" }}>
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>Careers</li>
            </ol>
          </nav>
          <h1 className="font-display font-semibold text-white max-w-2xl" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
            Build Your Career With RHA Builders
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--color-text-on-dark-muted)" }}>
            We are looking for talented professionals to join our growing development and construction team.
          </p>
        </div>
      </section>

      {/* Employer proposition */}
      <section className="section-pad" aria-labelledby="why-rha-careers-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Join Us"
                title="Why Work at RHA Builders"
                id="why-rha-careers-heading"
              />
              <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                At RHA Builders, we work on meaningful projects that require real expertise and create places that people use every day. Our team is collaborative, experienced and committed to delivering high-quality work.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We support our people in developing their careers and provide a stable, project-driven environment where good work is recognised.
              </p>
              <p className="mt-4 text-xs italic" style={{ color: "var(--color-text-muted)" }}>
                [Employer value proposition content to be confirmed with RHA Builders HR team]
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BENEFITS.map((b) => (
                <div key={b.title} className="p-5 rounded-[var(--radius-card)] border bg-white" style={{ borderColor: "var(--color-border)" }}>
                  <CheckCircleIcon className="w-5 h-5 mb-3" style={{ color: "var(--color-brand-accent)" }} aria-hidden="true" />
                  <h3 className="font-semibold font-sans text-sm mb-1" style={{ color: "var(--color-text-primary)" }}>
                    {b.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
        aria-labelledby="vacancies-heading"
      >
        <div className="container-site">
          <SectionHeader
            eyebrow="Opportunities"
            title="Open Positions"
            className="mb-10"
            id="vacancies-heading"
          />

          {jobs.length > 0 ? (
            <ul role="list" className="space-y-5">
              {jobs.map((job) => (
                <li key={job.slug}>
                  <article
                    className="bg-white rounded-[var(--radius-card)] border p-6 hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-200"
                    style={{ borderColor: "var(--color-border)" }}
                    aria-label={`Job vacancy: ${job.title}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-xl mb-1" style={{ color: "var(--color-text-primary)" }}>
                          <Link
                            href={`/careers/${job.slug}`}
                            className="hover:text-[var(--color-brand-secondary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brand-accent)] rounded"
                          >
                            {job.title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>
                          <span>{job.department}</span>
                          <span aria-hidden="true">·</span>
                          <span>{job.location}</span>
                          <span aria-hidden="true">·</span>
                          <span className="capitalize">{job.employmentType.replace("-", " ")}</span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                          {job.summary}
                        </p>
                      </div>
                      <Link
                        href={`/careers/${job.slug}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-[var(--radius-button)] shrink-0 transition-all duration-200"
                        style={{ backgroundColor: "var(--color-brand-primary)", color: "white" }}
                        aria-label={`View details for ${job.title}`}
                      >
                        View Role
                        <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="text-center py-16 rounded-[var(--radius-card)] border bg-white"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p className="font-display font-semibold text-xl mb-2" style={{ color: "var(--color-text-primary)" }}>
                No Current Vacancies
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
                We don&rsquo;t have any open positions right now, but we are always interested in hearing from talented professionals.
              </p>
              <a
                href="mailto:rhabuilder.pk@gmail.com?subject=Speculative%20Application%20—%20RHA%20Builder"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-button)]"
                style={{ backgroundColor: "var(--color-brand-primary)", color: "white" }}
              >
                Send Speculative CV (rhabuilder.pk@gmail.com)
              </a>
            </div>
          )}
        </div>
      </section>

      <CTABand
        title="Not Ready to Apply Yet?"
        description="Find out more about RHA Builders and our current project portfolio."
        primaryLabel="About RHA Builders"
        primaryHref="/about"
        secondaryLabel="View Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
