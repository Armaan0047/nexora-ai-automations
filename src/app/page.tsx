import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyNexora } from "@/components/sections/WhyNexora";
import { TrustSection } from "@/components/sections/TrustSection";
import { RequirementForm } from "@/components/sections/RequirementForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-[#F2EEE6] flex flex-col font-sans selection:bg-[#C9784A]/30 selection:text-[#F2EEE6]">
      {/* 01. Minimal Studio Navigation */}
      <Navbar />

      {/* Main Content Stream (15-20% Shorter, Focused, Non-Repetitive) */}
      <main className="flex-1 flex flex-col">
        {/* 02. Studio Hero with Honest Trust Note & Illustrative Preview */}
        <Hero />

        {/* 03. Selected Work & Capability Showcase + Real Proof Placeholder */}
        <ShowcaseSection />

        {/* 04. Focused Services (What It Is, Who It Is For, Outcome, CTA) */}
        <ServicesSection />

        {/* 05. How It Works (4 Concise Stages with Direct Outcomes) */}
        <HowItWorks />

        {/* 06. Why Nexora (6 Asymmetric Studio Principles) */}
        <WhyNexora />

        {/* 07. Business Outcomes & Craftsmanship Principle */}
        <TrustSection />

        {/* 08. Project Intake & Consultation Form */}
        <RequirementForm />

        {/* 09. Final Call to Action */}
        <FinalCta />
      </main>

      {/* 10. Minimal Studio Footer */}
      <Footer />
    </div>
  );
}
