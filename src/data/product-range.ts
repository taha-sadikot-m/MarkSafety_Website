export type ProductRangeFeatureIcon =
  | "check"
  | "shield"
  | "award"
  | "zap"
  | "flame"
  | "lock"
  | "gauge"
  | "hardHat";

export type ProductRangeItem = {
  name: string;
  description: string;
  image: string;
  features: { icon: ProductRangeFeatureIcon; label: string }[];
  href: string;
};

export type ProductRangeZoneIcon =
  | "head"
  | "eye"
  | "ear"
  | "lungs"
  | "hand"
  | "body"
  | "fall"
  | "foot";

export type ProductRangeHotspot = {
  id: string;
  label: string;
  items: string;
  side: "left" | "right";
  /** Percentage positions relative to hero stage */
  x: number;
  y: number;
  /** Optional — used when syncing PPE sub-category icons */
  icon?: ProductRangeZoneIcon;
  item: ProductRangeItem;
};

export type ProductRangeSubItem = {
  id: string;
  label: string;
  icon:
    | ProductRangeZoneIcon
    | "extinguisher"
    | "sensor"
    | "bolt"
    | "tag";
  item: ProductRangeItem;
};

export type ProductRangeCategory = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  blurb: string;
  icon: "hardHat" | "flame" | "gauge" | "zap" | "lock" | "fall";
  href: string;
  heroImage: string;
  hotspots: ProductRangeHotspot[];
  subCategories: ProductRangeSubItem[];
  subCategoriesLabel: string;
  defaultItem: ProductRangeItem;
};

export const productRangeIntro =
  "Certified PPE, fire safety, gas detection, and lockout systems from trusted global brands — engineered for India's most demanding industrial sites.";

const helmetItem: ProductRangeItem = {
  name: "Safety Helmet",
  description:
    "ISI & EN certified industrial helmets for impact, electrical, and site hazards — from everyday hard hats to mining-grade protection.",
  image:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "ISI & EN Certified" },
    { icon: "shield", label: "High Impact Resistance" },
    { icon: "zap", label: "Electrical Insulation Options" },
    { icon: "hardHat", label: "Adjustable Suspension" },
  ],
  href: "/products",
};

const eyeItem: ProductRangeItem = {
  name: "Safety Goggles",
  description:
    "Impact-rated eyewear and face shields for grinding, chemical splash, and welding environments.",
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "ANSI / EN Impact Rated" },
    { icon: "shield", label: "Anti-Fog Coatings" },
    { icon: "award", label: "UV & Splash Protection" },
    { icon: "hardHat", label: "Compatible with Helmets" },
  ],
  href: "/products",
};

const hearingItem: ProductRangeItem = {
  name: "Hearing Protection",
  description:
    "Ear muffs and plugs engineered for high-noise industrial floors and continuous wear comfort.",
  image:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "High NRR / SNR Ratings" },
    { icon: "shield", label: "Comfort for Long Shifts" },
    { icon: "award", label: "Disposable & Reusable" },
    { icon: "hardHat", label: "Helmet-Mount Options" },
  ],
  href: "/products",
};

const respiratoryItem: ProductRangeItem = {
  name: "Respiratory Protection",
  description:
    "Half-face, full-face, and disposable respirators for dust, fumes, and chemical atmospheres.",
  image:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "N95 to P100 Filters" },
    { icon: "shield", label: "Chemical Cartridge Options" },
    { icon: "gauge", label: "Fit-Test Compatible" },
    { icon: "award", label: "Trusted Global Brands" },
  ],
  href: "/products",
};

const handItem: ProductRangeItem = {
  name: "Hand Protection",
  description:
    "Cut-resistant, chemical, and insulating gloves for fabrication, process, and electrical work.",
  image:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "Cut Levels A1–A9" },
    { icon: "shield", label: "Chemical Resistance" },
    { icon: "zap", label: "Electrical Insulation" },
    { icon: "award", label: "Dexterity-Focused Fit" },
  ],
  href: "/products",
};

const bodyItem: ProductRangeItem = {
  name: "Body Protection",
  description:
    "Coveralls, arc flash suits, and hi-vis garments built for chemical, thermal, and site visibility needs.",
  image:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "Chemical & Arc Options" },
    { icon: "shield", label: "Flame-Resistant Fabrics" },
    { icon: "award", label: "Hi-Vis Compliance" },
    { icon: "hardHat", label: "Full Coverage Systems" },
  ],
  href: "/products",
};

