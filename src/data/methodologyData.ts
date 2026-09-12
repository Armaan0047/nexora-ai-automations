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
    name: "Discover & Diagnose",
    tagline: "Uncovering Bottlenecks & Strategic Objectives",
    durationGuideline: "Initial Scoping & Requirements Review",
    whatHappens:
      "We begin with a structured technical consultation. Rather than pitching rigid packages, we analyze your current website performance, lead conversion friction, and internal support overhead.",
    clientCommitment:
      "A 45-minute technical discovery session and access to existing documentation or touchpoints.",
    outcomes: [
      "Documented friction points across current customer journeys",
      "Definition of target customer profiles and qualification parameters",
      "Comprehensive requirements brief with clear scope boundaries",
    ],
  },
  {
    phaseNumber: "02",
    name: "Architect & Model",
    tagline: "System Design & Interaction Blueprinting",
    durationGuideline: "Architecture & Wireframing",
    whatHappens:
      "We design the complete system blueprint: information architecture, typographic hierarchy, responsive layouts, data flow diagrams, agent system prompts, and CRM integration pathways.",
    clientCommitment:
      "Collaborative review of wireframes, agent persona guidelines, and system integration specs.",
    outcomes: [
      "Full interactive wireframes and component design tokens",
      "Agent persona rules, response guidelines, and guardrail definitions",
      "API data schema and integration mapping for third-party tooling",
    ],
  },
  {
    phaseNumber: "03",
    name: "Engineer & Validate",
    tagline: "Production Build with Strict Code Standards",
    durationGuideline: "Frontend & Agent Development",
    whatHappens:
      "We engineer the production codebase using modern React and Next.js, implement strict type safety, configure agent reasoning pipelines, and integrate bidirectional data webhooks.",
    clientCommitment:
      "Periodic milestone demonstrations and validation of live preview environments.",
    outcomes: [
      "Production-ready Next.js codebase adhering to WCAG 2.2 standards",
      "Grounded AI agent runtime tested across real customer scenarios",
      "Live staging environment accessible for stakeholder testing",
    ],
  },
  {
    phaseNumber: "04",
    name: "Launch & Support",
    tagline: "Deployment, Telemetry & Continuous Refinement",
    durationGuideline: "Production Rollout & Review",
    whatHappens:
      "We deploy to global edge infrastructure, verify production telemetry, confirm DNS and SSL configurations, and provide comprehensive walkthroughs for your team.",
    clientCommitment:
      "Go-live approval, DNS record pointing, and team onboarding session.",
    outcomes: [
      "Zero-downtime production deployment on edge infrastructure",
      "Integrated error monitoring and performance telemetry",
      "Complete code repository handover and operational training",
    ],
  },
];
