export const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEXORA",
  "legalName": "Nexora Technologies",
  "url": "https://nexora.systems",
  "logo": "https://nexora.systems/nexora-icon.png",
  "description": "Nexora builds custom modern websites, landing pages, AI chatbots, and business automation.",
  "slogan": "Modern Websites. Automated Growth.",
  "email": "ai.nexora.automations@gmail.com",
  "sameAs": [],
  "knowsAbout": [
    "Business Websites",
    "Website Development",
    "Landing Pages",
    "Website Redesigns",
    "Website AI Chatbots",
    "WhatsApp Integration",
    "Business Automation"
  ]
};

export const SCHEMA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NEXORA - Modern Websites & Digital Solutions",
  "url": "https://nexora.systems",
  "description": "Official website for Nexora, building modern business websites, landing pages, AI chatbots, and digital solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "NEXORA"
  }
};

export const SCHEMA_SERVICES = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Website Development",
    "provider": {
      "@type": "Organization",
      "name": "NEXORA"
    },
    "description": "Custom business websites, high-converting landing pages, portfolio sites, and complete website redesigns."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI & Digital Solutions",
    "provider": {
      "@type": "Organization",
      "name": "NEXORA"
    },
    "description": "Website AI chatbots, 24/7 customer support assistants, direct WhatsApp integration, and business automation."
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
