import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_NEXORA_PRINCIPLES } from "@/data/whyNexoraData";
import { Check, Shield } from "lucide-react";

export function WhyNexora() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-surface-1/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="TECHNICAL & COMMERCIAL RIGOR"
          title="Why companies build custom systems with Nexora."
          description="We reject generic templates, off-the-shelf wrappers, and forced service tiers. Our practice is built around six engineering commitments designed to protect your brand and maximize operational leverage."
          className="mb-16"
        />

        {/* 6 Engineering Principles Grid (Clean 3-column editorial format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_NEXORA_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.id}
              className="p-6 rounded-xl border border-white/10 bg-surface-1 flex flex-col justify-between transition-colors hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
                  <span>0{idx + 1} // STANDARD</span>
                  <span className="text-blue-400 font-medium">Verified</span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                  {principle.pillar}
                </span>

                <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                  {principle.headline}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                  {principle.elaboration}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{principle.practicalApplication}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
