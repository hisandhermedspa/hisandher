import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "How His & Her Med Spa + Academy collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
