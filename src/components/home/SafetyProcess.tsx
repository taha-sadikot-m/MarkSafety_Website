import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Cog,
  Monitor,
  Package,
  Presentation,
  Search,
  ShieldCheck,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import {
  safetyProcess,
  safetyProcessCta,
  safetyProcessIntro,
  safetyProcessPillars,
  safetyProcessPromise,
} from "@/data/company";

const stepIcons: Record<(typeof safetyProcess)[number]["icon"], LucideIcon> = {
  search: Search,
  shield: ShieldCheck,
  monitor: Monitor,
  package: Package,
  presentation: Presentation,
  wrench: Wrench,
};

const pillarIcons: Record<
  (typeof safetyProcessPillars)[number]["icon"],
  LucideIcon
> = {
  clipboard: ClipboardList,
  cog: Cog,
  badge: BadgeCheck,
  trending: TrendingUp,
};

/** Degrees from center: 01 top, then clockwise */
const HEX_ANGLES = [-90, -30, 30, 90, 150, 210] as const;
const HEX_RADIUS = 36;

function polarStyle(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + radiusPct * Math.cos(rad);
  const y = 50 + radiusPct * Math.sin(rad);
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: "translate(-50%, -50%)",
  } as const;
}

function HexFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`hex-glow relative ${className}`}>
      <div className="hex-clip absolute inset-0 bg-crimson" aria-hidden />
      <div className="hex-clip absolute inset-[2px] overflow-hidden bg-footer [&>*]:h-full">
        {children}
      </div>
      {/* Pointy-top hex aspect ≈ √3/2 */}
      <div className="invisible aspect-[0.866] w-full" aria-hidden />
    </div>
  );
}

function StepHexContent({
  item,
}: {
  item: (typeof safetyProcess)[number];
}) {
  const Icon = stepIcons[item.icon];

  return (
    <div className="relative size-full">
      <Image
        src={item.image}
        alt=""
        fill
        sizes="220px"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-footer/50 via-footer/70 to-footer/90" />
      <div className="relative z-10 flex size-full flex-col items-center justify-center px-3.5 py-5 text-center xl:px-5">
        <span className="absolute right-[18%] top-[14%] flex size-6 items-center justify-center rounded-full bg-crimson text-[10px] font-semibold text-white xl:size-7 xl:text-xs">
          {item.step}
        </span>
        <Icon className="size-4 text-white xl:size-5" strokeWidth={1.75} aria-hidden />
        <h3 className="mt-1.5 text-[11px] font-semibold leading-tight text-white xl:mt-2 xl:text-sm">
          {item.title}
        </h3>
        <p className="mt-1 text-[9px] leading-snug text-white/75 xl:mt-1.5 xl:text-[11px]">
          {item.body}
        </p>
      </div>
    </div>
  );
}

function ProcessHexRing() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[680px]">
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 100 100"
        aria-hidden
      >
        {HEX_ANGLES.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 50 + HEX_RADIUS * Math.cos(rad);
          const y2 = 50 + HEX_RADIUS * Math.sin(rad);
          return (
            <g key={angle}>
              <line
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="0.12"
                strokeDasharray="0.7 0.55"
              />
              <circle
                cx={(50 + x2) / 2}
                cy={(50 + y2) / 2}
                r="0.4"
                fill="rgba(255,255,255,0.5)"
              />
            </g>
          );
        })}
      </svg>

      <div
        className="absolute z-20 w-[20%]"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <HexFrame>
          <div className="relative flex size-full items-center justify-center">
            <Logo variant="dark" className="scale-[0.72] xl:scale-90" />
          </div>
        </HexFrame>
      </div>

      {safetyProcess.map((item, index) => (
        <div
          key={item.step}
          className="absolute z-10 w-[30%] transition-transform duration-300 hover:z-30 hover:scale-105"
          style={polarStyle(HEX_ANGLES[index], HEX_RADIUS)}
        >
          <HexFrame>
            <StepHexContent item={item} />
          </HexFrame>
        </div>
      ))}
    </div>
  );
}

function MobileStepList() {
  return (
    <ul className="mt-10 space-y-3 lg:hidden">
      {safetyProcess.map((item, index) => {
        const Icon = stepIcons[item.icon];
        return (
          <Reveal key={item.step} delayMs={index * 40}>
            <li className="flex gap-4 border border-white/10 bg-white/[0.04] p-4">
              <div className="relative w-14 shrink-0">
                <HexFrame>
                  <div className="relative size-full">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-footer/60" />
                  </div>
                </HexFrame>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-crimson text-[10px] font-semibold text-white">
                    {item.step}
                  </span>
                  <Icon
                    className="size-4 shrink-0 text-crimson"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}

export function SafetyProcess() {
  return (
    <section className="relative overflow-hidden bg-footer py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      >
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-site relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-8 xl:gap-12">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" aria-hidden />
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
                  {safetyProcessIntro.eyebrow}
                </p>
              </div>
              <h2 className="font-display mt-4 max-w-md text-3xl font-bold text-white md:text-5xl">
                {safetyProcessIntro.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                {safetyProcessIntro.body}
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="mt-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
                  {safetyProcessPromise.title}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                  {safetyProcessPromise.body}
                </p>
                <Button
                  href={safetyProcessCta.href}
                  variant="primary"
                  size="md"
                  className="mt-5"
                >
                  {safetyProcessCta.linkLabel}
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="hidden lg:block">
            <ProcessHexRing />
          </Reveal>
        </div>

        <MobileStepList />

        <Reveal delayMs={100}>
          <div className="mt-14 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:grid-cols-2 sm:gap-3 lg:mt-16 lg:grid-cols-4 lg:p-4">
            {safetyProcessPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];
              return (
                <div
                  key={pillar.title}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 transition-colors hover:border-crimson/30 hover:bg-white/[0.05]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15">
                    <Icon
                      className="size-5 text-crimson"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/65 md:text-sm">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
