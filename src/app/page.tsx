import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
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

      {/* Main Content Stream */}
      <main className="flex-1 flex flex-col">
        {/* 02. Studio Hero with Art-Directed Visual */}
        <Hero />

        {/* 03. Restrained Credibility Strip */}
        <CredibilityStrip />

        {/* 04. Selected Work & Capability Showcase (3 Case Study Concepts) */}
        <ShowcaseSection />

        {/* 05. Focused Studio Services (4 Core Offerings) */}
        <ServicesSection />

        {/* 06. How It Works (4 Concise Stages) */}
        <HowItWorks />

        {/* 07. Why Nexora (Direct & Honest Studio Strengths) */}
        <WhyNexora />

        {/* 08. Honest Proof & Trust ("What We Optimise For") */}
        <TrustSection />

        {/* 09. Project Intake & Consultation Form */}
        <RequirementForm />

        {/* 10. Final Call to Action */}
        <FinalCta />
      </main>

      {/* 11. Minimal Studio Footer */}
      <Footer />
    </div>
  );
}
