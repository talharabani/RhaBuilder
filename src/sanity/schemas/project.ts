// Sanity CMS Schema — Project
// Place in your Sanity Studio at: schemas/project.ts
// Run: npx sanity@latest init  (in a separate /studio directory)

export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview" },
    { name: "location", title: "Location" },
    { name: "media", title: "Media" },
    { name: "details", title: "Project Details" },
    { name: "progress", title: "Construction Progress" },
    { name: "seo", title: "SEO & Metadata" },
  ],
  fields: [
    // ─── Identity ────────────────────────────────────────────
    { name: "title", title: "Project Name", type: "string", group: "overview", validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, group: "overview", validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "shortDescription", title: "Short Description (card)", type: "text", rows: 3, group: "overview" },
    { name: "fullDescription", title: "Full Description", type: "text", rows: 8, group: "overview" },
    {
      name: "projectType",
      title: "Project Type",
      type: "array",
      of: [{ type: "string" }],
      options: { list: [{ title: "Residential", value: "residential" }, { title: "Commercial", value: "commercial" }, { title: "Mixed Use", value: "mixed-use" }] },
      group: "overview",
    },
    {
      name: "status",
      title: "Project Status",
      type: "string",
      options: { list: [{ title: "Ongoing", value: "ongoing" }, { title: "Completed", value: "completed" }, { title: "Planned", value: "planned" }] },
      group: "overview",
    },
    { name: "featured", title: "Featured on Homepage", type: "boolean", group: "overview" },
    { name: "sortOrder", title: "Sort Order", type: "number", group: "overview" },

    // ─── Dates ────────────────────────────────────────────────
    { name: "startDate", title: "Start Date", type: "string", group: "overview" },
    { name: "completionDate", title: "Completion / Expected Completion", type: "string", group: "overview" },

    // ─── Location ─────────────────────────────────────────────
    { name: "locationName", title: "Location Name / District", type: "string", group: "location" },
    { name: "streetAddress", title: "Street Address", type: "string", group: "location" },
    { name: "city", title: "City", type: "string", group: "location" },
    { name: "region", title: "Region / State", type: "string", group: "location" },
    { name: "country", title: "Country", type: "string", group: "location" },
    { name: "latitude", title: "Latitude", type: "number", group: "location" },
    { name: "longitude", title: "Longitude", type: "number", group: "location" },
    { name: "mapURL", title: "Google Maps URL", type: "url", group: "location" },

    // ─── Media ────────────────────────────────────────────────
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true }, group: "media" },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "image", type: "image", options: { hotspot: true } },
          { name: "alt", title: "Alt Text", type: "string" },
          {
            name: "category",
            title: "Category",
            type: "string",
            options: { list: ["exterior", "interior", "amenities", "progress", "plans"] },
          },
        ],
      }],
      group: "media",
    },
    { name: "heroVideo", title: "Hero Video URL", type: "url", group: "media" },
    { name: "brochure", title: "Brochure PDF", type: "file", group: "media" },

    // ─── Project Details ──────────────────────────────────────
    {
      name: "keyFacts",
      title: "Key Facts",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string" },
          { name: "value", type: "string" },
        ],
      }],
      group: "details",
    },
    {
      name: "unitTypes",
      title: "Residential Unit Types",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", type: "string" },
          { name: "area", type: "string" },
          { name: "count", type: "number" },
        ],
      }],
      group: "details",
    },
    { name: "amenities", title: "Amenities", type: "array", of: [{ type: "string" }], group: "details" },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }], group: "details" },
    {
      name: "constructionProgress",
      title: "Construction Progress",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "date", type: "string" },
          { name: "title", type: "string" },
          { name: "description", type: "text" },
          { name: "percentage", type: "number" },
        ],
      }],
      group: "progress",
    },

    // ─── SEO ──────────────────────────────────────────────────
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    { name: "metaDescription", title: "Meta Description", type: "text", rows: 3, group: "seo" },
    { name: "ogImage", title: "OG Image", type: "image", group: "seo" },
  ],
  preview: {
    select: { title: "title", status: "status", city: "city", media: "heroImage" },
    prepare({ title, status, city, media }: { title: string; status: string; city: string; media: unknown }) {
      return { title, subtitle: `${status ?? "Draft"} · ${city ?? "No city"}`, media };
    },
  },
};
