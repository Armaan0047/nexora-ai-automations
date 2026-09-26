"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Check, CheckCircle2, Mail, ShieldCheck } from "lucide-react";

const REQUIREMENT_OPTIONS = [
  { id: "business-website", label: "Business Website" },
  { id: "landing-page", label: "High-Conversion Landing Page" },
  { id: "redesign", label: "Website Redesign" },
  { id: "chatbot", label: "AI Chatbot & FAQ Assistant" },
  { id: "automation", label: "WhatsApp & Lead Automation" },
  { id: "custom", label: "Custom Digital Build" },
];

const TIMELINE_OPTIONS = [
  "Planning to start this month",
  "Targeting launch in 30–60 days",
  "Exploring / strategic planning",
];

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
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
      setFormError("Please provide your full name, business name, and work email.");
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
          selectedNeeds: selectedNeeds.map(
            (id) => REQUIREMENT_OPTIONS.find((item) => item.id === id)?.label ?? id
          ),
          timeline,
          budget,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your request.");
      }

      setSubmitted(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to submit your request right now. You can email us directly at ai.nexora.automations@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="START A PROJECT"
          title="Tell us what needs to be built or improved."
          description="Share what you are trying to achieve. We will review your situation and reply with a clear recommendation."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: What Happens After Submitting (3 Steps) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-lg bg-[#1A1916] border border-[#35312B] space-y-5">
              <h3 className="font-serif text-xl text-[#F2EEE6] tracking-tight">
                What happens after submitting
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "We review your requirements",
                    desc: "We analyze your current website, service model, and goals before proposing a plan.",
                  },
                  {
                    step: "02",
                    title: "We recommend the right approach",
                    desc: "You receive an honest appraisal and a straightforward recommendation for your situation.",
                  },
                  {
                    step: "03",
                    title: "You receive a clear scope and estimate",
                    desc: "A transparent quotation and timeline tied specifically to the deliverables you need.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#24221E] border border-[#35312B] flex items-center justify-center text-xs font-mono text-[#C9784A] font-semibold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F2EEE6]">{item.title}</h4>
                      <p className="text-xs text-[#A7A096] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#2A2722] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#A7A096]">
                  <ShieldCheck className="w-4 h-4 text-[#8FA58A] shrink-0" />
                  <span>No obligation. No marketing spam.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A7A096]">
                  <Mail className="w-4 h-4 text-[#C9784A] shrink-0" />
                  <span>
                    Direct email:{" "}
                    <a
                      href="mailto:ai.nexora.automations@gmail.com"
                      className="text-[#F2EEE6] hover:text-[#C9784A] underline transition-colors"
                    >
                      ai.nexora.automations@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#161512] border border-[#35312B] text-xs text-[#A7A096] flex items-center justify-between font-mono">
              <span>Studio Response Pledge:</span>
              <span className="text-[#8FA58A]">Replies within 24h on business days</span>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-lg bg-[#1A1916] border border-[#35312B]">
            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center space-y-3">
                <div className="w-10 h-10 rounded bg-[#8FA58A]/15 border border-[#8FA58A]/40 flex items-center justify-center text-[#8FA58A] mb-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#F2EEE6] tracking-tight">
                  Enquiry received
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A096] max-w-md leading-relaxed">
                  Thank you, <span className="text-[#F2EEE6] font-medium">{fullName}</span>. We will review your project requirements for <span className="text-[#F2EEE6] font-medium">{businessName}</span> and reply within 24 hours on business days.
                </p>
                <div className="p-3.5 rounded bg-[#11100E] border border-[#2A2722] text-xs text-[#A7A096] max-w-md text-left w-full mt-3 space-y-1">
                  <div className="font-mono text-[#F2EEE6] text-[11px] uppercase tracking-wider mb-1 pb-1 border-b border-[#2A2722]">
                    Recorded Details
                  </div>
                  <div>• Needed: {selectedNeeds.map((id) => REQUIREMENT_OPTIONS.find((o) => o.id === id)?.label).join(", ")}</div>
                  <div>• Timeline: {timeline}</div>
                  <div>• Budget: {budget}</div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-[#F2EEE6] tracking-tight">
                    Project requirement intake
                  </h3>
                  <p className="text-xs text-[#A7A096] mt-0.5">
                    A few details allow us to provide an honest, accurate assessment.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 rounded bg-red-950/40 border border-red-800/60 text-xs text-red-200">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="text-xs font-mono uppercase text-[#A7A096] block mb-1.5 font-medium">
                    What do you need? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {REQUIREMENT_OPTIONS.map((option) => {
                      const checked = selectedNeeds.includes(option.id);
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => toggleNeed(option.id)}
                          className={`text-left p-2.5 rounded border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            checked
                              ? "border-[#C9784A] bg-[#C9784A]/10 text-[#F2EEE6] font-medium"
                              : "border-[#35312B] bg-[#11100E] text-[#A7A096] hover:border-[#4A453D] hover:text-[#F2EEE6]"
                          }`}
                        >
                          <span>{option.label}</span>
                          {checked && <Check className="w-3.5 h-3.5 text-[#C9784A] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Your Full Name" required>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Business / Company Name" required>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Advisory"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Work Email" required>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@company.com"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Current Website URL" optional>
                    <input
                      id="website"
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://company.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="What are you trying to achieve?">
                  <textarea
                    id="requirements"
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Briefly describe what your current website lacks, your target audience, or what manual tasks you want automated."
                    className={`${inputClass} resize-y leading-relaxed`}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Target Timeline">
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className={inputClass}
                    >
                      {TIMELINE_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-[#1A1916] text-[#F2EEE6]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Approximate project budget" optional>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={inputClass}
                    >
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-[#1A1916] text-[#F2EEE6]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="pt-2 border-t border-[#2A2722] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-[#A7A096]">
                    No obligation. Direct reply within 24 hours on business days.
                  </span>
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request a project review"}
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

const inputClass =
  "w-full text-xs sm:text-sm bg-[#11100E] border border-[#35312B] rounded-md px-3 py-2 text-[#F2EEE6] placeholder:text-[#A7A096]/50 focus:outline-none focus:border-[#C9784A] transition-colors";

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-mono text-[#A7A096] block mb-1 font-medium">
        {label} {required && <span className="text-[#C9784A]">*</span>}{" "}
        {optional && <span className="text-[#A7A096]/60 font-normal">(Optional)</span>}
      </label>
      {children}
    </div>
  );
}
