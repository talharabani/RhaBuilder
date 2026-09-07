export type ProjectType = "residential" | "commercial" | "mixed-use";
export type ProjectStatus = "ongoing" | "completed" | "planned";

export interface UnitType {
  name: string;
  area?: string;
  count?: number;
  description?: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "exterior" | "interior" | "amenities" | "progress" | "plans";
}

export interface ProgressMilestone {
  date: string;
  title: string;
  description: string;
  percentage?: number;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  type: ProjectType[];
  status: ProjectStatus;
  featured: boolean;
  heroImage: string;
  heroImageAlt: string;
  coverImage: string;
  coverImageAlt: string;
  locationName: string;
  city: string;
  region: string;
  address?: string;
  completionDate?: string;
  startDate?: string;
  keyFacts: KeyFact[];
  unitTypes?: UnitType[];
  amenities?: string[];
  features?: string[];
  gallery: GalleryImage[];
  progress?: ProgressMilestone[];
  brochureUrl?: string;
  videoUrl?: string;
  relatedProjectSlugs?: string[];
}

export const projects: Project[] = [
  // ─── ONGOING / IN-PROCESS PROJECT (ONLY ANSA TOWER) ──────────────────────
  {
    slug: "ansa-tower",
    name: "Ansa Tower",
    shortDescription:
      "A premier commercial plaza in Shahalmi, Lahore currently in progress / ongoing. Offering commercial shops for sale on a 25% advance and flexible 3-year installment plan.",
    fullDescription:
      "Ansa Tower is RHA Builders' flagship commercial plaza project currently in progress and ongoing. Located opposite Mochi Gate in the historic Shahalmi furniture market on Fleming Road, Lahore, Ansa Tower offers prime commercial shops for sale. It provides an exceptional investment opportunity with a 25% advance booking and a 3-year quarterly installment payment plan (every three months). The project is actively in progress with completion and handovers scheduled within 2 months.",
    type: ["commercial"],
    status: "ongoing",
    featured: true,
    heroImage: "/images/projects/ansa-tower-hero.jpg",
    heroImageAlt: "Ansa Tower Shahalmi Lahore Commercial Plaza exterior render",
    coverImage: "/images/projects/ansa-tower-cover.jpg",
    coverImageAlt: "Ansa Tower Shahalmi commercial plaza building facade",
    locationName: "Shahalmi, Fleming Road",
    city: "Lahore",
    region: "Punjab",
    address: "Shahalmi, Opposite Mochi Gate, Old Furniture Market, Fleming Road, Lahore",
    startDate: "2024",
    completionDate: "In Progress / Ongoing (Handover in 2 Months)",
    keyFacts: [
      { label: "Status", value: "In Progress / Ongoing" },
      { label: "Project Type", value: "Commercial Plaza & Shops" },
      { label: "Location", value: "Shahalmi, Fleming Road, Lahore" },
      { label: "Advance Payment", value: "25% Advance Booking" },
      { label: "Payment Plan", value: "3-Year Installments (Every 3 Months)" },
      { label: "Possession Timeframe", value: "Expected in 2 Months" },
      { label: "Typical Construction Time", value: "2 Years" },
    ],
    unitTypes: [
      { name: "Ground Floor Commercial Shop", area: "Prime Retail Space" },
      { name: "First Floor Commercial Shop", area: "High-Traffic Retail Space" },
      { name: "Upper Floor Commercial Unit", area: "Executive Office & Retail Space" },
    ],
    amenities: [
      "Prime Commercial Market Location",
      "Opposite Historic Mochi Gate Landmark",
      "Modern Architectural Plaza Design",
      "High-Speed Lifts & Passenger Escalators",
      "24/7 Building Security & CCTV Infrastructure",
      "Power Backup & Dedicated Utilities",
      "Flexible 3-Year Quarterly Payment Plan",
    ],
    features: [
      "25% Advance booking payment",
      "Remaining balance in easy quarterly installments over 3 years",
      "In Progress / Ongoing construction stage with possession within 2 months",
      "Prices subject to market conditions & inflation revision",
      "High capital growth and rental returns in Shahalmi commercial hub",
    ],
    gallery: [
      {
        src: "/images/projects/ansa-tower-cover.jpg",
        alt: "Ansa Tower Shahalmi Commercial Plaza Elevation",
        category: "exterior",
      },
      {
        src: "/images/projects/ansa-tower-int.jpg",
        alt: "Ansa Tower Interior Retail Concourse",
        category: "interior",
      },
      {
        src: "/images/projects/ansa-tower-hero.jpg",
        alt: "Ansa Tower Commercial Building Facade",
        category: "exterior",
      },
    ],
    progress: [
      {
        date: "2024",
        title: "Structural Frame & Superstructure",
        description: "Foundations, concrete columns, and multi-story structural framing completed.",
        percentage: 80,
      },
      {
        date: "Present",
        title: "In Progress / Ongoing Final Finishes",
        description: "Facade finishes, shop partitioning, and final utility integration underway.",
        percentage: 95,
      },
    ],
    relatedProjectSlugs: [
      "residential-houses-pakistani-town-phase-1",
      "residential-houses-bahria-town-phase-7",
    ],
  },

  // ─── COMPLETED RESIDENTIAL PROJECTS ──────────────────────────────────────
  {
    slug: "residential-houses-pakistani-town-phase-1",
    name: "Completed Residential Houses — Pakistani Town Phase 1",
    shortDescription:
      "Completed 5 Marla and 10 Marla residential family houses delivered in Pakistani Town Phase 1, Islamabad.",
    fullDescription:
      "RHA Builders has successfully completed and delivered multiple 5 Marla and 10 Marla residential family houses in Pakistani Town Phase 1, Islamabad. These turnkey completed houses feature modern elevation architecture, structural grey structure engineering, snag-free interior finishes, custom kitchen joinery, and complete utility integration.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/pakistani-town-p1-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla houses in Pakistani Town Phase 1",
    coverImage: "/images/projects/pakistani-town-p1-cover.jpg",
    coverImageAlt: "Pakistani Town Phase 1 residential house exterior",
    locationName: "Pakistani Town Phase 1",
    city: "Islamabad",
    region: "Capital Territory",
    address: "Pakistani Town Phase 1, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Delivered" },
      { label: "Project Category", value: "Completed Residential Houses" },
      { label: "Location", value: "Pakistani Town Phase 1, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Turnkey Architecture & Construction" },
    ],
    unitTypes: [
      { name: "5 Marla Family House", area: "Turnkey Completed" },
      { name: "10 Marla Executive House", area: "Turnkey Completed" },
    ],
    amenities: [
      "Seismic Structural Design",
      "Modern Exterior & Interior Architecture",
      "Custom Fitted Kitchens & Wardrobes",
      "Snag-Free Interior Paint & Tile Finishes",
      "Complete Electricity, Water & Gas Utility Connections",
    ],
    features: [
      "Completed 5 Marla family houses built with structural precision",
      "Completed 10 Marla luxury houses delivered on schedule",
      "Turnkey interior finishing and modern front elevations",
      "Located in prime residential sector of Pakistani Town Phase 1, Islamabad",
    ],
    gallery: [
      {
        src: "/images/projects/pakistani-town-p1-cover.jpg",
        alt: "Pakistani Town Phase 1 Completed House Facade",
        category: "exterior",
      },
      {
        src: "/images/projects/pakistani-town-p1-int.jpg",
        alt: "Pakistani Town Phase 1 Interior Lounge",
        category: "interior",
      },
      {
        src: "/images/projects/pakistani-town-p1-hero.jpg",
        alt: "Pakistani Town Phase 1 Residence Exterior",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "residential-houses-pakistani-town-phase-2"],
  },
  {
    slug: "residential-houses-pakistani-town-phase-2",
    name: "Completed Residential Houses — Pakistani Town Phase 2",
    shortDescription:
      "Turnkey completed 5 Marla and 10 Marla residential houses constructed in Pakistani Town Phase 2, Islamabad.",
    fullDescription:
      "RHA Builders has completed premier 5 Marla and 10 Marla residential housing projects in Pakistani Town Phase 2, Islamabad. Each home is designed and constructed to high structural standards, offering ready-to-move convenience, contemporary facades, and lasting property value.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/pakistani-town-p2-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla houses in Pakistani Town Phase 2",
    coverImage: "/images/projects/pakistani-town-p2-cover.jpg",
    coverImageAlt: "Pakistani Town Phase 2 residential house facade",
    locationName: "Pakistani Town Phase 2",
    city: "Islamabad",
    region: "Capital Territory",
    address: "Pakistani Town Phase 2, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Delivered" },
      { label: "Project Category", value: "Completed Residential Houses" },
      { label: "Location", value: "Pakistani Town Phase 2, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Grey Structure & Turnkey Handover" },
    ],
    unitTypes: [
      { name: "5 Marla Residential House", area: "Turnkey Completed" },
      { name: "10 Marla Residential Villa", area: "Turnkey Completed" },
    ],
    amenities: [
      "Reinforced Concrete Framework",
      "Premium Porcelain Tile Flooring",
      "Designer Bath Fittings & Fixtures",
      "Spacious Car Porch & Terrace Layouts",
    ],
    features: [
      "Completed 5 Marla residential houses delivered in Phase 2",
      "Completed 10 Marla double-story family villas",
      "High grade masonry and weather-resistant front elevation paint",
      "Convenient access to main commercial avenues in Pakistani Town Phase 2, Islamabad",
    ],
    gallery: [
      {
        src: "/images/projects/pakistani-town-p2-cover.jpg",
        alt: "Pakistani Town Phase 2 House View",
        category: "exterior",
      },
      {
        src: "/images/projects/pakistani-town-p2-int.jpg",
        alt: "Pakistani Town Phase 2 Kitchen Joinery",
        category: "interior",
      },
      {
        src: "/images/projects/pakistani-town-p2-hero.jpg",
        alt: "Pakistani Town Phase 2 Executive Villa",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "residential-houses-pakistani-town-phase-1"],
  },
  {
    slug: "residential-houses-police-foundation-society",
    name: "Completed Residential Houses — Police Foundation Society",
    shortDescription:
      "Completed 5 Marla and 10 Marla modern family houses built in Police Foundation Society, Islamabad.",
    fullDescription:
      "RHA Builders has constructed and delivered completed 5 Marla and 10 Marla residential houses in Police Foundation Society, Islamabad. Built with seismic structural reinforcement, optimized space planning, and contemporary aesthetic finishes for family living.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/police-foundation-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla houses in Police Foundation Society",
    coverImage: "/images/projects/police-foundation-cover.jpg",
    coverImageAlt: "Police Foundation Society residential house view",
    locationName: "Police Foundation Society",
    city: "Islamabad",
    region: "Capital Territory",
    address: "Police Foundation Society, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Delivered" },
      { label: "Project Category", value: "Completed Residential Houses" },
      { label: "Location", value: "Police Foundation Society, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Design, Build & Turnkey Handover" },
    ],
    unitTypes: [
      { name: "5 Marla Modern House", area: "Turnkey Completed" },
      { name: "10 Marla Luxury House", area: "Turnkey Completed" },
    ],
    amenities: [
      "Seismic Engineered Structure",
      "Security System Cabling",
      "Modular Kitchens with Marble Countertops",
      "Gated Community Security",
    ],
    features: [
      "Completed 5 Marla houses with functional modern floor plans",
      "Completed 10 Marla executive double-story residences",
      "Turnkey snag-free completion delivered in Police Foundation Society, Islamabad",
    ],
    gallery: [
      {
        src: "/images/projects/police-foundation-cover.jpg",
        alt: "Police Foundation Society Completed Residence",
        category: "exterior",
      },
      {
        src: "/images/projects/police-foundation-int.jpg",
        alt: "Police Foundation Society Master Bedroom Finish",
        category: "interior",
      },
      {
        src: "/images/projects/police-foundation-hero.jpg",
        alt: "Police Foundation Society House Facade",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "residential-houses-federation-society"],
  },
  {
    slug: "residential-houses-federation-society",
    name: "Completed Residential Houses — Federation Society",
    shortDescription:
      "Custom completed 5 Marla and 10 Marla residential houses in Federation Society, Islamabad.",
    fullDescription:
      "RHA Builders delivered custom engineered 5 Marla and 10 Marla residential houses in Federation Society, Islamabad. Engineered for long-term structural durability, functional interior flow, and elegant exterior facade details.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/federation-society-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla houses in Federation Society",
    coverImage: "/images/projects/federation-society-cover.jpg",
    coverImageAlt: "Federation Society residential house view",
    locationName: "Federation Society",
    city: "Islamabad",
    region: "Capital Territory",
    address: "Federation Society, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Delivered" },
      { label: "Project Category", value: "Completed Residential Houses" },
      { label: "Location", value: "Federation Society, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Full House Construction & Finishing" },
    ],
    unitTypes: [
      { name: "5 Marla Family Residence", area: "Turnkey Completed" },
      { name: "10 Marla Executive Residence", area: "Turnkey Completed" },
    ],
    amenities: [
      "Custom Floor Plan Layouts",
      "Solid Wood Door Finishings",
      "Energy Efficient LED Lighting",
      "Underground Water Storage Tank",
    ],
    features: [
      "Completed 5 Marla family houses in Federation Society",
      "Completed 10 Marla executive residences with spacious rooms",
      "High quality masonry, plastering, and waterproofing",
    ],
    gallery: [
      {
        src: "/images/projects/federation-society-cover.jpg",
        alt: "Federation Society House Exterior",
        category: "exterior",
      },
      {
        src: "/images/projects/federation-society-int.jpg",
        alt: "Federation Society Interior Design",
        category: "interior",
      },
      {
        src: "/images/projects/federation-society-hero.jpg",
        alt: "Federation Society Custom Residence",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "residential-houses-bahria-town-phase-7"],
  },
  {
    slug: "residential-houses-bahria-town-phase-7",
    name: "Completed Residential Houses — Bahria Town Phase 7",
    shortDescription:
      "Luxury completed 5 Marla, 10 Marla, and 1 Kanal residential houses in Bahria Town Phase 7, Islamabad.",
    fullDescription:
      "RHA Builders has delivered high-end 5 Marla, 10 Marla, and 1 Kanal luxury residential houses in Bahria Town Phase 7, Islamabad. These homes exhibit premium architectural finishes, imported tilework, customized kitchen systems, and robust structural engineering.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/bahria-town-p7-hero.jpg",
    heroImageAlt: "Completed 5 Marla, 10 Marla, and 1 Kanal luxury houses in Bahria Town Phase 7",
    coverImage: "/images/projects/bahria-town-p7-cover.jpg",
    coverImageAlt: "Bahria Town Phase 7 luxury residential villa exterior",
    locationName: "Bahria Town Phase 7",
    city: "Islamabad",
    region: "Capital Territory",
    address: "Bahria Town Phase 7, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Delivered" },
      { label: "Project Category", value: "Completed Residential Houses & Luxury Villas" },
      { label: "Location", value: "Bahria Town Phase 7, Islamabad" },
      { label: "House Sizes", value: "5 Marla, 10 Marla & 1 Kanal Houses" },
      { label: "Build Scope", value: "Turnkey Luxury Construction" },
    ],
    unitTypes: [
      { name: "5 Marla Modern House", area: "Turnkey Completed" },
      { name: "10 Marla Luxury Villa", area: "Turnkey Completed" },
      { name: "1 Kanal Executive Mansion", area: "Turnkey Completed" },
    ],
    amenities: [
      "Spanish & Italian Style Facades",
      "Imported Porcelain & Granite Finishes",
      "Executive Kitchen with Built-In Appliances",
      "Rooftop Terrace & BBQ Lawn Layout",
      "Prime Bahria Town Infrastructure",
    ],
    features: [
      "Completed 5 Marla modern homes in Bahria Town Phase 7",
      "Completed 10 Marla luxury villas with double height entry hall",
      "Completed 1 Kanal executive residences with master suite layouts",
      "Built with top tier materials in Bahria Town Phase 7, Islamabad",
    ],
    gallery: [
      {
        src: "/images/projects/bahria-town-p7-cover.jpg",
        alt: "Bahria Town Phase 7 Completed Villa",
        category: "exterior",
      },
      {
        src: "/images/projects/bahria-town-p7-int.jpg",
        alt: "Bahria Town Phase 7 Double Height Atrium Interior",
        category: "interior",
      },
      {
        src: "/images/projects/bahria-town-p7-hero.jpg",
        alt: "Bahria Town Phase 7 Executive Mansion Elevation",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "completed-projects-g11-markaz-islamabad"],
  },
  {
    slug: "completed-projects-g11-markaz-islamabad",
    name: "Completed Projects — G-11 Markaz, Islamabad",
    shortDescription:
      "Completed residential houses (5 Marla & 10 Marla) and commercial developments delivered in G-11 Markaz, Islamabad.",
    fullDescription:
      "RHA Builders has successfully completed residential houses (5 Marla & 10 Marla) and commercial building projects in G-11 Markaz, Islamabad. Delivering quality structural engineering, prime site execution, and turnkey finishing.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/g11-markaz-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla residential projects in G-11 Markaz Islamabad",
    coverImage: "/images/projects/g11-markaz-cover.jpg",
    coverImageAlt: "G-11 Markaz Islamabad completed development facade",
    locationName: "G-11 Markaz",
    city: "Islamabad",
    region: "Capital Territory",
    address: "G-11 Markaz, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Handed Over" },
      { label: "Project Category", value: "Completed Residential Houses & Projects" },
      { label: "Location", value: "G-11 Markaz, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Turnkey Development & Construction" },
    ],
    unitTypes: [
      { name: "5 Marla Residential House", area: "Completed & Delivered" },
      { name: "10 Marla Residential House", area: "Completed & Delivered" },
    ],
    amenities: [
      "Prime Sector Markaz Access",
      "High Structural Engineering Standards",
      "Modern Interior Finishes",
      "Complete Utility Integration",
    ],
    features: [
      "Completed 5 Marla residential houses in G-11 Markaz",
      "Completed 10 Marla residential family homes",
      "Turnkey completion delivered with full structural warranties",
    ],
    gallery: [
      {
        src: "/images/projects/g11-markaz-cover.jpg",
        alt: "G-11 Markaz Completed Development View",
        category: "exterior",
      },
      {
        src: "/images/projects/g11-markaz-int.jpg",
        alt: "G-11 Markaz Interior Concourse",
        category: "interior",
      },
      {
        src: "/images/projects/g11-markaz-hero.jpg",
        alt: "G-11 Markaz Urban Building Facade",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "completed-projects-f10-markaz-islamabad"],
  },
  {
    slug: "completed-projects-f10-markaz-islamabad",
    name: "Completed Projects — F-10 Markaz, Islamabad",
    shortDescription:
      "Completed 5 Marla & 10 Marla residential houses and commercial developments in F-10 Markaz, Islamabad.",
    fullDescription:
      "RHA Builders has completed premium 5 Marla and 10 Marla residential houses as well as project developments in F-10 Markaz, Islamabad, adhering to high engineering specifications and refined finishing.",
    type: ["residential"],
    status: "completed",
    featured: true,
    heroImage: "/images/projects/f10-markaz-hero.jpg",
    heroImageAlt: "Completed 5 Marla and 10 Marla residential projects in F-10 Markaz Islamabad",
    coverImage: "/images/projects/f10-markaz-cover.jpg",
    coverImageAlt: "F-10 Markaz Islamabad completed project exterior",
    locationName: "F-10 Markaz",
    city: "Islamabad",
    region: "Capital Territory",
    address: "F-10 Markaz, Islamabad, Pakistan",
    completionDate: "Completed",
    keyFacts: [
      { label: "Status", value: "Completed & Handed Over" },
      { label: "Project Category", value: "Completed Residential Houses & Projects" },
      { label: "Location", value: "F-10 Markaz, Islamabad" },
      { label: "House Sizes", value: "5 Marla & 10 Marla Houses" },
      { label: "Build Scope", value: "Turnkey House & Project Construction" },
    ],
    unitTypes: [
      { name: "5 Marla House", area: "Completed & Handed Over" },
      { name: "10 Marla Luxury House", area: "Completed & Handed Over" },
    ],
    amenities: [
      "Executive F-10 Location",
      "Contemporary Architectural Elevation",
      "High Grade Plumbing & Electrical",
      "Turnkey Snag-Free Finish",
    ],
    features: [
      "Completed 5 Marla residential houses in F-10 Markaz",
      "Completed 10 Marla luxury residences",
      "High capital value developments in Islamabad F-10 Markaz",
    ],
    gallery: [
      {
        src: "/images/projects/f10-markaz-cover.jpg",
        alt: "F-10 Markaz Completed Project View",
        category: "exterior",
      },
      {
        src: "/images/projects/f10-markaz-int.jpg",
        alt: "F-10 Markaz Executive Interior",
        category: "interior",
      },
      {
        src: "/images/projects/f10-markaz-hero.jpg",
        alt: "F-10 Markaz Commercial Plaza Facade",
        category: "exterior",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "completed-projects-g11-markaz-islamabad"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function filterProjects(
  type?: string | null,
  status?: string | null
): Project[] {
  return projects.filter((p) => {
    const typeMatch =
      !type || type === "all" ? true : p.type.includes(type as ProjectType);
    const statusMatch =
      !status || status === "all" ? true : p.status === status;
    return typeMatch && statusMatch;
  });
}
