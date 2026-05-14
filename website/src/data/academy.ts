export interface Course {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const academy = {
  headline: "Launch Your Career in Aesthetics",
  description:
    "His & Her Academy offers hands-on certification courses taught by experienced practitioners. Whether you are starting fresh or expanding your skill set, our programs equip you with the knowledge and confidence to excel.",
  enrollmentProcess: "Call or text to learn more about enrollment and upcoming class dates.",
  courses: [
    {
      slug: "body-contouring",
      name: "Body Contouring",
      description:
        "Master non-invasive body sculpting techniques with hands-on training using the latest equipment and protocols.",
      icon: "sparkles",
    },
    {
      slug: "microneedling",
      name: "Microneedling",
      description:
        "Learn the science and application of microneedling for skin rejuvenation, scar treatment, and collagen induction.",
      icon: "target",
    },
    {
      slug: "botox",
      name: "Botox",
      description:
        "Comprehensive injection training covering facial anatomy, dosing, technique, and patient assessment for neurotoxin treatments.",
      icon: "syringe",
    },
    {
      slug: "fillers",
      name: "Dermal Fillers",
      description:
        "Develop expertise in hyaluronic acid filler placement for lips, cheeks, jawline, and under-eye rejuvenation.",
      icon: "droplets",
    },
    {
      slug: "facials",
      name: "Facials",
      description:
        "From basic protocols to advanced medical-grade treatments — build a complete facial skillset for clinical practice.",
      icon: "flower2",
    },
    {
      slug: "prp",
      name: "PRP Therapy",
      description:
        "Learn platelet-rich plasma preparation, injection techniques, and treatment protocols for skin and hair restoration.",
      icon: "heart-pulse",
    },
  ] satisfies Course[],
} as const;
