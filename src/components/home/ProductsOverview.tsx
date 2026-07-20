"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { ProductsOverviewMobile } from "@/components/home/ProductsOverviewMobile";
import { businessPillars } from "@/data/company";

type Pillar = (typeof businessPillars)[number];
type PillarId = Pillar["id"];

const pillarIcons: Record<Pillar["icon"], LucideIcon> = {
  shield: Shield,
  gears: Settings,
  building: Building2,
};

/** Slot angles on the ring (from positive x-axis, counterclockwise) */
const SLOT_ANGLES = [210, 330, 90] as const;
/** Right-side slot nearest the detail panel — always the “active” spotlight */
const SPOTLIGHT_SLOT = 1;
const ORBIT_RADIUS = 44;
const AUTO_ROTATE_MS = 4000;
const REDUCED_AUTO_MS = 6000;
const RESUME_AFTER_MS = 6000;

function polarStyle(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + Math.cos(rad) * radiusPct;
  const y = 50 - Math.sin(rad) * radiusPct;
  return { left: `${x}%`, top: `${y}%` };
}

function slotAngleForPillar(pillarIndex: number, rotationIndex: number) {
  return SLOT_ANGLES[(pillarIndex + rotationIndex) % SLOT_ANGLES.length];
}

function spotlightPillarId(rotationIndex: number): PillarId {
  for (let i = 0; i < businessPillars.length; i++) {
    if ((i + rotationIndex) % SLOT_ANGLES.length === SPOTLIGHT_SLOT) {
      return businessPillars[i].id;
    }
  }
  return businessPillars[0].id;
}

const detailSoftMask = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 78%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

