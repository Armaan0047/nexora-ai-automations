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
    id: "passive-web",
    problemTitle: "Static Websites That Bleed High-Intent Demand",
    symptom:
      "Visitors land on a generic brochure website, scan for seconds, find no interactive guidance or clear next step, and leave without leaving a footprint.",
    businessCost:
      "Marketing spend and organic traffic are wasted because the interface treats every visitor like a passive reader rather than an active buyer.",
    nexoraSolution:
      "Interactive digital architecture with clear hierarchy, targeted conversion pathways, and conversational touchpoints that engage high-intent visitors immediately.",
    solutionOutcome:
      "Transforms passive page views into qualified, actionable conversations and booked consultations.",
  },
  {
    id: "delayed-response",
    problemTitle: "Delayed Response Times Turning Warm Prospects Cold",
    symptom:
      "A potential client submits a contact form after business hours or during weekend research. A human representative responds 18 to 48 hours later.",
    businessCost:
      "In modern markets, responsiveness directly impacts win rates. By the time human staff reply, prospects have often already contacted competitors.",
    nexoraSolution:
      "Autonomous 24/7 AI agents that greet inbound prospects instantly, answer detailed capability questions, and guide them directly into the calendar.",
    solutionOutcome:
      "Continuous business capture regardless of time zones, weekends, or internal team bandwidth.",
  },
  {
    id: "support-drain",
    problemTitle: "Core Teams Drained by Repetitive Inquiries",
    symptom:
      "Senior staff and key team members spend hours each week answering the same recurring operational, pricing, and scope questions across email and chat.",
    businessCost:
      "Key personnel are distracted from strategic delivery, product improvements, and high-value revenue activities.",
    nexoraSolution:
      "Grounded customer support agents operating on strict deterministic boundaries. They answer verified FAQs accurately with zero hallucination.",
    solutionOutcome:
      "Repetitive query volume is resolved autonomously, freeing teams to focus on complex, high-impact business execution.",
  },
  {
    id: "unstructured-triage",
    problemTitle: "Unstructured Lead Intake Eating Executive Hours",
    symptom:
      "Sales directors take exploratory calls only to discover 20 minutes in that the prospect has mismatched budget expectations, missing requirements, or an incompatible timeline.",
    businessCost:
      "Hours of valuable leadership time are burned on ill-fitted conversations, reducing the energy available for ideal clients.",
    nexoraSolution:
      "Conversational qualification agents and interactive requirement configurators that triage scope, budget fit, and decision authority upfront.",
    solutionOutcome:
      "Sales leadership enters conversations equipped with a structured briefing document and pre-screened criteria.",
  },
  {
    id: "disconnected-tools",
    problemTitle: "Siloed Software and Disconnected Manual Bridging",
    symptom:
      "Website submissions sit in email inboxes, notes are manually re-typed into spreadsheets, and internal documents are scattered across fragmented folders.",
    businessCost:
      "Critical context gets lost between departments, leading to missed client follow-ups and operational friction.",
    nexoraSolution:
      "Integrated software pipelines where website touchpoints, AI agent interactions, and CRM databases communicate via secure, unified APIs.",
    solutionOutcome:
      "A single, cohesive digital engine that connects customer touchpoints directly to internal execution pipelines.",
  },
];
