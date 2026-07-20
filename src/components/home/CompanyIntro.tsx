"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Factory,
  HardHat,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { introImage, introMetrics, introNarrative } from "@/data/company";

const metricIcons: Record<(typeof introMetrics)[number]["icon"], LucideIcon> = {
  shield: Shield,
  hardhat: HardHat,
  gears: Settings,
  factory: Factory,
};

function MetricCell({
  value,
  suffix,
  label,
  description,
  icon,
  active,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: (typeof introMetrics)[number]["icon"];
  active: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const Icon = metricIcons[icon];

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

  // Mobile 2-col: divider on odd indices; desktop 4-col: divider on all but first
  const dividerClass =
    index % 2 === 1
      ? "border-l border-border"
      : index > 0
        ? "md:border-l md:border-border"
        : "";

  return (
    <div
      className={`flex flex-col items-center px-2 py-4 text-center sm:px-3 ${dividerClass}`}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-surface md:size-14">
        <Icon className="size-5 text-crimson md:size-6" strokeWidth={1.5} />
      </div>
      <p className="mt-4 text-3xl font-bold text-crimson md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-charcoal">
        {label}
      </p>
      <p className="mt-1 text-sm text-charcoal">{description}</p>
      <span className="mt-3 block h-1 w-8 bg-crimson" aria-hidden />
    </div>
  );
}

export function CompanyIntro() {
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
    <section id="company-intro" className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="container-site flex flex-col justify-center py-16 lg:max-w-none lg:py-24 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pr-10 xl:pr-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
                Who We Are
              </p>
            </div>

            <h2 className="font-display mt-5 text-3xl font-bold leading-[1.15] text-charcoal md:text-5xl">
              Protecting Industries
              <span className="text-crimson">.</span>
              <br />
              Building Safer Workplaces
              <span className="text-crimson">.</span>
            </h2>

            <div className="mt-5 h-px w-12 bg-crimson" aria-hidden />

            <div className="mt-6 max-w-md space-y-3">
              {introNarrative.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div
            ref={ref}
            className="mt-10 grid grid-cols-2 md:mt-12 md:grid-cols-4"
          >
            {introMetrics.map((metric, index) => (
              <MetricCell
                key={metric.label}
                {...metric}
                index={index}
                active={active}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] max-h-[42vh] w-full lg:max-h-none lg:min-h-[680px]">
          <div className="intro-photo-merge absolute inset-0">
            <Image
              src={introImage.src}
              alt={introImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