const fallItem: ProductRangeItem = {
  name: "Full Body Harness",
  description:
    "Full-body harnesses, lanyards, and lifelines for work-at-height and confined-space rescue readiness.",
  image:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "EN 361 Certified" },
    { icon: "shield", label: "Ergonomic Design" },
    { icon: "award", label: "High Strength Webbing" },
    { icon: "hardHat", label: "Multiple Adjustment Points" },
  ],
  href: "/products",
};

const footItem: ProductRangeItem = {
  name: "Foot Protection",
  description:
    "Safety shoes and dielectric boots for impact, puncture, slip, and electrical hazards.",
  image:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "Steel / Composite Toe" },
    { icon: "shield", label: "Slip-Resistant Outsoles" },
    { icon: "zap", label: "Dielectric Options" },
    { icon: "award", label: "IS / EN Certified" },
  ],
  href: "/products",
};

/** PPE (i1): worker from behind — hard hat, orange harness, gloves */
const ppeHotspots: ProductRangeHotspot[] = [
  {
    id: "head",
    label: "Head Protection",
    items: "Helmets, bump caps & accessories.",
    side: "left",
    x: 50,
    y: 12,
    icon: "head",
    item: helmetItem,
  },
  {
    id: "eyes",
    label: "Eye Protection",
    items: "Safety glasses, goggles & face shields.",
    side: "left",
    x: 48,
    y: 18,
    icon: "eye",
    item: eyeItem,
  },
  {
    id: "hearing",
    label: "Hearing Protection",
    items: "Earplugs, earmuffs & communication.",
    side: "right",
    x: 54,
    y: 16,
    icon: "ear",
    item: hearingItem,
  },
  {
    id: "respiratory",
    label: "Respiratory Protection",
    items: "Masks, respirators & filter cartridges.",
    side: "right",
    x: 50,
    y: 24,
    icon: "lungs",
    item: respiratoryItem,
  },
  {
    id: "hands",
    label: "Hand Protection",
    items: "Safety gloves for every application.",
    side: "left",
    x: 42,
    y: 48,
    icon: "hand",
    item: handItem,
  },
  {
    id: "body",
    label: "Body Protection",
    items: "Coveralls, aprons & high-visibility wear.",
    side: "right",
    x: 50,
    y: 40,
    icon: "body",
    item: bodyItem,
  },
  {
    id: "fall",
    label: "Fall Protection",
    items: "Harnesses, lanyards & anchor systems.",
    side: "right",
    x: 50,
    y: 32,
    icon: "fall",
    item: fallItem,
  },
  {
    id: "feet",
    label: "Foot Protection",
    items: "Safety shoes, boots & covers.",
    side: "left",
    x: 48,
    y: 92,
    icon: "foot",
    item: footItem,
  },
];

const ppeSubCategories: ProductRangeSubItem[] = ppeHotspots.map((h) => ({
  id: h.id,
  label: h.label.replace(" Protection", ""),
  icon: h.icon!,
  item: h.item,
}));

const fireExtinguisherItem: ProductRangeItem = {
  name: "Fire Extinguisher",
  description:
    "ABC, CO₂, foam, and clean-agent extinguishers with hydrant and suppression system support.",
  image:
    "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "check", label: "ISI Certified" },
    { icon: "flame", label: "High Fire Rating" },
    { icon: "shield", label: "Corrosion Resistant" },
    { icon: "award", label: "Easy To Operate" },
    { icon: "gauge", label: "Multiple Capacities" },
  ],
  href: "/products#fire-safety",
};

