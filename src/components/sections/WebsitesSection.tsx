"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WEBSITE_SERVICES } from "@/data/capabilities";
import {
  Check,
  Laptop,
  RefreshCw,
  Smartphone,
  Tablet,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

type ViewportMode = "desktop" | "tablet" | "mobile";

export function WebsitesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    WEBSITE_SERVICES[0].id
  );
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [interactiveStep, setInteractiveStep] = useState<number>(1);

  const activeService =
    WEBSITE_SERVICES.find((s) => s.id === activeServiceId) ||
    WEBSITE_SERVICES[0];

  return (
    <section id="websites" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="SHOWCASE // WORK & CAPABILITIES"
          title="Websites built for conversion, speed, and credibility."
          description="Explore interactive previews of the high-performance websites we engineer for businesses—crafted for effortless mobile navigation and immediate client trust."
          className="mb-16"
        />

        {/* 4 Capabilities Tab Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 border-b border-white/10 pb-4">
          {WEBSITE_SERVICES.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`text-left p-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/[0.08] border border-white/20 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent"
                }`}
              >
                <span className="text-[10px] font-mono text-blue-400 uppercase block mb-1 font-medium">
                  {service.badge}
                </span>
                <span className="text-sm font-bold tracking-tight block">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase Grid: Left Spec Details, Right Interactive Responsive Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Technical Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Service Deliverable
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {activeService.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeService.summary}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/8">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                  Included in This Build:
                </span>
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] text-xs text-slate-300 space-y-1">
                <span className="font-mono uppercase text-blue-300 font-bold block text-[11px]">
                  Business Advantage:
                </span>
                <p className="leading-relaxed">{activeService.operationalImpact}</p>
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" href="#consultation" withArrow className="w-full sm:w-auto">
                  Get a Quote for This
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Interactive Concept Preview Frame */}
          <div className="lg:col-span-7 rounded-2xl border border-white/12 bg-[#0C0F17] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col">
            {/* Viewport & Simulation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Badge variant="demo">Interactive Studio Preview</Badge>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Select Device Frame:
                </span>
              </div>

              {/* Viewport switcher */}
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#121622] p-1">
                <button
                  onClick={() => setViewport("desktop")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    viewport === "desktop"
                      ? "bg-white text-[#07090E] font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Desktop viewport"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="font-mono hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewport("tablet")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    viewport === "tablet"
                      ? "bg-white text-[#07090E] font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Tablet viewport"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="font-mono hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setViewport("mobile")}
                  className={`px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    viewport === "mobile"
                      ? "bg-white text-[#07090E] font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Mobile viewport"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="font-mono hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Interface Preview Canvas */}
            <div className="mt-4 p-4 rounded-xl border border-white/8 bg-[#07090E] min-h-[380px] flex items-center justify-center transition-all duration-300 overflow-hidden">
              <div
                className={`transition-all duration-300 w-full mx-auto rounded-xl border border-white/12 bg-[#121622] p-5 sm:p-6 shadow-xl ${
                  viewport === "desktop"
                    ? "max-w-full"
                    : viewport === "tablet"
                    ? "max-w-[480px]"
                    : "max-w-[320px]"
                }`}
              >
                {/* Simulated Web App Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="font-mono text-slate-300 text-[11px] truncate max-w-[140px]">
                      yourcompany.com
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">
                    Live Demo
                  </span>
                </div>

                {/* Simulated Conversion Component Demo */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-400 tracking-wider font-semibold">
                      Interactive Feature Demonstration
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1">
                      Effortless Client Quote Flow
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Experience how a simple, frictionless 2-step question intake turns visitors into quote inquiries.
                    </p>
                  </div>

                  {/* Interactive Step UI */}
                  <div className="p-4 rounded-xl border border-white/10 bg-[#0C0F17] space-y-3 shadow-inner">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Step 0{interactiveStep} of 03</span>
                      <span className="text-blue-400 font-semibold">
                        {interactiveStep === 1
                          ? "What You Need"
                          : interactiveStep === 2
                          ? "Target Timeline"
                          : "Direct Connection Ready"}
                      </span>
                    </div>

                    {interactiveStep === 1 && (
                      <div className="space-y-2.5">
                        <label className="text-xs font-semibold text-slate-200 block">
                          What type of website does your business need?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(2)}
                            className="text-left text-xs p-2.5 rounded-lg border border-white/12 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors font-medium cursor-pointer"
                          >
                            New Business Website
                          </button>
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(2)}
                            className="text-left text-xs p-2.5 rounded-lg border border-white/12 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors font-medium cursor-pointer"
                          >
                            Redesign Outdated Site
                          </button>
                        </div>
                      </div>
                    )}

                    {interactiveStep === 2 && (
                      <div className="space-y-2.5">
                        <label className="text-xs font-semibold text-slate-200 block">
                          When would you like to launch?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(3)}
                            className="text-left text-xs p-2.5 rounded-lg border border-white/12 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors font-medium cursor-pointer"
                          >
                            As Soon As Possible (1-2 Weeks)
                          </button>
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(3)}
                            className="text-left text-xs p-2.5 rounded-lg border border-white/12 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors font-medium cursor-pointer"
                          >
                            Exploring &amp; Planning
                          </button>
                        </div>
                      </div>
                    )}

                    {interactiveStep === 3 && (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                          <Check className="w-4 h-4" />
                          <span>Inquiry captured instantly! Ready for follow-up.</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          This is how Nexora replaces outdated, tedious contact forms with quick, engaging micro-interactions that visitors actually complete.
                        </p>
                        <button
                          type="button"
                          onClick={() => setInteractiveStep(1)}
                          className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 mt-1 cursor-pointer font-medium"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Test Again</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Note on genuine architecture */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Responsive on Every Screen</span>
              </span>
              <span>100% Code Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
