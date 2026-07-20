import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <StubPage
      title="Professional Services"
      description="Training, calibration, LOTO, fire load calculation, and more — full service pages coming next."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
    />
  );
}