const fireHotspots: ProductRangeHotspot[] = [
  {
    id: "smoke",
    label: "Smoke Detection",
    items: "Detectors, alarms & accessories.",
    side: "left",
    x: 46,
    y: 14,
    item: {
      name: "Smoke Detectors",
      description:
        "Optical and heat detectors with accessories for early fire warning.",
      image:
        "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Optical & Heat Types" },
        { icon: "shield", label: "Addressable Options" },
        { icon: "gauge", label: "Low False Alarms" },
        { icon: "award", label: "Easy Maintenance" },
      ],
      href: "/products#fire-safety",
    },
  },
  {
    id: "alarm",
    label: "Fire Alarm System",
    items: "Manual call points, sounders & panels.",
    side: "left",
    x: 70,
    y: 8,
    item: {
      name: "Fire Alarm Panel",
      description:
        "Manual call points, sounders, and control panels for site-wide alerting.",
      image:
        "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Call Points" },
        { icon: "flame", label: "Sounders & Strobes" },
        { icon: "shield", label: "Zone Panels" },
        { icon: "award", label: "Code Compliant" },
      ],
      href: "/products#fire-safety",
    },
  },
  {
    id: "extinguishers",
    label: "Fire Extinguishers",
    items: "ABC, CO2, foam & special types.",
    side: "left",
    x: 39,
    y: 65,
    item: fireExtinguisherItem,
  },
  {
    id: "hose",
    label: "Fire Hose & Reel",
    items: "Hose reels, hoses & nozzles.",
    side: "left",
    x: 55,
    y: 54,
    item: {
      name: "Hose Reel Systems",
      description:
        "Hose reels, hoses, and nozzles for industrial fire response networks.",
      image:
        "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Swing & Fixed Reels" },
        { icon: "flame", label: "Nozzle Sets" },
        { icon: "shield", label: "Cabinet Options" },
        { icon: "award", label: "Industrial Duty" },
      ],
      href: "/products#fire-safety",
    },
  },
  {
    id: "hydrants",
    label: "Fire Hydrants",
    items: "External, internal & landing valves.",
    side: "left",
    x: 78,
    y: 40,
    item: {
      name: "Hydrant Systems",
      description:
        "Landing valves, hydrant accessories, and network fittings for plants.",
      image:
        "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Landing Valves" },
        { icon: "shield", label: "Internal & External" },
        { icon: "flame", label: "Standpipe Ready" },
        { icon: "award", label: "Code-Compliant Specs" },
      ],
      href: "/products#fire-safety",
    },
  },
  {
    id: "exit",
    label: "Emergency Exit",
    items: "Exit signs, lights & emergency lighting.",
    side: "left",
    x: 29,
    y: 26,
    item: {
      name: "Emergency Lighting",
      description:
        "Exit signs and emergency luminaires for safe evacuation routes.",
      image:
        "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Exit Signage" },
        { icon: "shield", label: "Battery Backup" },
        { icon: "award", label: "Long Runtime" },
        { icon: "gauge", label: "Self-Test Options" },
      ],
      href: "/products#fire-safety",
    },
  },
];

const multiGasItem: ProductRangeItem = {
  name: "Multi Gas Detector",
  description:
    "Portable and fixed gas detection for confined spaces, process areas, and plant perimeters.",
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "gauge", label: "Detects Multiple Gases" },
    { icon: "check", label: "High Accuracy Sensors" },
    { icon: "shield", label: "Rugged & Durable" },
    { icon: "award", label: "Long Battery Life" },
    { icon: "zap", label: "Audible, Visual & Vibration Alerts" },
  ],
  href: "/products",
};

