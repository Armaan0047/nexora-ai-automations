import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SystemVisual } from "./SystemVisual";
import { Shield, Sparkles, Terminal } from "lucide-react";

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
                <Terminal className="w-3 h-3 text-blue-400" />
                <span>AI ENGINEERING & BESPOKE ARCHITECTURE</span>
              </Badge>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.06] font-sans">
              AI Systems. <br />
              <span className="text-slate-300">Automated Growth.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-normal">
              Nexora engineers custom, high-performance websites and intelligent AI agents for modern businesses. We replace static web presences and manual human triage with autonomous digital engines tailored to your exact operations.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                href="#consultation"
              >
                Build With Nexora
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#capabilities"
              >
                Explore Services
              </Button>
            </div>

            {/* Qualitative Credibility Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">Business Model</span>
                <span className="text-sm font-medium text-slate-200 mt-1">Requirement-Based</span>
                <span className="text-xs text-slate-400 mt-0.5">No rigid packages</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">Target Market</span>
                <span className="text-sm font-medium text-slate-200 mt-1">Industry-Agnostic</span>
                <span className="text-xs text-slate-400 mt-0.5">Bespoke integrations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-slate-500">Engineering</span>
                <span className="text-sm font-medium text-slate-200 mt-1">Grounded Runtimes</span>
                <span className="text-xs text-slate-400 mt-0.5">Deterministic guardrails</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional System Architecture Visual */}
          <div className="lg:col-span-5 w-full">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
