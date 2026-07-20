import {
  ArrowRight,
  Award,
  ClipboardList,
  Factory,
  Home,
  Package,
  Presentation,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JourneyMilestoneMobile } from "@/components/home/JourneyMilestoneMobile";
import {
  journeyBenefits,
  journeyIntro,
  journeyMilestones,
} from "@/data/company";

const YEARS_LETTERS = ["Y", "E", "A", "R", "S"] as const;

const milestoneIcons: Record<
  (typeof journeyMilestones)[number]["icon"],
  LucideIcon
> = {
  home: Home,
  package: Package,
  presentation: Presentation,
  clipboard: ClipboardList,
  factory: Factory,
  trending: TrendingUp,
};

const benefitIcons: Record<
  (typeof journeyBenefits)[number]["icon"],
  LucideIcon
> = {
  shield: ShieldCheck,
  target: Target,
  users: Users,
  award: Award,
};

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-charcoal md:text-5xl">
              Why Companies Continue To Choose Mark Safety
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {journeyIntro.headerSubtext}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,280px)_1fr] xl:gap-14">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" aria-hidden />
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
                  {journeyIntro.eyebrow}
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                {journeyIntro.body}
              </p>
              <div className="mt-8">
                <Button href={journeyIntro.ctaHref} size="md">
                  {journeyIntro.ctaLabel}
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            {/* Mobile: 30+ YEARS watermark */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-2 right-0 z-0 flex select-none flex-col items-end text-charcoal/[0.055] lg:hidden"
            >
              <span className="font-display text-[72px] font-bold leading-none tracking-tight sm:text-[100px]">
                30+
              </span>
              <span className="mt-0.5 flex flex-col items-end font-display text-[52px] font-bold leading-[0.88] tracking-tight sm:text-[72px]">
                {YEARS_LETTERS.map((letter) => (
                  <span key={letter}>{letter}</span>
                ))}
              </span>
            </div>

            {/* Desktop: classic 30 watermark */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 right-4 z-0 hidden select-none font-display text-[200px] font-bold leading-none tracking-tight text-charcoal/[0.045] lg:block lg:text-[220px]"
            >
              30
            </span>

            {/* Mobile / tablet — scroll-reveal vertical timeline */}
            <ol className="relative z-10 list-none space-y-0 lg:hidden">
              {journeyMilestones.map((milestone, index) => (
                <JourneyMilestoneMobile
                  key={milestone.year}
                  milestone={milestone}
                  isLast={index === journeyMilestones.length - 1}
                />
              ))}
            </ol>

            {/* Desktop — horizontal timeline (unchanged) */}
            <div className="relative z-10 hidden px-1 lg:block">
              <div
                aria-hidden
                className="pointer-events-none absolute top-[3.25rem] right-4 left-4 h-px bg-charcoal/15"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-[3.1rem] right-1 border-y-[5px] border-l-[7px] border-y-transparent border-l-charcoal/25"
              />

              <ol className="relative flex list-none justify-between">
                {journeyMilestones.map((milestone, index) => {
                  const Icon = milestoneIcons[milestone.icon];
                  const isHighlight = milestone.highlight;

                  return (
                    <li
                      key={milestone.year}
                      className="flex w-[118px] shrink-0 flex-col items-center text-center md:w-[128px]"
                    >
                      <Reveal delayMs={index * 50}>
                        <div className="flex flex-col items-center">
                          <p className="h-5 text-[13px] font-medium leading-5 tracking-wide text-crimson">
                            {milestone.year}
                          </p>

                          <div
                            className={`relative z-10 mt-2 flex size-12 items-center justify-center rounded-full border ${
                              isHighlight
                                ? "border-crimson bg-crimson text-white shadow-[0_0_0_4px_rgba(192,0,29,0.1)]"
                                : "border-crimson/50 bg-white text-charcoal"
                            }`}
                          >
                            <Icon className="size-5" strokeWidth={1.25} />
                          </div>

                          <h3
                            className={`mt-3.5 text-[11px] font-bold uppercase tracking-[0.08em] md:text-xs ${
                              isHighlight ? "text-crimson" : "text-charcoal"
                            }`}
                          >
                            {milestone.title}
                          </h3>
                          <p className="mt-1.5 min-h-[2.7em] max-w-[112px] text-[11px] leading-[1.35] text-muted md:max-w-[118px]">
                            {milestone.description}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* Benefits — mobile premium stack */}
        <Reveal delayMs={120}>
          <div className="mt-16 md:mt-20 lg:hidden">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
                What This Means For You
              </p>
            </div>

            <div>
              {journeyBenefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon];
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 border-b border-border py-5 first:border-t"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-crimson-soft">
                      <Icon
                        className="size-5 text-crimson"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-sm font-semibold text-charcoal">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Benefits — desktop panel (unchanged) */}
        <Reveal delayMs={120}>
          <div className="mt-16 hidden rounded-2xl border border-border bg-white/80 px-5 py-5 md:mt-20 md:px-8 md:py-6 lg:block">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
                What This Means For You
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-4 lg:gap-0">
              {journeyBenefits.map((benefit, index) => {
                const Icon = benefitIcons[benefit.icon];
                const isLast = index === journeyBenefits.length - 1;

                return (
                  <div
                    key={benefit.title}
                    className={`flex gap-3 lg:px-5 xl:px-6 ${
                      isLast ? "" : "lg:border-r lg:border-border"
                    }`}
                  >
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-crimson"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
