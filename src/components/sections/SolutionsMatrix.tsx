import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COMBINED_SOLUTIONS } from "@/data/combinedSolutionsData";
import { ArrowRight, Bot, Globe, Plus, Sparkles } from "lucide-react";

export function SolutionsMatrix() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-surface-1/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="UNIFIED ENGAGEMENT"
          title="Combining websites and intelligent agents into a cohesive system."
          description="Nexora is industry-agnostic. We blend our core disciplines—modern web interfaces and autonomous AI agents—into a unified growth engine configured around your operational workflow."
          className="mb-16"
        />

        {/* Combined Industry Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMBINED_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-surface-1 p-6 sm:p-8 flex flex-col justify-between transition-colors hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {item.industryProfile}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded border border-white/10">
                    Combined Engine
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {item.scenarioDescription}
                </p>

                {/* Integration equation */}
                <div className="mt-6 space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-surface-2/60">
                    <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-blue-400 uppercase block font-medium">
                        Website Layer:
                      </span>
                      <span className="text-xs text-slate-300 leading-relaxed block mt-0.5">
                        {item.websiteComponent}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-slate-600">
                    <Plus className="w-4 h-4" />
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-surface-2/60">
                    <Bot className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-blue-400 uppercase block font-medium">
                        Agent Layer:
                      </span>
                      <span className="text-xs text-slate-300 leading-relaxed block mt-0.5">
                        {item.agentComponent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unified Outcome */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase text-emerald-400 block font-semibold mb-1">
                  Unified Operational Leverage:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.unifiedOutcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Combination Prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have an operational workflow not listed here?{" "}
            <a
              href="#consultation"
              className="text-white hover:text-blue-400 font-medium underline underline-offset-4 inline-flex items-center gap-1 ml-1"
            >
              <span>Scope a bespoke system with our engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
