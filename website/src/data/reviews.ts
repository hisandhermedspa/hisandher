// Google review summary + a curated selection of real client reviews
// (treatment-focused, lightly trimmed for length; verbatim meaning kept).

export const reviewsSummary = {
  rating: 4.8,
  // No hard review count shown anywhere — keeps the social proof evergreen
  // as new reviews come in (a fixed "117" would read as stale next month).
  // Google Maps listing (3045 Hurontario, Mississauga — where the reviews live).
  url: "https://www.google.com/maps/search/?api=1&query=His%20%26%20Her%20Med%20Spa%20Academy%2C%203045%20Hurontario%20St%2C%20Mississauga",
};

export interface Review {
  name: string;
  badge?: string;
  treatment: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Ben Hoang",
    badge: "Local Guide · 89 reviews",
    treatment: "PRP",
    text: "Absolutely the best PRP clinic I've ever been to. I've had PRP treatments at three different beauty clinics before, but His & Her stands out in every way — customer service, treatment quality, atmosphere, and cleanliness.",
  },
  {
    name: "Dr. Anurag Sinha",
    badge: "Local Guide",
    treatment: "Botox · IV · Laser",
    text: "I visited for a range of beauty treatments — Botox, vitamin therapy, hair treatments, and IPL laser services. Christine is a real gem, and the staff was exceptionally professional.",
  },
  {
    name: "Ghezal Bakhtiar",
    badge: "Local Guide",
    treatment: "Microneedling",
    text: "Best experience and the best facial I've gotten — totally worth the price. After one microneedling session my face changed and looks so much better. I've already referred a lot of family and friends.",
  },
  {
    name: "Greta James",
    treatment: "Chemical Peel",
    text: "I got a chemical peel done by Christina. Super professional — she took the time to explain and answer all my questions. Friendly, professional service. Highly recommend!",
  },
  {
    name: "Ramandeep Singh",
    treatment: "PRP for Hair",
    text: "An amazing PRP treatment. The staff was knowledgeable, gentle, and made the whole process comfortable. I already notice an improvement in my hair quality and feel confident about the results.",
  },
  {
    name: "Sukhman Kaur",
    treatment: "Pigmentation",
    text: "I've had hyperpigmentation for a long time. Christina is amazing with her knowledge — she listened to my concerns very carefully and suggested exactly what I needed.",
  },
];
