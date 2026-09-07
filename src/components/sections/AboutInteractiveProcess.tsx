"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface ProcessStep {
  id: string;
  stepNumber: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
  imageAlt: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "feasibility",
    stepNumber: "01",
    title: "Planning & Feasibility",
    subtitle: "Strategic Location & Environmental Studies",
    description:
      "We evaluate geographic suitability, legal clearings, structural soil mechanics, and urban connectivity before ground-breaking, ensuring long-term investment security.",
    highlights: [
      "Rigorous environmental and zoning impact audits",
      "Financial yield and market demand modeling",
      "Full regulatory and municipal approval clearance",
    ],
    metricLabel: "Due Diligence Audit Pass",
    metricValue: "100%",
    image: "/images/about/about-story-engineering.jpg",
    imageAlt: "RHA Builder engineering team conducting site planning and 3D BIM model review",
  },
  {
    id: "engineering",
    stepNumber: "02",
    title: "Architectural & BIM Engineering",
    subtitle: "3D Virtual Modeling & Low-Carbon Specification",
    description:
      "Our architects and structural engineers collaborate using Level-2 BIM workflows to optimize floor plates, thermal efficiency, and natural light penetration.",
    highlights: [
      "Clash detection between MEP and structural frameworks",
      "Low-carbon concrete & energy-efficient facade selection",
      "Smart microgrid & HVAC integration modeling",
    ],
    metricLabel: "Design Accuracy Rate",
    metricValue: "99.8%",
    image: "/images/about/about-hero-architecture.jpg",
    imageAlt: "3D Architectural skyscraper tower designed by RHA Builder",
  },
  {
    id: "construction",
    stepNumber: "03",
    title: "Precision Construction",
    subtitle: "On-Site Rigor & Quality Management",
    description:
      "Execution is overseen by certified site directors enforcing stringent ISO safety standards, scheduled milestone audits, and real-time client reporting dashboards.",
    highlights: [
      "Daily site safety and structural testing protocols",
      "Transparent client milestone progress tracking",
      "Premium material sourcing & supply chain oversight",
    ],
    metricLabel: "Safety Compliance",
    metricValue: "Zero Incidents",
    image: "/images/about/about-construction-site.jpg",
    imageAlt: "RHA Builder active commercial construction site with tower cranes and steel frame",
  },
  {
    id: "handover",
    stepNumber: "04",
    title: "Handover & Warranty Support",
    subtitle: "Seamless Completion & Long-Term Care",
    description:
      "Every residence and commercial unit undergoes multi-point quality snagging prior to formal handover, accompanied by full warranty coverage and facility guidance.",
    highlights: [
      "Comprehensive 100-point pre-handover inspection",
      "Post-occupancy warranty & facility management care",
      "Dedicated resident and investor support helpline",
    ],
    metricLabel: "Client Satisfaction",
    metricValue: "98.5%",
    image: "/images/about/about-craftsmanship-finish.jpg",
    imageAlt: "Completed luxury interior finish by RHA Builder",
  },
];

export function AboutInteractiveProcess() {
  const [activeStepId, setActiveStepId] = useState<string>("feasibility");

  const activeStep =
    PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  return (
    <div className="w-full">
      {/* Step Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {PROCESS_STEPS.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`p-4 text-left rounded-xl border transition-all duration-300 relative group overflow-hidden ${
                isActive
                  ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-lg scale-[1.02]"
                  : "bg-white text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[var(--color-brand-accent)] hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-end mb-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isActive
                      ? "bg-[var(--color-brand-accent)] animate-pulse"
                      : "bg-slate-300"
                  }`}
                />
              </div>
              <h3
                className={`font-display font-semibold text-sm line-clamp-1 ${
                  isActive ? "text-white" : "text-[var(--color-text-primary)]"
                }`}
              >
                {step.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Stage Card Detail */}
      <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
        {/* Text & Content Column */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[var(--color-brand-secondary)]">
                Standardized Delivery Framework
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-2">
              {activeStep.title}
            </h3>
            <p className="text-sm font-medium text-[var(--color-brand-secondary)] mb-6">
              {activeStep.subtitle}
            </p>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              {activeStep.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8">
              {activeStep.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-[var(--color-brand-secondary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlight Footer */}
          <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-muted)] font-sans">
                {activeStep.metricLabel}
              </p>
              <p className="text-xl font-display font-bold text-[var(--color-brand-primary)]">
                {activeStep.metricValue}
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-secondary)] hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Discuss Your Project
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[var(--color-surface-dark)]">
          <Image
            src={activeStep.image}
            alt={activeStep.imageAlt}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-sans bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
            <span className="font-semibold block text-[var(--color-brand-accent)]">
              RHA Standards Benchmark
            </span>
            {activeStep.imageAlt}
          </div>
        </div>
      </div>
    </div>
  );
}
