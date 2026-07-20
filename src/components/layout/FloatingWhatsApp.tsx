"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[999] inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
      title="WhatsApp Us"
    >
      <MessageCircle className="size-7" fill="currentColor" />
    </a>
  );
}