function CapabilityDetail({
  pillar,
  reducedMotion,
}: {
  pillar: Pillar;
  reducedMotion: boolean;
}) {
  const Icon = pillarIcons[pillar.icon];

  return (
    <div
      key={pillar.id}
      className={`relative min-h-[360px] w-full max-w-[560px] sm:min-h-[400px] lg:min-h-[520px] lg:max-w-none ${
        reducedMotion ? "" : "animate-capability-fade"
      }`}
    >
      {/* Photo + translucent wash share one soft edge mask — no hard box */}
      <div
        className="pointer-events-none absolute -inset-3 sm:-inset-5"
        style={detailSoftMask}
        aria-hidden
      >
        <Image
          src={pillar.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
        {/* Single translucent overlay — image shows through */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/55 via-transparent to-surface/25" />
      </div>

      {/* Content — sharp on top of faded wash */}
      <div className="relative z-10 flex h-full min-h-[360px] flex-col p-5 pb-24 sm:min-h-[400px] sm:p-6 sm:pb-28 lg:min-h-[520px] lg:p-8 lg:pb-32">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-crimson px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          <Icon className="size-3" strokeWidth={2} aria-hidden />
          {pillar.shortLabel}
        </span>

        <h3 className="mt-5 max-w-md font-display text-2xl font-bold leading-tight text-charcoal xl:text-3xl">
          {pillar.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {pillar.description}
        </p>

        <ul className="mt-6 max-w-md space-y-2.5">
          {pillar.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-charcoal"
            >
              <span
                className="mt-1.5 size-2 shrink-0 rounded-sm bg-crimson"
                aria-hidden
              />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={pillar.href}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-crimson px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-crimson-hover"
        >
          {pillar.cta}
          <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
        </Link>
      </div>

      {/* Glass metrics — inset inside faded area */}
      <div className="absolute inset-x-4 bottom-4 z-20 overflow-hidden rounded-xl border border-border/80 bg-white/70 backdrop-blur-md sm:inset-x-7 sm:bottom-6">
        <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {pillar.metrics.map((metric) => (
            <div key={metric.label} className="px-2.5 py-2.5 text-center sm:px-3 sm:py-4">
              <p className="text-xs font-bold text-crimson sm:text-base">
                {metric.value}
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-muted sm:mt-1 sm:text-[10px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrbitNode({
  pillar,
  active,
  expanded,
  reducedMotion,
  angleDeg,
  onSelect,
  onHoverSelect,
}: {
  pillar: Pillar;
  active: boolean;
  expanded: boolean;
  reducedMotion: boolean;
  angleDeg: number;
  onSelect: () => void;
  onHoverSelect: () => void;
}) {
  const Icon = pillarIcons[pillar.icon];
  const final = polarStyle(angleDeg, ORBIT_RADIUS);
  const center = { left: "50%", top: "50%" };
  const pos = expanded || reducedMotion ? final : center;

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onHoverSelect}
      onFocus={onHoverSelect}
      aria-pressed={active}
      aria-label={`${pillar.shortLabel}: ${pillar.title}`}
      className={`absolute z-20 flex size-[9.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white px-3.5 transition-[left,top,box-shadow,border-color,transform] duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crimson xl:size-[10.5rem] ${
        active
          ? "scale-105 border-2 border-crimson shadow-[0_0_0_4px_rgba(192,0,29,0.15),0_0_28px_rgba(192,0,29,0.25)]"
          : "border border-border shadow-sm hover:border-crimson/40"
      } ${reducedMotion ? "duration-0" : ""}`}
      style={pos}
    >
      <Icon className="size-5 text-crimson xl:size-6" strokeWidth={1.5} />
      <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal xl:text-[11px]">
        {pillar.shortLabel}
      </span>
      <span className="mt-1.5 text-center text-[10px] leading-snug text-muted">
        {pillar.nodeBlurb}
      </span>
    </button>
  );
}

export function ProductsOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeId, setActiveId] = useState<PillarId>("services");
  const [rotationIndex, setRotationIndex] = useState(0);
  const [orbitPaused, setOrbitPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const headingId = useId();

  const active = businessPillars.find((p) => p.id === activeId)!;

  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const pauseOrbit = () => {
    setOrbitPaused(true);
    clearResumeTimer();
  };

  const scheduleResume = () => {
    clearResumeTimer();
    resumeTimerRef.current = setTimeout(() => {
      setOrbitPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  };

  const selectPillar = (id: PillarId) => {
    setActiveId(id);
    pauseOrbit();
    scheduleResume();
  };

  const hoverSelectPillar = (id: PillarId) => {
    setActiveId(id);
    pauseOrbit();
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (reducedMotion) {
      setExpanded(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpanded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // Auto-rotate nodes + sync detail panel
  useEffect(() => {
    if (!expanded || orbitPaused) return;
    const ms = reducedMotion ? REDUCED_AUTO_MS : AUTO_ROTATE_MS;
    const timer = setInterval(() => {
      if (reducedMotion) {
        setActiveId((prev) => {
          const idx = businessPillars.findIndex((p) => p.id === prev);
          return businessPillars[(idx + 1) % businessPillars.length].id;
        });
        return;
      }
      setRotationIndex((prev) => {
        const next = (prev + 1) % SLOT_ANGLES.length;
        setActiveId(spotlightPillarId(next));
        return next;
      });
    }, ms);
    return () => clearInterval(timer);
  }, [expanded, orbitPaused, reducedMotion]);

  useEffect(() => () => clearResumeTimer(), []);

  // Home angles when reduced motion (no position shuffle)
  const homeAngles: Record<PillarId, number> = {
    products: SLOT_ANGLES[0],
    services: SLOT_ANGLES[1],
    solutions: SLOT_ANGLES[2],
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      aria-labelledby={headingId}
      className="relative overflow-hidden"
    >
      <h2 id={headingId} className="sr-only">
        What We Do — One Partner. Three Capabilities. Infinite Protection.
      </h2>

      <div className="lg:hidden">
        <ProductsOverviewMobile />
      </div>

      <div className="hidden min-h-[100svh] bg-surface lg:block">
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1680px] flex-col px-5 py-16 sm:px-8 lg:px-10 lg:py-20 xl:px-14">
          <header className="mx-auto w-full max-w-3xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
              What We Do
            </p>
            <p className="font-display mt-4 text-3xl font-bold leading-[1.15] text-charcoal md:text-4xl xl:text-5xl">
              One Partner. Three Capabilities.
              <br />
              <span className="text-crimson">Infinite Protection.</span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Products, engineering services, and industry solutions — connected
              as one safety ecosystem, not separate offerings.
            </p>
          </header>

          <div className="mt-12 grid w-full flex-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            <div
              className="relative mx-auto aspect-square w-full max-w-[460px] justify-self-start lg:mx-0 xl:max-w-[500px]"
              onPointerEnter={pauseOrbit}
              onPointerLeave={scheduleResume}
            >
              <svg
                className={`absolute inset-[8%] z-0 h-[84%] w-[84%] transition-opacity duration-700 ${
                  expanded || reducedMotion ? "opacity-100" : "opacity-0"
                }`}
                viewBox="0 0 100 100"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="rgba(44,44,44,0.22)"
                  strokeWidth="0.4"
                  strokeDasharray="1.2 1.4"
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 50 + Math.cos(rad) * 44;
                  const y = 50 - Math.sin(rad) * 44;
                  return (
                    <circle
                      key={deg}
                      cx={x}
                      cy={y}
                      r="0.7"
                      fill="rgba(192,0,29,0.85)"
                    />
                  );
                })}
              </svg>

              <div
                className="absolute left-1/2 top-1/2 z-30 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-crimson/30 bg-white shadow-[0_0_32px_rgba(192,0,29,0.18)] xl:size-28"
                aria-hidden
              >
                <span className="font-display text-lg font-bold tracking-tight text-charcoal xl:text-xl">
                  mark<span className="text-crimson">!</span>
                </span>
                <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.28em] text-charcoal/80 xl:text-[9px]">
                  Safety
                </span>
              </div>

              {businessPillars.map((pillar, index) => (
                <OrbitNode
                  key={pillar.id}
                  pillar={pillar}
                  active={activeId === pillar.id}
                  expanded={expanded}
                  reducedMotion={reducedMotion}
                  angleDeg={
                    reducedMotion
                      ? homeAngles[pillar.id]
                      : slotAngleForPillar(index, rotationIndex)
                  }
                  onSelect={() => selectPillar(pillar.id)}
                  onHoverSelect={() => hoverSelectPillar(pillar.id)}
                />
              ))}
            </div>

            <div className="min-h-[360px] w-full justify-self-end sm:min-h-[400px] lg:min-h-[520px]">
              <CapabilityDetail pillar={active} reducedMotion={reducedMotion} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
