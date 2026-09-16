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
    <div className="w-full p-8 md:p-12 lg:p-[4.5rem]" style={{ backgroundColor: '#e6f0fa', borderRadius: '2.5rem' }}>
      {/* Step Navigation Tabs */}
      <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-x-visible gap-2 sm:gap-3 mb-10 md:mb-14 border-b border-[#0052cc]/10 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {PROCESS_STEPS.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`shrink-0 whitespace-nowrap px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 relative ${
                isActive
                  ? "bg-white text-[#0052cc] font-bold shadow-sm border border-[#0052cc]/10 scale-105"
                  : "bg-transparent text-slate-500 font-medium hover:bg-white/50 hover:text-slate-800"
              }`}
            >
              <span className="font-sans text-[10px] sm:text-base">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text & Content Column */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-sans text-[#0052cc]">
                Standardized Delivery Framework
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b1b3d] leading-[1.15] tracking-tight font-sans mb-3">
              {activeStep.title}
            </h3>
            <p className="text-sm md:text-base font-bold text-[#0052cc] mb-6 font-sans">
              {activeStep.subtitle}
            </p>

            <p className="text-slate-500 leading-relaxed font-sans text-sm md:text-base mb-8">
              {activeStep.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 mb-10">
              {activeStep.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm md:text-base">
                  <CheckCircleIcon className="w-6 h-6 text-[#0052cc] shrink-0" />
                  <span className="text-slate-700 font-medium font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Highlight Footer */}
          <div className="pt-8 border-t border-[#0052cc]/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-sans tracking-wide uppercase font-semibold mb-1">
                {activeStep.metricLabel}
              </p>
              <p className="text-2xl md:text-3xl font-sans font-black text-[#0b1b3d]">
                {activeStep.metricValue}
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[#0052cc] text-sm md:text-base font-bold font-sans hover:gap-3 transition-all"
            >
              Discuss Your Project
              <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 h-full min-h-[400px] lg:min-h-[550px] relative overflow-hidden" style={{ borderRadius: '1.5rem' }}>
          <Image
            src={activeStep.image}
            alt={activeStep.imageAlt}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
