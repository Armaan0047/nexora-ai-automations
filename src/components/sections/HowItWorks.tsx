import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, Clock } from "lucide-react";

const STAGES = [
  {
    stage: "01",
    title: "Understand the business",
    timeline: "Days 1–3",
    description:
      "We clarify your core commercial goals, target audience, competitive advantages, and the exact services you want highlighted.",
    focus: [
      "Target customer & buyer intent profiling",
      "Current bottlenecks & website audit",
      "Definition of key conversion actions",
    ],
  },
  {
    stage: "02",
    title: "Shape the experience",
    timeline: "Days 4–7",
    description:
      "We design the page structure, write high-clarity copy hierarchies, and review working interface wireframes with you.",
    focus: [
      "Information architecture & content structure",
      "High-contrast editorial typography & layouts",
      "Clear call-to-action & WhatsApp triggers",
    ],
  },
  {
    stage: "03",
    title: "Build and integrate",
    timeline: "Weeks 2–3",
    description:
      "Handcrafted Next.js frontend engineering, responsive mobile testing, and connecting your lead pipeline or AI assistant.",
    focus: [
      "Clean, modern TypeScript & Tailwind codebase",
      "WhatsApp, email, or CRM automated routing",
      "On-site AI assistant training on your docs",
    ],
  },
  {
    stage: "04",
    title: "Launch and support",
    timeline: "Final Sprint",
    description:
      "Domain DNS configuration, production deployment on global CDN, speed verification, and full client walkthrough.",
    focus: [
      "Custom domain & SSL certificate setup",
      "Search console indexing & schema verification",
      "100% asset and code handover to your team",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="PROCESS"
          title="Four concise stages from brief to live."
          description="We run an orderly, direct process. You always know what is being built, when it will be ready, and what comes next."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((step) => (
            <div
              key={step.stage}
              className="p-6 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                  <span className="font-mono text-2xl font-bold text-[#C9784A]">
                    {step.stage}
                  </span>
                  <span className="text-[10px] font-mono text-[#A7A096] px-2 py-0.5 rounded bg-[#11100E] border border-[#2A2722]">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-[#F2EEE6] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A7A096] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7A096] block">
                    Key Outcomes:
                  </span>
                  {step.focus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F2EEE6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
