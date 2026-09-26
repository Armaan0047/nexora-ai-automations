import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SystemVisual } from "./SystemVisual";
import { Globe, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Core */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="mb-6">
              <Badge variant="accent">
                <Globe className="w-3 h-3 text-blue-400" />
                <span>WEBSITES • AI CHATBOTS • AUTOMATION</span>
              </Badge>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.06] font-sans">
              Modern Websites. <br />
              <span className="text-slate-300">Automated Growth.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-normal">
              We build fast, modern business websites, upgrade existing sites, add helpful AI chatbots, connect WhatsApp, and automate everyday workflows to help you win more customers.
            </p>

            {/* Dual CTAs */}
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

            {/* Practical Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">Core Services</span>
                <span className="text-sm font-medium text-slate-200 mt-1">Websites & Redesigns</span>
                <span className="text-xs text-slate-400 mt-0.5">Fast, responsive & custom</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">Smart Features</span>
                <span className="text-sm font-medium text-slate-200 mt-1">AI Chat & WhatsApp</span>
                <span className="text-xs text-slate-400 mt-0.5">Easy for clients to reach you</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">How We Work</span>
                <span className="text-sm font-medium text-slate-200 mt-1">Requirement-Based</span>
                <span className="text-xs text-slate-400 mt-0.5">Tailored to your needs</span>
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
