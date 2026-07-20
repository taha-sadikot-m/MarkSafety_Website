import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quote for industrial safety products and services.",
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Get a Quote" },
        ]}
      />

      <section className="bg-crimson-stripe py-10 md:py-12">
        <div className="container-site">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Get a Quote
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Tell us what you need. Our team will respond with pricing and
            recommendations — usually within 2 business hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-site max-w-2xl">
          <ContactForm mode="quote" />
          <p className="mt-6 text-center text-sm text-muted">
            Prefer WhatsApp?{" "}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-crimson hover:underline"
            >
              Message us directly
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
