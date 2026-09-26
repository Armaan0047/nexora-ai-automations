import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { METHODOLOGY_STEPS } from "@/data/methodologyData";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="A simple, straightforward way to get your website live."
          description="We keep the process transparent, fast, and structured from day one. You always know what is being built, when it will be ready, and what comes next."
          className="mb-16"
        />

        {/* 4-Stage Progressive Sequence Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.phaseNumber}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-white/20 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/8">
                  <span className="text-3xl font-mono font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {step.phaseNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase bg-white/[0.04] border border-white/8 px-2 py-0.5 rounded-full">
                    {step.durationGuideline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {step.name}
                </h3>

                <p className="mt-1 text-xs font-mono text-blue-400 font-medium">
                  {step.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {step.whatHappens}
                </p>

                <div className="mt-5 pt-4 border-t border-white/8 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block font-semibold">
                    Key Deliverables:
                  </span>
                  {step.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8 text-xs text-slate-400">
                <span className="font-mono text-slate-200 block font-semibold mb-0.5">
                  Your Input:
                </span>
                <span className="text-slate-300">{step.clientCommitment}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Action Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/12 bg-gradient-to-r from-[#0C0F17] via-[#121622] to-[#0C0F17] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Builder Access</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              No account managers or bureaucratic delays.
            </span>
            <span className="text-sm text-slate-300 mt-1 max-w-2xl">
              You work directly with the developers and designers building your website, ensuring your feedback is implemented quickly and accurately.
            </span>
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#07090E] font-semibold text-sm hover:bg-slate-100 transition-colors shadow-md shrink-0"
          >
            <span>Start Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
