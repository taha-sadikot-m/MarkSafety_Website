import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=80"
        alt="Industrial facility ready for safety partnership"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="container-site relative z-10">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Let&apos;s Build A Safer Workplace Together.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Whether you&apos;re upgrading workplace safety, planning a new
              facility, or improving compliance, our specialists are ready to
              help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/contact" variant="ghost-light" size="lg">
                Talk To Our Expert
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <a
                href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {company.phones.primary}
              </a>
              <a
                href={`mailto:${company.emails.solution}`}
                className="hover:text-white"
              >
                {company.emails.solution}
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
