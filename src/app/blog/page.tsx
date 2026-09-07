import type { Metadata } from "next";
import Image from "next/image";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts, blogCategories, getFeaturedBlogPost } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog & News | RHA Builder Property & Construction Insights",
  description:
    "Project updates, property insights, construction news and company announcements from RHA Builder.",
  alternates: { canonical: "https://rhabuilder.com/blog" },
};

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost();
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "450px", backgroundColor: "var(--color-surface-dark)" }}
        aria-label="Blog page hero"
      >
        <Image
          src="/images/blog-hero-bg.png"
          alt="RHA Builder Blog & News - Building Better Communities"
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
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs font-sans text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-brand-accent)" }}>Blog & News</li>
            </ol>
          </nav>
          <h1 className="font-display font-semibold text-white drop-shadow-md" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}>
            Blog & News
          </h1>
          <p className="mt-4 text-lg max-w-xl text-white/90 drop-shadow">
            Project updates, property insights and company news from the RHA Builder team.
          </p>
        </div>
      </section>

      <section className="section-pad" aria-label="Blog articles">
        <div className="container-site">
          {/* Featured post */}
          {featuredPost && (
            <div className="mb-12">
              <h2 className="sr-only">Featured Article</h2>
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {/* Regular posts */}
          {regularPosts.length > 0 && (
            <>
              <h2
                className="font-display font-semibold text-2xl mb-8"
                style={{ color: "var(--color-text-primary)" }}
              >
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}

          {blogPosts.length === 0 && (
            <div
              className="text-center py-20 rounded-[var(--radius-card)] border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p className="text-lg font-display font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                No Articles Yet
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Articles will appear here once published in the CMS.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
