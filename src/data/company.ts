export const company = {
  name: "Mark Safety Appliances",
  founded: 1997,
  tagline: "Protect what's valued.",
  businessHead: "Mr. Nilesh Zaveri",
  businessHeadTitle: "Business Head",
  directorRole: "Founder & Director",
  directorDisplayName: "NILESH ZAVERI",
  directorSignature: "Nilesh Zaveri",
  philosophyEyebrow: "Our Philosophy",
  philosophyHeadline: {
    lead: "ENGINEERING",
    accent: "BEFORE",
    trail: "EQUIPMENT",
  },
  philosophyIntro:
    "We believe that true safety begins long before any product is installed. It begins with understanding, planning, engineering, and a commitment to protecting people.",
  directorSupporting:
    "With this belief, we started Mark Safety in 1997 with a simple mission — to create safer workplaces through engineering, integrity, and partnership.",
  directorPortrait: {
    src: "/images/nilesh-zaveri.png",
    alt: "Mr. Nilesh Zaveri, Founder & Director of Mark Safety Appliances",
  },
  directorWireframe: {
    src: "/wireframe.png",
    alt: "",
  },
  phones: {
    primary: "+91 98250 24661",
    secondary: "+91 99250 11758",
    landline: "02668 299065",
  },
  emails: {
    solution: "solution@marksafety.com",
    info: "info@marksafety.com",
  },
  website: "www.marksafety.com",
  address:
    "Plot No. 92, 93, Shah Industrial Park-3, Kotambi-391510, Vadodara-Halol Highway, Dist. Vadodara, Gujarat, India",
  hours: "Mon–Sat, 8:30 AM – 6:00 PM",
  whatsapp: "https://wa.link/qp5col",
  sama: "SAMA Permanent Member #237",
  samaDetail: "Safety Appliances Manufacturers Association · Permanent Member No. 237 · 2024–25",
  award: {
    title: "First Prize — Best Display",
    category: "Fire Safety Category",
    event: "Dahej Industrial Expo 2022",
  },
  stats: {
    customers: 2486,
    projects: 147,
    awards: 78,
    partners: 132,
    years: 27,
  },
  directorQuote:
    "Progress has never been a dream. Every milestone is simply the beginning of the next.",
  directorBio:
    "Under the leadership of Mr. Nilesh Zaveri, Mark Safety has grown from a focused PPE supplier into a trusted industrial safety partner serving plants across India.",
  directorClosing: "Our best is yet to come…",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Shah+Industrial+Park-3+Kotambi+Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed",
  catalogueUrl: "#catalogue",
} as const;

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
] as const;

export const marqueeItems = [
  "PPE",
  "Fire Safety",
  "Gas Detection",
  "LOTO",
  "Electrical Safety",
  "Training",
  "Compliance",
  "Engineering",
] as const;

export const introNarrative = [
  `Founded in 1997 in Vadodara, Mark Safety grew from a PPE supplier into a complete industrial safety partner — products, engineering, compliance, and training under one roof.`,
  `We support chemical, pharmaceutical, power, and manufacturing sites nationwide, understanding workplace risk before recommending solutions.`,
] as const;

export const introImage = {
  src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
  alt: "Industrial engineer overlooking a manufacturing facility",
} as const;

export const introMetrics = [
  {
    value: 30,
    suffix: "+",
    label: "Years",
    icon: "shield" as const,
    description: "of Experience",
  },
  {
    value: 500,
    suffix: "+",
    label: "Safety",
    icon: "hardhat" as const,
    description: "Products",
  },
  {
    value: 8,
    suffix: "+",
    label: "Professional",
    icon: "gears" as const,
    description: "Services",
  },
  {
    value: 8,
    suffix: "+",
    label: "Industries",
    icon: "factory" as const,
    description: "Served",
  },
] as const;

export const introMobileCta = {
  text: "Our journey is built on trust, expertise and a commitment to safety.",
  linkLabel: "Read Our Story",
  href: "/about",
  image: {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    alt: "White hard hat with safety goggles and gloves on a workbench",
  },
} as const;

export const whatWeDoMobileStrip = {
  label: "One Partner. Every Safety Need.",
} as const;

