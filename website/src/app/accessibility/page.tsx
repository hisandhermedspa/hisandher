import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { accessibilityStatement } from "@/data/legal";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our commitment to making the His & Her Med Spa + Academy website and services accessible to everyone, in line with the AODA.",
};

export default function AccessibilityPage() {
  return <LegalPage doc={accessibilityStatement} />;
}
