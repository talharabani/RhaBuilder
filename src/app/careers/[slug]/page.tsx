import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { getJobBySlug } from "@/lib/data/careers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers at RHA Builders`,
    description: job.summary,
    alternates: { canonical: `https://rhabuilder.com/careers/${slug}` },
    robots: job.active ? { index: true, follow: true } : { index: false },
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job || !job.active) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "340px", backgroundColor: "var(--color-surface-dark)" }}
        aria-label={`${job.title} vacancy header`}
      >
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 40% 60%, var(--color-brand-secondary) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-site relative z-10 pb-12 pt-36">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-sans" style={{ color: "var(--color-text-on-dark-muted)" }}>
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>{job.title}</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded" style={{ backgroundColor: "var(--color-brand-accent)", color: "var(--color-brand-primary)" }}>
              {job.department}
            </span>
            <span className="text-sm" style={{ color: "var(--color-text-on-dark-muted)" }}>
              {job.location} · <span className="capitalize">{job.employmentType.replace("-", " ")}</span>
            </span>
          </div>
          <h1 className="font-display font-semibold text-white max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {job.title}
          </h1>
          {job.closingDate && (
            <p className="mt-3 text-sm" style={{ color: "var(--color-text-on-dark-muted)" }}>
              Closing date: {job.closingDate}
            </p>
          )}
        </div>
      </section>

      {/* Job content */}
      <section className="section-pad" aria-labelledby="job-details-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <h2 id="job-details-heading" className="font-display font-semibold text-2xl mb-5" style={{ color: "var(--color-text-primary)" }}>
                Role Overview
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text-muted)" }}>
                {job.summary}
              </p>

              <h3 className="font-display font-semibold text-xl mb-4" style={{ color: "var(--color-text-primary)" }}>
                Key Responsibilities
              </h3>
              <ul role="list" className="space-y-3 mb-10">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <CheckCircleIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--color-brand-accent)" }} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-xl mb-4" style={{ color: "var(--color-text-primary)" }}>
                Requirements
              </h3>
              <ul role="list" className="space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: "var(--color-brand-primary)" }} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <aside>
              <div className="p-6 rounded-[var(--radius-card)] border sticky top-24" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-secondary)" }}>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "var(--color-text-primary)" }}>
                  Apply Now
                </h3>
                <p className="text-sm mb-5" style={{ color: "var(--color-text-muted)" }}>
                  To apply for this role, please send your CV and a short cover note to:
                </p>
                <a
                  href={`mailto:${job.applicationEmail}?subject=Application — ${job.title}`}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200"
                  style={{ backgroundColor: "var(--color-brand-primary)", color: "white" }}
                >
                  Apply by Email
                </a>
                <p className="mt-4 text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
                  {job.applicationEmail}
                </p>
                {job.closingDate && (
                  <p className="mt-3 text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
                    Applications close: {job.closingDate}
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
