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
    title: "Company & Business Websites",
    badge: "Business Websites",
    summary:
      "Clean, modern, and mobile-friendly websites designed to showcase your company, establish credibility, and clearly explain your services to prospective clients.",
    deliverables: [
      "Modern responsive design that looks great on phones, tablets, and computers",
      "Clear service pages, company overview, and team presentation",
      "Simple contact options, location maps, and business hours",
      "Fast page loading speeds and built-in search engine optimization (SEO)",
    ],
    operationalImpact:
      "Gives your company an impressive online home that earns instant trust from potential customers.",
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    badge: "Landing Pages",
    summary:
      "Focused single-page websites engineered to turn visitors into phone calls, quote requests, or booked consultations for specific services or campaigns.",
    deliverables: [
      "Clear, persuasive headlines and benefit-focused sections",
      "Direct WhatsApp buttons and easy contact options",
      "Simple, frictionless quote request and lead forms",
      "Optimized for speed and mobile visitor conversion",
    ],
    operationalImpact:
      "Maximizes your marketing efforts by guiding visitors directly to take action.",
  },
  {
    id: "website-redesign",
    title: "Website Redesigns & Improvements",
    badge: "Redesigns & Upgrades",
    summary:
      "Upgrade your existing website with a fresh modern look, faster loading times, better mobile layout, and new features without starting from scratch.",
    deliverables: [
      "Complete visual and layout refresh tailored to your brand",
      "Fixing mobile responsiveness, broken elements, and slow loading",
      "Adding new pages, service sections, or customer features",
      "Keeping your existing domain, email setup, and search rankings",
    ],
    operationalImpact:
      "Breathes new life into an outdated website and turns it into a modern business asset.",
  },
  {
    id: "portfolio-custom",
    title: "Portfolio & Custom Websites",
    badge: "Portfolios & Custom",
    summary:
      "Showcase your past projects, client case studies, or specialized business offerings with clean galleries, filters, and custom features.",
    deliverables: [
      "Custom visual photo galleries and project showcases",
      "Client testimonial layouts and case study breakdowns",
      "Custom forms and calculators tailored to your industry",
      "Built to your exact requirements without rigid templates",
    ],
    operationalImpact:
      "Lets your work speak for itself so potential clients can buy with confidence.",
  },
];

export const AGENT_SERVICES: ServiceDetail[] = [
  {
    id: "website-chatbot",
    title: "Website AI Chatbots",
    badge: "AI Chatbots",
    summary:
      "A friendly AI assistant on your website that greets visitors, answers common questions about your services or pricing, and collects contact info 24/7.",
    deliverables: [
      "Answers customer questions instantly day and night",
      "Collects visitor names, emails, and phone numbers right in chat",
      "Directs high-interest leads to book a call or send an inquiry",
      "Strictly trained on your business details so answers stay accurate",
    ],
    operationalImpact:
      "Captures customer interest while they are on your site, even outside business hours.",
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp & Direct Contact Options",
    badge: "WhatsApp Integration",
    summary:
      "Make it effortless for potential customers to reach you by adding direct WhatsApp chat buttons, pre-filled inquiry messages, and click-to-call options.",
    deliverables: [
      "Prominent WhatsApp chat button visible on phones and desktops",
      "Pre-filled starter messages so clients can message with one tap",
      "Direct redirection from website forms straight to WhatsApp",
      "Click-to-call phone buttons and quick directions for local clients",
    ],
    operationalImpact:
      "Removes contact friction so customers who prefer messaging can reach you immediately.",
  },
  {
    id: "support-faq",
    title: "Support & FAQ Pages",
    badge: "Support & FAQs",
    summary:
      "Dedicated help and FAQ sections that answer frequent customer questions clearly, helping visitors find information without having to call or email.",
    deliverables: [
      "Clear, organized FAQ categories (pricing, process, turnaround, policies)",
      "Helpful customer guides and downloadable info sheets",
      "Searchable help section so visitors find answers in seconds",
      "Fewer repetitive customer service emails and phone calls",
    ],
    operationalImpact:
      "Gives customers the answers they need right away while saving your team hours every week.",
  },
  {
    id: "business-automation",
    title: "Business Workflow Automation",
    badge: "Business Automation",
    summary:
      "Automate repetitive daily tasks like sending instant lead alerts to your phone, logging inquiries into your CRM, and sending quick confirmation messages.",
    deliverables: [
      "Instant inquiry notifications sent directly to your phone or inbox",
      "Automatic logging of form submissions to your spreadsheet or CRM",
      "Automated confirmation emails to customers who request a quote",
      "Custom automations designed around your team's workflow",
    ],
    operationalImpact:
      "Saves hours of manual administrative work and ensures no potential client is left waiting.",
  },
];
