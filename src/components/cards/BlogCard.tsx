import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article
        className="group grid md:grid-cols-2 gap-0 bg-white rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
        aria-label={`Featured article: ${post.title}`}
      >
        {/* Image */}
        <div
          className="relative min-h-[260px] md:min-h-0 overflow-hidden bg-[var(--color-surface-dark)]"
        >
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.coverImageAlt || post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div
              className="w-full h-full min-h-[260px] flex items-center justify-center text-white/30 text-sm font-sans"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
              }}
            >
              [Featured Image]
            </div>
          )}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wide shadow-sm">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          {post.categories.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-accent)] mb-3">
              {post.categories[0]}
            </p>
          )}
          <h3 className="font-display font-semibold text-2xl text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-[var(--color-brand-secondary)] transition-colors">
            <Link
              href={`/blog/${post.slug}`}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-accent)] rounded"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readingTime}
                </span>
              )}
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-primary)] transition-colors">
              Read Article
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="group bg-white rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 flex flex-col"
      aria-label={`Article: ${post.title}`}
    >
      {/* Image */}
      <div
        className="relative aspect-[16/9] overflow-hidden bg-[var(--color-surface-dark)]"
      >
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white/30 text-sm font-sans"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
            }}
          >
            [Article Image]
          </div>
        )}
        {post.categories.length > 0 && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded uppercase tracking-wide backdrop-blur-sm">
              {post.categories[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.readingTime && <span>· {post.readingTime}</span>}
        </div>
        <h3 className="font-display font-semibold text-lg text-[var(--color-text-primary)] mb-2 leading-snug group-hover:text-[var(--color-brand-secondary)] transition-colors flex-1">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-accent)] rounded relative"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-primary)] transition-colors">
          Read Article
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}
