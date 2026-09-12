export interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  summary: string;
  deliverables: string[];
  operationalImpact: string;
}

export const WEBSITE_SERVICES: ServiceDetail[] = [
  {
    id: "business-websites",
    title: "Enterprise & Business Websites",
    badge: "Digital Flagship",
    summary:
      "Modern, authoritative digital homes engineered with production React and Next.js architectures. Built to establish market credibility, present complex offerings with clarity, and maintain optimal performance.",
    deliverables: [
      "Custom responsive interface architecture (desktop, tablet, mobile)",
      "Strict semantic HTML5 structure with WCAG 2.2 accessibility",
      "Dynamic content management integration & modular components",
      "Production-grade technical SEO, OpenGraph, and structured schema",
    ],
    operationalImpact:
      "Positions your company as an industry leader with an interface that reflects genuine technical competence.",
  },
  {
    id: "landing-pages",
    title: "High-Conversion Landing Pages",
    badge: "Conversion Engine",
    summary:
      "Laser-focused campaign pages built for dedicated traffic acquisition. Eliminates navigation distractions and guides visitors through clear value propositions directly into action.",
    deliverables: [
      "Targeted typographic hierarchy and conversion-first narrative flow",
      "Lightweight, optimized asset pipeline for instant first-contentful paint",
      "Integrated telemetry hooks for tracking real user engagement",
      "Frictionless multi-step lead capture and consultation scheduling",
    ],
    operationalImpact:
      "Maximizes capital efficiency on paid campaigns and organic launches by focusing strictly on conversion velocity.",
  },
  {
    id: "website-redesign",
    title: "Architecture & Visual Redesign",
    badge: "Platform Modernization",
    summary:
      "Total transformation of legacy, slow, or template-bloated websites into lean, high-velocity digital products. We audit existing bottlenecks and rebuild from the ground up.",
    deliverables: [
      "Comprehensive information architecture and UX flow restructuring",
      "Complete elimination of heavy legacy dependencies and bloated code",
      "Design system standardization with centralized tokens and reusable UI primitives",
      "Zero-downtime transition and preserved search equity with precise redirect planning",
    ],
    operationalImpact:
      "Restores modern brand perception and removes technical debt holding back your digital operations.",
  },
  {
    id: "lead-gen-websites",
    title: "Interactive Lead-Generation Platforms",
    badge: "Active Acquisition",
    summary:
      "Web platforms featuring embedded self-qualification tools, dynamic cost/scope estimators, and interactive diagnostic flows that engage prospects before handing off to sales.",
    deliverables: [
      "Interactive scope configurators and decision matrices",
      "Conditional multi-branch intake flows tailored to visitor industry",
      "Direct API synchronization into your CRM, database, or email infrastructure",
      "Automated lead enrichment and notification triggers for sales teams",
    ],
    operationalImpact:
      "Replaces passive contact forms with an engaging qualification experience that delivers pre-vetted leads.",
  },
];

export const AGENT_SERVICES: ServiceDetail[] = [
  {
    id: "website-chatbot",
    title: "Website AI Conversational Agent",
    badge: "Active Engagement",
    summary:
      "An intelligent, brand-aligned conversational agent operating directly on your website. Engages high-intent visitors in real time, answers specific service inquiries, and schedules discovery calls.",
    deliverables: [
      "Deterministic guardrails preventing off-topic drift or hallucinations",
      "Trained on your actual product documentation, service scopes, and brand tone",
      "Native calendar integration for automated meeting booking inside the chat",
      "Transcript routing and escalation triggers to human representatives when needed",
    ],
    operationalImpact:
      "Captures high-intent prospects outside business hours when traditional staff are unavailable.",
  },
  {
    id: "faq-support-agent",
    title: "FAQ & 24/7 Support Agent",
    badge: "Customer Support",
    summary:
      "Resolves tier-1 customer inquiries, onboarding questions, and operational FAQs instantly using a verified knowledge retrieval base. Provides cited, accurate answers to complex questions.",
    deliverables: [
      "Retrieval-augmented grounding against private company knowledge repositories",
      "Multi-channel readiness for web interfaces, client portals, and ticketing apps",
      "Real-time fallback protocol routing unresolved edge cases to designated teams",
      "Continuous logging of query trends to surface documentation gaps",
    ],
    operationalImpact:
      "Dramatically reduces recurring support ticket volume, allowing human teams to focus on high-value client needs.",
  },
  {
    id: "lead-qualification-agent",
    title: "Lead Qualification & Triage Agent",
    badge: "Pipeline Efficiency",
    summary:
      "Conducts conversational discovery with inbound prospects to evaluate budget, timeline, technical scope, and decision-maker authority before human sales intervention.",
    deliverables: [
      "Custom qualification logic matching your exact ideal customer profile (ICP)",
      "Automated prospect scoring and structured requirement brief generation",
      "Instant CRM pipeline creation with tagged intent categories",
      "Personalized routing logic directing enterprise prospects to senior directors",
    ],
    operationalImpact:
      "Protects executive and sales time by filtering low-intent inquiries and presenting structured prospect dossiers.",
  },
  {
    id: "internal-business-assistant",
    title: "Internal Business Operations Assistant",
    badge: "Operational Leverage",
    summary:
      "A secure internal AI assistant designed to bridge company documents, project archives, SOPs, and internal workflows. Helps team members locate answers, draft briefs, and execute workflows.",
    deliverables: [
      "Secure role-based access control ensuring sensitive documents remain protected",
      "Instant search across internal standard operating procedures and meeting memos",
      "Automated summary generation for recurring operational reviews and reporting",
      "Workflow orchestration connecting internal tools via secure APIs",
    ],
    operationalImpact:
      "Unlocks institutional knowledge trapped across silos and accelerates internal execution speed.",
  },
];