export const businessPillars = [
  {
    id: "products",
    shortLabel: "Products",
    title: "Industrial Safety Products",
    description:
      "A comprehensive range of workplace safety products from trusted global manufacturers and our own quality-controlled line — ready for India's most demanding sites.",
    nodeBlurb: "Safety products for every workplace.",
    mobileBlurb: "Premium quality safety products from trusted global brands.",
    cta: "Explore Products",
    href: "/products",
    icon: "shield" as const,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Personal Protective Equipment",
      "Fire Safety Equipment",
      "Fall Protection Systems",
      "Gas Detection Solutions",
      "LOTO & Electrical Safety",
    ],
    mobileFeatures: [
      "PPE & Workwear",
      "Fire Safety Equipment",
      "Gas Detection",
      "Fall Protection",
      "Electrical Safety",
    ],
    metrics: [
      { value: "500+", label: "Safety Products" },
      { value: "30+", label: "Years of Expertise" },
      { value: "50+", label: "Trusted Brands" },
      { value: "Pan India", label: "Distribution" },
    ],
  },
  {
    id: "services",
    shortLabel: "Services",
    title: "Engineering & Compliance Services",
    description:
      "Expert engineering consultancy, EHS documentation, compliance management, and technical services that turn safety policy into everyday practice on site.",
    nodeBlurb: "Engineering, compliance, and maintenance.",
    mobileBlurb: "Engineering, audits, training and on-site compliance support.",
    cta: "Explore Services",
    href: "/services",
    icon: "gears" as const,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Risk Assessment & Safety Audits",
      "EHS Documentation & Drawings",
      "Safety Training Programmes",
      "Gas Detector Calibration",
      "Fire Extinguisher Maintenance",
    ],
    mobileFeatures: [
      "Risk & Safety Audits",
      "EHS Documentation",
      "Safety Training",
      "Gas Calibration",
      "Fire Maintenance",
    ],
    metrics: [
      { value: "8+", label: "Core Services" },
      { value: "30+", label: "Years of Expertise" },
      { value: "1000+", label: "Satisfied Clients" },
      { value: "Pan India", label: "Service Network" },
    ],
  },
  {
    id: "solutions",
    shortLabel: "Solutions",
    title: "Industry-Specific Solutions",
    description:
      "Customised safety programmes designed for chemical, pharmaceutical, power, manufacturing, and engineering environments — matched to real workplace hazards.",
    nodeBlurb: "Industry solutions for real hazards.",
    mobileBlurb: "Hazard-matched programmes for plants and industrial sites.",
    cta: "View Solutions",
    href: "/industries",
    icon: "building" as const,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Chemical & Pharma Plant Safety",
      "Power & Utility Protection",
      "Manufacturing Floor Programmes",
      "Engineering Site Solutions",
      "Hazard-Mapped PPE Bundles",
    ],
    mobileFeatures: [
      "Chemical & Pharma",
      "Power & Utilities",
      "Manufacturing",
      "Engineering Sites",
      "PPE Bundles",
    ],
    metrics: [
      { value: "8+", label: "Industries Served" },
      { value: "30+", label: "Years of Expertise" },
      { value: "1000+", label: "Sites Supported" },
      { value: "Pan India", label: "Coverage" },
    ],
  },
] as const;

export const capabilityHubBackground =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=60";

export const whyChooseFeatures = [
  {
    title: "Nearly 30 Years Experience",
    body: "Not just products — decades of industrial expertise.",
  },
  {
    title: "Complete Safety Solutions",
    body: "Products, services, training, consultancy, and maintenance.",
  },
  {
    title: "Engineering-Driven Approach",
    body: "Every recommendation starts with understanding the workplace.",
  },
  {
    title: "Certified Quality",
    body: "Products sourced from trusted national and international manufacturers.",
  },
  {
    title: "Fast Response",
    body: "Quick product delivery, rapid technical support, and on-site services.",
  },
  {
    title: "Long-Term Partnership",
    body: "We don't sell products. We build long-term safety partnerships.",
  },
] as const;

export const journeyIntro = {
  eyebrow: "Our Journey",
  headerSubtext:
    "Nearly three decades of decisions that put workplace safety first.",
  body: "Every milestone represents a decision to raise the bar, expand our capabilities, and deliver greater value to our customers.",
  ctaLabel: "Our Story",
  ctaHref: "/about",
} as const;

export const journeyMilestones = [
  {
    year: "1997",
    title: "Started Small",
    description: "Began as a focused PPE supplier serving industry in Vadodara.",
    icon: "home" as const,
    highlight: false,
  },
  {
    year: "2002",
    title: "Expanded Range",
    description: "Grew product categories and coverage across industrial sites.",
    icon: "package" as const,
    highlight: false,
  },
  {
    year: "2008",
    title: "Training Focus",
    description: "Added workplace safety training to build safer teams on site.",
    icon: "presentation" as const,
    highlight: false,
  },
  {
    year: "2015",
    title: "Compliance",
    description: "Strengthened consultancy and compliance support for plants.",
    icon: "clipboard" as const,
    highlight: false,
  },
  {
    year: "2020",
    title: "Engineering",
    description: "Engineering-driven solutions for complex industrial challenges.",
    icon: "factory" as const,
    highlight: false,
  },
  {
    year: "2024+",
    title: "Continuing Forward",
    description:
      "Innovating, improving and building a safer India for decades to come.",
    icon: "trending" as const,
    highlight: true,
  },
] as const;

export const journeyBenefits = [
  {
    title: "Proven Experience",
    body: "Decades of real-world industry knowledge.",
    icon: "shield" as const,
  },
  {
    title: "End-to-End Solutions",
    body: "From products to training to compliance.",
    icon: "target" as const,
  },
  {
    title: "Reliable Partner",
    body: "Trusted by industries across India.",
    icon: "users" as const,
  },
  {
    title: "Future Ready",
    body: "Continuously evolving with industry needs.",
    icon: "award" as const,
  },
] as const;

