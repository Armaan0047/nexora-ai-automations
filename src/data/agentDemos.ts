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
    name: "Website Conversational Agent",
    badge: "Visitor Engagement",
    systemPromptSummary:
      "Context: Nexora client commercial real estate firm. Role: Guide prospective commercial tenants through available square footage, lease structures, and schedule site tours with the leasing director.",
    sampleScenarios: [
      {
        prompt: "We need 15,000 sq ft of contiguous office space in Midtown with occupancy by Q3. Can we tour options this week?",
        category: "Commercial Space Inquiry",
        intent: "High-Intent Space Requirement & Tour Scheduling",
        reasoningSteps: [
          "Parsing spatial criteria: 15,000 sq ft contiguous, Midtown submarket.",
          "Cross-referencing available building inventory matching Q3 timeline.",
          "Identified 2 candidate suites: 520 Madison (Floor 14) and 600 Lexington (Floor 9).",
          "Accessing leasing director calendar availability for Thursday and Friday.",
        ],
        response:
          "We currently have two contiguous blocks matching your Q3 requirement: 16,200 sq ft at 520 Madison (Floor 14, move-in ready spec suite) and 14,800 sq ft at 600 Lexington (Floor 9, flexible layout). Both support immediate Q3 occupancy.\n\nOur Senior Leasing Director, Marcus Vance, has direct walkthrough windows open this Thursday at 11:00 AM or Friday at 2:30 PM. Would either of those times suit your team, or should I hold a different slot?",
        actionSummary:
          "Pre-reserved 45-minute tentative site tour slots; logged tenant requirement sheet into leasing CRM.",
        dataPayload: {
          "Space Requirement": "14,800 - 16,200 RSF",
          "Target Submarket": "Midtown",
          "Move-in Target": "Q3 2026",
          "Next Step": "Site Tour Confirmation",
        },
      },
      {
        prompt: "Do you offer full-floor leases with direct elevator access?",
        category: "Lease Structure",
        intent: "Specification Query: Full-floor Availability",
        reasoningSteps: [
          "Analyzing architectural parameter: Full floorplate + keycard elevator lockoff.",
          "Verifying building specs across portfolio assets.",
          "Formulating clear architectural confirmation with security specs.",
        ],
        response:
          "Yes. Floors 12 through 18 across our flagship assets are configured as single-tenant floorplates with dual-bank private elevator access, secure badge-lockoff programming, and dedicated mechanical zones. We can also provide floor plans in DWG or PDF format prior to your walkthrough.",
        actionSummary: "Presented floorplate security specs; ready to transmit architectural PDF on request.",
      },
    ],
    fallbackResponses: {
      intent: "General Commercial Inquiry",
      reasoning: [
        "Analyzing user inquiry against property inventory and lease terms.",
        "Synthesizing concise, brand-aligned response.",
        "Offering direct contact with the leasing operations desk.",
      ],
      answer:
        "Thank you for reaching out. Based on your criteria, our leasing team can prepare an availability matrix specific to your required timeline and footprint. Would you like us to forward the current specification sheet to your work email, or connect you directly with a leasing specialist?",
      action: "Logged inquiry to property dispatch queue.",
    },
  },
  support: {
    id: "support",
    name: "FAQ & Customer Support Agent",
    badge: "Knowledge Verification",
    systemPromptSummary:
      "Context: Nexora client specialized medical logistics company. Role: Provide grounded answers regarding cold-chain compliance, chain-of-custody tracking, and incident escalation protocols.",
    sampleScenarios: [
      {
        prompt: "What is your emergency escalation protocol if temperature deviation occurs during international transit?",
        category: "SLA & Compliance",
        intent: "Cold-Chain Deviation & SOP Verification",
        reasoningSteps: [
          "Querying SOP-COLD-402: International Biopharma Transit Protocols.",
          "Retrieving mandatory notification timeframes and dry-ice replenishment triggers.",
          "Formatting step-by-step containment protocol with contact dispatch details.",
        ],
        response:
          "Under SOP-COLD-402, our monitoring hardware triggers an automated Level-1 alert if ambient core temp rises within 1.5°C of the upper allowable threshold:\n\n1. Automated Alert: Ground station dispatch is notified within 180 seconds of deviation telemetry.\n2. Local Intervention: The nearest airport handling hub deploys an active dry-ice or eutectic buffer replenishment team.\n3. Stakeholder Notification: An automated incident telemetry report with hourly sensor history is transmitted directly to your quality assurance coordinator.\n\nAll data is recorded on tamper-evident loggers compliant with 21 CFR Part 11.",
        actionSummary:
          "Cited verified compliance SOP; generated active escalation tree for client review.",
        dataPayload: {
          "Compliance SOP": "SOP-COLD-402 Rev 4",
          "Verification Standard": "21 CFR Part 11",
          "Resolution Tier": "Level-1 Cold-Chain Dispatch",
        },
      },
      {
        prompt: "Can we download calibrated sensor certificates for shipment #NX-8821?",
        category: "Document Retrieval",
        intent: "Sensor Calibration Document Request",
        reasoningSteps: [
          "Validating shipment manifest identifier #NX-8821.",
          "Locating batch calibration records for NIST-traceable sensors.",
          "Providing direct secure repository link.",
        ],
        response:
          "Shipment #NX-8821 utilized NIST-traceable CryoLogger units #CL-4091 and #CL-4092, calibrated on July 14. The certified calibration reports and pre-departure verification seals are available for download in your compliance portal under Documents > Calibration Certificates.",
        actionSummary: "Located batch calibration records; verified NIST traceability compliance.",
      },
    ],
    fallbackResponses: {
      intent: "Technical Support & Documentation Request",
      reasoning: [
        "Searching grounded knowledge base for verified documentation matches.",
        "Ensuring answer complies with strict verification boundaries.",
      ],
      answer:
        "Our system has verified your documentation request against our operational database. You can review full protocol details in your customer management portal, or we can route this ticket directly to your dedicated compliance manager.",
      action: "Generated verified knowledge response.",
    },
  },
  qualifier: {
    id: "qualifier",
    name: "Lead Qualification & Triage Agent",
    badge: "Pipeline Diagnostics",
    systemPromptSummary:
      "Context: Nexora client enterprise cybersecurity consulting firm. Role: Triage incoming inquiries, identify regulatory scope (SOC2, ISO, HIPAA), timeline, team size, and route qualified enterprise clients to partner consultants.",
    sampleScenarios: [
      {
        prompt: "We are a Series B fintech with 90 employees preparing for SOC2 Type II audit in 4 months. We need readiness assessment and remediation assistance.",
        category: "Enterprise Inbound Intake",
        intent: "Target ICP Inbound: Fintech SOC2 Type II",
        reasoningSteps: [
          "Evaluating ICP criteria: Series B fintech, 90 FTEs, 4-month audit horizon.",
          "Assessing compliance scope: SOC2 Type II readiness + remediation consulting.",
          "Scoring qualification: High-priority enterprise match (Budget band >$40k, strict urgency).",
          "Routing assignment: Lead Partner - Financial Services Security Practice.",
        ],
        response:
          "Thank you for detailing your context. With a 90-person fintech infrastructure and a 4-month target for SOC2 Type II, your optimal timeline requires initiating the gap assessment within the next two weeks to allow sufficient time for remediation observation.\n\nOur Financial Services Practice Lead, Elena Rostova, specializes specifically in rapid-readiness audit preparation for venture-backed fintechs. I have structured your requirement dossier and can coordinate a 30-minute scoping session directly with Elena's desk. Would tomorrow afternoon work for your technical team?",
        actionSummary:
          "Classified as High-Priority Enterprise ICP; generated pre-meeting brief; routed to Financial Services Practice Lead.",
        dataPayload: {
          "Organization Profile": "Fintech / 90 Employees",
          "Audit Framework": "SOC2 Type II",
          "Execution Horizon": "16 Weeks",
          "Triage Verdict": "Qualified - Direct Partner Escalation",
        },
      },
      {
        prompt: "We just need a quick automated vulnerability scan tool for a personal blog.",
        category: "Scope Assessment",
        intent: "Out-of-Scope / Non-Enterprise Inquiry",
        reasoningSteps: [
          "Evaluating scope criteria: Personal blog, self-serve automated scanner.",
          "Comparing against core consulting offerings: High-touch enterprise advisory.",
          "Determining polite deflection to public open-source resources.",
        ],
        response:
          "Our advisory practice focuses exclusively on enterprise compliance audits (SOC2, ISO 27001, HIPAA) and bespoke security architecture for organizations with multi-server cloud environments. For single-site personal blogs, we recommend utilizing open-source community utilities such as OWASP ZAP or built-in hosting vulnerability scanners, which are better suited for standalone websites.",
        actionSummary:
          "Respectfully redirected out-of-scope inquiry; prevented unnecessary sales call scheduling.",
      },
    ],
    fallbackResponses: {
      intent: "Prospective Client Diagnostic",
      reasoning: [
        "Analyzing business profile, technical scope, and project urgency.",
        "Evaluating organizational fit against practice parameters.",
      ],
      answer:
        "Thank you for sharing your project background. To determine the most effective collaboration model and ensure our advisory team is the right fit, could you briefly clarify your expected timeline and regulatory framework?",
      action: "Prompted for missing qualification parameters.",
    },
  },
  assistant: {
    id: "assistant",
    name: "Internal Business Operations Assistant",
    badge: "Operations Intelligence",
    systemPromptSummary:
      "Context: Nexora client engineering & architecture consultancy. Role: Query internal project archives, summarize weekly billable allocations, and draft executive client progress memos.",
    sampleScenarios: [
      {
        prompt: "Summarize outstanding engineering milestones for Project Meridian and draft an update bullet for Thursday's steering committee.",
        category: "Internal Milestone Synthesis",
        intent: "Milestone Tracking & Executive Briefing",
        reasoningSteps: [
          "Querying internal project management database for Project Meridian.",
          "Extracting sprint status: 4 completed deliverables, 1 in review, 0 blocking issues.",
          "Synthesizing concise executive progress bullet focused on delivery timeline.",
        ],
        response:
          "**Project Meridian Status Summary:**\n- Foundation structural analysis: Complete (approved by City Inspector July 10)\n- MEP engineering schematics: Complete (delivered to general contractor)\n- Seismic damping verification: Currently in review (lead engineer sign-off expected Wednesday)\n\n**Draft for Thursday Steering Committee:**\n*“Project Meridian remains on schedule. Core structural and MEP engineering schematics have been formally delivered to the contractor, with final seismic review completing Wednesday prior to Friday's permit submission package.”*",
        actionSummary:
          "Synthesized multi-team status into executive draft; cross-checked permit deadline.",
        dataPayload: {
          "Project Code": "PRJ-MERIDIAN-04",
          "Deliverable Health": "On Schedule (No Critical Blockers)",
          "Next Major Milestone": "Permit Submission - Friday",
        },
      },
      {
        prompt: "Where is our standard non-disclosure agreement template stored, and who has signing authority for agreements under $100k?",
        category: "Policy & Document Lookup",
        intent: "Internal SOP & Signing Authority Query",
        reasoningSteps: [
          "Searching corporate legal repository for active NDA template.",
          "Checking Delegation of Authority matrix Section 4.2.",
          "Providing direct file location and designated signatories.",
        ],
        response:
          "The current standard mutual NDA template is stored in `Legal/Templates/2026/Mutual-NDA-v3.docx`. Under Section 4.2 of our Delegation of Authority policy, mutual NDAs and commercial agreements under $100,000 may be countersigned by Practice Directors or Senior Operations Leads without General Counsel pre-approval.",
        actionSummary: "Cited file path and authority thresholds from company governance manual.",
      },
    ],
    fallbackResponses: {
      intent: "Internal Information Retrieval",
      reasoning: [
        "Indexing internal company repositories and documentation schemas.",
        "Verifying access control clearance.",
      ],
      answer:
        "I have indexed your inquiry against our internal document store. The requested records and operational guidelines are available in our central repository, or I can draft a detailed summary document on demand.",
      action: "Indexed internal operational documentation.",
    },
  },
};
