import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the His & Her Med Spa + Academy website, including our medical disclaimer.",
};

export default function TermsPage() {
  return <LegalPage doc={termsOfUse} />;
}
