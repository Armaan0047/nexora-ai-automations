import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Business Websites",
    what: "A custom-built website structured around your exact services, credentials, and customer journey.",
    who: "Service businesses, consultants, and companies that need a credible, modern web presence.",
    outcome: "Visitors immediately understand what you do, trust your expertise, and reach out with confidence.",
    included: [
      "Custom layout built around your service offerings",
      "Prominent contact and inquiry triggers",
      "Optimised for fast mobile loading",
      "100% code and asset ownership",
    ],
  },
  {
    num: "02",
    title: "Landing Pages & Redesigns",
    what: "A focused, conversion-first page or a thorough modernization of an aging website.",
    who: "Businesses launching a new offer, running campaigns, or losing inquiries on an outdated site.",
    outcome: "Replaces clutter with a clear message and direct call-to-action that turns traffic into conversations.",
    included: [
      "Single-goal page hierarchy and clear messaging",
      "Visual modernization without losing existing search equity",
      "Comprehensive mobile performance audit",
      "Streamlined inquiry capture",
    ],
  },
  {
    num: "03",
    title: "AI Chat & FAQ Systems",
    what: "An on-site assistant trained specifically on your business information, services, and pricing policies.",
    who: "Businesses that answer the same questions repeatedly or miss inquiries outside working hours.",
    outcome: "Prospective clients get accurate, immediate answers 24/7 without demanding your manual time.",
    included: [
      "Trained strictly on your verified docs and pricing rules",
      "Pre-qualifies inquiries before scheduling calls",
      "Captures visitor contact details automatically",
      "Clean handoff to your team for custom requests",
    ],
  },
  {
    num: "04",
    title: "WhatsApp & Lead Automation",
    what: "Direct routing and instant notifications connecting website traffic to the apps your team uses.",
    who: "Busy founders, contractors, and local businesses that need to reply to qualified leads quickly.",
    outcome: "Shortens response times, captures full project context, and prevents inquiries from going cold.",
    included: [
      "One-tap WhatsApp triggers with pre-filled service context",
      "Real-time lead notifications directly to phone or email",
      "Structured intake questions to filter casual browsers",
      "Automated confirmations sent to prospective clients",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="SERVICES"
          title="Practical digital capabilities for real businesses."
          description="Four focused offerings designed to make your business easier to trust, easier to contact, and simpler to run."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="p-6 sm:p-7 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between hover:border-[#4A453D] transition-colors space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#2A2722]">
                  <span className="text-xs font-mono text-[#C9784A] font-semibold">
                    {service.num}
                  </span>
                  <span className="text-[11px] font-mono text-[#A7A096]">Core Offering</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#F2EEE6] tracking-tight">
                  {service.title}
                </h3>

                {/* What it is */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7A096] block">
                    What it is
                  </span>
                  <p className="text-xs sm:text-sm text-[#F2EEE6] leading-relaxed">
                    {service.what}
                  </p>
                </div>

                {/* Who it is for & Practical Outcome */}
                <div className="p-3 rounded bg-[#11100E] border border-[#2A2722] space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#C9784A] uppercase block mb-0.5">
                      Who it is for:
                    </span>
                    <p className="text-[#A7A096]">{service.who}</p>
                  </div>
                  <div className="pt-1.5 border-t border-[#2A2722]">
                    <span className="text-[10px] font-mono text-[#8FA58A] uppercase block mb-0.5">
                      Practical outcome:
                    </span>
                    <p className="text-[#F2EEE6] font-medium">{service.outcome}</p>
                  </div>
                </div>

                {/* Smaller What is included list */}
                <div className="pt-1 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7A096] block">
                    What is included:
                  </span>
                  <ul className="space-y-1 text-xs">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#A7A096]">
                        <Check className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2722] flex items-center justify-between">
                <span className="text-xs text-[#A7A096]">Scoped to your business</span>
                <a
                  href="#contact"
                  className="text-xs font-medium text-[#C9784A] hover:text-[#E09A68] flex items-center gap-1.5 transition-colors"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
