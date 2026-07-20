"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  getProductRangeCategory,
  productRangeCategories,
  productRangeIntro,
  type ProductRangeCategory,
  type ProductRangeHotspot,
  type ProductRangeItem,
} from "@/data/product-range";

function CategoryPills({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav
      aria-label="Product categories"
      className="flex gap-2 overflow-x-auto pb-px [-ms-overflow-style:none] [scrollbar-width:none] lg:justify-center lg:gap-3 [&::-webkit-scrollbar]:hidden"
    >
      {productRangeCategories.map((category) => {
        const active = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`group relative shrink-0 px-3.5 py-3 text-left transition-colors duration-300 sm:px-4 ${
              active ? "text-charcoal" : "text-muted hover:text-charcoal"
            }`}
            aria-current={active ? "true" : undefined}
          >
            <span className="flex flex-col items-center gap-1.5">
              <span
                className={`text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 ${
                  active
                    ? "text-crimson"
                    : "text-muted/70 group-hover:text-crimson/70"
                }`}
              >
                {category.number}
              </span>
              <span
                className={`text-[13px] tracking-[0.04em] sm:text-sm ${
                  active ? "font-semibold" : "font-medium"
                }`}
              >
                {category.shortTitle}
              </span>
            </span>
            <span
              className={`absolute inset-x-2 bottom-0 h-[2px] origin-center rounded-full transition-all duration-300 ${
                active
                  ? "scale-x-100 bg-crimson"
                  : "scale-x-0 bg-charcoal/25 group-hover:scale-x-100"
              }`}
              aria-hidden
            />
          </button>
        );
      })}
    </nav>
  );
}

function AmbientDust() {
  return (
    <div
      className="exhibition-dust pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <span className="absolute left-[18%] top-[62%] size-1 rounded-full bg-white/40 blur-[1px]" />
      <span className="absolute left-[52%] top-[70%] size-1.5 rounded-full bg-white/25 blur-[1px]" />
      <span className="absolute left-[74%] top-[58%] size-1 rounded-full bg-crimson/25 blur-[1px]" />
    </div>
  );
}

function HotspotTooltip({
  hotspot,
  preferAbove,
}: {
  hotspot: ProductRangeHotspot;
  preferAbove: boolean;
}) {
  return (
    <div
      role="tooltip"
      className={`pointer-events-none absolute left-1/2 z-20 w-max max-w-[200px] -translate-x-1/2 rounded-md border border-white/15 bg-charcoal/85 px-3 py-2 text-left shadow-lg backdrop-blur-sm ${
        preferAbove ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
      }`}
    >
      <p className="text-xs font-semibold text-white">{hotspot.label}</p>
      <p className="mt-0.5 text-[11px] leading-snug text-white/70">
        {hotspot.items}
      </p>
    </div>
  );
}

