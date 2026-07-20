"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ClipboardList,
  FileText,
  Flame,
  Gauge,
  Headset,
  Lock,
  Presentation,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesArcMobile } from "@/components/home/ServicesArcMobile";
import {
  services,
  servicesIntro,
  type ServiceIcon,
} from "@/data/services";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  training: Presentation,
  flame: Flame,
  loto: Lock,
  compliance: ShieldCheck,
  docs: FileText,
  gauge: Gauge,
  clipboard: ClipboardList,
};

const VIEW = 100;
const HUB_R = 13.5;
const NODE_R = 6.2;
const INNER_RING = 28;
const OUTER_RING = 38.5;
const NODE_ORBIT = 38.5;
const SPOKE_DOT = 24;
const CYCLE_MS = 1700;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function labelClass(angleDeg: number) {
  let a = ((angleDeg + 180) % 360) - 180;
  if (a <= -115 || a >= 115) {
    return "right-full top-1/2 mr-4 w-[13rem] -translate-y-1/2 text-right xl:mr-5 xl:w-[15rem]";
  }
  if (a >= -55 && a <= 55) {
    return "left-full top-1/2 ml-4 w-[13rem] -translate-y-1/2 text-left xl:ml-5 xl:w-[15rem]";
  }
  if (a < -55) {
    return "bottom-full left-1/2 mb-4 w-[14rem] -translate-x-1/2 text-center xl:mb-5 xl:w-[16rem]";
  }
  return "top-full left-1/2 mt-4 w-[14rem] -translate-x-1/2 text-center xl:mt-5 xl:w-[16rem]";
}

function ServicesHub() {
  const cx = VIEW / 2;
  const cy = VIEW / 2;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || hoveredIndex !== null) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % services.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, hoveredIndex]);

  const highlightedIndex = hoveredIndex ?? (reduceMotion ? null : activeIndex);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[820px] overflow-visible px-[18%] py-[18%] xl:max-w-none xl:px-[16%] xl:py-[16%]">
      <div className="relative size-full">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="absolute inset-0 size-full overflow-visible"
          aria-hidden
        >
          <circle
            cx={cx}
            cy={cy}
            r={INNER_RING}
            fill="none"
            stroke="#cfcfcf"
            strokeWidth={0.38}
            strokeDasharray="1 1.5"
          />
          <circle
            cx={cx}
            cy={cy}
            r={OUTER_RING}
            fill="none"
            stroke="#cfcfcf"
            strokeWidth={0.38}
            strokeDasharray="1 1.5"
          />

          {services.map((service) => {
            const end = polar(cx, cy, NODE_ORBIT - NODE_R * 0.85, service.angleDeg);
            const start = polar(cx, cy, HUB_R + 1, service.angleDeg);
            const dot = polar(cx, cy, SPOKE_DOT, service.angleDeg);
            return (
              <g key={`spoke-${service.id}`}>
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#bdbdbd"
                  strokeWidth={0.32}
                />
                <circle cx={dot.x} cy={dot.y} r={0.75} fill="#c0001d" />
              </g>
            );
          })}

          <path
            d={`M ${polar(cx, cy, HUB_R, -72).x} ${polar(cx, cy, HUB_R, -72).y}
                A ${HUB_R} ${HUB_R} 0 0 1
                ${polar(cx, cy, HUB_R, 22).x} ${polar(cx, cy, HUB_R, 22).y}`}
            fill="none"
            stroke="#c0001d"
            strokeWidth={1.05}
            strokeLinecap="round"
          />
        </svg>

        <div
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          style={{
            width: `${HUB_R * 2}%`,
            height: `${HUB_R * 2}%`,
          }}
        >
          <span className="font-display text-[clamp(1.05rem,2.4vw,1.65rem)] font-bold leading-none tracking-tight text-charcoal">
            mark<span className="text-crimson">!</span>
          </span>
          <span className="mt-1 text-[clamp(0.55rem,1.05vw,0.72rem)] font-semibold uppercase tracking-[0.26em] text-charcoal">
            Safety
          </span>
        </div>

        {services.map((service, index) => {
          const pos = polar(cx, cy, NODE_ORBIT, service.angleDeg);
          const Icon = iconMap[service.icon];
          const active = highlightedIndex === index;

          return (
            <Link
              key={service.id}
              href="/services"
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              aria-label={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              <span
                className={`relative flex size-14 items-center justify-center rounded-full border-[1.5px] border-crimson bg-white transition-[transform,box-shadow] duration-300 xl:size-16 ${
                  active
                    ? "z-10 scale-[1.12] shadow-[0_8px_28px_rgba(192,0,29,0.22)]"
                    : "shadow-[0_3px_16px_rgba(0,0,0,0.1)]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute inset-0 rounded-full border border-crimson/40 ${
                    active
                      ? "services-node-ring-active opacity-100"
                      : "opacity-0"
                  }`}
                  aria-hidden
                />
                <Icon
                  className={`relative z-[1] size-6 text-crimson transition-transform duration-300 xl:size-7 ${
                    active ? "-translate-y-0.5" : ""
                  }`}
                  strokeWidth={1.5}
                />
                <span className={`pointer-events-none absolute ${labelClass(service.angleDeg)}`}>
                  <span className="block text-[15px] font-semibold leading-snug text-charcoal xl:text-base">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-charcoal/65 xl:text-sm">
                    {service.oneLiner}
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function IntroCopy() {
  return (
    <div className="relative z-10 flex max-w-md flex-col lg:max-w-none">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-crimson" aria-hidden />
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
            {servicesIntro.eyebrow}
          </p>
        </div>
        <h2 className="font-display mt-4 max-w-[16ch] text-3xl font-bold leading-[1.15] text-charcoal md:text-4xl xl:text-[2.65rem]">
          {servicesIntro.title}
        </h2>
        <span className="mt-4 block h-px w-12 bg-crimson" aria-hidden />
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-[15px]">
          {servicesIntro.body}
        </p>
      </Reveal>

      <Reveal delayMs={120} className="mt-7">
        <Link
          href={servicesIntro.ctaHref}
          className="inline-flex max-w-sm items-center gap-3 rounded-md bg-crimson-soft px-4 py-3.5 transition-colors duration-200 hover:bg-[#ffe4e4]"
        >
          <span className="flex size-10 shrink-0 items-center justify-center">
            <Headset className="size-6 text-crimson" strokeWidth={1.5} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-sm text-charcoal">
              {servicesIntro.ctaPrompt}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-crimson">
              {servicesIntro.ctaLabel} →
            </span>
          </span>
        </Link>
      </Reveal>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[58%] overflow-hidden opacity-[0.055]"
        aria-hidden
      >
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=60"
          alt=""
          fill
          sizes="58vw"
          className="object-cover object-left grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      <div className="container-site relative overflow-visible">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(220px,0.62fr)_minmax(0,1.7fr)] lg:gap-4 xl:gap-8">
          <IntroCopy />

          <Reveal delayMs={80} className="hidden min-w-0 overflow-visible lg:block">
            <ServicesHub />
          </Reveal>

          <div className="lg:hidden">
            <ServicesArcMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
