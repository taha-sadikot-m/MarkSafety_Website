"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Beaker,
  Car,
  ChevronLeft,
  ChevronRight,
  Cog,
  Factory,
  Pill,
  Plug,
  Shield,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

const iconMap: Record<string, LucideIcon> = {
  beaker: Beaker,
  flask: Pill,
  droplets: Factory,
  battery: Zap,
  cog: Cog,
  car: Car,
  zap: Plug,
  sprout: Sprout,
};

export function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);

    const trackLeft = track.getBoundingClientRect().left;
    let best = 0;
    let bestScore = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const visibleLeft = Math.max(rect.left, trackLeft);
      const visibleRight = Math.min(rect.right, trackLeft + clientWidth);
      const visibleWidth = Math.max(0, visibleRight - visibleLeft);
      if (visibleWidth < rect.width * 0.4) return;

      const distFromLeft = Math.abs(rect.left - trackLeft - 16);
      if (distFromLeft < bestScore) {
        bestScore = distFromLeft;
        best = index;
      }
    });

    setActiveIndex(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    const activeCard = cardRefs.current[activeIndex];
    if (!track || !activeCard) return;

    const gap = 8;
    const amount = activeCard.offsetWidth + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-black py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
              Industries We Protect
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
              Across Industries. Beyond Boundaries.
            </h2>
            <p className="mt-5 text-base text-white/70 md:text-lg">
              Our safety solutions power critical operations across India&apos;s
              most demanding industries. Explore how we help each sector build
              safer, stronger and more resilient workplaces.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14">
        <button
          type="button"
          aria-label="Previous industries"
          disabled={!canScrollPrev}
          onClick={() => scrollByCard(-1)}
          className="absolute top-1/2 left-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crimson text-white transition-all duration-200 hover:scale-105 hover:bg-crimson-hover active:scale-95 disabled:pointer-events-none disabled:opacity-30 md:left-6 md:flex lg:left-10"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Next industries"
          disabled={!canScrollNext}
          onClick={() => scrollByCard(1)}
          className="absolute top-1/2 right-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crimson text-white transition-all duration-200 hover:scale-105 hover:bg-crimson-hover active:scale-95 disabled:pointer-events-none disabled:opacity-30 md:right-6 md:flex lg:right-10"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden"
        >
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? Beaker;
            const isActive = activeIndex === index;

            return (
              <Reveal
                key={industry.id}
                delayMs={index * 40}
                className="shrink-0 snap-start"
              >
                <Link
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  href="/industries"
                  className={`group relative block h-[440px] w-[min(72vw,200px)] overflow-hidden bg-black transition-all duration-300 sm:w-[190px] md:h-[500px] md:w-[200px] lg:w-[210px] ${
                    isActive
                      ? "ring-1 ring-crimson"
                      : "ring-1 ring-transparent opacity-90 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.label}
                    fill
                    sizes="210px"
                    className={`object-cover object-center transition-[transform,filter] duration-700 group-hover:scale-105 ${
                      isActive
                        ? "brightness-100"
                        : "brightness-[0.85] group-hover:brightness-100"
                    }`}
                  />

                  {/* Fade into solid black text panel (~bottom 45%) */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black from-[35%] via-black/95 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-[28%] bg-black"
                    aria-hidden
                  />

                  {/* Content — icon sits on the fade line */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start px-4 pb-5">
                    <span
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full border bg-black/40 text-white transition-colors duration-300 ${
                        isActive ? "border-crimson" : "border-white/60"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                      {industry.label}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="container-site mt-12 md:mt-16">
        <Reveal delayMs={120}>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <p className="flex items-center gap-2.5 text-sm text-white md:text-base">
              <Shield
                className="h-4 w-4 shrink-0 text-crimson"
                strokeWidth={1.5}
              />
              <span>One Partner. Every Industry. Complete Protection.</span>
            </p>
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson transition-colors hover:text-crimson-hover"
            >
              Explore All Solutions
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
