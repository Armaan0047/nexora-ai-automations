export const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEXORA",
  "legalName": "Nexora Technologies",
  "url": "https://nexora.systems",
  "logo": "https://nexora.systems/nexora-icon.png",
  "description": "Nexora engineers custom AI websites and intelligent AI agents for modern businesses.",
  "slogan": "AI Systems. Automated Growth.",
  "email": "ai.nexora.automations@gmail.com",
  "sameAs": [],
  "knowsAbout": [
    "AI Websites",
    "Conversational AI Agents",
    "Customer Support Automation",
    "Lead Qualification Systems",
    "Next.js Software Engineering"
  ]
};

export const SCHEMA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NEXORA - AI Systems & Modern Web Platforms",
  "url": "https://nexora.systems",
  "description": "Official website for Nexora, engineering custom AI websites and autonomous business agents.",
  "publisher": {
    "@type": "Organization",
    "name": "NEXORA"
  }
};

export const SCHEMA_SERVICES = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Website Engineering",
    "provider": {
      "@type": "Organization",
      "name": "NEXORA"
    },
    "description": "Custom business websites, landing pages, and architectural redesigns built with Next.js and React."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Agent Development",
    "provider": {
      "@type": "Organization",
      "name": "NEXORA"
    },
    "description": "Autonomous website chatbots, 24/7 customer support agents, lead qualification pipelines, and internal business assistants."
  }
];

export const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Nexora offer rigid pricing tiers or custom quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexora operates strictly on a requirement-driven model. Because every business has unique operations, technical integrations, and scope requirements, we provide customized architecture proposals and transparent quotations based on your specific deliverables."
      }
    },
    {
      "@type": "Question",
      "name": "How does Nexora prevent AI agents from hallucinating or answering off-topic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We implement retrieval-augmented generation (RAG) combined with strict deterministic system guardrails. Agents are constrained to your verified product, documentation, and operational data, with clear fallback protocols to human personnel when outside their scope."
      }
    },
    {
      "@type": "Question",
      "name": "What technology stack does Nexora use for web platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We engineer web platforms using production-grade React, Next.js (App Router), TypeScript, and Tailwind CSS, prioritizing high accessibility, clean code architecture, and sub-second load times."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the code and intellectual property upon delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your organization owns 100% of the custom codebase, design tokens, and integration scripts upon project completion and handover. We do not lock you into proprietary platforms."
      }
    }
  ]
};
