// Sanity CMS Schemas Index
// Import and register all schemas in your Sanity Studio

// Individual schema definitions are in separate files.
// Add them to your sanity.config.ts like this:
//
// import { defineConfig } from "sanity";
// import { projectSchema } from "./schemas/project";
// import { teamMemberSchema } from "./schemas/teamMember";
// import { postSchema } from "./schemas/post";
// import { testimonialSchema } from "./schemas/testimonial";
// import { serviceSchema } from "./schemas/service";
// import { clientSchema } from "./schemas/client";
// import { jobSchema } from "./schemas/job";
// import { siteSettingsSchema } from "./schemas/siteSettings";
//
// export default defineConfig({
//   projectId: "YOUR_PROJECT_ID",
//   dataset: "production",
//   schema: {
//     types: [
//       projectSchema,
//       teamMemberSchema,
//       postSchema,
//       testimonialSchema,
//       serviceSchema,
//       clientSchema,
//       jobSchema,
//       siteSettingsSchema,
//     ],
//   },
// });

export { projectSchema } from "./project";

// ─── Team Member Schema ────────────────────────────────────────────────────────
export const teamMemberSchema = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string", validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "slug", title: "URL Slug", type: "slug", options: { source: "name" } },
    { name: "jobTitle", title: "Job Title", type: "string" },
    { name: "department", title: "Department", type: "string" },
    { name: "portrait", title: "Portrait Photo", type: "image", options: { hotspot: true } },
    { name: "shortBio", title: "Short Bio (card)", type: "text", rows: 4 },
    { name: "fullBio", title: "Full Biography", type: "array", of: [{ type: "block" }] },
    { name: "credentials", title: "Credentials / Qualifications", type: "array", of: [{ type: "string" }] },
    { name: "specialisms", title: "Specialisms", type: "array", of: [{ type: "string" }] },
    { name: "linkedinUrl", title: "LinkedIn URL", type: "url" },
    { name: "featured", title: "Featured (show on homepage/about)", type: "boolean" },
    { name: "sortOrder", title: "Sort Order", type: "number" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "metaDescription", title: "Meta Description", type: "text", rows: 2 },
  ],
};

// ─── Blog Post Schema ──────────────────────────────────────────────────────────
export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author Name", type: "string" },
    { name: "authorRole", title: "Author Role", type: "string" },
    { name: "publishedAt", title: "Published Date", type: "date" },
    { name: "updatedAt", title: "Updated Date", type: "date" },
    { name: "categories", title: "Categories", type: "array", of: [{ type: "string" }] },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "body", title: "Article Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] },
    { name: "relatedProjects", title: "Related Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] },
    { name: "featured", title: "Featured Article", type: "boolean" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "metaDescription", title: "Meta Description", type: "text", rows: 3 },
    { name: "ogImage", title: "OG Image", type: "image" },
  ],
};

// ─── Testimonial Schema ────────────────────────────────────────────────────────
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Testimonial Quote", type: "text", rows: 6 },
    { name: "clientName", title: "Client Name", type: "string" },
    { name: "clientRole", title: "Client Role", type: "string" },
    { name: "clientCompany", title: "Client Company", type: "string" },
    { name: "project", title: "Related Project", type: "reference", to: [{ type: "project" }] },
    { name: "portrait", title: "Client Portrait", type: "image", options: { hotspot: true } },
    { name: "companyLogo", title: "Company Logo", type: "image" },
    {
      name: "permissionConfirmed",
      title: "Written Permission Confirmed",
      type: "boolean",
      description: "IMPORTANT: Do not publish testimonials without confirmed written permission from the client.",
    },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "sortOrder", title: "Sort Order", type: "number" },
  ],
};

