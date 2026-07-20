import type { ZoneId } from "./industries";

export type BodyZone = {
  id: ZoneId;
  label: string;
  productCount: number;
  side: "left" | "right";
  /** Percentage positions relative to figure container */
  x: number;
  y: number;
};

export const bodyZones: BodyZone[] = [
  { id: "head", label: "Head Protection", productCount: 6, side: "left", x: 50, y: 8 },
  { id: "eyes", label: "Eye & Face", productCount: 8, side: "right", x: 58, y: 14 },
  { id: "hearing", label: "Hearing Protection", productCount: 5, side: "left", x: 42, y: 16 },
  { id: "respiratory", label: "Respiratory", productCount: 10, side: "left", x: 48, y: 24 },
  { id: "body", label: "Body Protection", productCount: 12, side: "left", x: 50, y: 38 },
  { id: "fall", label: "Fall Protection", productCount: 7, side: "left", x: 50, y: 52 },
  { id: "hands", label: "Hand Protection", productCount: 14, side: "left", x: 28, y: 48 },
  { id: "feet", label: "Feet Protection", productCount: 9, side: "left", x: 42, y: 88 },
];

export type ZoneEmphasis = "primary" | "secondary" | "inactive";

export function getZoneEmphasis(
  zoneId: ZoneId,
  primary: ZoneId[],
  secondary: ZoneId[],
): ZoneEmphasis {
  if (primary.includes(zoneId)) return "primary";
  if (secondary.includes(zoneId)) return "secondary";
  return "inactive";
}
