"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { bodyZones, getZoneEmphasis, type ZoneEmphasis } from "@/data/body-map";
import { industries, type IndustryId, type ZoneId } from "@/data/industries";
import { productsByZone } from "@/data/products";
import { HumanFigure } from "@/components/products/HumanFigure";
import {
  Battery,
  Beaker,
  Car,
  Cog,
  Droplets,
  FlaskConical,
  Sprout,
  Zap,
} from "lucide-react";

const iconMap = {
  flask: FlaskConical,
  beaker: Beaker,
  droplets: Droplets,
  cog: Cog,
  zap: Zap,
  sprout: Sprout,
  car: Car,
  battery: Battery,
} as const;

function emphasisStyles(emphasis: ZoneEmphasis, active: boolean) {
  if (active) {
    return {
      dot: "bg-crimson",
      ring: "border-crimson/40",
      label: "border-crimson text-charcoal",
      muted: false,
    };
  }
  if (emphasis === "primary") {
    return {
      dot: "bg-crimson",
      ring: "border-crimson/30",
      label: "border-crimson text-charcoal",
      muted: false,
    };
  }
  if (emphasis === "secondary") {
    return {
      dot: "bg-crimson/70",
      ring: "border-crimson/20",
      label: "border-crimson/60 text-charcoal",
      muted: false,
    };
  }
  return {
    dot: "bg-[#CCCCCC]",
    ring: "border-[#CCCCCC]/40",
    label: "border-[#CCCCCC] text-muted",
    muted: true,
  };
}

