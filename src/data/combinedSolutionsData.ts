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
    id: "b2b-professional",
    industryProfile: "B2B Professional Services & Advisory",
    scenarioDescription:
      "Consulting firms, legal practices, and corporate advisory teams that win clients through authority, trust, and senior expertise.",
    websiteComponent:
      "Authoritative Next.js business website with structured case narratives, team credential architecture, and executive positioning.",
    agentComponent:
      "Conversational Lead Qualification Agent that pre-screens inquiry scope, budget fit, and regulatory frameworks before booking partner time.",
    unifiedOutcome:
      "Partners spend their consultation time exclusively with pre-vetted, high-intent organizations equipped with a structured briefing.",
  },
  {
    id: "tech-saas",
    industryProfile: "Specialized Software & Tech Companies",
    scenarioDescription:
      "Technology companies offering complex technical products that require explaining architecture and onboarding buyers quickly.",
    websiteComponent:
      "High-velocity product landing pages and documentation hub with clean typographic hierarchy and interactive feature walkthroughs.",
    agentComponent:
      "Technical Support & Onboarding Agent trained on API documentation and product schemas to resolve prospective developer questions.",
    unifiedOutcome:
      "Immediate self-serve answers for prospective evaluators, accelerating technical validation and sales pipeline velocity.",
  },
  {
    id: "high-ticket-contractors",
    industryProfile: "Commercial Contracting & Engineering",
    scenarioDescription:
      "Industrial contractors, commercial builders, and specialized engineering firms managing high-value RFP cycles.",
    websiteComponent:
      "Modern portfolio and project showcase with detailed specification filters, regulatory certifications, and project galleries.",
    agentComponent:
      "Interactive Scope Intake Agent that collects project blueprints, square footage requirements, and timeline constraints.",
    unifiedOutcome:
      "Transforms unstructured email inquiries into complete project dossiers ready for estimating teams.",
  },
  {
    id: "healthcare-specialists",
    industryProfile: "Private Clinics & Healthcare Practices",
    scenarioDescription:
      "Private medical specialists, dental groups, and healthcare providers handling patient questions and appointment scheduling.",
    websiteComponent:
      "Calm, highly accessible clinic website engineered with strict WCAG AA contrast, physician bios, and patient resource hubs.",
    agentComponent:
      "Deterministic 24/7 Patient FAQ Agent that answers procedure guidelines, preparation instructions, and triage questions.",
    unifiedOutcome:
      "Reduces repetitive front-desk phone calls while providing anxious patients with accurate information at all hours.",
  },
];
