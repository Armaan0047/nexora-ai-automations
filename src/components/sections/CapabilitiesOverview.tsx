import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Bot, Cpu, Gauge, Globe } from "lucide-react";

export function CapabilitiesOverview() {
  const pillars = [
    {
      id: "ai-websites",
      number: "01",
      icon: Globe,
      title: "AI Websites",
      scope: "Modern Flagships • Landing Pages • Redesigns • Lead Capture",
      narrative:
        "High-performance digital surfaces built with modern Next.js architectures. Engineered for instant page loading, crisp typography, and intentional user flows that transform passive page visitors into engaged commercial opportunities.",
      actionLink: "#websites",
      actionText: "Explore AI Websites",
    },
    {
      id: "ai-agents",
      number: "02",
      icon: Bot,
      title: "AI Agents",
      scope: "24/7 Chatbots • FAQ Support • Lead Qualification • Internal Assistants",
      narrative:
        "Autonomous conversational agents embedded directly into your digital channels and operations. Operating on grounded knowledge bases with strict deterministic guardrails to answer questions, qualify prospects, and route workflows without hallucination.",
      actionLink: "#agents",
      actionText: "Explore AI Agents",
    },
    {
      id: "custom-solutions",
      number: "03",
      icon: Cpu,
      title: "Custom Solutions",
      scope: "Requirement-Based • Bespoke Logic • Zero Rigid Packages",
      narrative:
        "We do not force clients into pre-packaged tiers or generic CMS themes. Every system is architected around your specific business logic, data schemas, API integrations, and team operational workflows.",
      actionLink: "#consultation",
      actionText: "Scope Custom Project",
    },
    {
      id: "automated-growth",
      number: "04",
      icon: Gauge,
      title: "Automated Growth",
      scope: "Continuous Capture • Instant Triage • Operational Leverage",
      narrative:
        "By integrating high-converting web interfaces with 24/7 intelligent agent response, your business captures demand continuously—expanding capacity and revenue velocity without a linear increase in manual overhead.",
      actionLink: "#architecture",
      actionText: "View System Architecture",
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="CORE DISCIPLINES"
          title="Engineered for business leverage, not visual gimmickry."
          description="Nexora combines modern web engineering with intelligent conversational agents to build unified digital engines tailored to your exact operational requirements."
          className="mb-16"
        />

        {/* Editorial 2-Column Grid with Deep Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between pt-6 border-t border-white/15 transition-colors hover:border-blue-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500">
                      {pillar.number} // ARCHITECTURE
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-2 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-slate-100">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs font-mono text-blue-400">
                    {pillar.scope}
                  </p>

                  <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
                    {pillar.narrative}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href={pillar.actionLink}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors group-hover:text-blue-400"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
