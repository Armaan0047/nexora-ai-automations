import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SystemVisual } from "./SystemVisual";
import { Globe, ArrowRight, ShieldCheck, Zap, Smartphone, Bot } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden ambient-glow">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Powerhouse */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="mb-6">
              <Badge variant="accent">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>MODERN WEBSITES • AI CHATBOTS • AUTOMATION</span>
              </Badge>
            </div>

            {/* Display Headline — Bold Nike & Apple Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-sans">
              We build modern websites that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                win customers.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Custom business websites, high-converting landing pages, and redesigns—supercharged with 24/7 AI chatbots, direct WhatsApp contact, and automated client workflows.
            </p>

            {/* Dual High-Contrast CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                href="#consultation"
              >
                Start Your Project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#capabilities"
              >
                Explore Services
              </Button>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-5 w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 uppercase">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Websites</span>
                </div>
                <span className="text-sm font-semibold text-white mt-1">Custom Built</span>
                <span className="text-xs text-slate-400 mt-0.5">Mobile-first &amp; fast</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 uppercase">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Chatbots</span>
                </div>
                <span className="text-sm font-semibold text-white mt-1">24/7 Support</span>
                <span className="text-xs text-slate-400 mt-0.5">Instant FAQ answers</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </div>
                <span className="text-sm font-semibold text-white mt-1">Direct Chat</span>
                <span className="text-xs text-slate-400 mt-0.5">1-click inquiries</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ownership</span>
                </div>
                <span className="text-sm font-semibold text-white mt-1">100% Yours</span>
                <span className="text-xs text-slate-400 mt-0.5">No vendor lock-in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Interactive Demo Visual */}
          <div className="lg:col-span-5 w-full">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