function ExhibitionStage({
  category,
  activeHotspotId,
  hoveredHotspotId,
  onSelectHotspot,
  onHoverHotspot,
}: {
  category: ProductRangeCategory;
  activeHotspotId: string | null;
  hoveredHotspotId: string | null;
  onSelectHotspot: (id: string) => void;
  onHoverHotspot: (id: string | null) => void;
}) {
  const [baseSrc, setBaseSrc] = useState(category.heroImage);
  const [overlaySrc, setOverlaySrc] = useState<string | null>(null);
  const [overlayOpaque, setOverlayOpaque] = useState(false);
  const [hotspotsVisible, setHotspotsVisible] = useState(true);
  const currentSrcRef = useRef(category.heroImage);
  const layerId = useId();

  useEffect(() => {
    if (category.heroImage === currentSrcRef.current) return;

    const next = category.heroImage;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      currentSrcRef.current = next;
      setBaseSrc(next);
      setOverlaySrc(null);
      setOverlayOpaque(false);
      setHotspotsVisible(true);
      return;
    }

    setHotspotsVisible(false);
    setOverlaySrc(next);
    setOverlayOpaque(false);

    const fadeIn = window.setTimeout(() => setOverlayOpaque(true), 24);
    const settle = window.setTimeout(() => {
      currentSrcRef.current = next;
      setBaseSrc(next);
      setOverlaySrc(null);
      setOverlayOpaque(false);
      setHotspotsVisible(true);
    }, 640);

    return () => {
      window.clearTimeout(fadeIn);
      window.clearTimeout(settle);
    };
  }, [category.heroImage]);

  const focusHotspotId = hoveredHotspotId ?? activeHotspotId;

  return (
    <div className="relative h-full min-h-[14rem] w-full sm:min-h-[18rem] lg:min-h-full">
      <div className="relative h-full min-h-[14rem] w-full overflow-hidden bg-surface sm:min-h-[18rem] lg:absolute lg:inset-0 lg:min-h-0">
        <div className="hero-edge-fade absolute inset-0">
          <Image
            key={`${layerId}-base-${baseSrc}`}
            src={baseSrc}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
          {overlaySrc ? (
            <Image
              key={`${layerId}-in-${overlaySrc}`}
              src={overlaySrc}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`exhibition-crossfade object-cover object-center ${
                overlayOpaque ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null}
          <AmbientDust />
        </div>

        <div
          className={`absolute inset-0 z-[2] transition-opacity duration-500 ${
            hotspotsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {category.hotspots.map((hotspot) => {
            const selected = hotspot.id === activeHotspotId;
            const focused = hotspot.id === focusHotspotId;
            const showTooltip = focused;
            const preferAbove = hotspot.y > 55;

            return (
              <button
                key={hotspot.id}
                type="button"
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                aria-label={hotspot.label}
                aria-pressed={selected}
                aria-describedby={showTooltip ? `${hotspot.id}-tip` : undefined}
                onMouseEnter={() => onHoverHotspot(hotspot.id)}
                onMouseLeave={() => onHoverHotspot(null)}
                onFocus={() => onHoverHotspot(hotspot.id)}
                onBlur={() => onHoverHotspot(null)}
                onClick={() => onSelectHotspot(hotspot.id)}
              >
                <span className="relative flex size-8 items-center justify-center">
                  {focused ? (
                    <>
                      <span className="exhibition-glow absolute inset-0 rounded-full bg-crimson/60 opacity-100" />
                      <span className="exhibition-glow-delay absolute inset-[-4px] rounded-full bg-white/40" />
                    </>
                  ) : null}
                  <span
                    className={`relative rounded-full transition-all duration-300 ${
                      focused
                        ? "size-3.5 scale-125 bg-crimson shadow-[0_0_0_2px_rgba(15,23,42,0.55),0_0_12px_rgba(192,0,29,0.7)] ring-[3px] ring-white"
                        : "size-2.5 bg-crimson/80 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] ring-2 ring-white/70 group-hover:scale-110"
                    }`}
                  />
                </span>
                {showTooltip ? (
                  <div id={`${hotspot.id}-tip`}>
                    <HotspotTooltip
                      hotspot={hotspot}
                      preferAbove={preferAbove}
                    />
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function EditorialProduct({
  item,
  categoryTitle,
  contentKey,
}: {
  item: ProductRangeItem;
  categoryTitle: string;
  contentKey: string;
}) {
  return (
    <div
      key={contentKey}
      className="page-fade relative z-10 mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center px-4 py-8 text-center sm:px-6 lg:py-0"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
        {categoryTitle}
      </p>
      <h3 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl lg:text-[2.35rem] xl:text-4xl">
        {item.name}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {item.description}
      </p>
      <ul className="mt-8 flex w-full flex-col divide-y divide-border/80 text-left">
        {item.features.slice(0, 4).map((feature) => (
          <li
            key={feature.label}
            className="py-2.5 text-sm text-charcoal/85 first:pt-0 last:pb-0"
          >
            {feature.label}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <Button href={item.href} variant="primary" size="md">
          Explore Products
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function FeaturedCategories() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    productRangeCategories[0].id,
  );
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(
    productRangeCategories[0].hotspots[0]?.id ?? null,
  );
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const [isTourPaused, setIsTourPaused] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);

  const category = getProductRangeCategory(activeCategoryId);
  const focusHotspotId = hoveredHotspotId ?? activeHotspotId;

  const focusItem: ProductRangeItem =
    category.hotspots.find((h) => h.id === focusHotspotId)?.item ??
    category.defaultItem;

  function clearResumeTimer() {
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function pauseTour() {
    setIsTourPaused(true);
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      setIsTourPaused(false);
      resumeTimerRef.current = null;
    }, 4000);
  }

  function handleCategorySelect(id: string) {
    const next = getProductRangeCategory(id);
    clearResumeTimer();
    setIsTourPaused(false);
    setActiveCategoryId(id);
    setActiveHotspotId(next.hotspots[0]?.id ?? null);
    setHoveredHotspotId(null);
  }

  function handleSelectHotspot(id: string) {
    pauseTour();
    setActiveHotspotId(id);
  }

  function handleHoverHotspot(id: string | null) {
    if (id) pauseTour();
    setHoveredHotspotId(id);
  }

  useEffect(() => {
    return () => clearResumeTimer();
  }, []);

  useEffect(() => {
    const hotspots = category.hotspots;
    if (hotspots.length < 2) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || isTourPaused) return;

    const interval = window.setInterval(() => {
      setActiveHotspotId((current) => {
        const index = hotspots.findIndex((h) => h.id === current);
        const nextIndex = index < 0 ? 0 : (index + 1) % hotspots.length;
        return hotspots[nextIndex].id;
      });
    }, 2800);

    return () => window.clearInterval(interval);
  }, [category.id, category.hotspots, isTourPaused]);

  return (
    <section
      className="flex min-h-svh flex-col bg-surface pt-20 sm:pt-28"
      aria-labelledby="product-range-heading"
    >
      <div className="mx-auto w-full max-w-6xl shrink-0 px-4 sm:px-6">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
              Product Range
            </p>
            <h2
              id="product-range-heading"
              className="mt-3 font-display text-3xl text-charcoal sm:text-4xl lg:text-5xl"
            >
              Industrial Safety Products
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {productRangeIntro}
            </p>
          </header>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 border-b border-border/70">
            <CategoryPills
              activeId={activeCategoryId}
              onSelect={handleCategorySelect}
            />
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={120} className="flex min-h-0 flex-1 flex-col">
        <div className="mt-6 grid min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-8 pb-8 sm:gap-10 lg:mt-6 lg:min-h-[calc(100svh-16rem)] lg:grid-cols-[3fr_2fr] lg:gap-6 lg:pb-0">
          <ExhibitionStage
            category={category}
            activeHotspotId={activeHotspotId}
            hoveredHotspotId={hoveredHotspotId}
            onSelectHotspot={handleSelectHotspot}
            onHoverHotspot={handleHoverHotspot}
          />
          <EditorialProduct
            item={focusItem}
            categoryTitle={category.shortTitle}
            contentKey={`${category.id}-${focusHotspotId ?? "default"}`}
          />
        </div>
      </Reveal>
    </section>
  );
}