// ─── Service Schema ────────────────────────────────────────────────────────────
export const serviceSchema = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Service Title", type: "string", validation: (r: unknown) => (r as { required: () => unknown }).required() },
    { name: "slug", title: "URL Slug", type: "slug", options: { source: "title" } },
    { name: "shortDescription", title: "Short Description (card)", type: "text", rows: 3 },
    { name: "fullDescription", title: "Full Description", type: "text", rows: 8 },
    { name: "icon", title: "Icon Name (Heroicon)", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
    { name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] },
    { name: "deliverables", title: "Deliverables", type: "array", of: [{ type: "string" }] },
    {
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "step", type: "number" },
          { name: "title", type: "string" },
          { name: "description", type: "text" },
        ],
      }],
    },
    { name: "relatedProjects", title: "Related Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "question", type: "string" },
          { name: "answer", type: "text" },
        ],
      }],
    },
    { name: "ctaLabel", title: "CTA Button Label", type: "string" },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "sortOrder", title: "Sort Order", type: "number" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "metaDescription", title: "Meta Description", type: "text", rows: 3 },
  ],
};

// ─── Client / Partner Schema ───────────────────────────────────────────────────
export const clientSchema = {
  name: "client",
  title: "Client / Partner",
  type: "document",
  fields: [
    { name: "name", title: "Company Name", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    { name: "website", title: "Website URL", type: "url" },
    {
      name: "relationshipType",
      title: "Relationship Type",
      type: "string",
      options: { list: ["client", "partner", "investor"] },
    },
    { name: "relatedProjects", title: "Related Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] },
    {
      name: "permissionConfirmed",
      title: "Logo Display Permission Confirmed",
      type: "boolean",
      description: "IMPORTANT: Do not display logos without written permission.",
    },
    { name: "sortOrder", title: "Sort Order", type: "number" },
  ],
};

// ─── Job / Vacancy Schema ──────────────────────────────────────────────────────
export const jobSchema = {
  name: "job",
  title: "Job Vacancy",
  type: "document",
  fields: [
    { name: "title", title: "Job Title", type: "string" },
    { name: "slug", title: "URL Slug", type: "slug", options: { source: "title" } },
    { name: "department", title: "Department", type: "string" },
    { name: "location", title: "Location", type: "string" },
    {
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: { list: ["full-time", "part-time", "contract"] },
    },
    { name: "summary", title: "Role Summary", type: "text", rows: 4 },
    { name: "responsibilities", title: "Responsibilities", type: "array", of: [{ type: "string" }] },
    { name: "requirements", title: "Requirements", type: "array", of: [{ type: "string" }] },
    { name: "applicationEmail", title: "Application Email", type: "string" },
    { name: "publishedAt", title: "Published Date", type: "date" },
    { name: "closingDate", title: "Closing Date", type: "string" },
    { name: "active", title: "Active / Live", type: "boolean" },
  ],
};

// ─── Site Settings Schema ──────────────────────────────────────────────────────
export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "companyName", title: "Company Name", type: "string" },
    { name: "logo", title: "Logo (Light)", type: "image" },
    { name: "logoDark", title: "Logo (Dark / On White)", type: "image" },
    { name: "favicon", title: "Favicon", type: "image" },
    { name: "phone", title: "Phone Number", type: "string" },
    { name: "whatsapp", title: "WhatsApp Number", type: "string" },
    { name: "email", title: "Email Address", type: "string" },
    { name: "address", title: "Office Address", type: "text", rows: 3 },
    { name: "latitude", title: "Office Latitude", type: "number" },
    { name: "longitude", title: "Office Longitude", type: "number" },
    { name: "businessHours", title: "Business Hours", type: "text", rows: 4 },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "twitter", title: "Twitter / X", type: "url" },
      ],
    },
    { name: "defaultMetaDescription", title: "Default Meta Description", type: "text", rows: 3 },
    { name: "defaultOGImage", title: "Default OG Image", type: "image" },
    { name: "footerText", title: "Footer Tagline", type: "string" },
    { name: "ga4MeasurementId", title: "GA4 Measurement ID", type: "string" },
  ],
};
