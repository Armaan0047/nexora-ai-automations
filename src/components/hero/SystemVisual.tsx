"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

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
    id: "lead",
    name: "Website & WhatsApp",
    inputLabel: "Visitor on Your Website",
    inputSample: "A potential customer visits your site looking for pricing and services",
    coreProcess: "Instant Contact & WhatsApp Link",
    guardrails: "One-click chat or simple inquiry form",
    outputSummary: "Customer Reaches You Directly",
    destinations: ["Direct WhatsApp Message", "Instant Email Alert", "Client Phone Call"],
  },
  {
    id: "support",
    name: "24/7 AI Support & FAQ",
    inputLabel: "After-Hours Customer Question",
    inputSample: "Customer asks about your service details or business hours at 10 PM",
    coreProcess: "Accurate FAQ & AI Response",
    guardrails: "Trained on your real business information",
    outputSummary: "Instant Answer Without Waiting",
    destinations: ["Immediate Chat Reply", "Support Log", "Staff Alert if Needed"],
  },
  {
    id: "booking",
    name: "Automated Bookings",
    inputLabel: "Client Requesting a Consultation",
    inputSample: "Client fills a quick form to schedule a call or request a quote",
    coreProcess: "Automatic Scheduling & Intake",
    guardrails: "Collects key details upfront",
    outputSummary: "Meeting Booked on Your Calendar",
    destinations: ["Calendar Invitation", "Confirmation Email", "Client Contact Details"],
  },
];

export function SystemVisual() {
  const [activeWorkflow, setActiveWorkflow] = useState<string>("lead");

  const current =
    WORKFLOW_MODES.find((m) => m.id === activeWorkflow) || WORKFLOW_MODES[0];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-surface-1/90 p-5 sm:p-6 shadow-xl backdrop-blur-sm">
      {/* Visual Header & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            How It Works
          </span>
          <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded border border-white/5 bg-white/[0.02]">
            Interactive Demo
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

      {/* Connected Flow: 3 Simple Stages */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stage 1: Visitor Arrival */}
        <div className="rounded-xl border border-white/10 bg-surface-2/70 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                01 / Step One
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
            <span>Fast, Mobile-Friendly Website</span>
          </div>
        </div>

        {/* Stage 2: Smart Feature / Assistant */}
        <div className="rounded-xl border border-blue-500/30 bg-surface-2/90 p-4 flex flex-col justify-between relative shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-blue-400 uppercase font-medium">
                02 / Smart Feature
              </span>
              <MessageSquare className="w-4 h-4 text-blue-400" />
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
                <Smartphone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Works on phones and computers</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Active &amp; Ready 24/7</span>
          </div>
        </div>

        {/* Stage 3: Direct Result */}
        <div className="rounded-xl border border-white/10 bg-surface-2/70 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-500 uppercase">
                03 / Result
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
            <span>More Customers &amp; Less Busywork</span>
          </div>
        </div>
      </div>

      {/* Baseline Practical Note */}
      <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span>Every feature is tailored to what your business actually needs.</span>
        </span>
        <span className="font-mono text-slate-500">Fast • Modern • Easy to Use</span>
      </div>
    </div>
  );
}
