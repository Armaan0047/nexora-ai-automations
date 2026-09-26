import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, Clock, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Business Websites",
    headline: "Fast, custom websites engineered for your exact business model.",
    description:
      "Handcrafted digital foundations built to establish immediate credibility, explain your services clearly, and convert visitors into paying clients.",
    deliverables: [
      "Custom layout built around your specific service offerings",
      "Sub-second loading speeds on mobile data networks",
      "Comprehensive on-page SEO & local schema markup",
      "100% clean code ownership with zero recurring theme fees",
    ],
    timeline: "Typically 2–3 weeks",
  },
  {
    num: "02",
    title: "Landing Pages & Redesigns",
    headline: "High-conversion pages that revitalize your digital presence.",
    description:
      "Whether launching a dedicated campaign or overhauling an outdated, slow website, we build focused pages that maximize response rates.",
    deliverables: [
      "Conversion-focused copy hierarchy and prominent contact triggers",
      "Visual modernization without sacrificing existing search equity",
      "Full mobile performance audit and asset optimization",
      "Clean replacement for bloated WordPress/builder templates",
    ],
    timeline: "Typically 1–2 weeks",
  },
  {
    num: "03",
    title: "AI Chat & FAQ Systems",
    headline: "On-site assistants trained on your business data to answer questions 24/7.",
    description:
      "Practical assistants that know your pricing tiers, service areas, and availability—answering repetitive customer questions without human intervention.",
    deliverables: [
      "Trained strictly on your verified documents and price sheets",
      "Automatic qualification of prospective leads before booking",
      "Seamless capture of visitor name, phone, and inquiry details",
      "Instant notification to your team when human escalation is needed",
    ],
    timeline: "Typically 3–5 days",
  },
  {
    num: "04",
    title: "WhatsApp & Lead Automation",
    headline: "Direct-to-chat routing and instant notifications so no inquiry slips away.",
    description:
      "Bridge the gap between a website visitor and an actual conversation. We connect your digital traffic directly to the apps your team actually uses.",
    deliverables: [
      "One-tap WhatsApp routing with pre-filled service inquiry notes",
      "Real-time lead delivery to Telegram, email, or your team CRM",
      "Custom intake qualification forms reducing spam inquiries",
      "Instant automated confirmations sent to prospective clients",
    ],
    timeline: "Typically 2–4 days",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="SERVICES"
          title="Practical digital capabilities for real businesses."
          description="We focus on four core offerings designed to make your business easier to trust, easier to contact, and simpler to run."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="p-6 sm:p-8 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between hover:border-[#4A453D] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                  <span className="text-xs font-mono text-[#C9784A] font-semibold">
                    {service.num} // SERVICE
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A7A096]">
                    <Clock className="w-3 h-3 text-[#C9784A]" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F2EEE6] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#C9784A]">
                    {service.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#A7A096] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7A096] block">
                    Scope inclusions:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#F2EEE6]">
                        <Check className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A2722] flex items-center justify-between">
                <span className="text-xs text-[#A7A096]">Requirement-based custom quotation</span>
                <a
                  href="#contact"
                  className="text-xs font-medium text-[#F2EEE6] hover:text-[#C9784A] flex items-center gap-1 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C9784A]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
