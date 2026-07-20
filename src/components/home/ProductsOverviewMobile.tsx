"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Handshake,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { businessPillars, whatWeDoMobileStrip } from "@/data/company";

type Pillar = (typeof businessPillars)[number];
type PillarId = Pillar["id"];

const pillarIcons: Record<Pillar["icon"], LucideIcon> = {
  shield: Shield,
  gears: Settings,
  building: Building2,
};

/** Fixed mock positions: Products top, Solutions bottom-left, Services bottom-right */
const NODE_ANGLES: Record<PillarId, number> = {
  products: 90,
  solutions: 210,
  services: 330,
};

const ORBIT_RADIUS = 40;
const AUTO_ADVANCE_MS = 4000;
const RESUME_AFTER_MS = 6000;

function polarPercent(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(rad) * radiusPct}%`,
    top: `${50 - Math.sin(rad) * radiusPct}%`,
  };
}

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProductsOverviewMobile() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollingProgrammatically = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const activeId = businessPillars[activeIndex]?.id ?? "products";

  const clearResumeTimer = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const pauseAuto = () => {
    setPaused(true);
    clearResumeTimer();
  };

  const scheduleResume = () => {
    clearResumeTimer();
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  };

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const card = cardRefs.current[index];
    const track = trackRef.current;
    if (!card || !track) return;
    scrollingProgrammatically.current = true;
    const left =
      card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({
      left: Math.max(0, left),
      behavior: reducedMotion ? "auto" : behavior,
    });
    window.setTimeout(() => {
      scrollingProgrammatically.current = false;
    }, behavior === "smooth" && !reducedMotion ? 450 : 50);
  };

  const selectIndex = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
    pauseAuto();
    scheduleResume();
  };

  const selectPillar = (id: PillarId) => {
    const index = businessPillars.findIndex((p) => p.id === id);
    if (index >= 0) selectIndex(index);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (scrollingProgrammatically.current) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const mid = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActiveIndex(best);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % businessPillars.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, reducedMotion]);

  useEffect(() => () => clearResumeTimer(), []);

  return (
    <div className="bg-footer text-white">
      <div className="px-5 pb-0 pt-16 sm:px-8">
        <Reveal>
          <header className="mx-auto max-w-lg text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-crimson">
              What We Do
            </p>
            <p className="font-display mt-5 text-[1.85rem] font-bold leading-[1.18] text-white sm:text-[2rem]">
              One Partner. Three Capabilities.
              <br />
              <span className="text-crimson">Infinite Protection.</span>
            </p>
            <p className="mx-auto mt-5 max-w-[20rem] text-[13px] leading-relaxed text-white/50 sm:max-w-md sm:text-[14px]">
              Products, engineering services, and industry solutions working
              together as one safety ecosystem.
            </p>
          </header>
        </Reveal>

        {/* Orbit hub */}
        <Reveal delayMs={100}>
          <div className="relative mx-auto mt-12 aspect-square w-full max-w-[320px]">
            {/* Ambient crimson glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/15 blur-2xl"
              aria-hidden
            />

            <svg
              className="absolute inset-[5%] h-[90%] w-[90%]"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.8"
              />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <circle
                    key={deg}
                    cx={50 + Math.cos(rad) * 38}
                    cy={50 - Math.sin(rad) * 38}
                    r="0.75"
                    fill="rgba(192,0,29,0.95)"
                  />
                );
              })}
            </svg>

            <div
              className="absolute left-1/2 top-1/2 z-20 flex size-[6.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-crimson/50 bg-[#121212] shadow-[0_0_0_1px_rgba(192,0,29,0.2),0_0_40px_rgba(192,0,29,0.45)]"
              aria-hidden
            >
              <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
                mark<span className="text-crimson">!</span>
              </span>
              <span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Safety
              </span>
            </div>

            {businessPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];
              const active = activeId === pillar.id;
              const pos = polarPercent(NODE_ANGLES[pillar.id], ORBIT_RADIUS);
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => selectPillar(pillar.id)}
                  aria-pressed={active}
                  aria-label={`${pillar.shortLabel}: ${pillar.title}`}
                  className="absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={pos}
                >
                  <span
                    className={`flex size-[3.25rem] items-center justify-center rounded-full border transition-all duration-300 ${
                      active
                        ? "scale-110 border-crimson bg-[#1a1a1a] shadow-[0_0_0_4px_rgba(192,0,29,0.22),0_0_22px_rgba(192,0,29,0.45)]"
                        : "border-white/15 bg-[#141414] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    }`}
                  >
                    <Icon
                      className={`size-[1.05rem] transition-colors ${
                        active ? "text-crimson" : "text-white/75"
                      }`}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span
                    className={`mt-2.5 text-[9px] font-bold uppercase tracking-[0.16em] transition-colors ${
                      active ? "text-white" : "text-white/45"
                    }`}
                  >
                    {pillar.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Capability cards carousel */}
      <Reveal delayMs={160}>
        <div
          className="mt-12"
          onPointerDown={pauseAuto}
          onPointerUp={scheduleResume}
          onTouchStart={pauseAuto}
          onTouchEnd={scheduleResume}
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {businessPillars.map((pillar, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={pillar.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`relative w-[calc(100vw-2.75rem)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161616] transition-opacity duration-300 sm:w-[min(100%,380px)] ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <div className="relative flex min-h-[360px]">
                    <div className="relative z-10 flex w-[58%] flex-col justify-between p-5 pr-3 sm:p-6 sm:pr-4">
                      <div>
                        <span className="font-display text-[1.65rem] font-bold leading-none tracking-tight text-crimson">
                          {padIndex(index)}
                        </span>
                        <h3 className="font-display mt-3 text-[1.15rem] font-bold leading-snug text-white sm:text-xl">
                          {pillar.title}
                        </h3>
                        <p className="mt-2.5 text-[12px] leading-relaxed text-white/45 sm:text-[13px]">
                          {pillar.mobileBlurb}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {pillar.mobileFeatures.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2.5 text-[12px] leading-snug text-white/80 sm:text-[13px]"
                            >
                              <Check
                                className="size-3.5 shrink-0 text-crimson"
                                strokeWidth={2.5}
                                aria-hidden
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={pillar.href}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-crimson px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-crimson-hover"
                      >
                        {pillar.cta}
                        <ArrowRight className="size-3.5" strokeWidth={2.25} />
                      </Link>
                    </div>

                    <div className="absolute inset-y-0 right-0 w-[50%]">
                      <Image
                        src={pillar.image}
                        alt=""
                        fill
                        sizes="50vw"
                        className="object-cover object-[center_30%] brightness-[0.85] contrast-[1.05]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/85 to-[#161616]/15"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-[#161616]/40"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-black/35 to-transparent"
                        aria-hidden
                      />
                    </div>
                  </div>
                </article>
              );
            })}
            {/* Trailing spacer so last card can center with peek affordance */}
            <div className="w-3 shrink-0 sm:w-4" aria-hidden />
          </div>

          <div
            className="mt-6 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Capability slides"
          >
            {businessPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show ${pillar.shortLabel}`}
                onClick={() => selectIndex(index)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-110 bg-crimson shadow-[0_0_8px_rgba(192,0,29,0.55)]"
                    : "bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Bottom strip */}
      <div className="mt-12 border-t border-white/[0.08] px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-crimson/20 ring-1 ring-crimson/25">
            <Handshake className="size-4 text-crimson" strokeWidth={1.75} />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
            {whatWeDoMobileStrip.label}
          </p>
        </div>
      </div>
    </div>
  );
}
