"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Cpu, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

interface WorkflowMode {
  id: string;
  name: string;
  inputLabel: string;
  inputSample: string;
  coreProcess: string;
  guardrails: string;
  outputSummary: string;
  destinations: string[];
}

const WORKFLOW_MODES: WorkflowMode[] = [
  {
    id: "consultation",
    name: "Inbound Prospect Flow",
    inputLabel: "High-Intent Visitor Traffic",
    inputSample: "Prospective client inquiring about custom web architecture and AI support integration",
    coreProcess: "Intent Extraction & Scope Triage",
    guardrails: "ICP Qualification & Budget Validation",
    outputSummary: "Structured Scope Dossier & Calendar Slot Reserved",
    destinations: ["Executive CRM Pipeline", "Director Calendar", "Requirements Brief"],
  },
  {
    id: "support",
    name: "Customer Support Triage",
    inputLabel: "Active Client SLA Inquiry",
    inputSample: "Enterprise customer requesting protocol clarification on data boundaries",
    coreProcess: "RAG Knowledge Base Verification",
    guardrails: "Deterministic Context Bounds (No Hallucination)",
    outputSummary: "Verified Technical Answer with Direct Citations",
    destinations: ["Client Portal Feed", "Resolution Audit Log", "Support Dispatch"],
  },
  {
    id: "operations",
    name: "Internal Knowledge Query",
    inputLabel: "Operational Team Request",
    inputSample: "Team member querying deployment SOPs for multi-region cloud staging",
    coreProcess: "Repository Indexing & Synthesized Memo",
    guardrails: "Role-Based Access Enforcement",
    outputSummary: "Synthesized Action Checklist & Document Links",
    destinations: ["Internal Slack/Teams", "Engineering Archive", "Project Workspace"],
  },
];

export function SystemVisual() {
  const [activeWorkflow, setActiveWorkflow] = useState<string>("consultation");

  const current =
    WORKFLOW_MODES.find((m) => m.id === activeWorkflow) || WORKFLOW_MODES[0];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-surface-1/90 p-5 sm:p-6 shadow-xl backdrop-blur-sm">
      {/* Visual Header & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Architecture Blueprint
          </span>
          <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded border border-white/5 bg-white/[0.02]">
            Concept Preview
          </span>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          {WORKFLOW_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveWorkflow(mode.id)}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeWorkflow === mode.id
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              {mode.name}
            </button>
          ))}
        </div>
      </div>

      {/* Connected Architecture Flow: 3 Stages */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stage 1: Ingestion */}
        <div className="rounded-xl border border-white/10 bg-surface-2/70 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                01 / Ingestion
              </span>
              <Globe className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">
              {current.inputLabel}
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {current.inputSample}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Encrypted Webhook Stream</span>
          </div>
        </div>

        {/* Stage 2: Nexora Core Intelligence */}
        <div className="rounded-xl border border-blue-500/30 bg-surface-2/90 p-4 flex flex-col justify-between relative shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-blue-400 uppercase font-medium">
                02 / Nexora Agent Core
              </span>
              <Cpu className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">
              {current.coreProcess}
            </h4>
            <div className="mt-2.5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{current.guardrails}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Deterministic Context Matching</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Active Pipeline Execution</span>
          </div>
        </div>

        {/* Stage 3: Operational Destination */}
        <div className="rounded-xl border border-white/10 bg-surface-2/70 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                03 / Business Outcome
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">
              {current.outputSummary}
            </h4>

            <div className="mt-3 space-y-1">
              {current.destinations.map((dest) => (
                <div
                  key={dest}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>{dest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Action Committed</span>
          </div>
        </div>
      </div>

      {/* Baseline Architectural Note */}
      <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span>Every system is engineered from client requirements—never generic templates.</span>
        </span>
        <span className="font-mono text-slate-500">React 19 • Next.js • Type-Safe Runtimes</span>
      </div>
    </div>
  );
}
