export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  updatedAt?: string;
  categories: string[];
  tags: string[];
  body: string;
  relatedProjectSlugs: string[];
  featured: boolean;
  readingTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-future-of-sustainable-residential-construction",
    title: "The Future of Sustainable Residential Construction: Innovations Shaping Modern Homes",
    excerpt:
      "Explore how RHA Builder integrates low-carbon engineering, smart energy microgrids, and biophilic architectural design into next-generation residential developments for lasting value.",
    coverImage: "/images/blog/sustainable-residential-development.jpg",
    coverImageAlt:
      "Modern sustainable luxury residential apartment complex featuring solar integration and vertical greenery at sunset",
    author: "Robert H. Anderson",
    authorRole: "Chief Development Officer",
    publishedAt: "2025-03-10",
    categories: ["Construction", "Property Insights"],
    tags: ["sustainability", "residential", "smart home", "green building", "engineering"],
    relatedProjectSlugs: ["rha-heights", "rha-park-residences"],
    featured: true,
    readingTime: "6 min read",
    body: `<div class="bg-[var(--color-surface-secondary)] p-6 rounded-xl border border-[var(--color-border)] mb-8">
  <h3 class="font-display text-lg font-semibold text-[var(--color-text-primary)] mb-2 mt-0">Key Takeaways</h3>
  <ul class="space-y-2 text-sm text-[var(--color-text-muted)] mb-0 list-disc pl-5">
    <li>Low-carbon structural engineering reduces embodied carbon emissions by up to 35% compared to conventional concrete frameworks.</li>
    <li>Integrated occupant microgrids enable real-time HVAC optimization and reduced utility overheads.</li>
    <li>Biophilic elements—including indoor air filtration and natural light orientation—directly elevate resident health and property longevity.</li>
  </ul>
</div>

<p>As urban density increases and environmental standards elevate worldwide, residential development is undergoing a fundamental transformation. Today’s homebuyers and institutional investors look far beyond surface aesthetics; they demand buildings engineered for high energy performance, structural longevity, and exceptional indoor environmental quality.</p>

<p>At <strong>RHA Builder</strong>, sustainable development is not treated as an add-on feature—it forms the core foundation of our architectural design and structural execution across every residential project.</p>

<h2>1. Low-Carbon Materials & High-Performance Envelopes</h2>

<p>Reducing a building's lifetime carbon footprint requires addressing both <em>embodied carbon</em> (the energy consumed during material extraction, manufacturing, and transport) and <em>operational carbon</em> (the energy used over the building's lifespan).</p>

<figure class="my-8">
  <img src="/images/blog/green-materials-detail.jpg" alt="Engineered timber structural framing and triple-glazed thermal glass installation" class="w-full h-auto rounded-xl object-cover shadow-md" />
  <figcaption class="text-xs text-center text-[var(--color-text-muted)] mt-2 font-sans">Figure 1: Precision engineered timber structural framing paired with argon-filled triple thermal glazing deployed at RHA developments.</figcaption>
</figure>

<p>By specifying responsibly sourced engineered timber, recycled steel alloys, and low-clinker cement formulations, RHA Builder substantially mitigates initial construction emissions. Paired with high-density thermal insulation and continuous vapor barriers, our building envelopes prevent thermal bridging and drastically lower heating and cooling demands year-round.</p>

<h2>2. Smart Microgrids & Occupant Energy Intelligence</h2>

<p>Modern residential towers are evolving from passive consumers of electricity into dynamic energy-producing assets. Through rooftop solar photovoltaic arrays and centralized battery energy storage systems (BESS), modern developments can generate and store renewable power locally.</p>

<figure class="my-8">
  <img src="/images/blog/smart-energy-dashboard.jpg" alt="Smart home occupant energy dashboard displaying solar output and HVAC efficiency" class="w-full h-auto rounded-xl object-cover shadow-md" />
  <figcaption class="text-xs text-center text-[var(--color-text-muted)] mt-2 font-sans">Figure 2: In-suite occupant interface monitoring solar energy feedback, air quality metrics, and HVAC optimization in real time.</figcaption>
</figure>

<p>Within individual residences, sub-metering infrastructure and automated climate zoning allow occupants to monitor energy consumption transparently. Automated shade sensors and variable-refrigerant flow (VRF) HVAC units adjust dynamically based on occupancy and outdoor ambient temperatures, yielding significant reductions in utility expenditure.</p>

<h2>3. Biophilic Design & Living Environments</h2>

<p>Biophilic architecture seeks to reconnect building occupants with the natural environment. In developments such as <a href="/projects/rha-heights">RHA Heights</a> and <a href="/projects/rha-park-residences">RHA Park Residences</a>, our design team prioritizes:</p>

<ul>
  <li><strong>Maximized Daylight Penetration:</strong> Deep floor plates designed with dual-aspect living spaces to reduce artificial lighting requirements.</li>
  <li><strong>Fresh Air Energy Recovery Ventilation (ERV):</strong> Continuous filtration systems that purge airborne particulates while exchanging thermal energy between incoming and outgoing airstreams.</li>
  <li><strong>Integrated Water Management:</strong> Rainwater harvesting for communal podium landscaping and greywater recycling for non-potable building services.</li>
</ul>

<h2>4. Building Long-Term Asset Value</h2>

<p>Investing in high-specification sustainable engineering protects property values against tightening energy compliance regulations and escalating energy costs. Properties designed to green building benchmarks enjoy higher tenant retention, reduced maintenance lifecycles, and superior long-term yield.</p>

<div class="my-8 p-6 border-l-4 border-[var(--color-brand-secondary)] bg-[var(--color-surface-secondary)] rounded-r-xl">
  <blockquote class="italic text-[var(--color-text-primary)] font-serif text-lg mb-0">
    "Sustainable construction is ultimately about durability and responsibility. When we design a residential tower today, we are building a structure that must perform flawlessly for the next fifty years."
  </blockquote>
  <cite class="block text-xs font-semibold text-[var(--color-brand-secondary)] uppercase tracking-wider mt-3 font-sans opacity-90">— Robert H. Anderson, Chief Development Officer</cite>
</div>

<p>To learn more about how RHA Builder incorporates progressive engineering into upcoming residential developments, visit our <a href="/projects">Projects Showcase</a> or connect with our development team today.</p>`,
  },
  {
    slug: "what-to-look-for-in-a-new-residential-development",
    title: "What to Look For in a New Residential Development",
    excerpt:
      "When evaluating a new residential development, the quality of the construction, the developer's track record and the functionality of the spaces matter as much as location and price. Here are the key considerations buyers should review.",
    coverImage: "/images/blog/residential-development-guide.jpg",
    coverImageAlt:
      "Modern residential apartment building exterior with landscaped approach",
    author: "Elena Rostova",
    authorRole: "Head of Residential Sales",
    publishedAt: "2025-01-15",
    categories: ["Property Insights"],
    tags: ["residential", "buying guide", "new development"],
    body: `<p>Buying a home in a new development involves a different set of considerations compared with purchasing an existing property. Understanding the developer's approach, the quality of materials and the specification of the finished apartment can make a significant difference to the long-term value and enjoyment of your home.</p>

<h2>Developer Track Record</h2>
<p>Before committing to a purchase in any new development, it is worth researching the developer's history. Look for completed projects you can visit or speak to residents about, and ask about the handover process and any post-completion support the developer offers.</p>

<h2>Specification and Finish</h2>
<p>The specification document for a new development outlines the materials, fittings and systems that will be used in each apartment. Review this carefully — kitchen quality, flooring, sanitaryware and building services all affect long-term running costs and quality of life.</p>

<h2>Common Areas and Building Management</h2>
<p>Shared spaces — lobbies, lifts, landscaped areas, amenities — are important indicators of overall project quality. Ask how the building will be managed after completion, and what service charge arrangements are proposed.</p>

<h2>Location and Connectivity</h2>
<p>Consider not just the address but the direction of travel for the surrounding area. Good access to public transport, shops, schools and employment is as important in five years as it is today.</p>

<p><em>This article provides general information only. Always seek independent legal and financial advice when making a property purchase decision.</em></p>`,
    relatedProjectSlugs: ["rha-heights", "rha-park-residences"],
    featured: false,
    readingTime: "4 min read",
  },
  {
    slug: "commercial-property-what-occupiers-need-in-2025",
    title: "Commercial Property: What Occupiers Need in 2025",
    excerpt:
      "The requirements of commercial property occupiers are evolving. Flexibility, building quality, sustainability credentials and occupier well-being are increasingly central to commercial leasing decisions.",
    coverImage: "/images/blog/commercial-property-2025.jpg",
    coverImageAlt: "Modern office building interior with open plan workspace",
    author: "Marcus Vance",
    authorRole: "Commercial Leasing Director",
    publishedAt: "2025-02-08",
    categories: ["Property Insights", "Commercial"],
    tags: ["commercial property", "office", "occupier trends"],
    body: `<p>Commercial property occupiers are making increasingly considered decisions about the buildings they choose to occupy. The quality of the working environment, flexibility of the space and the building's environmental credentials are now central to many commercial leasing decisions.</p>

<h2>Flexibility of Space</h2>
<p>The demand for flexible floor plates — spaces that can be configured differently as an organisation's needs change — is growing. Buildings with column-free floors, good natural light and accessible services infrastructure offer occupiers greater long-term flexibility.</p>

<h2>Building Quality and Specification</h2>
<p>The quality of the building fabric, lift systems, air handling and data infrastructure matters significantly for commercial occupiers. A building that is pleasant to work in and cheap to run offers a clear competitive advantage in occupier retention and attraction.</p>

<h2>Location and Accessibility</h2>
<p>While connectivity has always mattered in commercial property, the availability of cycling infrastructure, public transport options and local amenity is increasingly influencing occupier decisions beyond pure car-parking ratios.</p>

<p><em>This article provides general market commentary. Property decisions should always be supported by independent professional advice.</em></p>`,
    relatedProjectSlugs: ["rha-commercial-centre"],
    featured: false,
    readingTime: "3 min read",
  },
  {
    slug: "rha-builder-company-update",
    title: "RHA Builder: Company Update & Portfolio Growth",
    excerpt:
      "An update from the RHA Builder leadership team on ongoing project milestones, team growth, and upcoming master-planned developments.",
    coverImage: "/images/blog/company-update.jpg",
    coverImageAlt: "RHA Builder executive team inspecting architectural site plans on site",
    author: "RHA Editorial Team",
    authorRole: "Corporate Communications",
    publishedAt: "2025-03-01",
    categories: ["Company News"],
    tags: ["company news", "update", "projects"],
    body: `<p>We are pleased to share a comprehensive update on the RHA Builder business and our expanding project portfolio across residential and commercial developments.</p>

<h2>Current Projects & Milestones</h2>
<p>RHA Builder currently has 3 major developments actively underway. Construction at <a href="/projects/rha-heights">RHA Heights</a> reached its superstructure milestone on schedule in Q1 2025, while pre-leasing interest for <a href="/projects/rha-commercial-centre">RHA Commercial Centre</a> remains strong.</p>

<h2>Team & Engineering Capability</h2>
<p>Our project delivery and sustainability engineering teams continue to expand to support complex development requirements. We have recently added senior specialists in BIM modeling and low-carbon structural engineering.</p>

<h2>Looking Ahead</h2>
<p>We remain steadfast in our commitment to delivering benchmark quality across residential and commercial spaces. Further announcements regarding our upcoming master-planned quarter will be shared later this quarter.</p>

<p>If you have a project or development enquiry, please <a href="/contact">contact our team</a>.</p>`,
    relatedProjectSlugs: ["rha-heights", "rha-commercial-centre"],
    featured: false,
    readingTime: "2 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getLatestBlogPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}

export const blogCategories = [
  "All",
  "Company News",
  "Project Updates",
  "Property Insights",
  "Commercial",
  "Construction",
];