const gasHotspots: ProductRangeHotspot[] = [
  {
    id: "fixed",
    label: "Fixed Gas Detection",
    items: "Continuous monitoring systems.",
    side: "left",
    x: 28,
    y: 35,
    item: {
      name: "Fixed Gas Systems",
      description:
        "Area monitors and controllers for continuous hazardous-atmosphere surveillance.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "gauge", label: "Point & Open Path" },
        { icon: "check", label: "Alarm Integration" },
        { icon: "shield", label: "Industrial Protocols" },
        { icon: "award", label: "24/7 Monitoring" },
      ],
      href: "/products",
    },
  },
  {
    id: "portable",
    label: "Portable Gas Detectors",
    items: "Single & multi-gas detectors.",
    side: "right",
    x: 61,
    y: 65,
    item: multiGasItem,
  },
  {
    id: "confined",
    label: "Confined Space",
    items: "Gas detection for confined areas.",
    side: "left",
    x: 50,
    y: 45,
    item: {
      name: "Confined Space Kits",
      description:
        "Entry monitors and kits sized for tanks, vessels, and enclosed spaces.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "gauge", label: "Multi-Gas Entry" },
        { icon: "check", label: "Pump Options" },
        { icon: "shield", label: "Rugged Cases" },
        { icon: "award", label: "Team Ready" },
      ],
      href: "/products",
    },
  },
  {
    id: "sampling",
    label: "Gas Sampling",
    items: "Pumps, tubes & accessories.",
    side: "right",
    x: 75,
    y: 32,
    item: {
      name: "Sampling Accessories",
      description:
        "Pumps, tubes, and sampling lines for remote and probe-based readings.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Sample Pumps" },
        { icon: "gauge", label: "Tube Sets" },
        { icon: "shield", label: "Probe Accessories" },
        { icon: "award", label: "Field Durable" },
      ],
      href: "/products",
    },
  },
  {
    id: "calibration",
    label: "Calibration & Bump Test",
    items: "Calibration gas & test systems.",
    side: "left",
    x: 61,
    y: 55,
    item: {
      name: "Calibration Systems",
      description:
        "Calibration gas and bump-test stations to keep detectors accurate.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Certified Gases" },
        { icon: "gauge", label: "Bump Test Stations" },
        { icon: "shield", label: "Traceable Records" },
        { icon: "award", label: "On-Site Support" },
      ],
      href: "/products",
    },
  },
  {
    id: "panels",
    label: "Control Panels & Alarms",
    items: "Controllers, alarms & annunciators.",
    side: "right",
    x: 88,
    y: 30,
    item: {
      name: "Gas Control Panels",
      description:
        "Controllers, alarms, and annunciators for plant gas safety systems.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "gauge", label: "Multi-Channel" },
        { icon: "check", label: "Relay Outputs" },
        { icon: "shield", label: "Visual & Audible" },
        { icon: "award", label: "Plant Integration" },
      ],
      href: "/products",
    },
  },
];

const insulatedGlovesItem: ProductRangeItem = {
  name: "Insulated Gloves",
  description:
    "Voltage-rated insulating gloves for live electrical work and switchgear maintenance.",
  image:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "zap", label: "Tested for High Voltage" },
    { icon: "check", label: "Excellent Dexterity" },
    { icon: "shield", label: "Comfortable Fit" },
    { icon: "award", label: "Durable & Long Lasting" },
    { icon: "gauge", label: "Multiple Voltage Ratings" },
  ],
  href: "/products",
};

const electricalHotspots: ProductRangeHotspot[] = [
  {
    id: "arc",
    label: "Arc Flash Protection",
    items: "PPE, shields & clothing.",
    side: "left",
    x: 22,
    y: 30,
    item: {
      name: "Arc Flash PPE",
      description:
        "Suits, hoods, and kits matched to incident-energy assessments.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "zap", label: "Cal/cm² Rated" },
        { icon: "shield", label: "Hood & Suit Kits" },
        { icon: "check", label: "Layering Systems" },
        { icon: "award", label: "Site Assessment Fit" },
      ],
      href: "/products",
    },
  },
  {
    id: "tools",
    label: "Insulated Tools",
    items: "Hand tools, kits & accessories.",
    side: "left",
    x: 56,
    y: 70,
    item: {
      name: "Insulated Tools",
      description:
        "Voltage-rated hand tools for panels, switchgear, and field electrical work.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "zap", label: "1000V Rated" },
        { icon: "check", label: "Complete Kits" },
        { icon: "shield", label: "Ergonomic Grips" },
        { icon: "award", label: "IEC Compliant" },
      ],
      href: "/products",
    },
  },
  {
    id: "voltage",
    label: "Voltage Detection",
    items: "Testers, detectors & indicators.",
    side: "left",
    x: 55,
    y: 39,
    item: {
      name: "Voltage Testers",
      description:
        "Non-contact and contact testers for verifying de-energized circuits.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "zap", label: "Non-Contact Options" },
        { icon: "check", label: "Clear Indicators" },
        { icon: "shield", label: "CAT Rated" },
        { icon: "award", label: "Pocket Durable" },
      ],
      href: "/products",
    },
  },
  {
    id: "insulating",
    label: "Insulating Equipment",
    items: "Mats, covers & barriers.",
    side: "left",
    x: 41,
    y: 50,
    item: insulatedGlovesItem,
  },
  {
    id: "cable",
    label: "Cable Management",
    items: "Covers, markers & protectors.",
    side: "left",
    x: 58,
    y: 18,
    item: {
      name: "Cable Protectors",
      description:
        "Covers, markers, and protectors for exposed conductors and trays.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Insulating Covers" },
        { icon: "shield", label: "Cable Markers" },
        { icon: "zap", label: "Phase Identifiers" },
        { icon: "award", label: "Site Ready" },
      ],
      href: "/products",
    },
  },
  {
    id: "elec-loto",
    label: "Electrical Lockout",
    items: "Lockout kits & accessories.",
    side: "left",
    x: 82,
    y: 23,
    item: {
      name: "Electrical Lockout Kits",
      description:
        "Breaker and panel lockout kits for electrical energy isolation.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "lock", label: "Breaker Clamps" },
        { icon: "check", label: "Panel Kits" },
        { icon: "shield", label: "Tag Sets" },
        { icon: "award", label: "Procedure Ready" },
      ],
      href: "/products",
    },
  },
];

