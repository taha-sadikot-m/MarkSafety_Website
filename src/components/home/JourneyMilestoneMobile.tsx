"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Factory,
  Home,
  Package,
  Presentation,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { journeyMilestones } from "@/data/company";

type Milestone = (typeof journeyMilestones)[number];

const milestoneIcons: Record<Milestone["icon"], LucideIcon> = {
  home: Home,
  package: Package,
  presentation: Presentation,
  clipboard: ClipboardList,
  factory: Factory,
  trending: TrendingUp,
};

type JourneyMilestoneMobileProps = {
  milestone: Milestone;
  isLast: boolean;
};

export function JourneyMilestoneMobile({
  milestone,
  isLast,
}: JourneyMilestoneMobileProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = milestoneIcons[milestone.icon];
  const isHighlight = milestone.highlight;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion = visible
    ? "translate-y-0 scale-100 opacity-100"
    : "translate-y-4 scale-95 opacity-0";

  return (
    <li ref={ref} className="relative flex gap-4">
      <div className="flex w-12 shrink-0 flex-col items-center self-stretch">
        <div
          className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out ${motion} ${
            isHighlight
              ? "border-crimson bg-crimson text-white shadow-[0_0_0_4px_rgba(192,0,29,0.12),0_0_18px_rgba(192,0,29,0.2)]"
              : "border-crimson/40 bg-white text-charcoal shadow-sm"
          }`}
        >
          <Icon className="size-4" strokeWidth={1.25} />
        </div>
        {!isLast ? (
          <span
            aria-hidden
            className={`mt-1 w-px flex-1 bg-gradient-to-b from-crimson/35 via-charcoal/15 to-charcoal/10 transition-opacity duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: visible ? "120ms" : "0ms" }}
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1 pb-9">
        <p
          className={`font-display text-[2.75rem] font-bold leading-none tracking-tight transition-all duration-500 ease-out sm:text-[3.25rem] ${motion} ${
            isHighlight ? "text-crimson/35" : "text-charcoal/[0.16]"
          }`}
          style={{ transitionDelay: visible ? "100ms" : "0ms" }}
        >
          {milestone.year}
        </p>
        <h3
          className={`mt-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-500 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          } ${isHighlight ? "text-crimson" : "text-charcoal"}`}
          style={{ transitionDelay: visible ? "220ms" : "0ms" }}
        >
          {milestone.title}
        </h3>
        <p
          className={`mt-1.5 text-sm leading-relaxed text-muted transition-all duration-500 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "300ms" : "0ms" }}
        >
          {milestone.description}
        </p>
      </div>
    </li>
  );
}
