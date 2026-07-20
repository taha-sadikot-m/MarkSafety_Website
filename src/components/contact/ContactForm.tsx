"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { industries } from "@/data/industries";

type ContactFormProps = {
  mode?: "contact" | "quote";
};

export function ContactForm({ mode = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const companyName = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const industry = String(data.get("industry") ?? "");
    const message = String(data.get("message") ?? "");

    const subject =
      mode === "quote"
        ? `Quote request from ${name || "website visitor"}`
        : `Enquiry from ${name || "website visitor"}`;

    const body = [
      `Name: ${name}`,
      `Company: ${companyName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Industry: ${industry}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.emails.solution}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[4px] border border-border bg-white p-8">
        <CheckCircle2 className="size-10 text-green-600" />
        <h3 className="text-xl font-semibold text-charcoal">Message ready</h3>
        <p className="text-muted">
          We&apos;ll get back to you within 2 business hours. If your email client
          didn&apos;t open, write to{" "}
          <a href={`mailto:${company.emails.solution}`} className="text-crimson hover:underline">
            {company.emails.solution}
          </a>
          .
        </p>
        <Button type="button" variant="ghost" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 h-12 w-full rounded-[4px] border border-border bg-white px-3 text-charcoal outline-none transition focus:border-crimson";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[4px] border border-border bg-white p-6 md:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-charcoal">
          Name
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-charcoal">
          Company Name
        </label>
        <input id="company" name="company" className={fieldClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="industry" className="text-sm font-medium text-charcoal">
          Industry
        </label>
        <select id="industry" name="industry" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select industry
          </option>
          {industries.map((industry) => (
            <option key={industry.id} value={industry.label}>
              {industry.label}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          {mode === "quote" ? "Products / Requirements" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-[4px] border border-border bg-white px-3 py-3 text-charcoal outline-none transition focus:border-crimson"
        />
      </div>
      <Button type="submit" className="w-full">
        {mode === "quote" ? "Request Quote" : "Send Message"}
      </Button>
    </form>
  );
}
