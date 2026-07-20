import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { company, marqueeItems } from "@/data/company";
import { heroImage } from "@/data/hero";

export function HeroSection() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex min-h-svh flex-col">
      <section className="relative flex min-h-0 flex-1 overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex h-full w-full flex-col">
          <div className="container-site flex flex-1 flex-col justify-center pb-20 pt-28 md:pb-24 md:pt-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-4 w-0.5 shrink-0 bg-crimson" aria-hidden />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-crimson md:text-[13px]">
                  Engineering Precision Since {company.founded}
                </p>
              </div>

              <h1 className="font-display mt-6 text-5xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl">
                The Standard of
                <br />
                <em className="italic">Protection.</em>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
                Mark Safety partners with India&apos;s leading industries to
                deliver complete workplace safety through industrial products,
                engineering expertise, compliance services, and technical
                training.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button
                  href="/products"
                  variant="primary"
                  size="lg"
                  className="uppercase tracking-[0.12em]"
                >
                  Explore Solutions
                </Button>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-white/80"
                >
                  Our Story
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="container-site absolute inset-x-0 bottom-6 md:bottom-8">
            <a
              href="#company-intro"
              className="inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white/80"
            >
              <span className="h-px w-10 bg-white/40" aria-hidden />
              Scroll to explore
            </a>
          </div>
        </div>
      </section>

      <div className="bg-footer shrink-0 overflow-hidden border-y border-white/10 py-3">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-4 whitespace-nowrap text-sm font-medium tracking-[0.14em] text-white/70"
            >
              {item}
              <span className="ml-8 text-crimson">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
