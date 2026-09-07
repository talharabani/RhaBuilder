"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { filterProjects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const TYPE_FILTERS = [
  { value: "all", label: "All Types" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
];

const STATUS_FILTERS = [
  { value: "all", label: "All Status" },
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
];

export default function ProjectsClient({
  initialType,
  initialStatus,
}: {
  initialType: string;
  initialStatus: string;
}) {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(initialType || "all");
  const [selectedStatus, setSelectedStatus] = useState(initialStatus || "all");

  const filteredProjects = filterProjects(
    selectedType === "all" ? null : selectedType,
    selectedStatus === "all" ? null : selectedStatus
  );

  const updateURL = useCallback(
    (type: string, status: string) => {
      const params = new URLSearchParams();
      if (type !== "all") params.set("type", type);
      if (status !== "all") params.set("status", status);
      const query = params.toString();
      router.push(query ? `/projects?${query}` : "/projects", { scroll: false });
    },
    [router]
  );

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    updateURL(type, selectedStatus);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    updateURL(selectedType, status);
  };

  const filterBtnClass = (active: boolean) =>
    cn(
      "px-4 py-2 text-sm font-medium rounded-[var(--radius-button)] border transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brand-accent)]",
      active
        ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]"
        : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-brand-primary)]/50 hover:text-[var(--color-brand-primary)]"
    );

  return (
    <>
      {/* ─── Filters ───────────────────────────────────────── */}
      <div
        className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b py-4"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="container-site">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Filter groups */}
            <div className="flex flex-wrap gap-4">
              {/* Type */}
              <fieldset>
                <legend className="sr-only">Filter by project type</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Project type">
                  {TYPE_FILTERS.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => handleTypeChange(f.value)}
                      aria-pressed={selectedType === f.value}
                      className={filterBtnClass(selectedType === f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div
                className="hidden sm:block w-px self-stretch"
                style={{ backgroundColor: "var(--color-border)" }}
                aria-hidden="true"
              />

              {/* Status */}
              <fieldset>
                <legend className="sr-only">Filter by project status</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Project status">
                  {STATUS_FILTERS.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => handleStatusChange(f.value)}
                      aria-pressed={selectedStatus === f.value}
                      className={filterBtnClass(selectedStatus === f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Result count */}
            <p
              className="text-sm shrink-0"
              style={{ color: "var(--color-text-muted)" }}
              aria-live="polite"
              aria-atomic="true"
            >
              {filteredProjects.length === 1
                ? "1 project"
                : `${filteredProjects.length} projects`}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Results ───────────────────────────────────────── */}
      <section className="section-pad" aria-label="Project results">
        <div className="container-site">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-24 rounded-[var(--radius-card)] border"
              style={{ borderColor: "var(--color-border)" }}
              role="status"
              aria-live="polite"
            >
              <p
                className="text-lg font-display font-semibold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                No Projects Found
              </p>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                No projects match the selected filters. Try adjusting your
                selection.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedType("all");
                  setSelectedStatus("all");
                  router.push("/projects", { scroll: false });
                }}
                className="px-5 py-2.5 text-sm font-semibold rounded-[var(--radius-button)] transition-all duration-200"
                style={{
                  backgroundColor: "var(--color-brand-primary)",
                  color: "white",
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABand
        title="Interested in a Project?"
        description="Speak with our team about residential, commercial or investment enquiries."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel={undefined}
        secondaryHref={undefined}
      />
    </>
  );
}
