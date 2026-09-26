"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Calendar, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "contractor",
    category: "Contractor & Local Services",
    tag: "Illustrative Concept",
    title: "Highland Thermal Solutions",
    subtitle: "Commercial HVAC & Thermal Insulation (Sample Scenario)",
    problem:
      "Outdated website that was difficult to navigate on mobile, missed customer inquiries during active job hours, and lacked a structured quote intake flow.",
    solution:
      "A mobile-focused landing layout featuring an instant WhatsApp quote button, service area verification, and clean inquiry intake.",
    features: [
      "Direct WhatsApp inquiry with pre-filled service context",
      "Service area and postal code coverage verification",
      "Inquiry intake routed directly to team notifications",
      "Optimised for fast mobile loading on cellular data",
    ],
    mockupType: "contractor",
  },
  {
    id: "consultant",
    category: "Professional Practice & Advisory",
    tag: "Illustrative Concept",
    title: "Vanguard Corporate Partners",
    subtitle: "Strategy Advisory & Corporate Consulting (Sample Scenario)",
    problem:
      "Generic template website that lacked clear authority, buried engagement scopes, and created friction when booking an introductory consultation.",
    solution:
      "An editorial digital presence featuring structured advisory tiers, clear credentials, published engagement scopes, and direct scheduling intake.",
    features: [
      "Authoritative editorial typography and clear credentials",
      "Structured advisory scopes and clear engagement tiers",
      "Brief qualification questionnaire before appointment booking",
      "Direct calendar integration synced with advisory schedules",
    ],
    mockupType: "consultant",
  },
  {
    id: "b2b",
    category: "Growing B2B Company",
    tag: "Illustrative Concept",
    title: "LogixFlow Systems",
    subtitle: "Supply Chain & Route Coordination (Sample Scenario)",
    problem:
      "A dense, confusing multi-page site that failed to communicate the core offering quickly and generated inquiries missing key project details.",
    solution:
      "A focused homepage with a clear value proposition, interactive capability preview, and an on-site FAQ assistant answering buyer questions.",
    features: [
      "Clear positioning: value communicated immediately on entry",
      "Interactive feature overview without leaving the page",
      "On-site assistant trained on verified service specifications",
      "Lead capture synced directly to team channels",
    ],
    mockupType: "b2b",
  },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  return (
    <section id="work" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <SectionHeader
            eyebrow="CAPABILITY SHOWCASE"
            title="How we solve real business problems."
            description="Illustrative examples showing how a Nexora build can be structured for different business models."
          />
          <div className="flex flex-wrap gap-2">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
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
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <Badge variant="demo">{current.tag}</Badge>
                  <span className="text-xs font-mono text-[#C9784A]">{current.category}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#F2EEE6] tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A7A096] mt-1">{current.subtitle}</p>
                </div>

                {/* Problem Statement */}
                <div className="p-3.5 rounded bg-[#11100E] border border-[#2A2722] space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                    The Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-[#A7A096] leading-relaxed">
                    {current.problem}
                  </p>
                </div>

                {/* Solution Statement */}
                <div className="p-3.5 rounded bg-[#161512] border border-[#35312B] space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8FA58A] font-semibold block">
                    The Nexora Build
                  </span>
                  <p className="text-xs sm:text-sm text-[#F2EEE6] leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                {/* Scope Points */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-[#A7A096] uppercase tracking-wider block">
                    Implementation highlights
                  </span>
                  <ul className="space-y-1.5">
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
                <span className="text-xs text-[#A7A096]">Have a similar business requirement?</span>
                <Button variant="primary" size="sm" href="#contact" withArrow>
                  Start a project
                </Button>
              </div>
            </div>

            {/* Right: Illustrative UI Representation */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#161512] flex flex-col justify-center">
              {current.mockupType === "contractor" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C9784A]" />
                      <span className="text-xs font-semibold text-[#F2EEE6]">HIGHLAND THERMAL</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8FA58A]/15 text-[#8FA58A] border border-[#8FA58A]/30">
                      Sample Concept
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#A7A096]">Service Area Check</span>
                    <div className="flex items-center gap-2 p-2.5 rounded bg-[#1A1916] border border-[#2A2722]">
                      <MapPin className="w-3.5 h-3.5 text-[#C9784A]" />
                      <span className="text-xs text-[#F2EEE6]">Greater Metro Region (Sample Coverage)</span>
                      <span className="ml-auto text-[10px] text-[#8FA58A] font-mono">Active</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-[#1A1916] border border-[#35312B] space-y-2">
                    <span className="text-[11px] font-semibold text-[#F2EEE6] block">Direct Quote Routing</span>
                    <p className="text-[11px] text-[#A7A096]">
                      Direct routing sends site details and inquiry notes to team WhatsApp.
                    </p>
                    <div className="p-2 rounded bg-[#24221E] border border-[#4A453D] flex items-center justify-between text-xs text-[#8FA58A]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MessageSquare className="w-3.5 h-3.5" /> Direct to WhatsApp Routing
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#A7A096]" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Direct lead notification</span>
                    <span>Performance-focused build</span>
                  </div>
                </div>
              )}

              {current.mockupType === "consultant" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <span className="text-xs font-serif text-[#F2EEE6] tracking-wide">VANGUARD PARTNERS</span>
                    <span className="text-[10px] font-mono text-[#A7A096]">Advisory Concept</span>
                  </div>

                  <div className="p-3 rounded bg-[#1A1916] border border-[#2A2722] space-y-1">
                    <span className="text-[10px] font-mono text-[#C9784A]">Standard Scope Tiers</span>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="p-2 rounded bg-[#11100E] border border-[#2A2722]">
                        <span className="text-[10px] text-[#A7A096] block">Strategy Review</span>
                        <span className="text-xs font-semibold text-[#F2EEE6]">3-Week Sprint</span>
                      </div>
                      <div className="p-2 rounded bg-[#11100E] border border-[#2A2722]">
                        <span className="text-[10px] text-[#A7A096] block">Advisory Scope</span>
                        <span className="text-xs font-semibold text-[#F2EEE6]">Structured Scope</span>
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
                        <span>Select an introduction window</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#A7A096]">Verified</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Intake Qualification: Yes</span>
                    <span>Designed for faster response</span>
                  </div>
                </div>
              )}

              {current.mockupType === "b2b" && (
                <div className="rounded-lg bg-[#11100E] border border-[#35312B] p-4 sm:p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2722]">
                    <span className="text-xs font-bold text-[#F2EEE6] font-mono">LOGIXFLOW // PLATFORM</span>
                    <span className="text-[10px] font-mono text-[#8FA58A]">Sample Ingest</span>
                  </div>

                  <div className="p-3 rounded bg-[#1A1916] border border-[#2A2722] space-y-1.5">
                    <span className="text-[10px] font-mono text-[#A7A096]">Value Proposition</span>
                    <h4 className="text-xs font-semibold text-[#F2EEE6]">
                      Centralized multi-stop dispatch &amp; route coordination overview.
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
                      &ldquo;Yes, our API connects with standard warehouse management and inventory platforms.&rdquo;
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-[#A7A096] font-mono">
                    <span>Direct CRM notification</span>
                    <span>Optimised for fast mobile loading</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Real Proof Placeholder (Transparent Studio Position) */}
        <div className="mt-8 p-5 sm:p-6 rounded-lg bg-[#161512] border border-[#35312B] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9784A] font-semibold block">
              Studio Transparency
            </span>
            <h4 className="font-serif text-base sm:text-lg text-[#F2EEE6]">
              Building the first set of studio case studies.
            </h4>
            <p className="text-xs text-[#A7A096] max-w-xl leading-relaxed">
              We are currently working with a limited number of businesses and documenting each build carefully. Ask us for a walkthrough of our process or a tailored concept for your business.
            </p>
          </div>
          <Button variant="secondary" size="sm" href="#contact" className="shrink-0">
            Request a walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
}
