import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export function WhyNexora() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="WHY NEXORA"
          title="Direct and honest studio principles."
          description="How working with a boutique digital studio gives your business a faster, sharper, and more personal result."
          className="mb-10 sm:mb-12"
        />

        {/* Varied Editorial Composition: Asymmetric Layout instead of 6 identical cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Pillar 1: Direct Communication (Col 7) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C9784A] uppercase tracking-wider block font-semibold">
                Principle 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EEE6] tracking-tight">
                Direct communication
              </h3>
              <p className="text-sm text-[#A7A096] leading-relaxed max-w-lg">
                Traditional agencies bill for account managers, layers of coordinators, and mark-ups. At Nexora, you communicate directly with the person building your website. Revisions are faster, decisions are clearer, and nothing gets lost in translation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2A2722] text-xs font-mono text-[#8FA58A]">
              Direct builder access • Fast feedback loops
            </div>
          </div>

          {/* Featured Pillar 2: Built Around the Business (Col 5) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-lg bg-[#161512] border border-[#35312B] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#C9784A] uppercase tracking-wider block font-semibold">
                Principle 02
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F2EEE6] tracking-tight">
                Built around your business
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A096] leading-relaxed">
                We do not paste your logo onto a generic template. We design the page structure, copy hierarchy, and customer contact triggers specifically around how your buyers evaluate and buy.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2A2722] text-xs font-mono text-[#A7A096]">
              Targeted customer journey
            </div>
          </div>

          {/* Row 2: 4 Secondary Principles in Refined 4-Col Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Practical automation */}
            <div className="p-5 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#C9784A]">03 // UTILITY</span>
                <h4 className="font-serif text-lg text-[#F2EEE6]">Practical automation</h4>
                <p className="text-xs text-[#A7A096] leading-relaxed">
                  We avoid speculative buzzwords. We build assistants and triggers that answer real questions, route inquiries, and reduce repetitive admin tasks.
                </p>
              </div>
            </div>

            {/* Clear requirement-based pricing */}
            <div className="p-5 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#C9784A]">04 // TRANSPARENCY</span>
                <h4 className="font-serif text-lg text-[#F2EEE6]">Requirement-based pricing</h4>
                <p className="text-xs text-[#A7A096] leading-relaxed">
                  We do not force you into inflated tiers with features you never requested. Your scope defines the estimate, with clear upfront deliverables.
                </p>
              </div>
            </div>

            {/* Full ownership */}
            <div className="p-5 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#C9784A]">05 // ASSET RIGHTS</span>
                <h4 className="font-serif text-lg text-[#F2EEE6]">Full ownership</h4>
                <p className="text-xs text-[#A7A096] leading-relaxed">
                  You own 100% of your codebase, domain, assets, and data upon handover. No proprietary builder lock-in or recurring studio licensing fees.
                </p>
              </div>
            </div>

            {/* Support after launch */}
            <div className="p-5 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#C9784A]">06 // RELIABILITY</span>
                <h4 className="font-serif text-lg text-[#F2EEE6]">Support after launch</h4>
                <p className="text-xs text-[#A7A096] leading-relaxed">
                  We do not vanish after the final invoice. We provide a thorough walkthrough, domain configuration, and responsive post-launch assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
