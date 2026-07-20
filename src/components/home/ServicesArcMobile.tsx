"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Flame,
  Gauge,
  Lock,
  Presentation,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { services, type ServiceIcon } from "@/data/services";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  training: Presentation,
  flame: Flame,
  loto: Lock,
  compliance: ShieldCheck,
  docs: FileText,
  gauge: Gauge,
  clipboard: ClipboardList,
};

/** Relative offset from active: peak at 0, neighbors ±1…±2. 90° = top. */
const VISIBLE_SPAN = 2;
const ARC_RADIUS = 42; // % of stage
const ANGLE_STEP = 42; // degrees between slots

function relativeOffset(index: number, active: number, total: number) {
  let d = index - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

function slotPosition(rel: number) {
  const angleDeg = 90 - rel * ANGLE_STEP;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(rad) * ARC_RADIUS}%`,
    top: `${50 - Math.sin(rad) * ARC_RADIUS}%`,
  };
}

export function ServicesArcMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const total = services.length;
  const active = services[activeIndex]!;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goNext = () => setActiveIndex((i) => (i + 1) % total);
  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);

  const transitionClass = reducedMotion
    ? "duration-0"
    : "duration-500 ease-out";

  return (
    <div className="mt-8 sm:mt-10">
      {/* Active label — width/type aligned with enlarged half-moon stage */}
      <div className="mx-auto min-h-[5rem] w-full max-w-[560px] px-2 text-center">
        <h3 className="font-display text-2xl font-bold leading-snug text-charcoal sm:text-[1.65rem]">
          {active.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
          {active.oneLiner}
        </p>
      </div>

      {/* Half-moon stage */}
      <div className="relative mx-auto mt-4 aspect-[1.2/1] w-full max-w-[560px]">
        {/* Arc path */}
        <svg
          className="pointer-events-none absolute inset-0 size-full"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <path
            d="M 8 50 A 42 42 0 0 1 92 50"
            fill="none"
            stroke="rgba(192,0,29,0.35)"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </svg>

        {/* Service icons on arc */}
        {services.map((service, index) => {
          const rel = relativeOffset(index, activeIndex, total);
          if (Math.abs(rel) > VISIBLE_SPAN) {
            return null;
          }

          const Icon = iconMap[service.icon];
          const isActive = rel === 0;
          const pos = slotPosition(rel);
          const scale = isActive ? 1 : 0.72;
          const opacity = isActive ? 1 : Math.max(0.35, 1 - Math.abs(rel) * 0.28);

          return (
            <Link
              key={service.id}
              href="/services"
              aria-label={service.title}
              aria-current={isActive ? "true" : undefined}
              className={`absolute z-10 flex items-center justify-center rounded-full border bg-white transition-all ${transitionClass} ${
                isActive
                  ? "size-16 border-crimson shadow-[0_0_0_4px_rgba(192,0,29,0.15),0_0_20px_rgba(192,0,29,0.3)]"
                  : "size-12 border-border shadow-sm"
              }`}
              style={{
                left: pos.left,
                top: pos.top,
                opacity,
                transform: `translate(-50%, -50%) scale(${scale})`,
              }}
            >
              <Icon
                className={`size-5 ${isActive ? "text-crimson" : "text-charcoal/60"}`}
                strokeWidth={1.5}
              />
            </Link>
          );
        })}

        {/* Controls: prev | logo | next — under peak at arc center */}
        <div className="absolute left-1/2 top-[52%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Previous service"
            onClick={goPrev}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition-colors hover:border-crimson/40"
          >
            <ChevronLeft className="size-5" strokeWidth={2} />
          </button>

          <div className="flex size-[5.5rem] shrink-0 flex-col items-center justify-center rounded-full border border-crimson/30 bg-white shadow-[0_0_24px_rgba(192,0,29,0.12)] sm:size-[6rem]">
            <Logo
              variant="light"
              className="scale-[0.72] items-center text-center sm:scale-[0.8] [&>span:first-child]:text-lg sm:[&>span:first-child]:text-xl [&>span:nth-child(2)]:text-[8px] sm:[&>span:nth-child(2)]:text-[9px]"
            />
          </div>

          <button
            type="button"
            aria-label="Next service"
            onClick={goNext}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition-colors hover:border-crimson/40"
          >
            <ChevronRight className="size-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
