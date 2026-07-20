import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = {
  title: "Certificates",
};

export default function CertificatesPage() {
  return (
    <StubPage
      title="Certificates"
      description="Credential wall and compliance documentation gallery — coming next."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Certificates" },
      ]}
    />
  );
}
