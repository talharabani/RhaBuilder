export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  projectSlug?: string;
  projectName?: string;
  portrait?: string;
  companyLogo?: string;
  permissionConfirmed: boolean;
  featured: boolean;
  sortOrder: number;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  relationshipType: "client" | "partner" | "investor";
  relatedProjectSlugs: string[];
  permissionConfirmed: boolean;
  sortOrder: number;
}

// Testimonials are placeholders only — replace with verified real testimonials before publishing
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "[Testimonial quote to be supplied by client with written permission. Do not publish until confirmed.]",
    clientName: "[CLIENT NAME]",
    clientRole: "[ROLE]",
    clientCompany: "[COMPANY]",
    projectSlug: "rha-heights",
    projectName: "RHA Heights",
    permissionConfirmed: false,
    featured: true,
    sortOrder: 1,
  },
  {
    id: "testimonial-2",
    quote:
      "[Testimonial quote to be supplied by client with written permission. Do not publish until confirmed.]",
    clientName: "[CLIENT NAME]",
    clientRole: "[ROLE]",
    clientCompany: "[COMPANY]",
    projectSlug: "rha-commercial-centre",
    projectName: "RHA Commercial Centre",
    permissionConfirmed: false,
    featured: true,
    sortOrder: 2,
  },
  {
    id: "testimonial-3",
    quote:
      "[Testimonial quote to be supplied by client with written permission. Do not publish until confirmed.]",
    clientName: "[CLIENT NAME]",
    clientRole: "[ROLE]",
    clientCompany: "[COMPANY]",
    permissionConfirmed: false,
    featured: false,
    sortOrder: 3,
  },
];

// Client logos are placeholders — confirm permission before displaying any real company logos
export const clients: Client[] = [
  {
    id: "client-1",
    name: "[CLIENT COMPANY NAME]",
    relationshipType: "client",
    relatedProjectSlugs: [],
    permissionConfirmed: false,
    sortOrder: 1,
  },
  {
    id: "client-2",
    name: "[PARTNER COMPANY NAME]",
    relationshipType: "partner",
    relatedProjectSlugs: [],
    permissionConfirmed: false,
    sortOrder: 2,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials
    .filter((t) => t.featured && t.permissionConfirmed)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAllTestimonials(): Testimonial[] {
  return testimonials
    .filter((t) => t.permissionConfirmed)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getConfirmedClients(): Client[] {
  return clients
    .filter((c) => c.permissionConfirmed)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}