const padlockItem: ProductRangeItem = {
  name: "Safety Padlock",
  description:
    "Keyed safety padlocks for lockout-tagout programs across plant energy sources.",
  image:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  features: [
    { icon: "lock", label: "Key Retaining" },
    { icon: "shield", label: "Corrosion Resistant" },
    { icon: "check", label: "High Security" },
    { icon: "award", label: "Multiple Colors" },
    { icon: "hardHat", label: "Durable & Reliable" },
  ],
  href: "/products",
};

const lotoHotspots: ProductRangeHotspot[] = [
  {
    id: "valve",
    label: "Valve Lockout",
    items: "Ball valve, gate valve & butterfly valve locks.",
    side: "left",
    x: 40,
    y: 35,
    item: {
      name: "Valve Lockouts",
      description:
        "Ball, gate, and butterfly valve lockout devices for process isolation.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "lock", label: "Multi-Valve Fits" },
        { icon: "check", label: "Durable Bodies" },
        { icon: "shield", label: "Padlock Compatible" },
        { icon: "award", label: "Chemical Resistant" },
      ],
      href: "/products",
    },
  },
  {
    id: "elec-lock",
    label: "Electrical Lockout",
    items: "MCB, breaker & panel lockouts.",
    side: "left",
    x: 48,
    y: 48,
    item: {
      name: "Breaker Lockouts",
      description:
        "MCB, breaker, and panel lockouts for electrical isolation points.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "lock", label: "MCB Clamps" },
        { icon: "check", label: "Panel Covers" },
        { icon: "zap", label: "Switchgear Ready" },
        { icon: "award", label: "Universal Fits" },
      ],
      href: "/products",
    },
  },
  {
    id: "cable",
    label: "Cable Lockout",
    items: "Universal cable lockouts.",
    side: "left",
    x: 45,
    y: 42,
    item: {
      name: "Cable Lockouts",
      description:
        "Universal cable lockouts for irregular valves and multi-point isolation.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "lock", label: "Adjustable Length" },
        { icon: "check", label: "Multi-Lock Holes" },
        { icon: "shield", label: "Tough Cable" },
        { icon: "award", label: "Universal Use" },
      ],
      href: "/products",
    },
  },
  {
    id: "padlocks",
    label: "Padlocks",
    items: "Safety padlocks in various colors.",
    side: "left",
    x: 52,
    y: 60,
    item: padlockItem,
  },
  {
    id: "kits",
    label: "Lockout Kits",
    items: "Complete lockout kits & stations.",
    side: "left",
    x: 58,
    y: 58,
    item: {
      name: "LOTO Kits",
      description:
        "Complete lockout kits and wall stations for maintenance teams.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "lock", label: "Multi-Lock Kits" },
        { icon: "check", label: "Carry Cases" },
        { icon: "shield", label: "Station Boards" },
        { icon: "award", label: "Procedure Cards" },
      ],
      href: "/products",
    },
  },
  {
    id: "tags",
    label: "Tags & Hasps",
    items: "Safety tags, hasps & accessories.",
    side: "left",
    x: 65,
    y: 65,
    item: {
      name: "Tags & Hasps",
      description:
        "Safety tags, group hasps, and accessories for clear lockout communication.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Durable Tags" },
        { icon: "lock", label: "Group Hasps" },
        { icon: "shield", label: "Write-On Surfaces" },
        { icon: "award", label: "Color Coding" },
      ],
      href: "/products",
    },
  },
];

