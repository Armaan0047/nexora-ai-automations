import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Bot, Globe, MessageCircle, Wrench } from "lucide-react";

export function CapabilitiesOverview() {
  const pillars = [
    {
      id: "business-websites",
      number: "01",
      icon: Globe,
      title: "Business Website Development",
      scope: "New Websites • Landing Pages • Redesigns • Portfolios",
      narrative:
        "We build clean, fast, and mobile-friendly websites that showcase your business with credibility. Whether you need a brand-new website or a high-converting landing page, we tailor it to your exact needs.",
      actionLink: "#websites",
      actionText: "Explore Website Services",
    },
    {
      id: "ai-chatbots",
      number: "02",
      icon: Bot,
      title: "AI Chatbots & 24/7 Support",
      scope: "Website Chatbots • FAQ Answers • Customer Assistance",
      narrative:
        "Add a helpful AI assistant directly to your website. It greets visitors, answers common questions about your services or pricing instantly, and collects customer contact details around the clock.",
      actionLink: "#agents",
      actionText: "Explore AI Features",
    },
    {
      id: "whatsapp-integration",
      number: "03",
      icon: MessageCircle,
      title: "WhatsApp & Direct Contact",
      scope: "WhatsApp Buttons • Direct Chat • Click-to-Call",
      narrative:
        "Make it effortless for potential customers to reach you. We add direct WhatsApp buttons and quick contact options so visitors can start a conversation with your business in one tap.",
      actionLink: "#consultation",
      actionText: "Ask About Integrations",
    },
    {
      id: "website-improvements",
      number: "04",
      icon: Wrench,
      title: "Website Improvements & Automation",
      scope: "UI/UX Redesign • Speed Boost • Automated Lead Routing",
      narrative:
        "Already have a website? We can refresh its look, improve mobile responsiveness, add support/FAQ pages, and automate inquiry notifications so you never miss a prospective client.",
      actionLink: "#how-it-works",
      actionText: "See Our Simple Process",
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="Everything you need to grow your business online."
          description="We build your website, upgrade existing pages, add helpful AI features, connect WhatsApp, and automate repetitive tasks—practical solutions that bring in more customers."
          className="mb-16"
        />

        {/* Editorial 2-Column Grid */}
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
                      {pillar.number} // SERVICE
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
