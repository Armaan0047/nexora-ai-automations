export type NavItem = {
  label: string;
  href: string;
};

export type CapabilityItem = {
  id: string;
  category: "websites" | "agents" | "solutions" | "growth";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  scopeNote: string;
};

export type ProblemItem = {
  friction: string;
  impact: string;
  nexoraApproach: string;
};

export type AgentRole = {
  id: "chatbot" | "support" | "qualifier" | "assistant";
  title: string;
  tag: string;
  purpose: string;
  inputPlaceholder: string;
  sampleScenarios: {
    prompt: string;
    intent: string;
    reasoning: string[];
    output: string;
    actionTriggered: string;
  }[];
};

export type ArchitectureStep = {
  step: string;
  title: string;
  role: string;
  description: string;
  subItems: string[];
};

export type ConsultationFormState = {
  fullName: string;
  companyName: string;
  workEmail: string;
  websiteUrl: string;
  selectedNeeds: string[];
  projectScope: string;
  timeline: string;
  budgetExpectation: string;
};
