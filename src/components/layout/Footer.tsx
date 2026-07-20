import Link from "next/link";
import { company } from "@/data/company";
import { footerProducts, footerServices } from "@/data/services";
import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "FB", name: "Facebook", href: company.socials[0].href },
  { label: "IG", name: "Instagram", href: company.socials[1].href },
  { label: "YT", name: "YouTube", href: company.socials[2].href },
  { label: "IN", name: "LinkedIn", href: company.socials[3].href },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="h-1 bg-crimson" aria-hidden />
      <div className="bg-footer text-white">
        <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-20">
          <div className="lg:col-span-2">
            <Logo variant="dark" showTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Nearly three decades protecting India&apos;s industries with
              products, engineering, compliance, and training — under one trusted
              safety partner.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex size-9 items-center justify-center rounded-[4px] border border-white/15 text-xs font-semibold text-white/70 transition-colors hover:border-crimson hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {footerProducts.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <a
                href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                className="block hover:text-white"
              >
                {company.phones.primary}
              </a>
              <a
                href={`mailto:${company.emails.solution}`}
                className="block hover:text-white"
              >
                {company.emails.solution}
              </a>
              <p className="leading-relaxed">{company.address}</p>
              <p>{company.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.name}. All Rights Reserved.
            </p>
            <p>Vadodara, Gujarat · {company.website}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
