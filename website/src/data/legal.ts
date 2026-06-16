import { business } from "./business";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

// Fixed effective date — update only when the policies actually change.
export const legalEffectiveDate = "June 16, 2026";

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro: `${business.name} ("we," "us," or "our") respects your privacy. This policy explains what personal information we collect through ${business.address.full} and our website, how we use it, and the choices you have. We handle personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario law.`,
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "We only collect what we need to respond to you and provide our services:",
      ],
      list: [
        "Contact form: the name, email address, phone number, treatment of interest, and any message you choose to send us.",
        "Bookings: when you book through our scheduling provider (Fresha), the details you provide are collected and processed by Fresha under its own privacy policy.",
        "In person: information you share during a consultation or treatment, including relevant health information needed to provide care safely.",
      ],
    },
    {
      heading: "What we do not collect",
      paragraphs: [
        "Our website does not use advertising or tracking cookies, and we do not sell, rent, or trade your personal information to anyone.",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To respond to your inquiries and follow up about treatments or academy enrollment.",
        "To schedule, provide, and improve our services and your care.",
        "To meet our legal, regulatory, and professional obligations.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "We rely on trusted providers to operate. Online bookings are handled by Fresha, and contact-form messages are delivered to our inbox through an email service provider. These providers process your information only to provide their service to us, under their own privacy and security commitments.",
      ],
    },
    {
      heading: "How we protect and retain your information",
      paragraphs: [
        "We use reasonable physical, technical, and organizational safeguards to protect your information. We keep personal information only as long as needed for the purposes described here or as required by law, and then securely dispose of it.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Subject to legal limits, you may ask to access, correct, or delete the personal information we hold about you, and you may withdraw consent to our use of it. To make a request, contact us using the details below and we will respond within a reasonable time.",
      ],
    },
    {
      heading: "Children's privacy",
      paragraphs: [
        "Our services and website are intended for adults. We do not knowingly collect personal information from children without the consent of a parent or guardian.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The effective date at the top of this page reflects the most recent version.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `If you have questions about this policy or your personal information, contact us at ${business.email} or ${business.phone}, or visit us at ${business.address.full}.`,
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  intro: `These Terms of Use govern your use of the ${business.name} website. By using this website, you agree to these terms. If you do not agree, please do not use the site.`,
  sections: [
    {
      heading: "Medical disclaimer",
      paragraphs: [
        "The content on this website is provided for general informational purposes only and is not medical advice. It is not a substitute for a consultation with a qualified healthcare or aesthetic professional. Always seek the advice of a qualified provider with any questions about a medical or cosmetic condition before beginning any treatment.",
        "Using this website does not create a provider-patient relationship. Any treatment relationship begins only after an in-person assessment.",
      ],
    },
    {
      heading: "Results may vary",
      paragraphs: [
        "Aesthetic and wellness treatments affect everyone differently. Any results, timelines, or experiences described on this site are illustrative and not a guarantee of the outcome you will achieve. Suitability for any treatment is determined during an individual consultation.",
      ],
    },
    {
      heading: "Bookings and cancellations",
      paragraphs: [
        "Appointments are booked through our scheduling provider, Fresha, and are subject to Fresha's terms as well as any cancellation or deposit policy communicated to you at the time of booking.",
      ],
    },
    {
      heading: "Use of the website",
      paragraphs: [
        "You agree to use this website only for lawful purposes and not to interfere with its operation or security. We may change, suspend, or remove any part of the site at any time without notice.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `All content on this website — including text, images, logos, and design — is the property of ${business.name} or its licensors and may not be copied or reused without permission.`,
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        "Our site may link to third-party websites (such as our booking page). We are not responsible for the content or practices of those sites, which are governed by their own terms and policies.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, we are not liable for any damages arising from your use of, or inability to use, this website or any information on it.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `Questions about these terms? Reach us at ${business.email} or ${business.phone}.`,
      ],
    },
  ],
};

export const accessibilityStatement: LegalDoc = {
  slug: "accessibility",
  title: "Accessibility Statement",
  intro: `${business.name} is committed to making our website and our spa welcoming and accessible to everyone, including people with disabilities, in keeping with the Accessibility for Ontarians with Disabilities Act (AODA).`,
  sections: [
    {
      heading: "Our commitment",
      paragraphs: [
        "We strive to provide a website that is usable by the widest possible audience, and to deliver our services in a way that respects the dignity and independence of people with disabilities.",
      ],
    },
    {
      heading: "Measures we take",
      list: [
        "Designing toward the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a practical standard.",
        "Using clear text, meaningful contrast, descriptive image alternatives, and keyboard-navigable controls.",
        "Reviewing the site as it evolves to find and fix accessibility barriers.",
      ],
    },
    {
      heading: "Accessible service in person",
      paragraphs: [
        "If you need an accommodation to book or receive a service — or any assistance during your visit — please let us know and we will do our best to help.",
      ],
    },
    {
      heading: "Feedback",
      paragraphs: [
        `We welcome your feedback on the accessibility of our website and services. Contact us at ${business.email} or ${business.phone} and we will respond as promptly as we can.`,
      ],
    },
  ],
};

export const legalDocs: LegalDoc[] = [
  privacyPolicy,
  termsOfUse,
  accessibilityStatement,
];