export function BodyMapConfigurator() {
  const [industryId, setIndustryId] = useState<IndustryId>("chemical");
  const [activeZone, setActiveZone] = useState<ZoneId | null>(null);

  const industry = industries.find((i) => i.id === industryId) ?? industries[0];
  const zoneProducts = useMemo(
    () => (activeZone ? productsByZone(activeZone) : []),
    [activeZone],
  );
  const activeZoneMeta = bodyZones.find((z) => z.id === activeZone);

  return (
    <div>
      {/* Industry selector */}
      <div className="-mx-1 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
        <div className="flex w-max min-w-0 gap-2 sm:gap-3">
          {industries.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cog;
            const selected = item.id === industryId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndustryId(item.id)}
                className={`flex min-w-[88px] flex-col items-center gap-1.5 rounded-[4px] border px-3 py-2.5 transition-all sm:min-w-[110px] sm:gap-2 sm:px-4 sm:py-3 ${
                  selected
                    ? "border-crimson bg-crimson text-white shadow-md"
                    : "border-border bg-white text-charcoal hover:border-crimson/40"
                }`}
              >
                <Icon className="size-4 sm:size-5" strokeWidth={1.5} />
                <span className="text-[11px] font-semibold sm:text-sm">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Configurator */}
      <div className="relative mt-8 overflow-hidden rounded-[4px] border border-border bg-white">
        <div
          className={`grid transition-all duration-300 ${
            activeZone ? "lg:grid-cols-[45%_55%]" : "grid-cols-1"
          }`}
        >
          <div className="relative min-h-[420px] px-3 py-6 sm:min-h-[480px] sm:px-4 sm:py-8 md:min-h-[520px] md:px-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              aria-hidden
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, #C0001D 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px]">
              <HumanFigure industry={industryId} />

              {bodyZones.map((zone) => {
                const emphasis = getZoneEmphasis(
                  zone.id,
                  industry.primaryZones,
                  industry.secondaryZones,
                );
                const isActive = activeZone === zone.id;
                const styles = emphasisStyles(emphasis, isActive);
                const showPulse = !styles.muted && emphasis === "primary";

                return (
                  <div
                    key={zone.id}
                    className="absolute"
                    style={{
                      left: `${zone.x}%`,
                      top: `${zone.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveZone((current) =>
                          current === zone.id ? null : zone.id,
                        )
                      }
                      className="group relative flex items-center"
                      aria-label={`${zone.label}, ${zone.productCount} products`}
                    >
                      {/* Labels — desktop */}
                      <span
                        className={`pointer-events-none absolute top-1/2 z-10 hidden w-36 -translate-y-1/2 rounded-[4px] border bg-white px-2 py-1.5 shadow-sm md:block ${
                          styles.label
                        } ${zone.side === "left" ? "right-8 text-right" : "left-8 text-left"}`}
                      >
                        <span className="block text-[13px] font-semibold leading-tight">
                          {zone.label}
                        </span>
                        <span
                          className={`block text-[11px] ${
                            styles.muted ? "text-muted" : "text-crimson"
                          }`}
                        >
                          {zone.productCount} Products
                        </span>
                      </span>
                      {/* Connector line */}
                      <span
                        className={`pointer-events-none absolute top-1/2 hidden h-px w-6 -translate-y-1/2 md:block ${
                          styles.muted ? "bg-[#CCCCCC]" : "bg-crimson"
                        } ${zone.side === "left" ? "right-3" : "left-3"}`}
                        aria-hidden
                      />

                      <span className="relative flex size-9 items-center justify-center">
                        {showPulse ? (
                          <>
                            <span className="hotspot-pulse absolute size-9 rounded-full border-2 border-crimson/30" />
                            <span className="hotspot-pulse-delay absolute size-[36px] rounded-full border border-crimson/10" />
                          </>
                        ) : null}
                        <span
                          className={`relative size-3 rounded-full ${styles.dot} ${
                            isActive ? "scale-125 ring-2 ring-crimson/40" : ""
                          } ${emphasis === "secondary" ? "size-2.5" : ""}`}
                        />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-center text-sm text-muted md:hidden">
              Tap a body zone to explore products
            </p>
          </div>

          {/* Desktop sidebar */}
          {activeZone && activeZoneMeta ? (
            <aside className="hidden border-l border-border bg-crimson-tint lg:flex lg:flex-col">
              <div className="card-accent flex items-start justify-between border-b border-border p-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    {activeZoneMeta.label}
                  </h3>
                  <p className="mt-2">
                    <span className="rounded-[4px] bg-crimson px-2.5 py-1 text-xs font-semibold text-white">
                      {industry.label} Industry
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveZone(null)}
                  className="text-crimson"
                  aria-label="Close sidebar"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-5">
                {zoneProducts.map((product) => (
                  <article
                    key={product.id}
                    className="card-accent flex flex-col border border-border bg-white p-3"
                  >
                    <div className="mb-3 flex aspect-[4/3] items-center justify-center bg-surface text-xs text-muted">
                      Product
                    </div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      {product.name}
                    </h4>
                    <p className="mt-1 text-xs text-muted">Brand: {product.brand}</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <Button href="/quote" size="sm" className="w-full">
                        Get Quote
                      </Button>
                      <Button href="/products" variant="text" size="sm" className="justify-start">
                        Details →
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="border-t border-border p-4">
                <Button href="/products" className="w-full">
                  View All {activeZoneMeta.label} Products →
                </Button>
              </div>
            </aside>
          ) : null}
        </div>
      </div>

      {/* Mobile bottom drawer */}
      {activeZone && activeZoneMeta ? (
        <div className="fixed inset-x-0 bottom-0 z-[900] lg:hidden">
          <button
            type="button"
            className="absolute inset-x-0 bottom-full h-screen bg-charcoal/40"
            aria-label="Dismiss"
            onClick={() => setActiveZone(null)}
          />
          <div className="relative max-h-[75vh] overflow-hidden rounded-t-xl bg-crimson-tint pb-[env(safe-area-inset-bottom,0px)] shadow-2xl">
            <div className="card-accent flex items-start justify-between border-b border-border p-4">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal">
                  {activeZoneMeta.label}
                </h3>
                <p className="mt-2">
                  <span className="rounded-[4px] bg-crimson px-2.5 py-1 text-xs font-semibold text-white">
                    {industry.label}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveZone(null)}
                className="text-crimson"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="grid max-h-[50vh] grid-cols-2 gap-2 overflow-y-auto p-3 sm:gap-3 sm:p-4">
              {zoneProducts.map((product) => (
                <article
                  key={product.id}
                  className="card-accent border border-border bg-white p-3"
                >
                  <div className="mb-2 flex aspect-[4/3] items-center justify-center bg-surface text-[10px] text-muted">
                    Product
                  </div>
                  <h4 className="text-sm font-semibold text-charcoal">
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted">{product.brand}</p>
                  <Button href="/quote" size="sm" className="mt-2 w-full">
                    Get Quote
                  </Button>
                </article>
              ))}
            </div>
            <div className="border-t border-border p-3 pb-6">
              <Button href="/products" className="w-full">
                View All {activeZoneMeta.label} Products →
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
