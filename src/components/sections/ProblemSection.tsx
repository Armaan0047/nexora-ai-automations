"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROBLEM_FRICTIONS } from "@/data/problemData";
import { AlertCircle, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export function ProblemSection() {
  const [selectedId, setSelectedId] = useState<string>(PROBLEM_FRICTIONS[0].id);

  const activeProblem =
    PROBLEM_FRICTIONS.find((p) => p.id === selectedId) || PROBLEM_FRICTIONS[0];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-surface-1/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OPERATIONAL REALITY"
          title="The hidden friction of static web presence & manual workflows."
          description="Most growing companies don't have a traffic problem; they have an operational bottleneck. Static websites treat high-intent visitors like passive readers, while internal teams drown in repetitive triage."
          className="mb-16"
        />

        {/* Split Editorial Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Friction Selector List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {PROBLEM_FRICTIONS.map((item, idx) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left py-4 px-2 transition-all flex items-start gap-4 group cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.04] text-white pl-4 border-l-2 border-blue-500"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="text-xs font-mono text-slate-500 pt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4
                      className={`text-base font-medium transition-colors ${
                        isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {item.problemTitle}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 mt-1 block">
                      Click to inspect diagnostic
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Comparative Deep Dive */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-surface-1 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Problem Analysis */}
              <div className="pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Legacy Bottleneck</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {activeProblem.problemTitle}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeProblem.symptom}
                </p>
                <div className="mt-4 p-3 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] text-xs text-amber-200/90 leading-relaxed font-sans">
                  <span className="font-semibold uppercase font-mono mr-1">Business Cost:</span>
                  {activeProblem.businessCost}
                </div>
              </div>

              {/* Nexora Resolution */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Nexora Architectural Resolution</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeProblem.nexoraSolution}
                </p>
                <div className="mt-4 p-3 rounded-lg border border-blue-500/20 bg-blue-500/[0.04] text-xs text-blue-200/90 leading-relaxed font-sans">
                  <span className="font-semibold uppercase font-mono mr-1">Outcome:</span>
                  {activeProblem.solutionOutcome}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
              <span>Diagnostic Ref: {activeProblem.id}</span>
              <a
                href="#consultation"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
              >
                <span>Resolve in your business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
