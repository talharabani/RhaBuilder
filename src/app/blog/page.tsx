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
      <div className="px-3 sm:px-6 lg:px-8 py-4 lg:py-6 w-full max-w-[1600px] mx-auto">
        <section
          className="relative min-h-[45vh] flex items-center overflow-hidden rounded-3xl sm:rounded-[2rem] w-full bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          aria-label="Blog page hero"
        >
          <Image
            src="/images/blog-hero-bg.png"
            alt="RHA Builder Blog & News - Building Better Communities"
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
                    Blog & News
                  </li>
                </ol>
              </nav>
              <h1 className="font-figtree font-bold text-[#1a2b4a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5">
                Blog & News
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                Project updates, property insights and company news from the RHA Builder team.
              </p>
            </div>
          </div>
        </section>
      </div>

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
