export interface MethodologyStep {
  phaseNumber: string;
  name: string;
  tagline: string;
  durationGuideline: string;
  whatHappens: string;
  clientCommitment: string;
  outcomes: string[];
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    phaseNumber: "01",
    name: "Share Your Requirements",
    tagline: "Consultation & Scope Assessment",
    durationGuideline: "Step 01",
    whatHappens:
      "Tell us what you want to build, what your business offers, and what your website needs to achieve. We provide clear, transparent pricing tailored to your exact deliverables.",
    clientCommitment:
      "A brief conversation or consultation form submission.",
    outcomes: [
      "Agreed scope of pages and features",
      "Transparent quotation with zero hidden fees",
      "Realistic launch timeline",
    ],
  },
  {
    phaseNumber: "02",
    name: "Plan & Design Your Website",
    tagline: "Layout, UX & Content Architecture",
    durationGuideline: "Step 02",
    whatHappens:
      "We design a clean, modern aesthetic with clear typography and intuitive mobile navigation. We plan where contact forms, WhatsApp links, and AI tools will sit.",
    clientCommitment:
      "Sharing your logo, branding, and core business information.",
    outcomes: [
      "Visual structure and page wireframes",
      "Clear, benefit-driven copy and service sections",
      "Placement of high-converting call-to-actions",
    ],
  },
  {
    phaseNumber: "03",
    name: "Develop & Integrate Features",
    tagline: "High-Performance Build & Smart Tools",
    durationGuideline: "Step 03",
    whatHappens:
      "We build your website using modern Next.js technology for blazing speed and mobile perfection. We configure AI chatbots, connect WhatsApp buttons, and set up automated alerts.",
    clientCommitment:
      "Reviewing the interactive private staging preview.",
    outcomes: [
      "Fast-loading, mobile-friendly website",
      "Fully operational AI chatbot and WhatsApp integration",
      "Automated lead routing to your email or phone",
    ],
  },
  {
    phaseNumber: "04",
    name: "Review & Launch",
    tagline: "Final Testing & 100% Handover",
    durationGuideline: "Step 04",
    whatHappens:
      "We test speed, contrast, and form submissions across iPhones, Androids, tablets, and laptops. Once you approve, we connect your custom domain and hand over 100% ownership.",
    clientCommitment:
      "Final review and giving the green light to go live.",
    outcomes: [
      "Live website connected to your custom domain",
      "100% code, design, and content ownership",
      "Ongoing support whenever you need updates",
    ],
  },
];
