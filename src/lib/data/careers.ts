export interface CareerJob {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: "full-time" | "part-time" | "contract";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applicationEmail: string;
  publishedAt: string;
  closingDate?: string;
  active: boolean;
}

export const jobs: CareerJob[] = [
  {
    slug: "project-manager",
    title: "Project Manager",
    department: "Development",
    location: "Pakistan (Head Office)",
    employmentType: "full-time",
    summary:
      "RHA Builder is seeking an experienced Project Manager to join our development team and oversee the delivery of residential and commercial projects from planning through to practical completion.",
    responsibilities: [
      "Lead the day-to-day management of development projects from inception to handover",
      "Coordinate architects, engineers, consultants and contractors",
      "Monitor and report on programme, budget and quality performance",
      "Manage statutory approvals, planning conditions and compliance requirements",
      "Maintain strong relationships with clients, stakeholders and the project team",
      "Identify and manage risks throughout the project lifecycle",
    ],
    requirements: [
      "Degree in construction, project management, quantity surveying or a related discipline",
      "Minimum 5+ years of experience in real estate development or construction project management",
      "Strong knowledge of construction contracts and procurement",
      "Excellent communication and stakeholder management skills",
      "Proficiency with project management tools and reporting",
    ],
    applicationEmail: "rhabuilder.pk@gmail.com",
    publishedAt: "2025-03-01",
    closingDate: "Open until filled",
    active: true,
  },
  {
    slug: "quantity-surveyor",
    title: "Quantity Surveyor",
    department: "Commercial",
    location: "Pakistan (Head Office)",
    employmentType: "full-time",
    summary:
      "We are looking for a Quantity Surveyor to join our commercial team, supporting cost planning, procurement and financial management across the RHA Builder project portfolio.",
    responsibilities: [
      "Prepare and manage cost plans, estimates and budgets for development projects",
      "Lead procurement processes including tender preparation and evaluation",
      "Monitor and report on project costs and variations",
      "Manage subcontractor accounts and payment cycles",
      "Support value engineering and cost optimisation",
      "Prepare and present cost reports to the senior team",
    ],
    requirements: [
      "Degree in quantity surveying, construction economics or a related discipline",
      "Minimum 3+ years of experience in a commercial or developer QS role",
      "Strong understanding of construction contracts",
      "Excellent numerical and analytical skills",
      "Proficiency with cost management software",
    ],
    applicationEmail: "rhabuilder.pk@gmail.com",
    publishedAt: "2025-03-01",
    closingDate: "Open until filled",
    active: true,
  },
];

export function getActiveJobs(): CareerJob[] {
  return jobs.filter((j) => j.active);
}

export function getJobBySlug(slug: string): CareerJob | undefined {
  return jobs.find((j) => j.slug === slug);
}
