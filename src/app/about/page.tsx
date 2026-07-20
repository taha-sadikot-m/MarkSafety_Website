import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <StubPage
      title="About Mark Safety"
      description="Our story since 1997, vision & mission, director profile, and team — coming next."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
    />
  );
}
