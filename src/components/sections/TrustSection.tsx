import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const OPTIMISATION_OUTCOMES = [
  {
    pillar: "Clarity",
    title: "Clearer service communication",
    desc: "Visitors immediately understand what you do, who you serve, and why you are the credible choice—within seconds of landing.",
  },
  {
    pillar: "Frictionless",
    title: "Easier customer contact",
    desc: "Remove friction between interest and action with prominent WhatsApp triggers, quick quote forms, or instant calendar links.",
  },
  {
    pillar: "Efficiency",
    title: "Fewer repetitive questions",
    desc: "Your site answers standard inquiries regarding pricing tiers, service geography, and prerequisites before anyone calls.",
  },
  {
    pillar: "Quality",
    title: "More qualified inquiries",
    desc: "Pre-intake questions filter out casual browsers, ensuring your team only spends time on viable, budget-aligned projects.",
  },
  {
    pillar: "Automation",
    title: "Less manual follow-up",
    desc: "Leads route directly to your phone or team channel with full context so nothing falls through the cracks during busy hours.",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B] bg-[#161512]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="ABOUT &amp; OPTIMISATION"
          title="What we actually optimise for."
          description="We do not publish fabricated 5-star badges or make up vanity numbers. Here are the five concrete commercial outcomes we engineer into every project."
          className="mb-14 sm:mb-16"
        />

        {/* 5 Optimisation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPTIMISATION_OUTCOMES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#C9784A] uppercase tracking-wider block mb-2 font-semibold">
                  0{idx + 1} // {item.pillar}
                </span>
                <h3 className="font-serif text-lg text-[#F2EEE6] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#A7A096] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Studio Credo Box */}
          <div className="p-6 rounded-lg bg-[#24221E] border border-[#4A453D] flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#8FA58A]" />
                <span className="text-xs font-mono text-[#F2EEE6] font-semibold">
                  Studio Principle
                </span>
              </div>
              <h3 className="font-serif text-lg text-[#F2EEE6] tracking-tight">
                Craftsmanship &amp; direct relationships
              </h3>
              <p className="mt-2 text-xs text-[#A7A096] leading-relaxed">
                We intentionally limit our project capacity so each build gets personal engineering focus, thoughtful copy hierarchy, and dedicated post-launch support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#35312B] text-[11px] font-mono text-[#8FA58A]">
              100% focused client engagements
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
