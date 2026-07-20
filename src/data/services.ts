export const servicesIntro = {
  eyebrow: "Professional Services",
  title: "Engineering & Safety Services",
  body: "End-to-end engineering solutions designed to create safer workplaces, ensure compliance, and protect what matters most.",
  ctaPrompt: "Need a custom solution?",
  ctaLabel: "Talk to our experts",
  ctaHref: "/contact",
} as const;

export const services = [
  {
    id: "safety-training",
    title: "Safety Training",
    oneLiner:
      "Build a safety-first culture through practical training programs.",
    angleDeg: -90,
    icon: "training",
  },
  {
    id: "fire-safety",
    title: "Fire Safety Solutions",
    oneLiner:
      "Design, equipment, and maintenance for complete fire safety compliance.",
    angleDeg: -38.57,
    icon: "flame",
  },
  {
    id: "loto",
    title: "LOTO Solutions",
    oneLiner: "Energy isolation, LOTO procedures & safety implementation.",
    angleDeg: 12.86,
    icon: "loto",
  },
  {
    id: "compliance",
    title: "Compliance & Validation",
    oneLiner:
      "Re-validation, inspections and certification for safety systems.",
    angleDeg: 64.29,
    icon: "compliance",
  },
  {
    id: "ehs-docs",
    title: "EHS Documentation",
    oneLiner:
      "Professionally prepared EHS drawings, plans & compliance documents.",
    angleDeg: 115.71,
    icon: "docs",
  },
  {
    id: "gas-calibration",
    title: "Gas Detector Calibration",
    oneLiner:
      "NABL certified calibration for portable and fixed gas detectors.",
    angleDeg: 167.14,
    icon: "gauge",
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    oneLiner:
      "Identify hazards, evaluate risks and prioritize control measures.",
    angleDeg: 218.57,
    icon: "clipboard",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

export const footerServices = [
  "Training",
  "Calibration",
  "Engineering",
  "Maintenance",
  "Compliance",
  "Documentation",
] as const;

export const footerProducts = [
  { label: "PPE", href: "/products" },
  { label: "Fire Safety", href: "/products#fire-safety" },
  { label: "LOTO", href: "/products" },
  { label: "Gas Detection", href: "/products" },
  { label: "Electrical Safety", href: "/products" },
  { label: "Fall Protection", href: "/products" },
] as const;
