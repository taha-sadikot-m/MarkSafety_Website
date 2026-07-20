import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { recognitionItems } from "@/data/company";

const [awardItem, ...ledgerItems] = recognitionItems;

export function AchievementsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
                Recognition
              </p>
              <span className="h-px w-8 bg-crimson" aria-hidden />
            </div>
            <h2 className="font-display mt-4 text-3xl font-bold text-charcoal md:text-5xl">
              Recognized For Excellence
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Awards, memberships, and credentials that reflect our standing in
              industrial safety.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal delayMs={60}>
            <article className="group relative flex h-full flex-col border border-border p-3 sm:p-4">
              <div className="relative flex flex-1 flex-col items-center justify-center border border-border/70 px-8 py-12 text-center sm:px-10 sm:py-14 md:px-12 md:py-16">
                <span
                  aria-hidden
                  className="absolute top-5 right-5 text-[11px] font-semibold tracking-[0.14em] text-muted"
                >
                  {awardItem.label}
                </span>

                <span className="flex size-14 items-center justify-center rounded-full border border-crimson text-crimson transition-transform duration-300 group-hover:scale-105">
                  <Award className="size-6" strokeWidth={1.5} />
                </span>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson">
                  Industry Distinction
                </p>
                <h3 className="font-display mt-3 max-w-[16ch] text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                  {awardItem.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-12 bg-crimson"
                />
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {awardItem.detail}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
              Credentials Ledger
            </p>

            <ul className="mt-4 flex flex-1 flex-col divide-y divide-border">
              {ledgerItems.map((item, index) => {
                const indexLabel = String(index + 1).padStart(2, "0");

                return (
                  <Reveal key={item.title} delayMs={100 + index * 50}>
                    <li className="flex gap-4 py-5 first:pt-2 last:pb-0 sm:gap-5">
                      <span className="w-8 shrink-0 pt-0.5 text-[13px] font-semibold tracking-[0.08em] text-crimson">
                        {indexLabel}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-sm font-semibold text-charcoal">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delayMs={300}>
              <div className="mt-8 flex justify-start lg:justify-end">
                <Link
                  href="/certificates"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-colors hover:text-crimson-hover"
                >
                  View Certificates
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
