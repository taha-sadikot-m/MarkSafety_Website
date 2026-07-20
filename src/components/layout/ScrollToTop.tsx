"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-4 z-[998] inline-flex size-10 items-center justify-center rounded-full bg-crimson text-white shadow-md transition-transform hover:scale-105 hover:bg-crimson-hover sm:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:right-5 sm:size-11"
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