const fallHotspots: ProductRangeHotspot[] = [
  {
    id: "anchorage",
    label: "Anchorage Points",
    items: "Fixed, temporary & reusable anchors.",
    side: "left",
    x: 52,
    y: 12,
    item: {
      name: "Anchorage Points",
      description:
        "Fixed, temporary, and reusable anchors for fall-arrest systems.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Fixed Anchors" },
        { icon: "shield", label: "Temporary Options" },
        { icon: "award", label: "Reusable Designs" },
        { icon: "hardHat", label: "Load Rated" },
      ],
      href: "/products",
    },
  },
  {
    id: "lifelines",
    label: "Lifelines",
    items: "Vertical & horizontal lifeline systems.",
    side: "right",
    x: 48,
    y: 28,
    item: {
      name: "Lifeline Systems",
      description:
        "Vertical and horizontal lifeline systems for continuous fall protection.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Horizontal Systems" },
        { icon: "shield", label: "Vertical Options" },
        { icon: "award", label: "Self-Retracting" },
        { icon: "hardHat", label: "Inspection Ready" },
      ],
      href: "/products",
    },
  },
  {
    id: "harness",
    label: "Full Body Harness",
    items: "Comfortable & compliant harnesses.",
    side: "left",
    x: 34,
    y: 40,
    item: fallItem,
  },
  {
    id: "lanyards",
    label: "Lanyards",
    items: "Shock absorbing & positioning lanyards.",
    side: "right",
    x: 48,
    y: 45,
    item: {
      name: "Shock Absorbing Lanyard",
      description:
        "Energy-absorbing and positioning lanyards for restraint and fall arrest.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Energy Absorbers" },
        { icon: "shield", label: "Single & Twin Leg" },
        { icon: "award", label: "Snap Hook Options" },
        { icon: "hardHat", label: "EN Certified" },
      ],
      href: "/products",
    },
  },
  {
    id: "connectors",
    label: "Connectors",
    items: "Hooks, karabiners & snap hooks.",
    side: "left",
    x: 52,
    y: 14,
    item: {
      name: "Connectors",
      description:
        "Hooks, karabiners, and snap hooks for secure system connections.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Snap Hooks" },
        { icon: "shield", label: "Karabiners" },
        { icon: "award", label: "Gate Strength" },
        { icon: "hardHat", label: "Corrosion Resistant" },
      ],
      href: "/products",
    },
  },
  {
    id: "rescue",
    label: "Rescue Equipment",
    items: "Rescue kits & descent devices.",
    side: "right",
    x: 34,
    y: 70,
    item: {
      name: "Rescue Kits",
      description:
        "Rescue kits and descent devices for emergency retrieval at height.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: "check", label: "Descent Devices" },
        { icon: "shield", label: "Rescue Kits" },
        { icon: "award", label: "Team Training Ready" },
        { icon: "hardHat", label: "Compact Carry" },
      ],
      href: "/products",
    },
  },
];

