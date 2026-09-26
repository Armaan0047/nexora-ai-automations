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
    <section id="websites" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="WEBSITE DEVELOPMENT"
          title="Modern websites designed to grow your business."
          description="We build clean, fast, and mobile-friendly websites that look great, load quickly, and clearly explain what you offer to prospective customers."
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
                className={`text-left p-3 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/[0.06] border border-white/15 text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] border border-transparent"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                  {service.badge}
                </span>
                <span className="text-sm font-semibold tracking-tight block">
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
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Service Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                {activeService.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeService.summary}
              </p>

              <div className="mt-6 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 block">
                  What’s Included:
                </span>
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl border border-white/10 bg-surface-1 text-xs text-slate-400">
                <span className="font-mono uppercase text-slate-300 font-semibold block mb-1">
                  Business Value:
                </span>
                {activeService.operationalImpact}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="secondary" size="md" href="#consultation" withArrow>
                Ask About This Service
              </Button>
            </div>
          </div>

          {/* Right Column: Functional Interactive Concept Preview Frame */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-surface-1 p-4 sm:p-6 shadow-2xl flex flex-col">
            {/* Viewport & Simulation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Badge variant="demo">Interactive Demo</Badge>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Mobile &amp; Desktop Preview
                </span>
              </div>

              {/* Viewport switcher */}
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-surface-2 p-1">
                <button
                  onClick={() => setViewport("desktop")}
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewport === "desktop"
                      ? "bg-white/15 text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Desktop viewport"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewport("tablet")}
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewport === "tablet"
                      ? "bg-white/15 text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Tablet viewport"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setViewport("mobile")}
                  className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewport === "mobile"
                      ? "bg-white/15 text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Mobile viewport"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Interface Preview Canvas */}
            <div className="mt-4 p-4 rounded-xl border border-white/10 bg-surface-base min-h-[380px] flex items-center justify-center transition-all duration-300 overflow-hidden">
              <div
                className={`transition-all duration-300 w-full mx-auto rounded-lg border border-white/10 bg-surface-1 p-4 sm:p-6 shadow-md ${
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
                    <span className="font-mono text-slate-400 text-[11px] truncate max-w-[140px]">
                      yourbusiness.com
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/10">
                    Live Preview
                  </span>
                </div>

                {/* Simulated Conversion Component Demo */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-400 tracking-wider">
                      Interactive Feature Demo
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight mt-1">
                      Simple Quote Request Flow
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      See how an easy, 2-step question flow makes it effortless for visitors to reach out.
                    </p>
                  </div>

                  {/* Interactive Step UI */}
                  <div className="p-3 rounded-lg border border-white/10 bg-surface-2/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Step 0{interactiveStep} of 03</span>
                      <span className="text-blue-400">
                        {interactiveStep === 1
                          ? "Select What You Need"
                          : interactiveStep === 2
                          ? "Desired Timeline"
                          : "Ready to Connect"}
                      </span>
                    </div>

                    {interactiveStep === 1 && (
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-slate-300 block">
                          What type of website are you looking for?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(2)}
                            className="text-left text-xs p-2 rounded border border-white/15 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors"
                          >
                            New Business Website
                          </button>
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(2)}
                            className="text-left text-xs p-2 rounded border border-white/15 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors"
                          >
                            Upgrade Existing Website
                          </button>
                        </div>
                      </div>
                    )}

                    {interactiveStep === 2 && (
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-slate-300 block">
                          When would you like to get started?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(3)}
                            className="text-left text-xs p-2 rounded border border-white/15 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors"
                          >
                            Right Away (This Month)
                          </button>
                          <button
                            type="button"
                            onClick={() => setInteractiveStep(3)}
                            className="text-left text-xs p-2 rounded border border-white/15 bg-white/[0.03] hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-200 transition-colors"
                          >
                            Exploring Options for Later
                          </button>
                        </div>
                      </div>
                    )}

                    {interactiveStep === 3 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                          <Check className="w-3.5 h-3.5" />
                          <span>Preferences selected. Direct connection ready.</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          This demonstrates how we build simple, quick quote request flows into websites so customers can reach you with zero hassle.
                        </p>
                        <button
                          type="button"
                          onClick={() => setInteractiveStep(1)}
                          className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 mt-1 cursor-pointer"
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
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Mobile-First • Fast Loading</span>
              <span>Built to Your Requirements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
