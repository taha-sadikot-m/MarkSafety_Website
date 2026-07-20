import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <StubPage
      title="Industries We Serve"
      description="Interactive industry pages with hazard profiles and PPE recommendations — coming next."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]}
    />
  );
}
