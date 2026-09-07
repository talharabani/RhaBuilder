"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  KeyIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { services, Service } from "@/lib/data/services";

// Helper to map icon string to Heroicon component
function getServiceIcon(iconName: string, active: boolean = false) {
  const iconClass = `w-5 h-5 transition-colors duration-200 ${
    active ? "text-[var(--color-brand-accent)]" : "text-slate-500 group-hover:text-[var(--color-brand-accent)]"
  }`;
  switch (iconName) {
    case "building-storefront":
      return <BuildingStorefrontIcon className={iconClass} />;
    case "home":
      return <HomeIcon className={iconClass} />;
    case "clipboard-document-check":
      return <ClipboardDocumentCheckIcon className={iconClass} />;
    case "pencil-square":
      return <PencilSquareIcon className={iconClass} />;
    case "key":
      return <KeyIcon className={iconClass} />;
    default:
      return <BuildingOfficeIcon className={iconClass} />;
  }
}

export function NetflixServicesShowcase() {
  const [activeSlug, setActiveSlug] = useState<string>(services[0]?.slug || "");
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = services.filter((s) => {
    if (filter === "commercial") return s.slug.includes("commercial");
    if (filter === "residential") return s.slug.includes("residential");
    if (filter === "management") return s.slug.includes("management") || s.slug.includes("consultation") || s.slug.includes("design");
    return true;
  });

  const activeIndex = services.findIndex((s) => s.slug === activeSlug);
  const activeService: Service = services[activeIndex >= 0 ? activeIndex : 0] || services[0];

  return (
    <section className="section-pad relative overflow-hidden bg-white" aria-label="Services Showcase">
      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] mb-3">
              <SparklesIcon className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wider uppercase font-sans">
                Our Core Services & Capabilities
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              End-to-End Real Estate & Construction
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl font-sans leading-relaxed">
              From commercial plaza construction and shop sales with 3-year installment plans to luxury residential builds and turnkey advisory.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {[
              { id: "all", label: "All Services" },
              { id: "commercial", label: "Commercial Plazas" },
              { id: "residential", label: "Residential" },
              { id: "management", label: "Advisory & Mgmt" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-white text-[var(--color-brand-accent)] shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Split Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Service Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {filteredServices.map((service) => {
              const isActive = service.slug === activeService.slug;
              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveSlug(service.slug)}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  className={`group relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                    isActive
                      ? "bg-slate-50 border-[var(--color-brand-accent)] shadow-sm ring-1 ring-[var(--color-brand-accent)]/30"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-[var(--color-brand-accent)] rounded-r-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-1.5 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-[var(--color-brand-accent)]/15 border border-[var(--color-brand-accent)]/30"
                          : "bg-slate-100 border border-slate-200/60 group-hover:bg-slate-200/60"
                      }`}
                    >
                      {getServiceIcon(service.icon, isActive)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-sans font-bold text-xs sm:text-sm truncate leading-snug transition-colors ${
                            isActive ? "text-[var(--color-brand-accent)]" : "text-slate-900 group-hover:text-[var(--color-brand-accent)]"
                          }`}
                        >
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                            Spotlight
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate font-sans mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ChevronRightIcon
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isActive ? "text-[var(--color-brand-accent)] translate-x-0.5" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Feature Spotlight Display Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Service Hero Image Header */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
                    <Image
                      src={activeService.heroImage || "/images/services/commercial-development.jpg"}
                      alt={activeService.title}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1200px) 100vw, 650px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    {/* Floating Top Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                      {getServiceIcon(activeService.icon, true)}
                      <span className="truncate max-w-[240px]">{activeService.title}</span>
                    </div>
                  </div>

                  {/* Service Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans leading-tight">
                        {activeService.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {activeService.fullDescription}
                      </p>

                      {/* Key Highlights / Benefits */}
                      {activeService.benefits && activeService.benefits.length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-accent)] font-sans mb-2">
                            Key Deliverables & Specifications
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {activeService.benefits.slice(0, 4).map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                                <CheckCircleIcon className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA Bar inside Spotlight Card */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        href={`/services/${activeService.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-brand-accent)] text-white text-xs font-bold shadow-md hover:bg-blue-700 transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        <span>{activeService.ctaLabel}</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}