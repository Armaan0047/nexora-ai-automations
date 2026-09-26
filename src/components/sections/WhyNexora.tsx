import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_NEXORA_PRINCIPLES } from "@/data/whyNexoraData";
import { Check, ShieldCheck } from "lucide-react";

export function WhyNexora() {
  return (
    <section id="why-nexora" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="WHY WORK WITH US"
          title="Why businesses choose Nexora for their websites &amp; digital solutions."
          description="We reject generic cookie-cutter templates, sluggish page builders, and rigid packages. We engineer clean, modern websites and practical digital tools designed around your real business goals."
          className="mb-16"
        />

        {/* 6 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_NEXORA_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">0{idx + 1} // STANDARD</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px]">
                    Included
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                  {principle.pillar}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {principle.headline}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {principle.elaboration}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8 flex items-start gap-2.5 text-xs text-slate-200">
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
