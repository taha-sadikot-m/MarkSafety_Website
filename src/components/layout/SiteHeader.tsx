"use client";

import { usePathname } from "next/navigation";
import { StickyNav } from "@/components/layout/StickyNav";

/** Fixed nav + spacer so interior pages clear the header; homepage has no spacer (hero underlays nav). */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <StickyNav />
      <div
        className={isHome ? "h-0" : "h-16 md:h-[72px]"}
        aria-hidden
      />
    </>
  );
}
