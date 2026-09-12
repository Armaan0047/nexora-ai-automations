"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, CheckCircle2, CornerDownRight, Mail, ShieldCheck } from "lucide-react";

const REQUIREMENT_OPTIONS = [
  { id: "business-website", label: "Business Website", category: "Web" },
  { id: "landing-page", label: "High-Conversion Landing Page", category: "Web" },
  { id: "redesign", label: "Website Architecture Redesign", category: "Web" },
  { id: "chatbot", label: "Website AI Chatbot", category: "Agent" },
  { id: "support-agent", label: "Customer Support / FAQ Agent", category: "Agent" },
  { id: "qualification-agent", label: "Lead Qualification Agent", category: "Agent" },
  { id: "internal-assistant", label: "Internal Operations Assistant", category: "Agent" },
  { id: "custom-pipeline", label: "Custom End-to-End System", category: "Full System" },
];

const TIMELINE_OPTIONS = [
  "Immediate (Planning to start this month)",
  "Targeting launch in 30-60 days",
  "Quarterly strategic planning / Exploratory",
];

const BUDGET_OPTIONS = [
  "Requirement-Driven (Requesting custom scope proposal)",
  "Defined Commercial Budget ($5k - $15k)",
  "Mid-Market / Multi-Module ($15k - $35k)",
  "Enterprise Scale ($35k+)",
];

export function RequirementForm() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "business-website",
    "qualification-agent",
  ]);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [requirements, setRequirements] = useState("");
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const toggleNeed = (id: string) => {
    if (selectedNeeds.includes(id)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== id));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim() || !businessName.trim() || !email.trim()) {
      setFormError("Please provide your name, business name, and work email.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clean, deterministic processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="TECHNICAL CONSULTATION"
          title="Start a requirement-based consultation."
          description="Nexora does not impose rigid packages. Tell us what your business needs to build or automate. Our engineering team will review your operational requirements and prepare an architectural proposal."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Consultation Process & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-surface-1 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                What happens after you submit:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400 shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Architectural Review
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Our senior engineering team reviews your technical scope, integration touchpoints, and timeline feasibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400 shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Scope Blueprint & Direct Consultation
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      We coordinate a direct technical discovery call to review architecture options, system guardrails, and transparent pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400 shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Transparent Scope Quotation
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      You receive a detailed quotation tied strictly to your deliverables with zero hidden agency markups.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidentiality guaranteed. NDA available upon request.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Direct inquiries: <a href="mailto:ai.nexora.automations@gmail.com" className="text-white hover:text-blue-400 underline">ai.nexora.automations@gmail.com</a></span>
                </div>
              </div>
            </div>

            {/* Dynamic Scope Preview Badge Box */}
            <div className="rounded-xl border border-white/10 bg-surface-2/60 p-5">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                Active Project Scope Selection:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNeeds.map((needId) => {
                  const opt = REQUIREMENT_OPTIONS.find((o) => o.id === needId);
                  return (
                    <span
                      key={needId}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300"
                    >
                      {opt?.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Frictionless Consultation Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-surface-1 p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                  Thank you, <span className="text-white font-medium">{fullName}</span>. Your requirements for <span className="text-white font-medium">{businessName}</span> have been routed to our systems engineering team at <span className="font-mono text-blue-400">ai.nexora.automations@gmail.com</span>.
                </p>
                <div className="p-4 rounded-xl border border-white/10 bg-surface-2 text-xs text-slate-400 max-w-md text-left w-full mt-4 space-y-1">
                  <div className="font-mono text-slate-300 font-semibold mb-1">Summary of Ingested Scope:</div>
                  <div>• Modules: {selectedNeeds.map((id) => REQUIREMENT_OPTIONS.find(o => o.id === id)?.label).join(", ")}</div>
                  <div>• Expected Timeline: {timeline}</div>
                  <div>• Budget Preference: {budget}</div>
                </div>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setSubmitted(false)}
                  className="mt-6"
                >
                  Submit Another Project Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    Project Requirement Intake
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Please provide your operational parameters to start technical scoping.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-xs text-red-300">
                    {formError}
                  </div>
                )}

                {/* Multi-Select Capability Needs */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 block mb-2 font-medium">
                    1. What capabilities do you require? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {REQUIREMENT_OPTIONS.map((opt) => {
                      const isChecked = selectedNeeds.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleNeed(opt.id)}
                          className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isChecked
                              ? "border-blue-500/60 bg-blue-500/[0.08] text-white font-medium"
                              : "border-white/10 bg-surface-2/60 text-slate-400 hover:border-white/20 hover:text-slate-200"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isChecked && (
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Your Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Henderson"
                      className="w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Business / Company Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Acme Logistics Group"
                      className="w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Work Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@acmelogistics.com"
                      className="w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Current Website URL <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="website"
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://acmelogistics.com"
                      className="w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="requirements"
                    className="text-xs font-mono text-slate-300 block mb-1.5"
                  >
                    Tell us about your requirements & key operational bottlenecks
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Briefly describe your objectives: What workflows are currently manual? What does your website need to communicate? Are there specific systems (CRM, calendar, internal docs) you need connected?"
                    className="w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg p-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 leading-relaxed"
                  />
                </div>

                {/* Timeline and Budget selections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Target Execution Timeline
                    </label>
                    <select
                      id="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full text-xs bg-surface-2 border border-white/15 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface-1 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="text-xs font-mono text-slate-300 block mb-1.5"
                    >
                      Budget Consideration <span className="text-slate-500">(Optional)</span>
                    </label>
                    <select
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full text-xs bg-surface-2 border border-white/15 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface-1 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    No aggressive sales follow-ups. You speak directly with engineers.
                  </span>
                  <Button
                    variant="primary"
                    size="lg"
                    withArrow
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Routing Proposal..." : "Request Technical Scope"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
