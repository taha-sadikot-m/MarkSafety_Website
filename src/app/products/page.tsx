import type { Metadata } from "next";
import { Download, QrCode } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BodyMapConfigurator } from "@/components/products/BodyMapConfigurator";
import { company } from "@/data/company";
import { fireSafetyCards, safetySolutions } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Safety Configurator",
  description:
    "Find the right PPE for your industry with Mark Safety's interactive body-map configurator.",
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="bg-white">
        <div className="bg-gradient-to-b from-white to-surface">
          <div className="container-site py-12 md:py-16">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
              Complete Product Range
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl">
              Find the Right Protection for Your Industry
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              Select your industry below. Click any body zone to explore the exact
              products your workers need.
            </p>
          </div>
        </div>

        <div className="container-site pb-16 md:pb-24">
          <BodyMapConfigurator />
        </div>
      </section>

      <section id="fire-safety" className="bg-crimson-stripe py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              tone="light"
              eyebrow="Fire Safety"
              title="Complete Fire Protection for Every Facility"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fireSafetyCards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 50}>
                <article className="card-accent flex h-full flex-col border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 size-10 rounded-[4px] bg-crimson-soft" aria-hidden />
                  <h3 className="text-lg font-semibold text-charcoal">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{card.description}</p>
                  <span className="mt-4 text-sm font-medium text-crimson">Explore →</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="safety-solutions" className="bg-surface py-16 md:py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Safety Solutions"
              title="Application-Specific PPE Bundles"
              subtext="Pre-configured protection packages for the most complex hazard environments."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {safetySolutions.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 40}>
                <article className="card-accent h-full rounded-[4px] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-charcoal">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-footer py-16 md:py-20">
        <div className="container-site grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                Take the Full Catalogue With You
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Download our complete product catalogue — 200+ products across all
                safety categories.
              </p>
              <Button href={company.catalogueUrl} className="mt-8">
                <Download className="size-4" />
                Download Catalogue (PDF)
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="flex flex-col items-center justify-center rounded-[4px] border border-white/15 bg-white/5 p-8 text-center">
              <QrCode className="size-24 text-white/80" strokeWidth={1} />
              <p className="mt-4 text-sm text-white/60">Scan to download</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
