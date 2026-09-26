export interface AgentScenario {
  prompt: string;
  category: string;
  intent: string;
  reasoningSteps: string[];
  response: string;
  actionSummary: string;
  dataPayload?: Record<string, string>;
}

export interface AgentProfile {
  id: "chatbot" | "support" | "qualifier" | "assistant";
  name: string;
  badge: string;
  systemPromptSummary: string;
  sampleScenarios: AgentScenario[];
  fallbackResponses: {
    intent: string;
    reasoning: string[];
    answer: string;
    action: string;
  };
}

export const AGENT_PROFILES: Record<string, AgentProfile> = {
  chatbot: {
    id: "chatbot",
    name: "Website AI Assistant",
    badge: "Website Chatbot",
    systemPromptSummary:
      "Role: Greets website visitors, answers questions about your services and pricing, and helps them get in touch or book an appointment.",
    sampleScenarios: [
      {
        prompt: "Do you offer emergency repairs on weekends, and how much is the callout fee?",
        category: "Availability & Pricing",
        intent: "Emergency Service & Pricing Inquiry",
        reasoningSteps: [
          "Checking weekend service hours and emergency callout rates.",
          "Verifying on-duty technician availability.",
          "Providing clear pricing and offering direct WhatsApp or call option.",
        ],
        response:
          "Yes, we provide 24/7 emergency service across weekends. Our emergency callout fee is $95, which includes the initial inspection.\n\nYou can book an emergency technician online right now, or click our WhatsApp button below to speak directly with our on-duty team.",
        actionSummary:
          "Provided clear pricing and offered direct WhatsApp contact.",
        dataPayload: {
          "Service": "Emergency Repair",
          "Callout Fee": "$95 Standard",
          "Next Step": "WhatsApp / Phone Call",
        },
      },
      {
        prompt: "Can I see photos of recent kitchen renovations you've completed?",
        category: "Past Work & Photos",
        intent: "Portfolio & Gallery Request",
        reasoningSteps: [
          "Locating recent kitchen renovation projects and photo gallery.",
          "Providing direct gallery link and WhatsApp lookbook option.",
        ],
        response:
          "Certainly! We have completed over 20 kitchen renovations recently. You can browse our full project gallery with before-and-after photos under the 'Projects' tab on our website, or we can send our digital photo lookbook directly to your WhatsApp.",
        actionSummary:
          "Guided customer to project photos and offered WhatsApp lookbook.",
      },
    ],
    fallbackResponses: {
      intent: "General Customer Inquiry",
      reasoning: [
        "Analyzing customer inquiry against business services.",
        "Providing clear, friendly response with direct contact options.",
      ],
      answer:
        "Thank you for asking! We'd be glad to help with that. Would you like to send us a quick message on WhatsApp, or leave your phone number so our team can get in touch with you?",
      action: "Offered direct contact options to the visitor.",
    },
  },
  support: {
    id: "support",
    name: "24/7 FAQ & Support Assistant",
    badge: "FAQ & Customer Help",
    systemPromptSummary:
      "Role: Answers common customer questions about pricing, warranties, turnaround times, and booking policies.",
    sampleScenarios: [
      {
        prompt: "How long does a typical website redesign take, and will my current site stay online during the build?",
        category: "Process & Timelines",
        intent: "Project Turnaround & Website Uptime Inquiry",
        reasoningSteps: [
          "Checking standard project turnaround guidelines (2 to 4 weeks).",
          "Confirming that the existing website remains 100% online during development.",
        ],
        response:
          "A typical website redesign takes between 2 to 4 weeks depending on the number of pages.\n\nYour current website stays completely online and functional during the entire build. We develop the new version in a private staging area and only switch over once you have reviewed and approved everything.",
        actionSummary:
          "Answered timeline and confirmed zero downtime for the client.",
        dataPayload: {
          "Average Timeline": "2 to 4 Weeks",
          "Website Downtime": "Zero (Staging Build)",
          "Client Review": "Pre-Launch Approval",
        },
      },
      {
        prompt: "What is your cancellation and rescheduling policy for appointments?",
        category: "Booking Policy",
        intent: "Policy & Rescheduling Query",
        reasoningSteps: [
          "Checking appointment policies (24-hour notice requested).",
          "Providing simple online rescheduling link.",
        ],
        response:
          "You can reschedule or cancel anytime with at least 24 hours' notice at no charge. You can do this directly through the link in your booking confirmation email, or by messaging our team on WhatsApp.",
        actionSummary:
          "Explained simple cancellation policy and provided WhatsApp contact.",
      },
    ],
    fallbackResponses: {
      intent: "Customer Support Inquiry",
      reasoning: [
        "Searching FAQ records for matching business answers.",
        "Formulating clear, practical answer.",
      ],
      answer:
        "Our support assistant can help answer any questions about our services, pricing, or policies. If you need special assistance, you can also message us on WhatsApp or submit a quick inquiry form.",
      action: "Provided helpful customer guidance.",
    },
  },
  qualifier: {
    id: "qualifier",
    name: "Lead Capture & Quote Assistant",
    badge: "Inquiries & Quotes",
    systemPromptSummary:
      "Role: Collects project details from potential clients and organizes the inquiry so your team can provide an accurate quote quickly.",
    sampleScenarios: [
      {
        prompt: "We need weekly commercial office cleaning for a 5,000 sq ft office starting next month.",
        category: "Quote Request",
        intent: "Commercial Cleaning Quote Inquiry",
        reasoningSteps: [
          "Capturing office size: 5,000 sq ft.",
          "Capturing frequency: Weekly commercial cleaning.",
          "Prompting for address and phone number for quote dispatch.",
        ],
        response:
          "Thank you for reaching out! For a 5,000 sq ft office on a weekly schedule, we can provide an itemized quote.\n\nCould you share your business address and the best phone number or email? Our team will prepare a custom proposal and send it over to you.",
        actionSummary:
          "Captured office size and frequency; requested contact info for quote delivery.",
        dataPayload: {
          "Space Size": "5,000 sq ft",
          "Frequency": "Weekly",
          "Status": "Ready for Quote Dispatch",
        },
      },
      {
        prompt: "I need a quote for painting the exterior of a two-story home.",
        category: "Exterior Painting",
        intent: "Residential Painting Estimate",
        reasoningSteps: [
          "Capturing project type: Two-story exterior painting.",
          "Recommending photo upload via WhatsApp for fast estimation.",
        ],
        response:
          "We'd love to help! For exterior painting, we can provide a quick ballpark estimate if you send a few photos of your home to our WhatsApp, or we can schedule a quick 15-minute in-person inspection at your convenience.",
        actionSummary:
          "Offered fast WhatsApp photo estimation or on-site visit.",
      },
    ],
    fallbackResponses: {
      intent: "Quote Request Intake",
      reasoning: [
        "Analyzing project scope and gathering requirements.",
      ],
      answer:
        "To get you an accurate quote, could you let us know what specific services you need and your approximate timeline? We'll prepare an estimate right away.",
      action: "Gathered initial project details.",
    },
  },
  assistant: {
    id: "assistant",
    name: "Business Workflow Assistant",
    badge: "Internal Assistant",
    systemPromptSummary:
      "Role: Helps your team look up internal documents, client notes, pricing sheets, or draft customer follow-ups.",
    sampleScenarios: [
      {
        prompt: "Draft a polite follow-up message to a customer who asked for a quote 3 days ago.",
        category: "Customer Follow-Up",
        intent: "Follow-Up Message Draft",
        reasoningSteps: [
          "Generating a friendly, non-pushy follow-up template.",
          "Including clear options to reply or ask questions.",
        ],
        response:
          "Here is a ready-to-send follow-up message:\n\n'Hi [Name], hope you're having a great week! Just following up to see if you had any questions about the quote we sent over for [Service]. Happy to adjust the details or answer any questions whenever you're ready. Best regards, [Your Business]'",
        actionSummary:
          "Drafted friendly customer follow-up message ready to copy and send.",
        dataPayload: {
          "Message Type": "Customer Quote Follow-Up",
          "Tone": "Friendly & Non-Pushy",
        },
      },
      {
        prompt: "What is our standard warranty policy on roof repair materials?",
        category: "Policy Lookup",
        intent: "Warranty Policy Information",
        reasoningSteps: [
          "Checking internal business records for material warranties.",
          "Summarizing terms clearly for the customer.",
        ],
        response:
          "Our standard roof repairs include a 10-year manufacturer warranty on materials and a 2-year guarantee on our workmanship. You can share this directly with the customer.",
        actionSummary:
          "Retrieved warranty terms from internal documentation.",
      },
    ],
    fallbackResponses: {
      intent: "Workflow Assistance",
      reasoning: [
        "Reviewing business guidelines and standard procedures.",
      ],
      answer:
        "I can help draft customer emails, look up pricing guidelines, or summarize internal notes to help your team work faster.",
      action: "Ready to assist internal team.",
    },
  },
};
