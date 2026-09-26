import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck } from "lucide-react";

const OPTIMISATION_OUTCOMES = [
  {
    title: "Clearer service communication",
    desc: "Visitors immediately understand what you do, who you serve, and why you are the credible choice—within seconds of landing.",
  },
  {
    title: "Easier customer contact",
    desc: "Remove friction between interest and action with prominent WhatsApp triggers, direct contact forms, or calendar links.",
  },
  {
    title: "Fewer repetitive questions",
    desc: "Your site answers common inquiries regarding pricing tiers, service geography, and prerequisites before anyone calls.",
  },
  {
    title: "More qualified inquiries",
    desc: "Pre-intake questions filter out casual browsers, ensuring your team only spends time on viable, budget-aligned projects.",
  },
  {
    title: "Less manual follow-up",
    desc: "Inquiries route directly to your phone or team channel with full context so nothing gets lost during busy hours.",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B] bg-[#161512]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="BUSINESS OUTCOMES"
          title="What we actually optimise for."
          description="We focus on tangible commercial outcomes that make running your business easier and more profitable."
          className="mb-10 sm:mb-12"
        />

        {/* 5 Optimisation Pillars + Studio Principle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPTIMISATION_OUTCOMES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-2"
            >
              <h3 className="font-serif text-lg text-[#F2EEE6] tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#A7A096] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Studio Principle Box */}
          <div className="p-5 sm:p-6 rounded-lg bg-[#24221E] border border-[#4A453D] flex flex-col justify-between md:col-span-2 lg:col-span-1 space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8FA58A]" />
                <span className="text-xs font-mono text-[#F2EEE6] font-semibold">
                  Studio Principle
                </span>
              </div>
              <h3 className="font-serif text-lg text-[#F2EEE6] tracking-tight">
                Craftsmanship &amp; direct relationships
              </h3>
              <p className="mt-1 text-xs text-[#A7A096] leading-relaxed">
                We intentionally limit our project capacity so each build receives deliberate thought, personal engineering, and responsive support.
              </p>
            </div>
            <div className="pt-2 border-t border-[#35312B] text-[11px] font-mono text-[#8FA58A]">
              Personal attention on every engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
