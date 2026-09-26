import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Globe,
  Layers,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";

export function CapabilitiesOverview() {
  const secondaryServices = [
    {
      id: "landing-pages",
      icon: Layers,
      title: "Landing Pages & Portfolios",
      tagline: "Built to Convert Visitors Into Paying Clients",
      description:
        "High-velocity single-page websites engineered for marketing campaigns, product launches, or showcasing your agency and portfolio with maximum visual impact.",
      bullets: ["Lead capture focused", "Clear call-to-actions", "Fast page speeds"],
      link: "#websites",
    },
    {
      id: "website-redesigns",
      icon: RefreshCw,
      title: "Website Redesigns & Upgrades",
      tagline: "Turn Outdated Sites Into Modern Powerhouses",
      description:
        "We rebuild slow, outdated, and uninspiring websites from scratch. Get a clean, modern aesthetic that looks exceptional on phones and rebuilds credibility.",
      bullets: ["Mobile-first layout", "Zero-downtime transition", "Modern visual identity"],
      link: "#websites",
    },
    {
      id: "ai-chatbots",
      icon: Bot,
      title: "Website AI Chatbots",
      tagline: "24/7 Customer Engagement & Support",
      description:
        "Custom AI assistants embedded directly into your website. They answer visitor questions about pricing, hours, and services using your verified business info.",
      bullets: ["Answers repetitive FAQs", "Captures lead contact info", "Works 24/7 automatically"],
      link: "#agents",
    },
    {
      id: "whatsapp-integration",
      icon: MessageCircle,
      title: "Direct WhatsApp Redirection",
      tagline: "Instant One-Tap Customer Connection",
      description:
        "Connect visitors directly to your WhatsApp with pre-filled inquiries. Eliminate long forms and let interested buyers message you instantly on mobile.",
      bullets: ["One-tap chat buttons", "Pre-filled project inquiries", "Zero missed customers"],
      link: "#consultation",
    },
    {
      id: "faq-automation",
      icon: Zap,
      title: "Support Pages & Business Automation",
      tagline: "Cut Repetitive Busywork & Route Inquiries",
      description:
        "Dedicated FAQ hubs and structured customer support pages, paired with automated email alerts so inquiries land directly in your inbox or team chat.",
      bullets: ["Dedicated help & FAQ hubs", "Automated email alerts", "Calendar appointment links"],
      link: "#consultation",
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="Modern websites and digital solutions built for your business."
          description="Nexora builds custom business websites, landing pages, and redesigns as our primary discipline—accompanied by AI chatbots, WhatsApp integrations, and smart automations."
          className="mb-16"
        />

        {/* Flagship Hero Card: Business Website Development */}
        <div className="mb-8 rounded-3xl border border-white/12 bg-gradient-to-br from-[#0E121E] via-[#0C0F17] to-[#07090E] p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          {/* Subtle blue accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>PRIMARY SPECIALTY // FLAGSHIP</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Custom Business Website Development
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                We design and build clean, fast, and high-converting websites from the ground up. Whether you are a local service provider, a professional practice, or a growing company, we build a digital home that commands respect and wins client trust.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>100% Mobile &amp; Tablet Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sub-Second Page Load Speeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Search Engine (SEO) Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>100% Full Code Ownership</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#websites"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#07090E] font-semibold text-sm hover:bg-slate-100 transition-colors shadow-md"
                >
                  <span>Explore Website Options</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-2 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-colors"
                >
                  <span>Request a Custom Quote</span>
                </a>
              </div>
            </div>

            {/* Visual Preview Graphic */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-white/10 bg-[#07090E]/90 p-5 shadow-2xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                  <span className="text-white font-semibold">Web Performance Audit</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Performance Score</span>
                    <span className="text-emerald-400 font-bold">100 / 100</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full rounded-full" />
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Mobile Responsiveness</span>
                    <span className="text-blue-400 font-bold">100 / 100</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-full rounded-full" />
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Search Engine Optimization</span>
                    <span className="text-indigo-400 font-bold">100 / 100</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-full rounded-full" />
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-white/5">
                  Built with React 19 &amp; Next.js 15 for enterprise reliability.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Complementary Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h4>

                  <span className="text-xs font-mono text-blue-400 block mt-1">
                    {service.tagline}
                  </span>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                    {service.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/8">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
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
