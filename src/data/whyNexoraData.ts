export interface ValuePrinciple {
  id: string;
  pillar: string;
  headline: string;
  elaboration: string;
  practicalApplication: string;
}

export const WHY_NEXORA_PRINCIPLES: ValuePrinciple[] = [
  {
    id: "tailored-engineering",
    pillar: "Requirement-Based Architecture",
    headline: "Engineered For Your Specific Operations, Never Predefined Packages",
    elaboration:
      "Most digital agencies force clients into rigid Bronze/Silver/Gold tiers or generic CMS templates. Nexora starts from your actual business bottlenecks, data architecture, and commercial objectives. The solution is shaped by your requirements, and the quotation reflects only what your business genuinely needs.",
    practicalApplication:
      "We design custom workflows, bespoke data connectors, and targeted interfaces rather than shoehorning your business into off-the-shelf templates.",
  },
  {
    id: "modern-tech",
    pillar: "Production Technology Stack",
    headline: "Built With Enterprise-Grade React, Next.js, and Strict Type Safety",
    elaboration:
      "We write clean, modular, maintainable code using the modern TypeScript and Next.js ecosystem. We avoid bloated drag-and-drop page builders that generate messy markup, slow down loading times, and degrade over time.",
    practicalApplication:
      "Your website and agent layers load instantaneously, maintain clean separation of concerns, and remain easy to scale as your operations expand.",
  },
  {
    id: "intelligent-ux",
    pillar: "Purposeful Interaction Design",
    headline: "Interfaces That Guide Decisions Instead of Showing Decorative Fluff",
    elaboration:
      "Every layout decision, typography choice, and interactive component exists to solve a communication or conversion problem. We design clear information hierarchy, calm dark surfaces, and frictionless inquiry pathways that respect your visitors' time.",
    practicalApplication:
      "Visitors understand your value proposition within seconds and can immediately take action or initiate an intelligent consultation.",
  },
  {
    id: "deterministic-agents",
    pillar: "Brand Safety & Grounded AI",
    headline: "Deterministic Guardrails That Eliminate Hallucinations",
    elaboration:
      "Deploying conversational AI to customer-facing channels requires strict reliability. We implement retrieval-augmented generation (RAG) and deterministic context boundaries so agents only answer with verified facts and escalate gracefully when uncertain.",
    practicalApplication:
      "Your brand reputation is safeguarded: prospective clients receive precise, cited answers rather than speculative or fabricated responses.",
  },
  {
    id: "business-first",
    pillar: "Commercial Alignment",
    headline: "Focused on Measurable Business Leverage and ROI",
    elaboration:
      "Technology is an operational lever, not an end in itself. We measure our engineering success by tangible outcomes: captured inbound demand, reduced administrative drag on senior personnel, and faster lead-to-consultation cycles.",
    practicalApplication:
      "We build systems that generate clear operational value from day one and can be verified against your actual business metrics.",
  },
  {
    id: "code-ownership",
    pillar: "Full Ownership & Transparency",
    headline: "You Own Your Intellectual Property, Codebase, and Data",
    elaboration:
      "We do not lock your business into proprietary agency platforms or hidden monthly licensing traps. You receive full access to your production codebase, design tokens, and integration documentation.",
    practicalApplication:
      "Complete autonomy: your internal engineers or future partners can maintain and extend the codebase without external dependency.",
  },
];
