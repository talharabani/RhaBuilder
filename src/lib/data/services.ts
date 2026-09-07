export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage?: string;
  benefits: string[];
  deliverables: string[];
  processSteps: { step: number; title: string; description: string }[];
  relatedProjectSlugs: string[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
  featured: boolean;
  sortOrder: number;
}

export const services: Service[] = [
  {
    slug: "commercial-plaza-construction",
    title: "Commercial Plaza Construction & Shop Sales",
    shortDescription:
      "Our main specialty: construction of commercial plazas and sale of prime commercial shops with flexible 3-year installment plans.",
    fullDescription:
      "RHA Builders specializes in the end-to-end development and construction of multi-story commercial plazas in high-footfall market areas like Shahalmi, Lahore, and commercial centers in Islamabad. We offer commercial shops for sale featuring 25% advance booking and structured 3-year quarterly payment plans, providing business owners and investors with accessible, high-yield real estate assets.",
    icon: "building-storefront",
    heroImage: "/images/services/commercial-development.jpg",
    benefits: [
      "Specialized in high-footfall commercial plazas like Ansa Tower in Shahalmi, Lahore",
      "Sale of commercial shops with 25% advance booking option",
      "Flexible 3-year payment plan with quarterly installments (every 3 months)",
      "Turnkey plaza construction delivered within a 2-year typical timeframe",
    ],
    deliverables: [
      "Commercial Plaza Structural & Architectural Execution",
      "Commercial Shop Booking & 3-Year Installment Plan Contract",
      "High-Traffic Escalators, Lifts, and Building Infrastructure",
      "24/7 Security, Backup Power, and Commercial Amenities",
      "Handover & Possession Certificate upon Completion",
    ],
    processSteps: [
      {
        step: 1,
        title: "Site & Market Selection",
        description:
          "We identify strategic high-demand commercial market locations with proven retail footfall and high rental potential.",
      },
      {
        step: 2,
        title: "Plaza Design & Structural Framing",
        description:
          "Engineering optimized commercial shop layouts, broad corridors, escalators, and modern plaza facades.",
      },
      {
        step: 3,
        title: "Shop Booking & Flexible Payment Plan",
        description:
          "Customers secure commercial shops with a 25% advance payment and easy 3-year quarterly installments.",
      },
      {
        step: 4,
        title: "2-Year Construction Delivery & Handover",
        description:
          "We execute construction within 2 years, conducting quality audits and handing over shop possession to buyers.",
      },
    ],
    relatedProjectSlugs: ["ansa-tower", "residential-houses-bahria-town-phase-7"],
    faqs: [
      {
        question: "What is the payment plan for commercial shops at RHA Builders projects?",
        answer:
          "Shops are offered for sale with a 25% advance payment and the remaining balance payable over a 3-year payment plan with installments due every three months. Prices are subject to revision based on market conditions and inflation.",
      },
      {
        question: "What is the typical completion time for a commercial plaza project?",
        answer:
          "RHA Builders typically completes commercial plaza construction projects within 2 years. Flagship projects like Ansa Tower are currently near completion with possession within 2 months.",
      },
    ],
    ctaLabel: "Enquire About Commercial Shops",
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "residential-house-construction",
    title: "Residential House Construction & Sales",
    shortDescription:
      "Construction of custom residential houses on housing plots and sale of completed ready-to-move family houses.",
    fullDescription:
      "In addition to commercial plazas, RHA Builders provides complete residential construction services. We construct high-quality residential houses on housing plots according to client specifications and offer completed, turnkey residential houses for sale in top housing societies across Lahore and Islamabad.",
    icon: "home",
    heroImage: "/images/services/residential-construction.jpg",
    benefits: [
      "Custom residential house building on client-owned housing plots",
      "Turnkey completed houses ready for immediate purchase and move-in",
      "High specification masonry, concrete framing, and premium finishes",
      "Disciplined cost control and transparent construction timelines",
    ],
    deliverables: [
      "Custom House Architectural Plans & Structural Engineering",
      "Complete Grey Structure and Finishes Execution",
      "Custom Joinery, Kitchen, Sanitaryware & Flooring Installation",
      "Completed House Possession & Warranty Handover File",
    ],
    processSteps: [
      {
        step: 1,
        title: "Design Brief & Plot Assessment",
        description:
          "Reviewing plot dimensions, structural requirements, and client floor plan preferences.",
      },
      {
        step: 2,
        title: "Structural & Finishes Execution",
        description:
          "Constructing ground and upper stories, plumbing, electrical systems, and interior finishes.",
      },
      {
        step: 3,
        title: "Quality Audit & Handover",
        description:
          "Performing multi-point quality inspections prior to client walkthrough and final key handover.",
      },
    ],
    relatedProjectSlugs: ["residential-houses-pakistani-town-phase-1", "residential-houses-bahria-town-phase-7"],
    faqs: [
      {
        question: "Does RHA Builders build custom houses on customer plots?",
        answer:
          "Yes, we construct residential houses directly on customer plots as well as offering completed, ready-to-move houses for sale.",
      },
      {
        question: "Which cities does RHA Builders provide residential services in?",
        answer:
          "We operate across Lahore and Islamabad, providing residential house construction and commercial plaza development.",
      },
    ],
    ctaLabel: "Discuss Residential Construction",
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "commercial-development",
    title: "Commercial Development",
    shortDescription:
      "Purpose-built commercial developments — office, retail and mixed-use — designed for modern business occupiers.",
    fullDescription:
      "RHA Builder designs and develops commercial spaces optimized for modern business efficiency, flexible layouts, and long-term asset value. Whether creating Grade-A headquarters, vibrant retail centers, or tech-enabled logistics hubs, we align building specifications with tenant requirements, ESG benchmarks, and high-yield investment criteria.",
    icon: "building-storefront",
    heroImage: "/images/services/real-estate-development.jpg",
    benefits: [
      "Strategic location selection focused on transportation hubs and commercial corridors",
      "Flexible, open-plan floorplates engineered for corporate tenant customization",
      "High ESG standards with energy-efficient HVAC, solar integration, and smart controls",
      "Robust asset creation designed for long-term lease stability and capital appreciation",
    ],
    deliverables: [
      "Commercial Market Demand & Occupier Briefing Document",
      "Grade-A Architectural & MEP Engineering Construction Drawings",
      "Shell & Core vs. Category A/B Commercial Fit-out Package",
      "BREEAM / LEED Sustainability & Energy Performance Certificates",
      "Commercial Lease Readiness & Facility Management Handover File",
    ],
    processSteps: [
      {
        step: 1,
        title: "Market Strategy & Tenant Profiling",
        description:
          "We analyze local commercial absorption rates, tenant workspace trends, parking requirements, and target yield parameters.",
      },
      {
        step: 2,
        title: "Flexible Floorplate Architecture",
        description:
          "Design schemes focus on adaptable structural grids, high floor-to-ceiling heights, and state-of-the-art riser capacity.",
      },
      {
        step: 3,
        title: "High-Performance Commercial Build",
        description:
          "We construct curtain-wall facades, install central HVAC plants, high-speed elevator banks, and access-controlled entry foyers.",
      },
      {
        step: 4,
        title: "Occupier Fit-Out & Systems Integration",
        description:
          "Coordinating tenant fit-outs, data cabling, BMS integration, and fire safety compliance ready for immediate occupancy.",
      },
    ],
    relatedProjectSlugs: ["rha-commercial-centre", "rha-mixed-quarter"],
    faqs: [
      {
        question: "Does RHA Builder offer Shell & Core as well as Cat A / Cat B fit-outs?",
        answer:
          "Yes, we deliver Shell & Core base builds for institutional investors, as well as full Category A and customized Category B tenant fit-outs for occupying corporate clients.",
      },
      {
        question: "How are green building standards incorporated into commercial builds?",
        answer:
          "Our engineering designs incorporate low-carbon heat pumps, high-performance glazing, rainwater harvesting, solar PV arrays, and smart building energy management systems.",
      },
    ],
    ctaLabel: "Explore Commercial Projects",
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    shortDescription:
      "Professional construction management services — programme oversight, quality control and contractor coordination for client-led projects.",
    fullDescription:
      "RHA Builder provides expert, independent Construction Management services for property owners, developers, and funds who require rigorous client-side representation. Acting as your dedicated project director on site, we manage trade contractors directly, control project budgets transparently, enforce safety compliance, and safeguard project timelines from inception to handover.",
    icon: "clipboard-document-check",
    heroImage: "/images/services/construction-management.jpg",
    benefits: [
      "Direct client-side representation with 100% cost transparency and zero contractor mark-up",
      "Direct management of trade sub-contracts for maximum project control and agility",
      "Proactive risk mitigation, schedule optimization, and value engineering",
      "Uncompromising quality inspections and independent technical auditing",
    ],
    deliverables: [
      "Master Project Logistics & Procurement Strategy Document",
      "Trade Contractor Scope Packages & Tender Evaluation Reports",
      "Real-time Cloud Dashboard for Cost & Schedule Tracking",
      "Weekly Site Quality, Health & Safety Audit Records",
      "Comprehensive Dispute Resolution & Change Order Management Log",
    ],
    processSteps: [
      {
        step: 1,
        title: "Project Setup & Trade Procurement Strategy",
        description:
          "We establish project governance, break down work into specialized trade packages, and establish budget benchmarks.",
      },
      {
        step: 2,
        title: "Site Mobilization & Management",
        description:
          "Our construction managers set up site logistics, safety protocols, trade schedules, and daily site supervision.",
      },
      {
        step: 3,
        title: "Continuous Quality & Cost Control",
        description:
          "We inspect ongoing trade works, approve progress valuations against actual completion, and manage variations.",
      },
      {
        step: 4,
        title: "Commissioning & Handover Administration",
        description:
          "We supervise trade snagging, coordinate system commissioning, compile O&M manuals, and secure final sign-offs.",
      },
    ],
    relatedProjectSlugs: ["rha-heights"],
    faqs: [
      {
        question: "How does Construction Management differ from traditional Main Contracting?",
        answer:
          "In Construction Management, the client contracts directly with individual trade packages (groundworks, steel, M&E), while RHA Builder manages them on a fee basis. This eliminates main contractor margin stack and provides total cost transparency.",
      },
      {
        question: "Can RHA Builder step into an ongoing project that is delayed?",
        answer:
          "Yes, we specialize in project recovery, performing rapid site audits to re-baseline schedules, re-organize trade contractors, and restore momentum.",
      },
    ],
    ctaLabel: "Discuss Construction Management",
    featured: false,
    sortOrder: 4,
  },
  {
    slug: "design-planning-coordination",
    title: "Design & Planning Coordination",
    shortDescription:
      "Coordinating architectural design, technical consultants and planning processes to bring development proposals to consent.",
    fullDescription:
      "RHA Builder bridges the gap between vision and planning approval by managing multidisciplinary architectural, structural, and environmental design teams. We lead pre-application negotiations with planning authorities, eliminate costly design conflicts early through 3D BIM coordination, and deliver fully consented, buildable construction drawings.",
    icon: "pencil-square",
    heroImage: "/images/services/design-planning-coordination.jpg",
    benefits: [
      "Seamless integration of lead architects, MEP engineers, and structural specialists",
      "Expert navigation of local planning policy, heritage conservation, and zoning laws",
      "Advanced 3D BIM clash detection to resolve technical issues prior to site mobilization",
      "Value engineering embedded directly into early-stage architectural design",
    ],
    deliverables: [
      "Pre-Application Planning Consultation Brief",
      "Complete Planning Consent Application Package (Drawings & Statements)",
      "Fully Coordinated Building Regulations Technical Pack",
      "Clash-Free 3D BIM Model & Building Systems Specifications",
      "Section 106 & Community Infrastructure Levy (CIL) Agreement File",
    ],
    processSteps: [
      {
        step: 1,
        title: "Design Brief & Consultant Appointment",
        description:
          "We define project parameters, select specialized consultants (architects, civils, acoustics, ecology), and establish design milestones.",
      },
      {
        step: 2,
        title: "Pre-Application & Statutory Engagement",
        description:
          "We present initial massing studies to planning officers, incorporating feedback to build a defensible planning strategy.",
      },
      {
        step: 3,
        title: "Detailed Scheme Coordination & Consent",
        description:
          "We coordinate full planning submissions, handle public consultations, and manage the application through committee determination.",
      },
      {
        step: 4,
        title: "Technical Detailing & Building Control",
        description:
          "Post-consent, we finalize working drawings, structural calculations, and building control sign-offs for construction tender.",
      },
    ],
    relatedProjectSlugs: ["rha-park-residences"],
    faqs: [
      {
        question: "What happens if a planning application faces local objections?",
        answer:
          "We proactively manage public consultation events, refine architectural massing to address community feedback, and submit detailed impact assessments to satisfy planning committee criteria.",
      },
      {
        question: "Do you coordinate heritage and conservation area approvals?",
        answer:
          "Yes, our design management team has extensive experience working with heritage officers to secure consents for listed structures and sensitive conservation zones.",
      },
    ],
    ctaLabel: "Discuss Design Coordination",
    featured: false,
    sortOrder: 5,
  },
  {
    slug: "turnkey-solutions",
    title: "Turnkey Solutions",
    shortDescription:
      "Fully integrated development and construction delivery — from brief to completed, ready-to-occupy spaces.",
    fullDescription:
      "RHA Builder's Turnkey Solutions offer complete peace of mind through a single point of accountability. We take full ownership of your project from initial site concept, architectural design, and planning approval through to complete construction, luxury interior fit-out, and final key handover — delivered on time and within an agreed fixed budget.",
    icon: "key",
    heroImage: "/images/services/turnkey-solutions.jpg",
    benefits: [
      "Single-source contract eliminating client management burden and inter-party disputes",
      "Fixed-price and fixed-timeline guarantees for maximum financial security",
      "Integrated design-build methodology eliminating miscommunications between teams",
      "Complete interior furnishings, technology installation, and key-in-hand readiness",
    ],
    deliverables: [
      "Turnkey Project Concept & Master Budget Agreement",
      "End-to-End Design, Planning & Building Consent Approval",
      "Complete Turnkey Construction & Interior Specification Package",
      "Smart Home / Commercial Technology & Systems Commissioning",
      "Comprehensive Building Warranty, Maintenance Plan & Key Handover",
    ],
    processSteps: [
      {
        step: 1,
        title: "Strategic Vision & Feasibility Brief",
        description:
          "We sit down with you to capture your operational requirements, architectural aesthetic preferences, budget limits, and completion dates.",
      },
      {
        step: 2,
        title: "Unified Design & Entitlement Management",
        description:
          "Our in-house design and planning leaders produce complete architectural packages and secure all statutory consents.",
      },
      {
        step: 3,
        title: "Turnkey Construction & Fit-Out",
        description:
          "Our master builders construct the envelope and complete all internal joinery, MEP systems, finishes, and furniture installation.",
      },
      {
        step: 4,
        title: "Final Testing & Key Handover",
        description:
          "Following exhaustive quality audits and operational testing, we present you with a move-in ready building and complete documentation.",
      },
    ],
    relatedProjectSlugs: ["rha-mixed-quarter"],
    faqs: [
      {
        question: "Is a Turnkey Solution suitable for international or remote investors?",
        answer:
          "Turnkey delivery is ideal for remote investors and corporate clients because RHA Builder manages every aspect locally, providing regular video walkthroughs and digital progress dashboards.",
      },
      {
        question: "How are change requests handled during a Turnkey project?",
        answer:
          "We establish a structured change control process with formal cost-and-time impact assessments before any modification is approved and executed.",
      },
    ],
    ctaLabel: "Discuss a Turnkey Project",
    featured: true,
    sortOrder: 6,
  },
  {
    slug: "consultation",
    title: "Consultation",
    shortDescription:
      "We discuss your requirements, objectives and constraints to understand what success looks like.",
    fullDescription:
      "RHA Builder provides strategic development and construction consultation for real estate developers, commercial occupiers, land owners, and investors. During an initial consultation, our senior directors review your project vision, site feasibility, budget boundaries, timeline targets, and planning context to deliver a clear, actionable roadmap for successful project execution.",
    icon: "clipboard-document-check",
    heroImage: "/images/services/consultation.png",
    benefits: [
      "Direct strategic guidance from experienced development and construction directors",
      "In-depth analysis of project objectives, budget viability, and site constraints",
      "Early risk identification and regulatory feasibility insights",
      "Structured procurement and project delivery roadmap",
    ],
    deliverables: [
      "Initial Project Consultation & Vision Brief",
      "Preliminary Feasibility & Cost Assessment Report",
      "Planning & Regulatory Risk Overview",
      "Recommended Delivery Route & Next Steps Strategy",
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirement Discovery & Briefing",
        description:
          "We sit down with key stakeholders to understand project vision, commercial targets, space requirements, and timeline expectations.",
      },
      {
        step: 2,
        title: "Feasibility & Risk Evaluation",
        description:
          "Our team evaluates site parameters, zoning rules, budget boundaries, and supply chain logistics to identify opportunities and risks.",
      },
      {
        step: 3,
        title: "Strategic Delivery Roadmap",
        description:
          "We present a structured roadmap detailing recommended procurement routes, design team selection, and key milestone dates.",
      },
    ],
    relatedProjectSlugs: ["rha-heights", "rha-commercial-centre"],
    faqs: [
      {
        question: "Who is the consultation service designed for?",
        answer:
          "Our consultation session is ideal for landowners, real estate developers, commercial occupiers, and investors planning a new development, major refurb, or multi-phase construction project.",
      },
      {
        question: "How do I schedule a consultation with RHA Builder?",
        answer:
          "You can request a consultation by calling our office directly or submitting an enquiry through our contact form. Our senior team will get in touch to confirm an initial meeting.",
      },
    ],
    ctaLabel: "Schedule a Consultation",
    featured: true,
    sortOrder: 7,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services
    .filter((s) => s.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}
