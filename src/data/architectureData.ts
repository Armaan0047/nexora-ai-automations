export interface ArchitectureNode {
  index: string;
  stageName: string;
  headline: string;
  businessExplanation: string;
  technicalCapabilities: string[];
  keyDeliverable: string;
}

export const ARCHITECTURE_PIPELINE: ArchitectureNode[] = [
  {
    index: "01",
    stageName: "Business Foundation",
    headline: "Your Real-World Operations & Commercial Objectives",
    businessExplanation:
      "Every project begins with your business fundamentals: your ideal client profile, service offerings, margins, and operational capacity. We do not impose generic templates; the software is engineered around your actual workflow.",
    technicalCapabilities: [
      "Operational bottleneck diagnosis & journey mapping",
      "Definition of qualification criteria and business rules",
      "Security, privacy, and data boundary requirements",
    ],
    keyDeliverable: "Bespoke System Specification & Scope Blueprint",
  },
  {
    index: "02",
    stageName: "Website / Digital Interface",
    headline: "High-Performance Modern Web Frontend",
    businessExplanation:
      "The primary interface where prospects and clients interact with your brand. Engineered with modern React and Next.js for instant loading, crisp typography, and intuitive navigation across all screen sizes.",
    technicalCapabilities: [
      "Modular design tokens and clean layout hierarchy",
      "Semantic HTML5 structure with WCAG 2.2 accessibility",
      "Frictionless conversion touchpoints and interactive tools",
    ],
    keyDeliverable: "Production Next.js Web Application",
  },
  {
    index: "03",
    stageName: "AI Agent Orchestration",
    headline: "Intelligent, Context-Aware Conversational Layer",
    businessExplanation:
      "Active 24/7 intelligent agents that engage visitors, resolve inquiries, and execute workflow steps in real time. They act as autonomous brand ambassadors and tireless operational assistants.",
    technicalCapabilities: [
      "Domain-specialized system prompts and persona tuning",
      "Retrieval-augmented grounding against verified knowledge",
      "Deterministic guardrails to prevent drift or hallucination",
    ],
    keyDeliverable: "Custom Agent Runtimes & Persona Models",
  },
  {
    index: "04",
    stageName: "Business Logic & Guardrails",
    headline: "Strict Rules, Triage Logic & Verification Filters",
    businessExplanation:
      "The intelligent decision brain that enforces how leads are scored, how answers are validated, and when human staff must be brought in. It guarantees your brand is represented with absolute fidelity.",
    technicalCapabilities: [
      "Automated lead qualification scoring matrices",
      "Escalation pathways to human executives or support leads",
      "Audit logging and transparent reasoning telemetry",
    ],
    keyDeliverable: "Rule Engine & Brand Safety Guardrails",
  },
  {
    index: "05",
    stageName: "Integrations & Data Sources",
    headline: "Direct Synchronization with Your Tooling Stack",
    businessExplanation:
      "The connective tissue linking your website and AI agents to your CRM, project management software, calendars, and customer databases. Data flows automatically without manual copy-pasting.",
    technicalCapabilities: [
      "Secure REST and webhook API integrations",
      "CRM synchronization (HubSpot, Salesforce, Pipedrive, custom)",
      "Automated calendar booking and dispatch notifications",
    ],
    keyDeliverable: "Bidirectional Data Sync & Secure Webhooks",
  },
  {
    index: "06",
    stageName: "Measurable Outcome",
    headline: "Automated Growth & Continuous Operational Leverage",
    businessExplanation:
      "The tangible result of a connected digital engine: more high-intent qualified consultations booked, immediate resolution for customer inquiries, and hours of leadership time recovered every week.",
    technicalCapabilities: [
      "Pre-vetted, structured sales briefs delivered directly to leadership",
      "24/7 engagement with zero response delay for prospects",
      "Reduced operational burden on internal team members",
    ],
    keyDeliverable: "Quantifiable Commercial & Operational ROI",
  },
];
