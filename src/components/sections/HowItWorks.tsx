import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { METHODOLOGY_STEPS } from "@/data/methodologyData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="ENGINEERING PROTOCOL"
          title="A transparent, requirement-driven engagement model."
          description="We guide your project through a structured 4-phase delivery protocol. You maintain direct visibility into architecture decisions, codebase milestones, and testing environments from kickoff to deployment."
          className="mb-16"
        />

        {/* 4-Stage Editorial Sequence Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.phaseNumber}
              className="flex flex-col justify-between pt-6 border-t border-white/15 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-mono font-semibold text-blue-500">
                    {step.phaseNumber}
                  </span>
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    {step.durationGuideline}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {step.name}
                </h3>

                <p className="mt-1 text-xs font-mono text-blue-400">
                  {step.tagline}
                </p>

                <p className="mt-4 text-sm text-slate-400 leading-relaxed font-normal">
                  {step.whatHappens}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block font-medium">
                    Verified Outcomes:
                  </span>
                  {step.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-slate-400">
                <span className="font-mono text-slate-300 block font-semibold mb-0.5">
                  Client Collaboration:
                </span>
                {step.clientCommitment}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 rounded-xl border border-white/10 bg-surface-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">
              Direct Technical Collaboration
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              You communicate directly with the engineers architecting your system, avoiding agency account management telephone games.
            </span>
          </div>
          <a
            href="#consultation"
            className="text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Review consultation scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