export const safetyProcessIntro = {
  eyebrow: "How We Work",
  title: "Our Proven Safety Approach",
  body: "A systematic, engineering-driven process that ensures complete protection for your people, operations and productivity.",
} as const;

export const safetyProcessPromise = {
  title: "Our Promise",
  body: "Every step is executed with precision, documentation and accountability.",
} as const;

export const safetyProcess = [
  {
    step: "01",
    title: "Site Survey",
    body: "We study your site in detail to understand operations, hazards and compliance requirements.",
    icon: "search" as const,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Site Inspection",
      "Hazard Mapping",
      "Documentation",
      "Compliance Review",
    ],
    detailsHref: "/services",
    pdfHref: "#catalogue",
  },
  {
    step: "02",
    title: "Risk Assessment",
    body: "Identify exposure points, evaluate risks and prioritize critical safety concerns.",
    icon: "shield" as const,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Exposure Analysis",
      "Risk Ranking",
      "Priority Matrix",
      "Mitigation Plan",
    ],
    detailsHref: "/services",
    pdfHref: "#catalogue",
  },
  {
    step: "03",
    title: "Solution Design",
    body: "Engineered safety solutions and compliance plans tailored to your workplace and operations.",
    icon: "monitor" as const,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Engineering Drawings",
      "PPE Specification",
      "Compliance Plan",
      "Implementation Roadmap",
    ],
    detailsHref: "/services",
    pdfHref: "#catalogue",
  },
  {
    step: "04",
    title: "Product Supply",
    body: "Supply certified, quality assured safety equipment from trusted global brands.",
    icon: "package" as const,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Certified PPE",
      "Brand Selection",
      "Quality Assurance",
      "On-Time Delivery",
    ],
    detailsHref: "/products",
    pdfHref: "#catalogue",
  },
  {
    step: "05",
    title: "Training",
    body: "Equip your team with practical training and awareness for a safer work environment.",
    icon: "presentation" as const,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Practical Workshops",
      "Awareness Modules",
      "Competency Checks",
      "Training Records",
    ],
    detailsHref: "/services",
    pdfHref: "#catalogue",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    body: "Ongoing calibration, maintenance and technical support whenever you need it.",
    icon: "wrench" as const,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    deliverables: [
      "Calibration",
      "Preventive Maintenance",
      "Technical Support",
      "Service Reports",
    ],
    detailsHref: "/services",
    pdfHref: "#catalogue",
  },
] as const;

export const safetyProcessPillars = [
  {
    title: "Planning",
    body: "We plan every detail for maximum safety.",
    icon: "clipboard" as const,
  },
  {
    title: "Execution",
    body: "We implement with precision and care.",
    icon: "cog" as const,
  },
  {
    title: "Verification",
    body: "We verify, test and document everything.",
    icon: "badge" as const,
  },
  {
    title: "Improvement",
    body: "We continually improve for better safety.",
    icon: "trending" as const,
  },
] as const;

export const safetyProcessCta = {
  tagline: "One Process. Complete Protection.",
  linkLabel: "Let's Work Together",
  href: "/contact",
} as const;

export const featuredCategories = [
  {
    title: "Personal Protective Equipment",
    description: "Head-to-toe protection for every industrial task.",
    count: "200+ products",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fire Safety Equipment",
    description: "Extinguishers, suppression, hydrants, and blankets.",
    count: "40+ products",
    href: "/products#fire-safety",
    image:
      "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gas Detection",
    description: "Portable and fixed systems for hazardous atmospheres.",
    count: "30+ products",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1581092162384-89877fd62ce0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Electrical Safety",
    description: "Arc flash, insulating PPE, and dielectric protection.",
    count: "50+ products",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fall Protection",
    description: "Harnesses, lifelines, and height-safety systems.",
    count: "45+ products",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "LOTO Systems",
    description: "Lockout-tagout kits, procedures, and isolation hardware.",
    count: "35+ products",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const trustMetrics = [
  { value: 30, suffix: "+", label: "Years Protecting Industry" },
  { value: 2500, suffix: "+", label: "Industrial Customers" },
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 130, suffix: "+", label: "Business Partners" },
] as const;

export const recognitionItems = [
  {
    label: "2022",
    title: "Industry Award",
    detail: "First Prize — Best Display, Fire Safety, Dahej Expo 2022",
  },
  {
    label: "2024",
    title: "SAMA Membership",
    detail: "Permanent Member No. 237 · 2024–25",
  },
  {
    label: "Certs",
    title: "Certificates",
    detail: "Compliance credentials and manufacturer authorisations",
  },
  {
    label: "Plant",
    title: "Manufacturing Facility",
    detail: "Vadodara facility supporting quality and supply reliability",
  },
  {
    label: "Quality",
    title: "Quality Commitment",
    detail: "Trusted brands, tested products, accountable delivery",
  },
] as const;

export const values = ["Integrity", "Honesty", "Competency", "Respect"] as const;

/** @deprecated Use whyChooseFeatures */
export const whyChooseUs = whyChooseFeatures;
