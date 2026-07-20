"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Factory,
  HardHat,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  introImage,
  introMetrics,
  introMobileCta,
  introNarrative,
} from "@/data/company";

const metricIcons: Record<(typeof introMetrics)[number]["icon"], LucideIcon> = {
  shield: Shield,
  hardhat: HardHat,
  gears: Settings,
  factory: Factory,
};

function MetricRow({
  value,
  suffix,
  label,
  description,
  icon,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: (typeof introMetrics)[number]["icon"];
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const Icon = metricIcons[icon];
  const combinedLabel = `${label} ${description}`.toUpperCase();

  useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setCount(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <div className="flex items-center gap-4 border-b border-border py-5 first:border-t">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-crimson-soft">
        <Icon className="size-5 text-crimson" strokeWidth={1.5} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-display text-[28px] font-bold leading-none text-crimson">
          {count}
          {suffix}
        </p>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-charcoal">
          {combinedLabel}
        </p>
      </div>

      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-white"
        aria-hidden
      >
        <ChevronRight className="size-4 text-crimson" strokeWidth={1.5} />
      </span>
    </div>
  );
}

export function CompanyIntroMobile() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-surface">
      <div className="container-site py-14">
        <Reveal>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-crimson">
              Who We Are
            </p>
            <span className="mt-2 block h-px w-10 bg-crimson" aria-hidden />

            <h2 className="font-display mt-5 text-[1.85rem] font-bold leading-[1.2] text-charcoal">
              Protecting Industries
              <span className="text-crimson">.</span>
              <br />
              Building Safer Workplaces
              <span className="text-crimson">.</span>
            </h2>

            <span className="mt-5 block h-px w-10 bg-crimson" aria-hidden />

            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {introNarrative[0]}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={introImage.src}
              alt={introImage.alt}
              fill
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </Reveal>

        <div ref={ref} className="mt-2">
          {introMetrics.map((metric) => (
            <MetricRow key={metric.label} {...metric} active={active} />
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="relative mt-8 min-h-[156px] overflow-hidden rounded-2xl bg-footer">
            <Image
              src={introMobileCta.image.src}
              alt={introMobileCta.image.alt}
              fill
              sizes="100vw"
              className="object-cover object-[72%_center]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/25"
              aria-hidden
            />
            <div className="relative z-10 flex max-w-[62%] flex-col justify-center px-5 py-6">
              <p className="text-[14px] leading-snug text-white">
                {introMobileCta.text}
              </p>
              <span className="mt-4 block h-px w-8 bg-crimson" aria-hidden />
              <Link
                href={introMobileCta.href}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                {introMobileCta.linkLabel}
                <span className="block h-px w-6 bg-crimson" aria-hidden />
                <ChevronRight
                  className="size-3.5 -ml-1 text-crimson"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
