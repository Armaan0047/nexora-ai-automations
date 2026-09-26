export interface SolutionCombination {
  id: string;
  industryProfile: string;
  scenarioDescription: string;
  websiteComponent: string;
  agentComponent: string;
  unifiedOutcome: string;
}

export const COMBINED_SOLUTIONS: SolutionCombination[] = [
  {
    id: "local-services",
    industryProfile: "Contractors & Local Service Businesses",
    scenarioDescription:
      "Home services, contractors, plumbers, electricians, and cleaning companies who need fast quote requests and direct phone calls.",
    websiteComponent:
      "Clean, mobile-first website showcasing services, past work photos, genuine customer reviews, and a 1-minute quote request form.",
    agentComponent:
      "Direct WhatsApp chat button + smart FAQ bot that answers common questions about pricing and collects job details 24/7.",
    unifiedOutcome:
      "Turn casual website visitors into direct quote inquiries and WhatsApp chats without losing leads while you are busy on the job.",
  },
  {
    id: "professional-practices",
    industryProfile: "Professional Practices & Consultancies",
    scenarioDescription:
      "Law firms, accounting practices, clinics, and consultants who need to establish trust and streamline client consultations.",
    websiteComponent:
      "Polished company website with clear service breakdowns, credentials, team bios, and direct consultation booking links.",
    agentComponent:
      "24/7 website assistant that answers routine questions about services, fees, and office hours, then guides clients to book.",
    unifiedOutcome:
      "Staff spends less time answering the same routine phone calls, while prospective clients get immediate answers at any hour.",
  },
  {
    id: "tech-b2b",
    industryProfile: "Growing Businesses & B2B Companies",
    scenarioDescription:
      "Growing tech companies and service providers that need to explain what they do clearly and convert visitors into buyers.",
    websiteComponent:
      "Modern, high-converting landing pages with clear benefit copy, product highlights, and responsive interactive previews.",
    agentComponent:
      "Smart website chatbot that guides visitors through product features, answers questions, and qualifies serious business leads.",
    unifiedOutcome:
      "A sharp, professional online presence that explains your value clearly and captures qualified customer inquiries automatically.",
  },
  {
    id: "website-redesigns",
    industryProfile: "Established Businesses Needing a Redesign",
    scenarioDescription:
      "Established businesses with an old, slow, or outdated website that doesn't display well on mobile and loses customers to competitors.",
    websiteComponent:
      "Complete website overhaul—rebuilt from scratch to look clean, fast, and perfectly formatted across phones, tablets, and laptops.",
    agentComponent:
      "Upgraded contact channels: instant WhatsApp messaging, easy inquiry forms, and automated notifications sent straight to your email.",
    unifiedOutcome:
      "A fresh, credible digital presence that immediately builds trust with visitors, works smoothly on mobile, and drives new inquiries.",
  },
];
