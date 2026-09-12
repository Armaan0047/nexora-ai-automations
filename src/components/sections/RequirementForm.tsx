"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Check, CheckCircle2, Mail, ShieldCheck } from "lucide-react";

const REQUIREMENT_OPTIONS = [
  { id: "business-website", label: "Business Website" },
  { id: "landing-page", label: "High-Conversion Landing Page" },
  { id: "redesign", label: "Website Redesign" },
  { id: "chatbot", label: "Website AI Chatbot" },
  { id: "support-agent", label: "Customer Support / FAQ Agent" },
  { id: "qualification-agent", label: "Lead Qualification Agent" },
  { id: "internal-assistant", label: "Internal Operations Assistant" },
  { id: "custom-pipeline", label: "Custom End-to-End System" },
];

const TIMELINE_OPTIONS = [
  "Planning to start this month",
  "Targeting launch in 30–60 days",
  "Exploring / strategic planning",
];

const BUDGET_OPTIONS = [
  "Help me scope this",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹1,50,000",
  "₹1,50,000+",
];

export function RequirementForm() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(["business-website"]);
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
      if (selectedNeeds.length > 1) setSelectedNeeds(selectedNeeds.filter((n) => n !== id));
      return;
    }
    setSelectedNeeds([...selectedNeeds, id]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim() || !businessName.trim() || !email.trim()) {
      setFormError("Please provide your name, business name, and work email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          businessName,
          email,
          website,
          requirements,
          selectedNeeds: selectedNeeds.map((id) => REQUIREMENT_OPTIONS.find((item) => item.id === id)?.label ?? id),
          timeline,
          budget,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Unable to submit your request.");

      setSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to submit your request. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="CONSULTATION"
          title="Tell us what needs to be built or automated."
          description="Share the outcome you want, the systems involved, and any current bottlenecks. Nexora will review the scope and come back with a practical recommendation."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-surface-1 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white tracking-tight">What happens next</h3>
              <div className="space-y-5">
                {[
                  ["01", "Scope review", "We review your goals, existing setup, integrations and constraints."],
                  ["02", "Discovery conversation", "We discuss the practical solution, priorities and implementation approach."],
                  ["03", "Clear proposal", "You receive a scope and quotation tied to the work you actually need."],
                ].map(([number, title, text]) => (
                  <div key={number} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[10px] font-mono text-blue-400 shrink-0">
                      {number}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">{title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Project information is handled confidentially.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Direct inquiries: <a href="mailto:ai.nexora.automations@gmail.com" className="text-white hover:text-blue-400 underline">ai.nexora.automations@gmail.com</a></span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-surface-2/60 p-5">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Selected scope</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNeeds.map((needId) => {
                  const option = REQUIREMENT_OPTIONS.find((item) => item.id === needId);
                  return <span key={needId} className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">{option?.label}</span>;
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-surface-1 p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">Request received</h3>
                <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                  Thanks, <span className="text-white font-medium">{fullName}</span>. Your enquiry has been delivered to Nexora and we&apos;ll review the scope before getting back to you.
                </p>
                <div className="p-4 rounded-xl border border-white/10 bg-surface-2 text-xs text-slate-400 max-w-md text-left w-full mt-4 space-y-1">
                  <div className="font-mono text-slate-300 font-semibold mb-1">Submitted scope</div>
                  <div>• Modules: {selectedNeeds.map((id) => REQUIREMENT_OPTIONS.find((o) => o.id === id)?.label).join(", ")}</div>
                  <div>• Timeline: {timeline}</div>
                  <div>• Budget: {budget}</div>
                </div>
                <Button variant="secondary" size="md" onClick={() => setSubmitted(false)} className="mt-6">Submit another enquiry</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Project requirement intake</h3>
                  <p className="text-xs text-slate-400 mt-1">A few details help us understand the right solution before we speak.</p>
                </div>

                {formError && <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-xs text-red-300">{formError}</div>}

                <div>
                  <label className="text-xs font-mono uppercase text-slate-300 block mb-2 font-medium">What do you need? (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {REQUIREMENT_OPTIONS.map((option) => {
                      const checked = selectedNeeds.includes(option.id);
                      return (
                        <button key={option.id} type="button" onClick={() => toggleNeed(option.id)} className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${checked ? "border-blue-500/60 bg-blue-500/[0.08] text-white font-medium" : "border-white/10 bg-surface-2/60 text-slate-400 hover:border-white/20 hover:text-slate-200"}`}>
                          <span>{option.label}</span>
                          {checked && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Your Full Name" required>
                    <input id="fullName" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Alex Henderson" className={inputClass} />
                  </Field>
                  <Field label="Business / Company Name" required>
                    <input id="businessName" type="text" required value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g. Acme Logistics" className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Work Email" required>
                    <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@company.com" className={inputClass} />
                  </Field>
                  <Field label="Current Website URL" optional>
                    <input id="website" type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://company.com" className={inputClass} />
                  </Field>
                </div>

                <Field label="What are you trying to achieve?">
                  <textarea id="requirements" rows={4} value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Tell us what is currently manual, what your website should do, or which systems you want connected." className={`${inputClass} resize-y leading-relaxed`} />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Target Timeline">
                    <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputClass}>
                      {TIMELINE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget Range" optional>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass}>
                      {BUDGET_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">No spam. We only use your details to respond to this enquiry.</span>
                  <Button variant="primary" size="lg" withArrow type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending request..." : "Request a consultation"}
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

const inputClass = "w-full text-xs sm:text-sm bg-surface-2 border border-white/15 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500";

function Field({ label, required, optional, children }: { label: string; required?: boolean; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-mono text-slate-300 block mb-1.5">
        {label} {required && <span className="text-blue-400">*</span>} {optional && <span className="text-slate-500 font-normal">(Optional)</span>}
      </label>
      {children}
    </div>
  );
}
