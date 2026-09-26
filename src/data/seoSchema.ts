export const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEXORA",
  "legalName": "Nexora Digital Studio",
  "url": "https://nexora-ai-automations.vercel.app",
  "logo": "https://nexora-ai-automations.vercel.app/nexora-icon.png",
  "description":
    "Nexora is a boutique digital studio building custom business websites, high-conversion landing pages, AI assistants, and WhatsApp lead automation.",
  "slogan": "Websites that make your business easier to trust—and easier to contact.",
  "email": "ai.nexora.automations@gmail.com",
  "sameAs": [],
  "knowsAbout": [
    "Business Websites",
    "Website Development",
    "Landing Pages",
    "Website Redesigns",
    "Website AI Chatbots",
    "WhatsApp Integration",
    "Lead Automation"
  ]
};

export const SCHEMA_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NEXORA — Boutique Digital Studio",
  "url": "https://nexora-ai-automations.vercel.app",
  "description":
    "Modern websites and practical automation for businesses that want more qualified inquiries and less busywork.",
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
    "description":
      "Custom business websites, high-converting landing pages, portfolio sites, and complete website redesigns."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI & Lead Automation",
    "provider": {
      "@type": "Organization",
      "name": "NEXORA"
    },
    "description":
      "On-site AI chatbots trained on business docs, direct WhatsApp integrations, and automated lead capture."
  }
];

export const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Nexora offer rigid packages or custom quotations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexora operates strictly on a requirement-based model. We tailor every quotation to your exact scope and budget, starting from accessible tiers, with no rigid packages or forced add-ons."
      }
    },
    {
      "@type": "Question",
      "name": "How does Nexora make business websites easier to contact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build direct communication triggers such as one-tap WhatsApp routing with pre-filled context, structured inquiry intake forms, and automated team notifications."
      }
    },
    {
      "@type": "Question",
      "name": "What technology does Nexora build with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We engineer websites with Next.js, React, TypeScript, and Tailwind CSS. We avoid bloated drag-and-drop builders to ensure maximum speed and mobile performance."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the website and code after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You own 100% of your code, design assets, domain, and data upon project delivery. There are no proprietary lock-ins or mandatory recurring studio fees."
      }
    }
  ]
};
