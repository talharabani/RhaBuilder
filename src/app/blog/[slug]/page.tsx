import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { CTABand } from "@/components/sections/CTABand";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { getBlogPostBySlug, blogPosts } from "@/lib/data/blog";
import { getProjectBySlug } from "@/lib/data/projects";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | RHA Builders`,
    description: post.excerpt,
    alternates: { canonical: `https://rhabuilder.com/blog/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedProjects = (post.relatedProjectSlugs ?? [])
    .map(getProjectBySlug)
    .filter(Boolean)
    .slice(0, 2);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "8rem", paddingBottom: "4rem", backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Article header"
      >
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 60%, var(--color-brand-secondary) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="container-narrow relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-sans" style={{ color: "var(--color-text-on-dark-muted)" }}>
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>{post.title}</li>
            </ol>
          </nav>

          {/* Category */}
          {post.categories.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-widest font-sans mb-4" style={{ color: "var(--color-brand-accent)" }}>
              {post.categories[0]}
            </p>
          )}

          {/* Title */}
          <h1 className="font-display font-semibold text-white mb-5" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--color-text-on-dark-muted)" }}>
            <span className="flex items-center gap-1.5">
              <span className="font-medium text-white">{post.author}</span>
              {post.authorRole && <span>· {post.authorRole}</span>}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4" aria-hidden="true" />
                {post.readingTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="w-full bg-[var(--color-surface-dark)] border-b border-[var(--color-border)]">
        <div className="container-site py-6">
          <div className="relative w-full h-[320px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-white/30 text-sm font-sans"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
                }}
              >
                [Article Cover Image]
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="section-pad" aria-label={`Article: ${post.title}`}>
        <div className="container-narrow">
          <div
            className="prose-rha"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Disclaimer */}
          <div
            className="mt-10 pt-8 border-t text-xs italic"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
          >
            This article is for general information purposes only and does not constitute financial, legal or investment advice.
          </div>
        </div>
      </article>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section
          className="section-pad"
          style={{ backgroundColor: "var(--color-surface-secondary)" }}
          aria-labelledby="related-projects-heading"
        >
          <div className="container-site">
            <h2 id="related-projects-heading" className="font-display font-semibold text-2xl mb-8" style={{ color: "var(--color-text-primary)" }}>
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.filter(Boolean).map((p) => p && <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-pad" aria-labelledby="related-articles-heading">
          <div className="container-site">
            <h2 id="related-articles-heading" className="font-display font-semibold text-2xl mb-8" style={{ color: "var(--color-text-primary)" }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "RHA Builders" },
            url: `https://rhabuilder.com/blog/${post.slug}`,
          }),
        }}
      />

      <CTABand
        title="Explore RHA Builders Projects"
        description="See the full portfolio of residential and commercial developments."
        primaryLabel="View All Projects"
        primaryHref="/projects"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
