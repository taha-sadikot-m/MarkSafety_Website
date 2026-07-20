"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 z-[999] inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:right-5 sm:size-14"
      aria-label="Chat on WhatsApp"
      title="WhatsApp Us"
    >
      <MessageCircle className="size-6 sm:size-7" fill="currentColor" />
    </a>
  );
}
