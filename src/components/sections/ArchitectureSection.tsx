"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ARCHITECTURE_PIPELINE } from "@/data/architectureData";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export function ArchitectureSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeNode = ARCHITECTURE_PIPELINE[activeStepIndex];

  return (
    <section id="architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="SYSTEM ARCHITECTURE"
          title="How our websites and digital solutions connect together."
          description="A transparent breakdown of how your goals, modern website pages, WhatsApp contact, and smart tools unite into an effortless system that works 24/7."
          className="mb-16"
        />

        {/* 6-Stage Vertical/Horizontal Flow Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sequential Node Track */}
          <div className="lg:col-span-6 flex flex-col space-y-2">
            {ARCHITECTURE_PIPELINE.map((node, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <div key={node.index} className="flex flex-col">
                  <button
                    onClick={() => setActiveStepIndex(idx)}
                    className={`text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-blue-500/60 bg-[#121622] shadow-[0_0_20px_rgba(59,130,246,0.15)] text-white font-medium"
                        : "border-white/10 bg-[#0C0F17] text-slate-400 hover:text-slate-200 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded-md border ${
                          isSelected
                            ? "border-blue-500/40 text-blue-400 bg-blue-500/10 font-bold"
                            : "border-white/10 text-slate-500"
                        }`}
                      >
                        {node.index}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 block">
                          Phase {node.index}
                        </span>
                        <h4
                          className={`text-sm sm:text-base font-semibold tracking-tight ${
                            isSelected ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {node.stageName}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-blue-400 translate-x-1" : "text-slate-600"
                      }`}
                    />
                  </button>

                  {/* Visual connector line between steps */}
                  {idx < ARCHITECTURE_PIPELINE.length - 1 && (
                    <div className="h-2 w-px bg-white/10 ml-8 my-0.5" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Node Inspection Panel */}
          <div className="lg:col-span-6 rounded-2xl border border-white/12 bg-[#0C0F17] p-6 sm:p-8 shadow-2xl flex flex-col justify-between sticky top-28">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
                    Stage {activeNode.index} Breakdown
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {activeNode.stageName}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-5">
                {activeNode.headline}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeNode.businessExplanation}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                  What This Includes:
                </span>
                {activeNode.technicalCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                  Key Deliverable:
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {activeNode.keyDeliverable}
                </span>
              </div>
              <a
                href="#consultation"
                className="text-xs font-mono uppercase text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors font-medium"
              >
                <span>Discuss your project</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
