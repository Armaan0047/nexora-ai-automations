"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Calendar, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "contractor",
    category: "Contractor & Local Services",
    tag: "Typical build",
    title: "Highland Thermal Solutions",
    subtitle: "Commercial HVAC & Thermal Insulation",
    problem:
      "Outdated 7-year-old WordPress site that loaded slowly on mobile, missed customer phone calls during busy site hours, and had no structured quote request flow.",
    solution:
      "Engineered a lightweight mobile-first landing page with an instant WhatsApp quote trigger, interactive service area coverage checker, and automated lead capture.",
    features: [
      "Instant WhatsApp inquiry with pre-filled service details",
      "Interactive postal code coverage verification",
      "Automated quote intake forwarded to team phone",
      "Sub-second load time on cellular data",
    ],
    mockupType: "contractor",
  },
  {
    id: "consultant",
    category: "Professional Practice & Advisory",
    tag: "Typical build",
    title: "Vanguard Corporate Partners",
    subtitle: "M&A Advisory & Strategy Consulting",
    problem:
      "Generic template website that failed to project authority to executive clients, buried fee structures, and required endless back-and-forth emails just to schedule an introductory call.",
    solution:
      "Refined editorial digital presence with structured advisory scopes, verified credentials, published engagement models, and direct calendar intake.",
    features: [
      "Authoritative editorial typography and clear credentials",
      "Defined engagement scopes and transparent timeline tiers",
      "Automated qualification questionnaire before scheduling",
      "Calendar integration synced to partner schedules",
    ],
    mockupType: "consultant",
  },
  {
    id: "b2b",
    category: "Growing B2B Company",
    tag: "Example concept",
    title: "LogixFlow Systems",
    subtitle: "Supply Chain & Route Optimization",
    problem:
      "A dense, confusing 12-page site filled with tech jargon that confused prospective clients and generated unqualified inquiries that drained sales team capacity.",
    solution:
      "A focused, high-conversion homepage with a clear 5-second value proposition, interactive capability preview, and an on-site FAQ assistant answering buyer queries.",
    features: [
      "Clear positioning: value communicated within 5 seconds",
      "Interactive feature comparison without leaving the page",
      "AI assistant trained on spec sheets and pricing tiers",
      "CRM webhook automatically syncing qualified leads",
    ],
    mockupType: "b2b",
  },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeader
            eyebrow="SELECTED WORK"
            title="How we solve real business problems."
            description="Realistic examples of websites and digital workflows we design and engineer for specific business models."
          />
          <div className="flex flex-wrap gap-2">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#C9784A] text-[#11100E] font-medium"
                    : "bg-[#1A1916] text-[#A7A096] border border-[#35312B] hover:text-[#F2EEE6] hover:border-[#4A453D]"
                }`}
              >
                0{idx + 1}. {study.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Detail Box */}
        <div className="rounded-lg bg-[#1A1916] border border-[#35312B] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#35312B]">
            {/* Left: Problem & Solution Architecture */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <Badge variant="demo">{current.tag}</Badge>
                  <span className="text-xs font-mono text-[#C9784A]">{current.category}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EEE6] tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A7A096] mt-1">{current.subtitle}</p>
                </div>

                {/* Problem Statement */}
                <div className="p-4 rounded-md bg-[#11100E] border border-[#2A2722] space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                    The Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-[#A7A096] leading-relaxed">
                    {current.problem}
                  </p>
                </div>

                {/* Solution Statement */}
                <div className="p-4 rounded-md bg-[#161512] border border-[#35312B] space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8FA58A] font-semibold block">
                    The Nexora Build
                  </span>
                  <p className="text-xs sm:text-sm text-[#F2EEE6] leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                {/* Scope Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-[#A7A096] uppercase tracking-wider block">
                    What was implemented
                  </span>
                  <ul className="space-y-2">
                    {current.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F2EEE6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9784A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#35312B] flex items-center justify-between">
                <span className="text-xs text-[#A7A096]">Need something similar for your business?</span>
                <Button variant="primary" size="sm" href="#contact" withArrow>
                  Start a project
                </Button>
              </div>
            </div>

            {/* Right: Realistic UI Representation */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-[#161512] flex flex-col justify-center">
              {current.mockupType === "contractor" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C9784A]" />
                      <span className="text-xs font-semibold text-[#F2EEE6]">HIGHLAND THERMAL</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8FA58A]/15 text-[#8FA58A] border border-[#8FA58A]/30">
                      Emergency HVAC Available
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#A7A096]">Service Area Check</span>
                    <div className="flex items-center gap-2 p-2.5 rounded bg-[#1A1916] border border-[#2A2722]">
                      <MapPin className="w-3.5 h-3.5 text-[#C9784A]" />
                      <span className="text-xs text-[#F2EEE6]">Greater Metro Region (All 14 Sectors)</span>
                      <span className="ml-auto text-[10px] text-[#8FA58A] font-mono">Active</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-[#1A1916] border border-[#35312B] space-y-2">
                    <span className="text-[11px] font-semibold text-[#F2EEE6] block">Direct Quote Routing</span>
                    <p className="text-[11px] text-[#A7A096]">
                      Tap below to send site details and photos directly to the engineering team.
                    </p>
                    <div className="p-2 rounded bg-[#24221E] border border-[#4A453D] flex items-center justify-between text-xs text-[#8FA58A]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MessageSquare className="w-3.5 h-3.5" /> Direct to WhatsApp Dispatch
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#A7A096]" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Avg Quote Response: &lt; 10 min</span>
                    <span>100% Mobile Ready</span>
                  </div>
                </div>
              )}

              {current.mockupType === "consultant" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <span className="text-xs font-serif text-[#F2EEE6] tracking-wide">VANGUARD PARTNERS</span>
                    <span className="text-[10px] font-mono text-[#A7A096]">Executive Advisory</span>
                  </div>

                  <div className="p-3 rounded bg-[#1A1916] border border-[#2A2722] space-y-1">
                    <span className="text-[10px] font-mono text-[#C9784A]">Standard Scope Tiers</span>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="p-2 rounded bg-[#11100E] border border-[#2A2722]">
                        <span className="text-[10px] text-[#A7A096] block">Due Diligence Audit</span>
                        <span className="text-xs font-semibold text-[#F2EEE6]">3-Week Sprint</span>
                      </div>
                      <div className="p-2 rounded bg-[#11100E] border border-[#2A2722]">
                        <span className="text-[10px] text-[#A7A096] block">Full M&amp;A Scope</span>
                        <span className="text-xs font-semibold text-[#F2EEE6]">Quarterly Retainer</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-[#1A1916] border border-[#35312B] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#F2EEE6]">Introductory Consultation</span>
                      <span className="text-[10px] font-mono text-[#8FA58A]">Calendar Open</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#24221E] border border-[#4A453D] flex items-center justify-between text-xs text-[#F2EEE6]">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#C9784A]" />
                        <span>Select a 30-min strategy window</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#A7A096]">Verified</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Intake Qualification: Yes</span>
                    <span>Zero scheduling friction</span>
                  </div>
                </div>
              )}

              {current.mockupType === "b2b" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <span className="text-xs font-bold text-[#F2EEE6] font-mono">LOGIXFLOW // PLATFORM</span>
                    <span className="text-[10px] font-mono text-[#8FA58A]">Live Ingest</span>
                  </div>

                  <div className="p-3 rounded bg-[#1A1916] border border-[#2A2722] space-y-1.5">
                    <span className="text-[10px] font-mono text-[#A7A096]">Value Proposition</span>
                    <h4 className="text-xs font-semibold text-[#F2EEE6]">
                      Reduce fleet mileage by 18% with automated multi-stop route scheduling.
                    </h4>
                  </div>

                  <div className="p-3.5 rounded bg-[#1A1916] border border-[#35312B] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#F2EEE6] flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3 text-[#C9784A]" /> On-Site FAQ Assistant
                      </span>
                      <span className="text-[10px] font-mono text-[#8FA58A]">Trained on Docs</span>
                    </div>
                    <div className="p-2 rounded bg-[#11100E] border border-[#2A2722] text-[11px] text-[#A7A096] leading-relaxed">
                      &ldquo;Yes, our API connects with SAP, NetSuite, and custom warehouse management systems.&rdquo;
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Direct CRM Sync</span>
                    <span>High-conversion architecture</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
