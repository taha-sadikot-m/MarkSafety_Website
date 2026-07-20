"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { trustMetrics } from "@/data/company";

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function Metric({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="text-center md:text-left">
      <p className="font-display text-5xl font-bold text-crimson md:text-6xl lg:text-7xl">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-footer py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
            Proof In Numbers
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
            Numbers That Build Trust
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustMetrics.map((metric) => (
            <Metric key={metric.label} {...metric} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
