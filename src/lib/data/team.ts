export interface TeamMember {
  slug: string;
  name: string;
  jobTitle: string;
  department: string;
  portrait: string;
  shortBio: string;
  fullBio?: string;
  credentials?: string[];
  specialisms?: string[];
  linkedinUrl?: string;
  featured: boolean;
  sortOrder: number;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "faryad-hussain",
    name: "Faryad Hussain",
    jobTitle: "CEO & Founder",
    department: "Executives",
    portrait: "/images/team/faryad-hussain.jpg",
    shortBio:
      "Faryad Hussain founded RHA Builders in 2006. Under his leadership, the company has delivered premier commercial plazas, commercial shop sales with 3-year installment plans, and residential house projects across Lahore and Islamabad.",
    fullBio:
      "Faryad Hussain established RHA Builders in 2006 as a real estate development and construction firm. With over two decades of vision and field expertise, he leads the strategic direction of the company, focusing on landmark commercial plaza developments such as Ansa Tower in Shahalmi, Lahore, as well as residential house construction across Punjab and the Capital region.",
    credentials: ["Chief Executive Officer", "20+ Years Development Leadership"],
    specialisms: ["Commercial Plazas", "Real Estate Investment", "Strategic Leadership"],
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "muhammad-fayaz",
    name: "Muhammad Fayaz",
    jobTitle: "COO",
    department: "Executives",
    portrait: "/images/team/muhammad-fayaz.jpg",
    shortBio:
      "Muhammad Fayaz oversees operational management, project scheduling, and corporate execution across RHA Builders' commercial and residential developments.",
    fullBio:
      "As Chief Operating Officer, Muhammad Fayaz manages daily business operations, site logistics, and contractor coordination. He ensures that all commercial plaza builds and residential projects meet strict schedule milestones and quality standards.",
    credentials: ["Chief Operating Officer", "Operations Management"],
    specialisms: ["Operations & Planning", "Site Logistics", "Quality Assurance"],
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "rameez-faryad",
    name: "Rameez Faryad",
    jobTitle: "Deputy COO",
    department: "Executives",
    portrait: "/images/team/rameez-faryad.jpg",
    shortBio:
      "Rameez Faryad leads operational support, commercial advisory, and buyer relations for commercial shops and residential housing developments.",
    fullBio:
      "Serving as Deputy COO, Rameez Faryad coordinates executive operations, client advisory, and sales agreements for shop buyers on 3-year installment payment plans, maintaining high standards of client trust and operational transparency.",
    credentials: ["Deputy Chief Operating Officer", "Commercial Advisory"],
    specialisms: ["Executive Support", "Client Advisory", "Installment Contracts"],
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "asghar-ali",
    name: "Asghar Ali",
    jobTitle: "Front Desk & Sales Executive",
    department: "Front Desk & Sales",
    portrait: "/images/team/asghar-ali.jpg",
    shortBio:
      "Asghar Ali manages front desk operations, client consultations, project inquiries, and sales support across RHA Builders' commercial and residential projects.",
    fullBio:
      "As Front Desk & Sales Executive, Asghar Ali handles client reception, commercial shop booking inquiries, and sales advisory for buyers visiting RHA Builders.",
    credentials: ["Front Desk & Sales Executive", "Client Relations"],
    specialisms: ["Front Desk Management", "Sales Advisory", "Client Inquiries"],
    featured: true,
    sortOrder: 4,
  },
  {
    slug: "malik-shafique",
    name: "Malik Shafique",
    jobTitle: "Front Desk & Sales Executive",
    department: "Front Desk & Sales",
    portrait: "/images/team/malik-shafique.jpg",
    shortBio:
      "Malik Shafique leads front desk client engagement, sales consultation, and buyer advisory for commercial shop bookings and residential house sales.",
    fullBio:
      "Serving as Front Desk & Sales Executive, Malik Shafique assists clients with project details, site visit bookings, and installment sales agreements.",
    credentials: ["Front Desk & Sales Executive", "Sales Consultation"],
    specialisms: ["Client Consultation", "Commercial & Residential Sales", "Buyer Advisory"],
    featured: true,
    sortOrder: 5,
  },
  {
    slug: "asad-ali",
    name: "Asad Ali",
    jobTitle: "Accounts & Admin Officer",
    department: "Accounts & Administration",
    portrait: "/images/team/asad-ali.jpg",
    shortBio:
      "Asad Ali manages financial accounting, administrative operations, billing records, and installment account management for RHA Builders.",
    fullBio:
      "As Accounts & Admin Officer, Asad Ali oversees corporate ledger accounting, client installment payment processing, office administration, and financial record management.",
    credentials: ["Accounts & Admin Officer", "Financial Management"],
    specialisms: ["Corporate Accounting", "Installment Ledger", "Office Administration"],
    featured: true,
    sortOrder: 6,
  },
  {
    slug: "farooq-ahmad",
    name: "Farooq Ahmad",
    jobTitle: "General Support Staff",
    department: "General Support",
    portrait: "/images/team/farooq-ahmad.jpg",
    shortBio:
      "Farooq Ahmad assists with office logistics, facility maintenance, visitor assistance, and operational support services across RHA Builders.",
    fullBio:
      "As General Support Staff, Farooq Ahmad provides essential facility support, office administrative assistance, site logistics support, and client hospitality services.",
    credentials: ["General Support Staff", "Operational Support"],
    specialisms: ["Office Support", "Facility Maintenance", "Logistics Assistance"],
    featured: true,
    sortOrder: 7,
  },
  {
    slug: "muhammad-arash",
    name: "Muhammad Arash",
    jobTitle: "Site Engineer",
    department: "Site Engineering",
    portrait: "/images/team/muhammad-arash.jpg",
    shortBio:
      "Muhammad Arash supervises structural engineering, site safety, and construction execution for commercial plazas and residential houses.",
    fullBio:
      "As Site Engineer, Muhammad Arash is responsible for on-site structural inspections, technical compliance, contractor coordination, and quality sign-offs on major projects including Ansa Tower in Shahalmi, Lahore.",
    credentials: ["Site Engineer", "Civil Engineering"],
    specialisms: ["Site Engineering", "Structural Oversight", "Technical Quality Control"],
    featured: true,
    sortOrder: 8,
  },
];

export function getFeaturedTeamMembers(): TeamMember[] {
  return teamMembers
    .filter((m) => m.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

