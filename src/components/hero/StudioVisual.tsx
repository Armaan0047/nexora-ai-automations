"use client";

import React from "react";
import { MessageSquare, Check, Clock } from "lucide-react";

export function StudioVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Studio Shell: Doppelrand nested architecture */}
      <div className="p-2 sm:p-3 rounded-xl bg-[#1A1916] border border-[#35312B] shadow-2xl">
        {/* Main Mockup: Realistic Business Website (Demonstration) */}
        <div className="rounded-lg bg-[#11100E] border border-[#2A2722] overflow-hidden">
          {/* Browser Chrome Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-[#2A2722] bg-[#161512]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#35312B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#35312B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#35312B]" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#11100E] border border-[#2A2722] text-[11px] font-mono text-[#A7A096]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
              <span>apex-advisory.com</span>
            </div>
            <span className="text-[10px] font-mono text-[#A7A096]/70 uppercase">Concept</span>
          </div>

          {/* Website Canvas Area */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Mini Website Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
              <span className="text-xs font-semibold tracking-wider text-[#F2EEE6]">APEX ADVISORY</span>
              <div className="flex items-center gap-3 text-[11px] text-[#A7A096]">
                <span className="hidden sm:inline">Expertise</span>
                <span className="hidden sm:inline">Approach</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#C9784A]/15 text-[#C9784A] border border-[#C9784A]/30">
                  Contact
                </span>
              </div>
            </div>

            {/* Mini Website Hero */}
            <div className="pt-2 pb-4 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9784A]">
                Advisory Practice // Demonstration
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#F2EEE6] leading-snug">
                Strategic financial advisory for high-growth enterprises.
              </h3>
              <p className="text-xs text-[#A7A096] leading-relaxed max-w-sm">
                Helping businesses protect capital and scale operations with structured financial modeling.
              </p>
            </div>

            {/* Quick Metrics & Call to Action (Safe wording) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded bg-[#1A1916] border border-[#2A2722]">
                <span className="text-[10px] text-[#A7A096] block">Client Contact</span>
                <span className="text-xs font-mono text-[#F2EEE6] font-medium">Designed for faster response</span>
              </div>
              <div className="p-2.5 rounded bg-[#1A1916] border border-[#2A2722]">
                <span className="text-[10px] text-[#A7A096] block">Inquiry Routing</span>
                <span className="text-xs font-mono text-[#8FA58A] font-medium">Direct lead notification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Art-Directed Layer: Direct WhatsApp Lead Notification */}
      <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 w-full sm:w-[320px] p-3.5 rounded-lg bg-[#24221E] border border-[#4A453D] shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-[#35312B] mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#8FA58A]/20 border border-[#8FA58A]/40 flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-[#8FA58A]" />
            </div>
            <span className="text-[11px] font-semibold text-[#F2EEE6]">Inquiry Notification</span>
          </div>
          <span className="text-[10px] font-mono text-[#A7A096] flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" /> Sample flow
          </span>
        </div>

        <div className="space-y-1.5 text-xs">
          <div className="p-2 rounded bg-[#1A1916] border border-[#35312B]/70 text-[#F2EEE6] leading-relaxed">
            <span className="text-[10px] font-mono text-[#C9784A] block mb-0.5">Sample customer message:</span>
            &ldquo;Hello, I reviewed your advisory services. Can we discuss an initial consultation for next week?&rdquo;
          </div>
          <div className="flex items-center justify-between text-[10px] text-[#A7A096] px-1 pt-1">
            <span className="flex items-center gap-1 text-[#8FA58A]">
              <Check className="w-3 h-3" /> Routed to WhatsApp
            </span>
            <span className="font-mono">Direct notification</span>
          </div>
        </div>
      </div>

      {/* Honest Demo Caption */}
      <p className="mt-7 sm:mt-8 text-[11px] font-mono text-[#A7A096]/70 text-center sm:text-left">
        Illustrative preview — created to show how a Nexora build connects web design to direct inquiries.
      </p>
    </div>
  );
}
