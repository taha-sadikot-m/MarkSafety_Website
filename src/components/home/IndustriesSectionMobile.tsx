"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Beaker,
  Car,
  ChevronLeft,
  ChevronRight,
  Cog,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  HardHat,
  Mountain,
  Pill,
  Plug,
  Sprout,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  industries,
  type ChallengeIcon,
} from "@/data/industries";

const industryIconMap: Record<string, LucideIcon> = {
  beaker: Beaker,
  flask: Pill,
  droplets: Factory,
  battery: Zap,
  cog: Cog,
  car: Car,
  zap: Plug,
  sprout: Sprout,
};

const challengeIconMap: Record<ChallengeIcon, LucideIcon> = {
  toxic: FlaskConical,
  spill: Droplets,
  fire: Flame,
  exposure: Beaker,
  arc: Zap,
  impact: HardHat,
  dust: Wind,
  height: Mountain,
};

const PEEK_COUNT = 3;
const SWIPE_THRESHOLD = 48;

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("a, button"));
}

export function IndustriesSectionMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const total = industries.length;
  const active = industries[activeIndex]!;
  const ActiveIcon = industryIconMap[active.icon] ?? Beaker;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const setIndex = (next: number | ((prev: number) => number)) => {
    const resolved =
      typeof next === "function" ? next(activeIndex) : next;
    if (resolved === activeIndex) return;

    if (reducedMotion) {
      setActiveIndex(resolved);
      return;
    }

    setContentVisible(false);
    window.setTimeout(() => {
      setActiveIndex(resolved);
      requestAnimationFrame(() => setContentVisible(true));
    }, 160);
  };

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  const onPointerDown = (
    clientX: number,
    clientY: number,
    target: EventTarget | null,
  ) => {
    if (isInteractiveTarget(target)) {
      pointerStart.current = null;
      return;
    }
    pointerStart.current = { x: clientX, y: clientY };
  };

  const onPointerUp = (clientX: number, clientY: number) => {
    if (!pointerStart.current) return;
    const dx = clientX - pointerStart.current.x;
    const dy = clientY - pointerStart.current.y;
    pointerStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const peekIndices = Array.from({ length: PEEK_COUNT }, (_, i) => {
    return (activeIndex + i + 1) % total;
  });

  const transitionClass = reducedMotion
    ? "duration-0"
    : "duration-500 ease-out";

  return (
    <div className="bg-black px-5 py-16 sm:px-8">
      <Reveal>
        <header className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-crimson">
            Industries We Protect
          </p>
          <h2 className="font-display mt-5 text-[1.9rem] font-bold leading-[1.18] text-white sm:text-[2.05rem]">
            Across Industries. Beyond Boundaries.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
            Our safety solutions power critical operations across India&apos;s
            most demanding industries.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={80}>
        <div
          className="relative mx-auto mt-14 max-w-[380px] select-none"
          onTouchStart={(e) =>
            onPointerDown(
              e.touches[0]?.clientX ?? 0,
              e.touches[0]?.clientY ?? 0,
              e.target,
            )
          }
          onTouchEnd={(e) =>
            onPointerUp(
              e.changedTouches[0]?.clientX ?? 0,
              e.changedTouches[0]?.clientY ?? 0,
            )
          }
          onMouseDown={(e) => onPointerDown(e.clientX, e.clientY, e.target)}
          onMouseUp={(e) => onPointerUp(e.clientX, e.clientY)}
          onMouseLeave={() => {
            pointerStart.current = null;
          }}
        >
          {/* Soft glow behind front card */}
          <div
            className="pointer-events-none absolute inset-x-6 bottom-8 top-[28%] rounded-[2rem] bg-crimson/20 blur-3xl"
            aria-hidden
          />

          <div className="relative pb-2 pt-[22%]">
            {peekIndices
              .map((industryIndex, stackPos) => {
                const industry = industries[industryIndex]!;
                const Icon = industryIconMap[industry.icon] ?? Beaker;
                // stackPos 0 = closest behind, 2 = furthest
                const scales = [0.97, 0.955, 0.94];
                const yOffsets = [-12, -24, -36];
                const opacities = [0.92, 0.78, 0.64];
                const scale = scales[stackPos] ?? 0.94;
                const yOffset = yOffsets[stackPos] ?? -36;
                const opacity = opacities[stackPos] ?? 0.64;

                return (
                  <div
                    key={`${industry.id}-peek`}
                    className={`pointer-events-none absolute inset-x-0 top-0 overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all ${transitionClass}`}
                    style={{
                      zIndex: PEEK_COUNT - stackPos,
                      transform: `translateY(${yOffset}px) scale(${scale})`,
                      opacity,
                      height: "120px",
                    }}
                    aria-hidden
                  >
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      sizes="380px"
                      className="object-cover object-center brightness-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    <div className="relative z-10 flex h-full items-center gap-3.5 px-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/55">
                        <Icon
                          className="size-4 text-white/85"
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="font-display text-lg font-semibold text-white/90">
                        {industry.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })
              .reverse()}

            {/* Active card */}
            <article
              className={`relative z-20 overflow-hidden rounded-2xl border border-crimson/80 shadow-[0_0_0_1px_rgba(192,0,29,0.35),0_0_32px_rgba(192,0,29,0.22),0_16px_48px_rgba(0,0,0,0.55)] transition-all ${transitionClass}`}
            >
              <div className="relative aspect-[4/5] min-h-[440px] w-full sm:min-h-[460px]">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.label}
                  fill
                  sizes="380px"
                  priority
                  className={`object-cover object-center transition-opacity duration-300 ${
                    contentVisible || reducedMotion
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"
                  aria-hidden
                />

                <div
                  className={`absolute inset-0 flex flex-col p-6 transition-all duration-300 ${
                    contentVisible || reducedMotion
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-[3.25rem] items-center justify-center rounded-full bg-crimson shadow-[0_0_24px_rgba(192,0,29,0.5)]">
                      <ActiveIcon
                        className="size-5 text-white"
                        strokeWidth={1.75}
                      />
                    </span>
                    <span className="rounded-md bg-crimson px-2.5 py-1 font-display text-[11px] font-bold tracking-wider text-white">
                      {padIndex(activeIndex)}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display text-[2rem] font-bold leading-tight text-white">
                      {active.shortLabel}
                    </h3>
                    <p className="mt-2.5 max-w-[95%] text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
                      {active.description}
                    </p>

                    <div className="mt-6 rounded-xl bg-black/35 px-2 py-3.5 backdrop-blur-[2px]">
                      <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        Key Challenges
                      </p>
                      <div className="mt-3.5 flex items-stretch justify-between">
                        {active.keyChallenges.map((challenge, i) => {
                          const ChallengeIconComp =
                            challengeIconMap[challenge.icon];
                          return (
                            <div
                              key={challenge.label}
                              className={`flex flex-1 flex-col items-center gap-2 px-2 text-center ${
                                i > 0 ? "border-l border-white/15" : ""
                              }`}
                            >
                              <ChallengeIconComp
                                className="size-4 text-crimson"
                                strokeWidth={1.75}
                                aria-hidden
                              />
                              <span className="text-[10px] font-medium leading-tight text-white/90">
                                {challenge.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <Link
                      href="/industries"
                      className="group mt-6 inline-flex flex-col gap-1.5"
                    >
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                        Explore Solutions
                        <ArrowRight
                          className="size-3.5 text-crimson transition-transform group-hover:translate-x-0.5"
                          strokeWidth={2.25}
                        />
                      </span>
                      <span
                        className="h-px w-full bg-gradient-to-r from-crimson via-crimson/70 to-transparent"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      {/* Controls */}
      <div className="mx-auto mt-7 max-w-[380px]">
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous industry"
            onClick={goPrev}
            className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white/70"
          >
            <ChevronLeft className="size-5" strokeWidth={2} />
          </button>

          <p className="font-display text-[15px] tracking-[0.08em]">
            <span className="font-bold text-crimson">
              {padIndex(activeIndex)}
            </span>
            <span className="text-white/75">
              {" "}
              / {String(total).padStart(2, "0")}
            </span>
          </p>

          <button
            type="button"
            aria-label="Next industry"
            onClick={goNext}
            className="flex size-11 items-center justify-center rounded-full bg-crimson text-white transition-colors hover:bg-crimson-hover"
          >
            <ChevronRight className="size-5" strokeWidth={2} />
          </button>
        </div>

        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Industry progress"
        >
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${industry.label}`}
              onClick={() => setIndex(index)}
              className={`h-1 w-5 rounded-full transition-colors duration-300 sm:w-6 ${
                index === activeIndex ? "bg-crimson" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
