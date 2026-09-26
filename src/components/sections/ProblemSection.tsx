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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="COMMON BOTTLENECKS"
          title="The website and inquiry problems we solve for you."
          description="Most businesses lose interested clients not because their service is deficient, but because their website looks dated, doesn't load on phones, or makes contacting them frustrating."
          className="mb-16"
        />

        {/* Split Editorial Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Friction Selector List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/8 border-y border-white/10">
            {PROBLEM_FRICTIONS.map((item, idx) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left py-4 px-3 transition-all duration-150 flex items-start gap-4 group cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.06] text-white pl-4 border-l-2 border-blue-500 rounded-r-xl"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="text-xs font-mono text-slate-500 pt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4
                      className={`text-base font-semibold transition-colors ${
                        isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {item.problemTitle}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500 mt-0.5 block">
                      Click to explore solution
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Comparative Deep Dive */}
          <div className="lg:col-span-7 rounded-2xl border border-white/12 bg-[#0C0F17] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Problem Analysis */}
              <div className="pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Pain Point</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeProblem.problemTitle}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeProblem.symptom}
                </p>
                <div className="mt-4 p-3.5 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] text-xs text-amber-200 leading-relaxed font-sans">
                  <span className="font-bold uppercase font-mono mr-1">Business Impact:</span>
                  {activeProblem.businessCost}
                </div>
              </div>

              {/* Nexora Resolution */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>How Nexora Fixes This</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {activeProblem.nexoraSolution}
                </p>
                <div className="mt-4 p-3.5 rounded-xl border border-blue-500/25 bg-blue-500/[0.06] text-xs text-blue-200 leading-relaxed font-sans">
                  <span className="font-bold uppercase font-mono mr-1">The Outcome:</span>
                  {activeProblem.solutionOutcome}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Category: {activeProblem.id}</span>
              <a
                href="#consultation"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>Fix this for your business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
