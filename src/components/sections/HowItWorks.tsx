import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

const STAGES = [
  {
    stage: "01",
    title: "Understand the business",
    description:
      "We clarify your commercial goals, target audience, competitive advantages, and the exact services you want highlighted.",
    outcome: "Clear project scope",
  },
  {
    stage: "02",
    title: "Shape the experience",
    description:
      "We design the page structure, write clear copy hierarchies, and review working wireframes with you.",
    outcome: "Approved page structure",
  },
  {
    stage: "03",
    title: "Build and integrate",
    description:
      "Clean development, mobile responsiveness testing, and connecting your inquiry pipelines or FAQ assistant.",
    outcome: "Working website & integrations",
  },
  {
    stage: "04",
    title: "Launch and support",
    description:
      "Domain DNS setup, deployment on global infrastructure, search indexing, and complete project handover.",
    outcome: "Launch, handover & support",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="PROCESS"
          title="Four concise stages from brief to live."
          description="A direct, transparent sequence so you always know what is being built, when it will be ready, and what comes next."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STAGES.map((step) => (
            <div
              key={step.stage}
              className="p-5 sm:p-6 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-xl font-bold text-[#C9784A] block">
                  {step.stage}
                </span>

                <h3 className="font-serif text-lg text-[#F2EEE6] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A7A096] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2A2722] flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA58A] shrink-0" />
                <span className="text-[#F2EEE6] font-medium">{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
