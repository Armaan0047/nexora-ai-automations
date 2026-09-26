export interface ProblemFriction {
  id: string;
  problemTitle: string;
  symptom: string;
  businessCost: string;
  nexoraSolution: string;
  solutionOutcome: string;
}

export const PROBLEM_FRICTIONS: ProblemFriction[] = [
  {
    id: "outdated-site",
    problemTitle: "An Outdated Website That Doesn't Look Great on Phones",
    symptom:
      "Your website was built years ago, loads slowly, looks cluttered, or doesn't work well on mobile phones.",
    businessCost:
      "Visitors form an impression in seconds. If your site looks neglected, potential clients assume your services might be outdated too.",
    nexoraSolution:
      "We design a clean, modern, and fast website that looks crisp on all devices, highlights your best work, and clearly explains what you offer.",
    solutionOutcome:
      "An impressive digital storefront that immediately earns credibility and trust from prospective clients.",
  },
  {
    id: "missed-leads",
    problemTitle: "Losing Potential Clients Outside Business Hours",
    symptom:
      "People often search for services during evenings or weekends when your office is closed or your phone is busy.",
    businessCost:
      "If visitors cannot easily ask a question or leave a message, they simply click back and contact your competitor.",
    nexoraSolution:
      "We integrate WhatsApp chat buttons and 24/7 AI assistants that greet visitors, answer basic questions, and collect their contact info anytime.",
    solutionOutcome:
      "Continuous lead capture so you never miss an interested customer while you are away.",
  },
  {
    id: "repetitive-faqs",
    problemTitle: "Spending Time Answering the Same Questions Every Day",
    symptom:
      "Your team spends hours each week answering recurring questions about pricing, turnaround times, service areas, or booking steps.",
    businessCost:
      "Valuable time is drained by routine questions instead of delivering work for paying clients.",
    nexoraSolution:
      "We build clear Support & FAQ sections and smart chatbots that answer common questions accurately and automatically.",
    solutionOutcome:
      "Your customers get immediate answers, and your team gets their time back.",
  },
  {
    id: "friction-contact",
    problemTitle: "Complicated Forms That Drive Visitors Away",
    symptom:
      "Asking visitors to fill out lengthy, complex forms just to request a quote or ask a quick question.",
    businessCost:
      "Most visitors browse on mobile. If contacting you takes more than a few taps, they leave without saying a word.",
    nexoraSolution:
      "We add one-tap WhatsApp contact buttons, clean click-to-call links, and frictionless quote request forms.",
    solutionOutcome:
      "A fast, comfortable contact process that dramatically increases the number of people who reach out.",
  },
  {
    id: "manual-followups",
    problemTitle: "Inquiries Getting Lost in Inboxes and Spreadsheets",
    symptom:
      "Lead messages get buried in email threads, manual notes get misplaced, and follow-ups happen too late.",
    businessCost:
      "Slow response times cost deals. The fastest responder almost always wins the client.",
    nexoraSolution:
      "We set up simple automations that send new lead notifications directly to your phone or CRM instantly.",
    solutionOutcome:
      "You are alerted the moment a prospect shows interest, enabling fast, effective follow-ups.",
  },
];
