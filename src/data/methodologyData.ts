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
    name: "Discover & Understand",
    tagline: "Understanding Your Business & Goals",
    durationGuideline: "Initial Consultation",
    whatHappens:
      "We discuss what your business does, who your target customers are, and what you need your website to do. No complicated jargon—just a clear conversation about your goals and requirements.",
    clientCommitment:
      "A quick 30-minute chat or call to discuss your project.",
    outcomes: [
      "Clear understanding of your services and target audience",
      "List of pages, sections, and features you need",
      "Clear, transparent project estimate with no surprises",
    ],
  },
  {
    phaseNumber: "02",
    name: "Plan & Structure",
    tagline: "Layout, Design & Content Setup",
    durationGuideline: "Design & Content",
    whatHappens:
      "We plan the layout of your pages, prepare clear content for your services, and map out helpful features like WhatsApp buttons, contact forms, or FAQ sections.",
    clientCommitment:
      "Sharing your logo, photos, and any specific business details.",
    outcomes: [
      "Clear visual plan of your website layout",
      "Structured service descriptions and FAQ content",
      "Confirmed contact and WhatsApp button placements",
    ],
  },
  {
    phaseNumber: "03",
    name: "Build & Integrate",
    tagline: "Developing the Website & Adding Features",
    durationGuideline: "Development & Testing",
    whatHappens:
      "We build your website with clean, modern code, ensuring it looks sharp and loads quickly on phones and computers. We set up all forms, WhatsApp buttons, and AI features.",
    clientCommitment:
      "Testing the private preview link on your phone to give feedback.",
    outcomes: [
      "Complete, fast-loading website optimized for mobile",
      "Tested contact forms and working WhatsApp links",
      "Private staging link for your review and approval",
    ],
  },
  {
    phaseNumber: "04",
    name: "Launch & Support",
    tagline: "Going Live & Easy Ownership",
    durationGuideline: "Go-Live & Support",
    whatHappens:
      "We connect your website to your domain, test everything live on the web, and make sure new inquiries arrive smoothly to your email or WhatsApp.",
    clientCommitment:
      "Giving final go-ahead and pointing your domain name.",
    outcomes: [
      "Live website running securely with fast loading",
      "Instant inquiry alerts sent straight to your phone or inbox",
      "100% ownership of your website and peace of mind",
    ],
  },
];
