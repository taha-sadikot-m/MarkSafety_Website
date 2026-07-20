import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function DirectorCallout() {
  const { lead, accent, trail } = company.philosophyHeadline;

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-16 md:py-24 lg:py-28">
      {/* Wireframe locked behind left + portrait zone */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[min(100%,72%)] opacity-[0.07] md:opacity-[0.11]"
        aria-hidden
      >
        <div className="absolute inset-x-[4%] bottom-0 top-[6%] md:inset-x-[6%] md:top-[2%]">
          <Image
            src={company.directorWireframe.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 70vw"
            className="object-contain object-bottom invert"
            loading="lazy"
          />
        </div>
      </div>

      <div className="container-site relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(260px,0.9fr)_minmax(340px,1.2fr)_minmax(260px,0.95fr)] lg:gap-0 xl:grid-cols-[minmax(280px,0.85fr)_minmax(400px,1.25fr)_minmax(280px,0.9fr)]">
          {/* Left — philosophy type */}
          <Reveal className="relative z-20 lg:-mr-6 xl:-mr-10">
            <div className="max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-crimson md:text-[12px]">
                  {company.philosophyEyebrow}
                </p>
                <span className="h-px w-9 shrink-0 bg-crimson" aria-hidden />
              </div>

              <h2 className="font-condensed mt-4 text-[clamp(3rem,6.2vw,5rem)] font-bold uppercase leading-[0.85] tracking-[-0.01em] text-black">
                <span className="block">{lead}</span>
                <span className="block text-crimson">{accent}</span>
                <span className="block">{trail}</span>
              </h2>

              <div className="mt-7 w-full max-w-[17.5rem]">
                <span className="mb-3.5 block h-px w-9 bg-crimson" aria-hidden />
                <p className="text-[13px] leading-[1.7] text-[#2a2a2a] md:text-[14px]">
                  {company.philosophyIntro}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Center — large overlapping portrait */}
          <Reveal delayMs={50} className="relative z-10">
            <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] lg:-mx-2">
              <div className="relative aspect-[584/784] w-full">
                <Image
                  src={company.directorPortrait.src}
                  alt={company.directorPortrait.alt}
                  fill
                  sizes="(max-width: 1024px) 420px, 520px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Right — quote + signature */}
          <Reveal delayMs={100} className="relative z-20 lg:-ml-4 xl:-ml-6">
            <div className="max-w-[20rem] sm:max-w-[22rem] lg:ml-auto lg:max-w-[24rem]">
              <p
                className="select-none text-[3.75rem] font-bold leading-[0.7] text-crimson md:text-[4.75rem]"
                aria-hidden
              >
                &ldquo;
              </p>

              <blockquote className="mt-2 text-[1.15rem] font-bold leading-[1.35] text-black md:text-[1.35rem] lg:text-[1.45rem]">
                {company.directorQuote}
              </blockquote>

              <p className="mt-4 text-[13px] leading-[1.7] text-[#3a3a3a] md:text-[14px]">
                {company.directorSupporting}
              </p>

              <p
                className="font-display mt-8 text-[1.75rem] italic leading-none text-black md:text-[2.1rem]"
                aria-hidden
              >
                {company.directorSignature}
              </p>

              <p className="mt-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-crimson md:text-[13px]">
                {company.directorDisplayName}
              </p>
              <p className="mt-1 text-[13px] italic text-[#2a2a2a]">
                {company.directorRole}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
