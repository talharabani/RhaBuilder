import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="group bg-white hover:bg-[var(--color-brand-primary)] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-brand-accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
      aria-label={`Service: ${service.title}`}
    >
      <div>
        {/* Service Hero Image */}
        {service.heroImage && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[var(--color-surface-secondary)]">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-7">
          {/* Title */}
          <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-white transition-colors duration-300">
            <Link
              href={`/services/${service.slug}`}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-accent)] rounded relative"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {service.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] group-hover:text-white/80 transition-colors duration-300 leading-relaxed flex-1 line-clamp-4">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-7 pb-7 pt-4 border-t border-[var(--color-border)] group-hover:border-white/10 flex items-center justify-between text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
        <span>Learn More</span>
        <ArrowRightIcon
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
