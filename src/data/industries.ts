export type IndustryId =
  | "pharma"
  | "chemical"
  | "petrochem"
  | "engineering"
  | "electrical"
  | "fertilizer"
  | "automobile"
  | "power";

export type ZoneId =
  | "head"
  | "eyes"
  | "hearing"
  | "respiratory"
  | "body"
  | "fall"
  | "hands"
  | "feet";

export type ChallengeIcon =
  | "toxic"
  | "spill"
  | "fire"
  | "exposure"
  | "arc"
  | "impact"
  | "dust"
  | "height";

export const industries: {
  id: IndustryId;
  label: string;
  shortLabel: string;
  icon: string;
  primaryZones: ZoneId[];
  secondaryZones: ZoneId[];
  description: string;
  hazards: string;
  keyChallenges: { label: string; icon: ChallengeIcon }[];
  image: string;
}[] = [
  {
    id: "chemical",
    label: "Chemical",
    shortLabel: "Chemical",
    icon: "beaker",
    primaryZones: ["head", "eyes", "hearing", "respiratory", "body", "fall", "hands", "feet"],
    secondaryZones: [],
    description:
      "Managing hazardous chemicals with precision-engineered safety solutions.",
    hazards: "Chemical splash · Inhalation · Spills · Confined space",
    keyChallenges: [
      { label: "Toxic Exposure", icon: "toxic" },
      { label: "Spill Control", icon: "spill" },
      { label: "Fire Risk", icon: "fire" },
    ],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "pharma",
    label: "Pharmaceutical",
    shortLabel: "Pharma",
    icon: "flask",
    primaryZones: ["body", "hands", "respiratory", "eyes"],
    secondaryZones: ["head", "feet"],
    description:
      "Ensuring clean, compliant and safe environments in high-precision operations.",
    hazards: "APIs · Cleanroom · Exposure · Cross-contamination",
    keyChallenges: [
      { label: "API Exposure", icon: "exposure" },
      { label: "Cleanroom", icon: "dust" },
      { label: "Contamination", icon: "toxic" },
    ],
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "petrochem",
    label: "Petrochemical",
    shortLabel: "Petrochem",
    icon: "droplets",
    primaryZones: ["head", "respiratory", "body", "fall"],
    secondaryZones: ["hands", "feet", "eyes"],
    description:
      "Protecting people and assets in complex, high-risk process industries.",
    hazards: "Flammable atmospheres · H₂S · Height · Hot work",
    keyChallenges: [
      { label: "Flammable Gas", icon: "fire" },
      { label: "H₂S Exposure", icon: "toxic" },
      { label: "Work at Height", icon: "height" },
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "power",
    label: "Power",
    shortLabel: "Power",
    icon: "battery",
    primaryZones: ["body", "hands", "head", "fall"],
    secondaryZones: ["feet", "eyes"],
    description:
      "Delivering safety for power generation, transmission and distribution.",
    hazards: "Arc flash · Height · Confined space · Switching",
    keyChallenges: [
      { label: "Arc Flash", icon: "arc" },
      { label: "Work at Height", icon: "height" },
      { label: "Switching", icon: "impact" },
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "engineering",
    label: "Engineering",
    shortLabel: "Engineering",
    icon: "cog",
    primaryZones: ["head", "eyes", "hands", "feet"],
    secondaryZones: ["body", "hearing"],
    description:
      "Enabling safety manufacturing and fabrication across heavy engineering sectors.",
    hazards: "Impact · Cuts · Noise · Falling objects",
    keyChallenges: [
      { label: "Impact Injury", icon: "impact" },
      { label: "Falling Objects", icon: "height" },
      { label: "Noise Risk", icon: "dust" },
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "automobile",
    label: "Automobile",
    shortLabel: "Automobile",
    icon: "car",
    primaryZones: ["eyes", "hands", "feet", "hearing"],
    secondaryZones: ["head", "body"],
    description:
      "Building safer assembly lines and workplaces in fast-paced automotive plants.",
    hazards: "Welding · Chemicals · Noise · Repetitive tasks",
    keyChallenges: [
      { label: "Welding Fume", icon: "fire" },
      { label: "Chemical Use", icon: "spill" },
      { label: "Noise Risk", icon: "impact" },
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "electrical",
    label: "Electrical",
    shortLabel: "Electrical",
    icon: "zap",
    primaryZones: ["hands", "body", "feet"],
    secondaryZones: ["head", "eyes", "respiratory"],
    description:
      "Preventing electrical hazards and ensuring compliance in every connection.",
    hazards: "Shock · Arc flash · Live work · Switchgear",
    keyChallenges: [
      { label: "Electric Shock", icon: "arc" },
      { label: "Arc Flash", icon: "fire" },
      { label: "Live Work", icon: "impact" },
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fertilizer",
    label: "Fertilizer",
    shortLabel: "Fertilizer",
    icon: "sprout",
    primaryZones: ["respiratory", "body", "eyes"],
    secondaryZones: ["hands", "feet", "head"],
    description:
      "Addressing unique risks in fertilizer production and handling.",
    hazards: "Ammonia · Dust · Corrosives · Confined space",
    keyChallenges: [
      { label: "Ammonia Gas", icon: "toxic" },
      { label: "Dust Exposure", icon: "dust" },
      { label: "Corrosives", icon: "spill" },
    ],
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80",
  },
];
