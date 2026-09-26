import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "No agency bloat",
    summary: "Work directly with the person building your site.",
    detail:
      "Traditional agencies bill for account managers, project coordinators, and overhead. At Nexora, you communicate directly with the engineer shaping your digital presence.",
    takeaway: "Direct answers, faster revisions, zero communication lag.",
  },
  {
    num: "02",
    title: "Built for speed and SEO",
    summary: "Clean Next.js code instead of sluggish builders.",
    detail:
      "We do not use bloated themes or drag-and-drop page builders that drag down your mobile load speed. Every line of code is optimized for instant response and search indexing.",
    takeaway: "Sub-second mobile loads that keep prospective buyers on page.",
  },
  {
    num: "03",
    title: "Practical AI, not gimmicks",
    summary: "Only tools that actually save time and capture leads.",
    detail:
      "We avoid sci-fi buzzwords and speculative AI toys. We build on-site assistants that answer real client questions, qualify prospects, and reduce repetitive customer calls.",
    takeaway: "Real operational savings and 24/7 client response.",
  },
  {
    num: "04",
    title: "Requirement-based pricing",
    summary: "Honest scopes tailored to your budget.",
    detail:
      "We do not force you into inflated 'agency packages' with features you never asked for. Your business requirements define the quotation, starting from accessible tiers.",
    takeaway: "Clear cost transparency with no surprise retainers.",
  },
  {
    num: "05",
    title: "Clear timelines",
    summary: "Agreed launch dates with regular milestone updates.",
    detail:
      "Digital projects should not drag on for months. We set strict delivery schedules (typically 1–3 weeks) and keep you informed at every milestone along the way.",
    takeaway: "Reliable scheduling so you can plan marketing confidently.",
  },
  {
    num: "06",
    title: "Post-launch care",
    summary: "We do not disappear after the final invoice.",
    detail:
      "Launching the website is just the beginning. We provide a thorough walkthrough, domain handover, and post-launch verification to ensure everything runs smoothly.",
    takeaway: "Ongoing peace of mind and responsive technical assistance.",
  },
];

export function WhyNexora() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="WHY NEXORA"
          title="Direct and honest studio principles."
          description="How working with a boutique digital studio gives your business a faster, sharper, and more personal result."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between hover:border-[#4A453D] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#2A2722]">
                  <span className="text-xs font-mono text-[#C9784A] font-semibold">
                    {item.num} // PRINCIPLE
                  </span>
                  <span className="text-[10px] font-mono text-[#8FA58A] bg-[#8FA58A]/10 px-2 py-0.5 rounded border border-[#8FA58A]/20">
                    Standard
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-[#F2EEE6] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-[#C9784A]">
                  {item.summary}
                </p>

                <p className="text-xs text-[#A7A096] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2A2722] flex items-start gap-2 text-xs text-[#F2EEE6]">
                <Check className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                <span>{item.takeaway}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
