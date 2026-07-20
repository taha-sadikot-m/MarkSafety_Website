import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

function baseProps({ className, ...props }: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg" as const,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    ...props,
  };
}

/** Hard hat / helmet */
export function IconHelmet(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M3 14h18" />
      <path d="M8 14v2.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5V14" />
      <path d="M12 6v2" />
    </svg>
  );
}

/** Safety goggles */
export function IconGoggles(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 12h2.5" />
      <path d="M18.5 12H21" />
      <rect x="5.5" y="9.5" width="5.5" height="5" rx="1.5" />
      <rect x="13" y="9.5" width="5.5" height="5" rx="1.5" />
      <path d="M11 12h2" />
    </svg>
  );
}

/** Ear muffs */
export function IconEarmuffs(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 13V10a5 5 0 0 1 10 0v3" />
      <rect x="4.5" y="12" width="4" height="6.5" rx="2" />
      <rect x="15.5" y="12" width="4" height="6.5" rx="2" />
    </svg>
  );
}

/** Respirator / mask */
export function IconRespirator(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 11c0-1.5 1.5-3 3.5-3h7c2 0 3.5 1.5 3.5 3v2c0 2.5-2 4.5-4.5 4.5h-5C7 17.5 5 15.5 5 13v-2z" />
      <circle cx="8.5" cy="13" r="1.75" />
      <circle cx="15.5" cy="13" r="1.75" />
      <path d="M10.5 13h3" />
    </svg>
  );
}

/** Work glove */
export function IconGlove(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 21V10.5a1.5 1.5 0 0 1 1.5-1.5H10" />
      <path d="M10 9V5.5a1.5 1.5 0 0 1 3 0V9" />
      <path d="M13 9V4.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M16 11V6.5a1.5 1.5 0 0 1 3 0V14c0 3.5-2 7-5.5 7H11c-2 0-3-1-3-1" />
      <path d="M8 14H6.5a1.5 1.5 0 0 1 0-3H8" />
    </svg>
  );
}

/** Coverall / body suit */
export function IconCoverall(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 4.5h6" />
      <path d="M10 4.5 8 8 5.5 10.5" />
      <path d="M14 4.5 16 8l2.5 2.5" />
      <path d="M8 8h8v5.5l-1.5 7h-5L8 13.5V8z" />
      <path d="M10 13.5h4" />
    </svg>
  );
}

/** Fall harness */
export function IconHarness(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="5" r="2" />
      <path d="M8 9h8" />
      <path d="M9 9v4.5L7 20" />
      <path d="M15 9v4.5L17 20" />
      <path d="M9 13.5h6" />
      <path d="M12 9v4.5" />
      <path d="M10.5 16.5h3" />
    </svg>
  );
}

/** Safety boot */
export function IconBoot(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 4v10.5" />
      <path d="M8 14.5h5.5c2.5 0 4 1.2 4.5 3H6.5c-.8 0-1.5-.7-1.5-1.5 0-2.5 1.5-4.5 3-4.5" />
      <path d="M8 8h3.5" />
      <path d="M5 19.5h14" />
    </svg>
  );
}

/** Flame / fire */
export function IconFlame(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3c1.5 2.5-.5 4 0 6 2-1 4 1 4 4a4 4 0 0 1-8 0c0-2.5 1.5-3.5 2-5.5.5 1 1 1.5 2-4.5z" />
      <path d="M12 14.5c.8.4 1.5 1.2 1.5 2.2a1.5 1.5 0 0 1-3 0c0-1 .7-1.8 1.5-2.2z" />
    </svg>
  );
}

/** Fire extinguisher */
export function IconExtinguisher(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M10 5h4" />
      <path d="M12 5v2" />
      <path d="M9 7h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7z" />
      <path d="M15 9h2.5a1.5 1.5 0 0 0 0-3H15" />
      <path d="M9 11h6" />
    </svg>
  );
}

/** Gas sensor / detector */
export function IconSensor(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="6" y="5" width="12" height="14" rx="2" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M9 16.5h6" />
      <path d="M10 5V3.5" />
      <path d="M14 5V3.5" />
    </svg>
  );
}

/** Electrical bolt */
export function IconBolt(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M13 3 6.5 13.5h4.5L10 21l7.5-11.5H13L13 3z" />
    </svg>
  );
}

/** Padlock */
export function IconPadlock(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="6" y="11" width="12" height="9" rx="1.5" />
      <path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** LOTO tag */
export function IconTag(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3 4.5 10.5a2 2 0 0 0 0 2.8L10.7 19.5a2 2 0 0 0 2.8 0L21 12V6.5A1.5 1.5 0 0 0 19.5 5H14L12 3z" />
      <circle cx="16" cy="8" r="1.25" />
    </svg>
  );
}

export type ProductRangeIconComponent = (props: IconProps) => ReactElement;

export const categoryIconMap = {
  hardHat: IconHelmet,
  flame: IconFlame,
  gauge: IconSensor,
  zap: IconBolt,
  lock: IconPadlock,
  fall: IconHarness,
} as const;

export const zoneIconMap = {
  head: IconHelmet,
  eye: IconGoggles,
  ear: IconEarmuffs,
  lungs: IconRespirator,
  hand: IconGlove,
  body: IconCoverall,
  fall: IconHarness,
  foot: IconBoot,
} as const;

export const subIconMap = {
  ...zoneIconMap,
  extinguisher: IconExtinguisher,
  sensor: IconSensor,
  bolt: IconBolt,
  tag: IconTag,
} as const;
