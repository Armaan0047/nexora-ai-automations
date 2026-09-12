"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AGENT_PROFILES, AgentProfile } from "@/data/agentDemos";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  CornerDownLeft,
  Cpu,
  FileText,
  HelpCircle,
  Layers,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
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
      intent: `Custom Inquiry Triage [${profile.name}]`,
      reasoning: [
        `Received live prompt: "${customInput.substring(0, 60)}..."`,
        "Validating against domain system prompt and compliance rules.",
        "Synthesizing structured response with designated next action.",
      ],
      answer: `Nexora Agent Engine has analyzed your inquiry: "${customInput}".\n\nIn a production deployment, this agent is grounded strictly in your proprietary documentation, pricing tables, or service schemas. It provides accurate, brand-aligned answers and logs the interaction to your CRM or internal support queue.`,
      action: "Simulated inquiry triage and CRM record generation.",
      dataPayload: {
        "Input Query": customInput.substring(0, 45) + "...",
        "Triage Status": "Validated Against System Guardrails",
        "Assigned Agent": profile.name,
      },
    });
    setCustomInput("");
  };

  return (
    <section id="agents" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-surface-1/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="PILLAR 02 // AUTONOMOUS WORKFLOWS"
          title="Intelligent AI agents built for real business operations."
          description="We engineer custom, context-grounded AI agents that operate directly on your digital properties and internal tools. Built with strict deterministic boundaries to resolve inquiries, qualify leads, and support operations with zero hallucination."
          className="mb-16"
        />

        {/* 4 Agent Discipline Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          <button
            onClick={() => handleRoleChange("chatbot")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "chatbot"
                ? "border-blue-500/50 bg-surface-1 text-white shadow-sm"
                : "border-white/10 bg-surface-base text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">DISCIPLINE 01</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Website Conversational Agent</h4>
            <p className="text-xs text-slate-400 mt-1">Converts high-intent visitors into booked discovery calls.</p>
          </button>

          <button
            onClick={() => handleRoleChange("support")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "support"
                ? "border-blue-500/50 bg-surface-1 text-white shadow-sm"
                : "border-white/10 bg-surface-base text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">DISCIPLINE 02</span>
            </div>
            <h4 className="text-sm font-semibold text-white">FAQ & Customer Support Agent</h4>
            <p className="text-xs text-slate-400 mt-1">Grounded resolution with cited answers from your knowledge base.</p>
          </button>

          <button
            onClick={() => handleRoleChange("qualifier")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "qualifier"
                ? "border-blue-500/50 bg-surface-1 text-white shadow-sm"
                : "border-white/10 bg-surface-base text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <UserCheck className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">DISCIPLINE 03</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Lead Qualification & Triage</h4>
            <p className="text-xs text-slate-400 mt-1">Evaluates scope, budget, and urgency before booking senior sales time.</p>
          </button>

          <button
            onClick={() => handleRoleChange("assistant")}
            className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedRole === "assistant"
                ? "border-blue-500/50 bg-surface-1 text-white shadow-sm"
                : "border-white/10 bg-surface-base text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono text-slate-500">DISCIPLINE 04</span>
            </div>
            <h4 className="text-sm font-semibold text-white">Internal Business Assistant</h4>
            <p className="text-xs text-slate-400 mt-1">Automates SOP queries, document synthesis, and internal memos.</p>
          </button>
        </div>

        {/* Live Functional Agent Playground Window */}
        <div className="rounded-2xl border border-white/15 bg-surface-1 shadow-2xl p-4 sm:p-7">
          {/* Playground Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Badge variant="demo">Interactive Demo</Badge>
              <h3 className="text-sm sm:text-base font-semibold text-white">
                {profile.name}
              </h3>
              <span className="text-xs font-mono text-slate-500 hidden md:inline">
                [{profile.badge}]
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Grounded Deterministic Execution</span>
            </div>
          </div>

          {/* Context Boundary Display */}
          <div className="mt-4 p-3 rounded-lg border border-white/10 bg-surface-2/60 text-xs text-slate-400">
            <span className="font-mono text-slate-300 font-semibold uppercase mr-2">
              Domain Context:
            </span>
            {profile.systemPromptSummary}
          </div>

          {/* Interaction Layout: Left Scenarios & Input, Right Step-by-Step Execution */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Sample Business Prompts + Custom Input */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Select a Realistic Test Scenario:
                </span>
                <div className="space-y-2">
                  {profile.sampleScenarios.map((sc, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectScenario(idx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs leading-relaxed transition-all cursor-pointer ${
                        activeScenarioIndex === idx
                          ? "border-blue-500/50 bg-blue-500/[0.08] text-white"
                          : "border-white/10 bg-surface-2/60 text-slate-300 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="font-mono text-[10px] text-blue-400 uppercase mb-1">
                        Scenario: {sc.category}
                      </div>
                      <div className="line-clamp-2 italic font-serif">
                        “{sc.prompt}”
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Freeform Live Test Input */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Or Test Custom Inquiry:
                </span>
                <form onSubmit={handleCustomSubmit} className="relative">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={
                      selectedRole === "chatbot"
                        ? "e.g. Can we lease contiguous floors in Q3?"
                        : selectedRole === "support"
                        ? "e.g. How does cold-chain escalation work?"
                        : selectedRole === "qualifier"
                        ? "e.g. Series B company needing SOC2 audit in 4 months..."
                        : "e.g. Summarize Project Meridian milestones..."
                    }
                    className="w-full text-xs bg-surface-2 border border-white/15 rounded-lg px-3.5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2.5 p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Send test query"
                  >
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </form>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  Simulates agent intent extraction and policy compliance check.
                </span>
              </div>
            </div>

            {/* Right Column: Execution Workflow Breakdown */}
            <div className="lg:col-span-7 rounded-xl border border-white/10 bg-surface-base p-5 space-y-5">
              {/* Step 1: Intent Recognition */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span className="uppercase text-blue-400">Step 01 / Intent Classification</span>
                  <span>Deterministic Rule Check</span>
                </div>
                <div className="p-2.5 rounded border border-white/10 bg-surface-2 text-xs font-mono text-slate-200">
                  {activeResponse.intent}
                </div>
              </div>

              {/* Step 2: Internal Reasoning Steps */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span className="uppercase text-blue-400">Step 02 / Grounded Reasoning Trace</span>
                  <span>RAG Knowledge Verification</span>
                </div>
                <div className="p-3 rounded border border-white/10 bg-surface-2/60 space-y-1.5 font-mono text-xs text-slate-300">
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
                  <span className="uppercase text-emerald-400">Step 03 / Client-Facing Output</span>
                  <span>Brand Persona Applied</span>
                </div>
                <div className="p-4 rounded-lg border border-white/15 bg-surface-1 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                  {activeResponse.answer}
                </div>
              </div>

              {/* Step 4: Action / CRM Payload */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="uppercase text-slate-300 font-semibold">
                    Step 04 / Automated Business Action
                  </span>
                  <span className="text-emerald-400">Committed</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">
                  {activeResponse.action}
                </div>

                {activeResponse.dataPayload && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/5">
                    {Object.entries(activeResponse.dataPayload).map(([k, v]) => (
                      <div key={k} className="p-2 rounded bg-surface-2 border border-white/5">
                        <span className="text-[10px] font-mono text-slate-500 block">{k}</span>
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
