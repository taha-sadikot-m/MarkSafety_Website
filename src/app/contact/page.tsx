import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to Mark Safety Appliances — call, WhatsApp, or send an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-crimson-stripe py-10 md:py-12">
        <div className="container-site">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Talk Safety
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Reach us in under 10 seconds — call, WhatsApp, or send a message.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-[4px] border border-border p-6">
              <ul className="space-y-4 text-sm text-charcoal">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <div className="space-y-1">
                    <a
                      href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                      className="block hover:text-crimson"
                    >
                      {company.phones.primary}
                    </a>
                    <a
                      href={`tel:${company.phones.secondary.replace(/\s/g, "")}`}
                      className="block hover:text-crimson"
                    >
                      {company.phones.secondary}
                    </a>
                    <span className="block text-muted">
                      {company.phones.landline} (landline)
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <div className="space-y-1">
                    <a
                      href={`mailto:${company.emails.solution}`}
                      className="block hover:text-crimson"
                    >
                      {company.emails.solution}
                    </a>
                    <a
                      href={`mailto:${company.emails.info}`}
                      className="block hover:text-crimson"
                    >
                      {company.emails.info}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <span>{company.hours}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[4px] border border-border p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-crimson">
                Quick Contact
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <Button href={`tel:${company.phones.primary.replace(/\s/g, "")}`}>
                  <Phone className="size-4" />
                  Call Now
                </Button>
                <Button
                  href={company.whatsapp}
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </Button>
                <Button href={`mailto:${company.emails.solution}`} variant="ghost">
                  <Mail className="size-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface pb-16">
        <div className="container-site">
          <div className="overflow-hidden rounded-[4px] border border-border bg-white">
            <iframe
              title="Mark Safety Appliances location map"
              src={company.mapEmbedUrl}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
