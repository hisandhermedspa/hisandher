export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  languages: string[];
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Mariyam Rasoli",
    title: "Owner",
    credentials: "Holistic Health Practitioner / Medical Esthetician",
    languages: ["English", "Hindi", "Dari"],
    bio: "My goal is to help every client look and feel their best through honest guidance, personalized treatments, and exceptional care.",
    image: "/team/mariyam.jpg",
  },
  {
    name: "Christina Payatakis",
    title: "Owner",
    credentials: "Holistic Health Practitioner / Medical Esthetician",
    bio: "With a passion for beauty and wellness, I focus on delivering treatments that enhance confidence while maintaining natural results.",
    languages: ["English"],
    image: "/team/christina.jpg",
  },
];
