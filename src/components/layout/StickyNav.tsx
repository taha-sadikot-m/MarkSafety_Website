"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function StickyNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overHero = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : scrolled
            ? "border-b-[3px] border-crimson bg-white shadow-sm"
            : "border-b border-border bg-white"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo variant={overHero ? "dark" : "light"} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  overHero
                    ? active
                      ? "text-crimson"
                      : "text-white hover:text-white/80"
                    : active
                      ? "text-crimson"
                      : "text-charcoal hover:text-crimson"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              overHero ? "text-white hover:text-white/80" : "text-crimson"
            }`}
          >
            <Phone className="size-4" aria-hidden />
            {company.phones.primary}
          </a>
          <Button
            href="/quote"
            size="sm"
            variant={overHero ? "white" : "primary"}
          >
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-[4px] border p-2 lg:hidden ${
            overHero
              ? "border-white/40 text-white"
              : "border-border text-charcoal"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[4px] px-2 py-3 text-base font-medium text-charcoal hover:bg-surface hover:text-crimson"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
              className="mt-2 rounded-[4px] px-2 py-3 text-base font-medium text-crimson"
            >
              {company.phones.primary}
            </a>
            <Button href="/quote" className="mt-2 w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
