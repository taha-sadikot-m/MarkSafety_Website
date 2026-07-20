"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Hand,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { safetyProcess, safetyProcessIntro } from "@/data/company";

const SWIPE_THRESHOLD = 48;

export function SafetyProcessMobile() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const scrollingProgrammatically = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = safetyProcess.length;

  const scrollToIndex = useCallback((index: number) => {
    const card = cardRefs.current[index];
    const track = trackRef.current;
    if (!card || !track) return;
    scrollingProgrammatically.current = true;
    const left = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    window.setTimeout(() => {
      scrollingProgrammatically.current = false;
    }, 400);
  }, []);

  const selectIndex = (index: number) => {
    const next = ((index % total) + total) % total;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const goNext = () => selectIndex(activeIndex + 1);
  const goPrev = () => selectIndex(activeIndex - 1);

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

  const onPointerDown = (clientX: number, clientY: number) => {
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

  return (
    <div className="bg-footer px-5 py-14 sm:px-8">
      <Reveal>
        <header className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-crimson">
            {safetyProcessIntro.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[1.85rem] font-bold leading-[1.18] text-white sm:text-[2rem]">
            {safetyProcessIntro.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
            {safetyProcessIntro.body}
          </p>
        </header>
      </Reveal>

      {/* Snap cards */}
      <Reveal delayMs={80}>
        <div
          className="mt-10"
          onTouchStart={(e) =>
            onPointerDown(e.touches[0]?.clientX ?? 0, e.touches[0]?.clientY ?? 0)
          }
          onTouchEnd={(e) =>
            onPointerUp(
              e.changedTouches[0]?.clientX ?? 0,
              e.changedTouches[0]?.clientY ?? 0,
            )
          }
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {safetyProcess.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={step.step}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`relative w-[calc(100vw-2.75rem)] shrink-0 snap-center overflow-hidden rounded-3xl border transition-all duration-300 sm:w-[min(100%,380px)] ${
                    isActive
                      ? "border-crimson/80 shadow-[0_0_0_1px_rgba(192,0,29,0.35),0_0_28px_rgba(192,0,29,0.25)]"
                      : "border-white/10 opacity-80"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="400px"
                      className="object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-footer via-transparent to-black/20"
                      aria-hidden
                    />
                    <span className="absolute bottom-3 left-4 flex size-11 items-center justify-center rounded-full bg-crimson font-display text-sm font-bold text-white shadow-[0_0_20px_rgba(192,0,29,0.45)]">
                      {step.step}
                    </span>
                  </div>

                  <div className="bg-[#141414] px-5 pb-5 pt-5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <span
                      className="mt-2 block h-px w-10 bg-crimson"
                      aria-hidden
                    />
                    <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                      {step.body}
                    </p>

                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-crimson">
                      Deliverables
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[12px] leading-snug text-white/80"
                        >
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-crimson"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Link
                        href={step.detailsHref}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-crimson"
                      >
                        <ChevronRight className="size-3.5" strokeWidth={2.5} />
                        View Details
                      </Link>
                      <Link
                        href={step.pdfHref}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold text-white transition-colors hover:border-white/35"
                      >
                        <Download
                          className="size-3.5 text-crimson"
                          strokeWidth={2}
                        />
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>
      </Reveal>

      {/* Stepper */}
      <div className="relative mx-auto mt-10 max-w-[380px] px-1">
        <div
          className="pointer-events-none absolute top-[7px] right-4 left-4 border-t border-dashed border-white/20"
          aria-hidden
        />
        <div className="relative flex justify-between">
          {safetyProcess.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => selectIndex(index)}
                className="flex w-12 flex-col items-center"
                aria-label={`Go to ${step.title}`}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={`relative z-10 size-3.5 rounded-full border-2 transition-all ${
                    isActive
                      ? "border-white bg-white shadow-[0_0_0_4px_rgba(192,0,29,0.35),0_0_16px_rgba(192,0,29,0.55)]"
                      : "border-white/40 bg-footer"
                  }`}
                />
                <span
                  className={`mt-2 text-center text-[9px] font-semibold leading-tight ${
                    isActive ? "text-crimson" : "text-white/40"
                  }`}
                >
                  <span className="block">{step.step}</span>
                  <span className="mt-0.5 block max-w-[3.25rem] truncate">
                    {step.title.split(" ")[0]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="mx-auto mt-8 flex max-w-[380px] items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Previous step"
          onClick={goPrev}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white/60"
        >
          <ChevronLeft className="size-5" strokeWidth={2} />
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2.5">
          <Hand className="size-4 shrink-0 text-crimson" strokeWidth={1.75} />
          <p className="truncate text-[10px] leading-snug text-white/50 sm:text-[11px]">
            Swipe horizontally to explore all steps
          </p>
        </div>

        <button
          type="button"
          aria-label="Next step"
          onClick={goNext}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white/60"
        >
          <ChevronRight className="size-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