export const productRangeCategories: ProductRangeCategory[] = [
  {
    id: "ppe",
    number: "01",
    shortTitle: "PPE",
    title: "Personal Protective Equipment",
    blurb: "Head-to-toe protection.",
    icon: "hardHat",
    href: "/products",
    heroImage: "/images/i1.png",
    hotspots: ppeHotspots,
    subCategories: ppeSubCategories,
    subCategoriesLabel: "Browse PPE Sub-Categories",
    defaultItem: helmetItem,
  },
  {
    id: "fire",
    number: "02",
    shortTitle: "Fire Safety",
    title: "Fire Safety Equipment",
    blurb: "Extinguishers, hydrants, and more.",
    icon: "flame",
    href: "/products#fire-safety",
    heroImage: "/images/i2.png",
    hotspots: fireHotspots,
    subCategoriesLabel: "Browse Fire Safety Range",
    defaultItem: fireExtinguisherItem,
    subCategories: [
      {
        id: "extinguishers",
        label: "Extinguishers",
        icon: "extinguisher",
        item: fireExtinguisherItem,
      },
      {
        id: "hydrants",
        label: "Hydrants",
        icon: "extinguisher",
        item: fireHotspots.find((h) => h.id === "hydrants")!.item,
      },
      {
        id: "blankets",
        label: "Blankets",
        icon: "extinguisher",
        item: {
          name: "Fire Blankets",
          description:
            "Quick-response fire blankets for labs, kitchens, and light industrial use.",
          image:
            "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&w=800&q=80",
          features: [
            { icon: "flame", label: "High-Temp Fabric" },
            { icon: "check", label: "Wall-Mount Pouches" },
            { icon: "shield", label: "Fast Deployment" },
            { icon: "award", label: "Compact Storage" },
          ],
          href: "/products#fire-safety",
        },
      },
      {
        id: "suppression",
        label: "Suppression",
        icon: "extinguisher",
        item: fireHotspots.find((h) => h.id === "hose")!.item,
      },
    ],
  },
  {
    id: "gas",
    number: "03",
    shortTitle: "Gas Detection",
    title: "Gas Detection",
    blurb: "Portable and fixed systems.",
    icon: "gauge",
    href: "/products",
    heroImage: "/images/i3.png",
    hotspots: gasHotspots,
    subCategoriesLabel: "Browse Gas Detection Range",
    defaultItem: multiGasItem,
    subCategories: [
      {
        id: "portable",
        label: "Portable",
        icon: "sensor",
        item: multiGasItem,
      },
      {
        id: "fixed",
        label: "Fixed",
        icon: "sensor",
        item: gasHotspots.find((h) => h.id === "fixed")!.item,
      },
      {
        id: "calibration",
        label: "Calibration",
        icon: "sensor",
        item: gasHotspots.find((h) => h.id === "calibration")!.item,
      },
    ],
  },
  {
    id: "electrical",
    number: "04",
    shortTitle: "Electrical",
    title: "Electrical Safety",
    blurb: "Arc flash and insulated tools.",
    icon: "zap",
    href: "/products",
    heroImage: "/images/i4.png",
    hotspots: electricalHotspots,
    subCategoriesLabel: "Browse Electrical Safety Range",
    defaultItem: insulatedGlovesItem,
    subCategories: [
      {
        id: "arc",
        label: "Arc Flash",
        icon: "bolt",
        item: electricalHotspots.find((h) => h.id === "arc")!.item,
      },
      {
        id: "insulating",
        label: "Insulating",
        icon: "bolt",
        item: insulatedGlovesItem,
      },
      {
        id: "tools",
        label: "Tools",
        icon: "bolt",
        item: electricalHotspots.find((h) => h.id === "tools")!.item,
      },
    ],
  },
  {
    id: "loto",
    number: "05",
    shortTitle: "LOTO",
    title: "LOTO Systems",
    blurb: "Lockout-tagout kits.",
    icon: "lock",
    href: "/products",
    heroImage: "/images/i5.png",
    hotspots: lotoHotspots,
    subCategoriesLabel: "Browse LOTO Range",
    defaultItem: padlockItem,
    subCategories: [
      {
        id: "kits",
        label: "Kits",
        icon: "tag",
        item: lotoHotspots.find((h) => h.id === "kits")!.item,
      },
      {
        id: "locks",
        label: "Locks",
        icon: "tag",
        item: padlockItem,
      },
      {
        id: "devices",
        label: "Devices",
        icon: "tag",
        item: lotoHotspots.find((h) => h.id === "valve")!.item,
      },
    ],
  },
  {
    id: "fall-cat",
    number: "06",
    shortTitle: "Fall Protection",
    title: "Fall Protection",
    blurb: "Harnesses and lifelines.",
    icon: "fall",
    href: "/products",
    heroImage: "/images/i6.png",
    hotspots: fallHotspots,
    subCategoriesLabel: "Browse Fall Protection Range",
    defaultItem: fallItem,
    subCategories: [
      {
        id: "harnesses",
        label: "Harnesses",
        icon: "fall",
        item: fallItem,
      },
      {
        id: "lanyards",
        label: "Lanyards",
        icon: "fall",
        item: fallHotspots.find((h) => h.id === "lanyards")!.item,
      },
      {
        id: "lifelines",
        label: "Lifelines",
        icon: "fall",
        item: fallHotspots.find((h) => h.id === "lifelines")!.item,
      },
    ],
  },
];

export function getProductRangeCategory(id: string) {
  return (
    productRangeCategories.find((c) => c.id === id) ?? productRangeCategories[0]
  );
}
