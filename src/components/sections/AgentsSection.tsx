"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { AGENT_PROFILES } from "@/data/agentDemos";
import {
  Bot,
  CornerDownLeft,
  FileText,
  HelpCircle,
  ShieldCheck,
  UserCheck,
  Sparkles,
} from "lucide-react";

export function AgentsSection() {
  const [selectedRole, setSelectedRole] = useState<
    "chatbot" | "support" | "qualifier" | "assistant"
  >("chatbot");

  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>("");
  const [activeResponse, setActiveResponse] = useState<{
    intent: string;
    reasoning: string[];
    answer: string;
    action: string;
    dataPayload?: Record<string, string>;
  }>({
    intent: AGENT_PROFILES.chatbot.sampleScenarios[0].intent,
    reasoning: AGENT_PROFILES.chatbot.sampleScenarios[0].reasoningSteps,
    answer: AGENT_PROFILES.chatbot.sampleScenarios[0].response,
    action: AGENT_PROFILES.chatbot.sampleScenarios[0].actionSummary,
    dataPayload: AGENT_PROFILES.chatbot.sampleScenarios[0].dataPayload,
  });

  const profile = AGENT_PROFILES[selectedRole];

  // Handle switching role
  const handleRoleChange = (
    roleKey: "chatbot" | "support" | "qualifier" | "assistant"
  ) => {
    setSelectedRole(roleKey);
    setActiveScenarioIndex(0);
    const newProfile = AGENT_PROFILES[roleKey];
    setActiveResponse({
      intent: newProfile.sampleScenarios[0].intent,
      reasoning: newProfile.sampleScenarios[0].reasoningSteps,
      answer: newProfile.sampleScenarios[0].response,
      action: newProfile.sampleScenarios[0].actionSummary,
      dataPayload: newProfile.sampleScenarios[0].dataPayload,
    });
  };

  // Handle selecting a scenario
  const handleSelectScenario = (index: number) => {
    setActiveScenarioIndex(index);
    const scenario = profile.sampleScenarios[index];
    setActiveResponse({
      intent: scenario.intent,
      reasoning: scenario.reasoningSteps,
      answer: scenario.response,
      action: scenario.actionSummary,
      dataPayload: scenario.dataPayload,
    });
  };

  // Handle custom user submission
  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setActiveScenarioIndex(-1);
    setActiveResponse({
      intent: `Customer Inquiry [${profile.name}]`,
      reasoning: [
        `Received question: "${customInput.substring(0, 60)}..."`,
        "Checking business guidelines and FAQ information.",
        "Formulating a helpful, friendly response.",
      ],
      answer: `Thanks for asking about: "${customInput}".\n\nWhen we build this for your business, the assistant is trained directly on your real prices, service details, and FAQs. It gives accurate answers and can forward the inquiry directly to your WhatsApp or email.`,
      action: "Inquiry logged and ready to notify your team.",
      dataPayload: {
        "Customer Question": customInput.substring(0, 45) + "...",
        "Assigned Assistant": profile.name,
        "Status": "Ready for Follow-Up",
      },
    });
    setCustomInput("");
  };

  return (
    <section id="agents" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="SMART INTEGRATIONS"
          title="Helpful AI assistants that answer questions and capture leads."
          description="We add smart AI chatbots, FAQ helpers, and automations directly into your website so prospective customers get answers instantly, day and night."
          className="mb-16"
        />

        {/* 4 Agent Discipline Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          <button
            onClick={() => handleRoleChange("chatbot")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "chatbot"
                ? "border-blue-500/50 bg-[#121622] text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-[#0C0F17] text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">FEATURE 01</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Website AI Assistant</h4>
            <p className="text-xs text-slate-400 mt-1">Greets visitors and answers questions about your services in real time.</p>
          </button>

          <button
            onClick={() => handleRoleChange("support")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "support"
                ? "border-blue-500/50 bg-[#121622] text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-[#0C0F17] text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">FEATURE 02</span>
            </div>
            <h4 className="text-sm font-semibold text-white">24/7 FAQ &amp; Support</h4>
            <p className="text-xs text-slate-400 mt-1">Answers common customer questions about prices, hours, and policies.</p>
          </button>

          <button
            onClick={() => handleRoleChange("qualifier")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "qualifier"
                ? "border-blue-500/50 bg-[#121622] text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-[#0C0F17] text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <UserCheck className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">FEATURE 03</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Quote &amp; Inquiry Helper</h4>
            <p className="text-xs text-slate-400 mt-1">Collects project requirements so you can provide quotes quickly.</p>
          </button>

          <button
            onClick={() => handleRoleChange("assistant")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "assistant"
                ? "border-blue-500/50 bg-[#121622] text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-[#0C0F17] text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">FEATURE 04</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Workflow Assistant</h4>
            <p className="text-xs text-slate-400 mt-1">Helps your team draft messages, look up notes, and save hours of time.</p>
          </button>
        </div>

        {/* Live Functional Agent Playground Window */}
        <div className="rounded-2xl border border-white/12 bg-[#0C0F17] shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-8">
          {/* Playground Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Badge variant="demo">Interactive Playground</Badge>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {profile.name}
              </h3>
              <span className="text-xs font-mono text-slate-400 hidden md:inline">
                [{profile.badge}]
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trained on Your Real Business Information</span>
            </div>
          </div>

          {/* Context Boundary Display */}
          <div className="mt-4 p-3.5 rounded-xl border border-white/8 bg-[#121622] text-xs text-slate-300">
            <span className="font-mono text-blue-400 font-semibold uppercase mr-2">
              System Capability:
            </span>
            {profile.systemPromptSummary}
          </div>

          {/* Interaction Layout: Left Scenarios & Input, Right Step-by-Step Execution */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Sample Business Prompts + Custom Input */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2 font-medium">
                  Click a Sample Customer Question:
                </span>
                <div className="space-y-2">
                  {profile.sampleScenarios.map((sc, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectScenario(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                        activeScenarioIndex === idx
                          ? "border-blue-500/60 bg-blue-500/10 text-white font-medium shadow-sm"
                          : "border-white/10 bg-[#121622]/70 text-slate-300 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="font-mono text-[10px] text-blue-400 uppercase mb-1 font-semibold">
                        Topic: {sc.category}
                      </div>
                      <div className="line-clamp-2 italic font-sans text-slate-200">
                        &ldquo;{sc.prompt}&rdquo;
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Freeform Live Test Input */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2 font-medium">
                  Or Test Your Own Question:
                </span>
                <form onSubmit={handleCustomSubmit} className="relative">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={
                      selectedRole === "chatbot"
                        ? "e.g. Do you offer weekend services and what are your rates?"
                        : selectedRole === "support"
                        ? "e.g. How long does a typical project take?"
                        : selectedRole === "qualifier"
                        ? "e.g. I need a quote for our 3-bedroom house..."
                        : "e.g. Draft a quick quote follow-up email..."
                    }
                    className="w-full text-xs bg-[#121622] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 pr-10 shadow-inner"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Send test query"
                  >
                    <CornerDownLeft className="w-4 h-4 text-blue-400" />
                  </button>
                </form>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  Demonstrates how the assistant delivers accurate, verified answers.
                </span>
              </div>
            </div>

            {/* Right Column: Execution Workflow Breakdown */}
            <div className="lg:col-span-7 rounded-xl border border-white/10 bg-[#07090E] p-5 sm:p-6 space-y-5">
              {/* Step 1: Topic Recognition */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span className="uppercase text-blue-400 font-semibold">Step 01 / Customer Topic</span>
                  <span>Identified Intent</span>
                </div>
                <div className="p-3 rounded-lg border border-white/10 bg-[#121622] text-xs font-mono text-slate-200">
                  {activeResponse.intent}
                </div>
              </div>

              {/* Step 2: Internal Reasoning Steps */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span className="uppercase text-blue-400 font-semibold">Step 02 / Business Knowledge Lookup</span>
                  <span>Checked Against Real Info</span>
                </div>
                <div className="p-3.5 rounded-lg border border-white/10 bg-[#121622]/60 space-y-1.5 font-mono text-xs text-slate-300">
                  {activeResponse.reasoning.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">›</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Synthesized Output */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span className="uppercase text-emerald-400 font-semibold">Step 03 / Response Sent to Customer</span>
                  <span>Accurate &amp; Friendly</span>
                </div>
                <div className="p-4 rounded-xl border border-white/15 bg-[#121622] text-xs sm:text-sm text-slate-100 leading-relaxed whitespace-pre-line font-sans shadow-inner">
                  {activeResponse.answer}
                </div>
              </div>

              {/* Step 4: Action / Next Step */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="uppercase text-slate-300 font-semibold">
                    Step 04 / Automated Next Action
                  </span>
                  <span className="text-emerald-400 font-semibold">Ready</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">
                  {activeResponse.action}
                </div>

                {activeResponse.dataPayload && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    {Object.entries(activeResponse.dataPayload).map(([k, v]) => (
                      <div key={k} className="p-2.5 rounded-lg bg-[#121622] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block">{k}</span>
                        <span className="text-xs text-slate-200 font-mono truncate block mt-0.5">{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
