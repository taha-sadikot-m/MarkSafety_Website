import type { ZoneId } from "./industries";

export type Product = {
  id: string;
  name: string;
  brand: string;
  zone: ZoneId;
  category: "workplace" | "fire" | "solutions";
};

export const products: Product[] = [
  { id: "hard-hat", name: "ISI Hard Hat", brand: "Karam / JSP", zone: "head", category: "workplace" },
  { id: "bump-cap", name: "Bump Cap", brand: "3M", zone: "head", category: "workplace" },
  { id: "safety-helmet", name: "Safety Helmet", brand: "Karam", zone: "head", category: "workplace" },
  { id: "mining-helmet", name: "Mining Helmet", brand: "JSP", zone: "head", category: "workplace" },
  { id: "safety-goggles", name: "Safety Goggles", brand: "3M", zone: "eyes", category: "workplace" },
  { id: "face-shield", name: "Face Shield", brand: "Honeywell", zone: "eyes", category: "workplace" },
  { id: "welding-visor", name: "Welding Visor", brand: "ESAB", zone: "eyes", category: "workplace" },
  { id: "ear-muffs", name: "Ear Muffs", brand: "3M", zone: "hearing", category: "workplace" },
  { id: "ear-plugs", name: "Ear Plugs", brand: "Honeywell", zone: "hearing", category: "workplace" },
  { id: "half-mask", name: "Half-Face Respirator", brand: "3M", zone: "respiratory", category: "workplace" },
  { id: "full-mask", name: "Full-Face Respirator", brand: "Dräger", zone: "respiratory", category: "workplace" },
  { id: "n95", name: "N95 Respirator", brand: "3M", zone: "respiratory", category: "workplace" },
  { id: "coverall", name: "Chemical Coverall", brand: "Dupont", zone: "body", category: "workplace" },
  { id: "arc-suit", name: "Arc Flash Suit", brand: "Chicago Protective", zone: "body", category: "workplace" },
  { id: "hi-vis", name: "Hi-Vis Jacket", brand: "Karam", zone: "body", category: "workplace" },
  { id: "harness", name: "Full Body Harness", brand: "Karam", zone: "fall", category: "workplace" },
  { id: "lanyard", name: "Shock Absorbing Lanyard", brand: "Karam", zone: "fall", category: "workplace" },
  { id: "gloves-cut", name: "Cut-Resistant Gloves", brand: "Ansell", zone: "hands", category: "workplace" },
  { id: "gloves-chem", name: "Chemical Gloves", brand: "Ansell", zone: "hands", category: "workplace" },
  { id: "gloves-elec", name: "Insulating Gloves", brand: "Honeywell", zone: "hands", category: "workplace" },
  { id: "safety-shoes", name: "Safety Shoes", brand: "Allen Cooper", zone: "feet", category: "workplace" },
  { id: "dielectric-boots", name: "Dielectric Boots", brand: "Honeywell", zone: "feet", category: "workplace" },
];

export function productsByZone(zone: ZoneId): Product[] {
  return products.filter((p) => p.zone === zone);
}

export const productPillars = [
  {
    id: "workplace",
    title: "Workplace Safety",
    description:
      "21 sub-categories covering every personal and site-wide protection need.",
    tagList: [
      "Neck-up",
      "Respiratory",
      "Hand",
      "Feet",
      "Fall Protection",
      "LOTO",
      "Gas Detection",
    ],
    pill: "21 Categories",
    href: "/products",
    index: "01",
  },
  {
    id: "fire",
    title: "Fire Safety",
    description: "Complete fire risk coverage for any industrial facility.",
    tagList: [
      "Extinguishers",
      "Suppression",
      "Hydrant Equipment",
      "Fire & Welding Blankets",
    ],
    pill: "4 Categories",
    href: "/products#fire-safety",
    index: "02",
  },
  {
    id: "solutions",
    title: "Safety Solutions",
    description: "Application-specific PPE bundles for specialised hazard environments.",
    tagList: [
      "Confined Space",
      "Arc Flash",
      "Chemical",
      "Welding",
      "Electrical",
      "Water Treatment",
    ],
    pill: "6 Solutions",
    href: "/products#safety-solutions",
    index: "03",
  },
] as const;

export const fireSafetyCards = [
  {
    title: "Fire Extinguishers",
    description: "Portable to trolley-mounted. ABC, CO₂, Foam, Clean Agent.",
  },
  {
    title: "Suppression Systems",
    description: "Kitchen, Total Flood, Pre-engineered panels.",
  },
  {
    title: "Fire Hydrant Equipment",
    description: "Landing valves, hose reels, branch pipes, hydrant boxes.",
  },
  {
    title: "Fire & Welding Blankets",
    description: "Smother fires. Protect from sparks and spatter.",
  },
] as const;

export const safetySolutions = [
  {
    title: "PPE for Confined Space",
    description: "Full entry kit: gas detector, harness, tripod, BA, comms",
  },
  {
    title: "PPE for Electrical Safety",
    description: "Arc-rated: insulating gloves, arc flash suit, dielectric boots",
  },
  {
    title: "PPE for Chemical Safety",
    description: "Chemical-resistant suit, full-face respirator, emergency kit",
  },
  {
    title: "Arc Flash Protection",
    description: "Complete arc flash: garments, face shield, balaclava, mats",
  },
  {
    title: "Welding Solutions",
    description: "Helmet, auto-darkening, apron, gloves, blankets, curtains",
  },
  {
    title: "Water & Waste Treatment",
    description: "Operator PPE for chemical handling at treatment plants",
  },
] as const;
