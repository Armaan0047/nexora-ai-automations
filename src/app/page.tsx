import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { CapabilitiesOverview } from "@/components/sections/CapabilitiesOverview";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyNexora } from "@/components/sections/WhyNexora";
import { SolutionsMatrix } from "@/components/sections/SolutionsMatrix";
import { RequirementForm } from "@/components/sections/RequirementForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1 flex flex-col">
        {/* Section 01: Hero with Connected Architecture Visual */}
        <Hero />

        {/* Section 02: Core Value & Capabilities */}
        <CapabilitiesOverview />

        {/* Section 03: The Operational Problem & Diagnostic */}
        <ProblemSection />

        {/* Section 04: AI Websites with Interactive Viewport Preview */}
        <WebsitesSection />

        {/* Section 05: AI Agents with Live Workflow Playground */}
        <AgentsSection />

        {/* Section 06: Technical Architecture (6-Stage Pipeline) */}
        <ArchitectureSection />

        {/* Section 07: How It Works / Engineering Protocol */}
        <HowItWorks />

        {/* Section 08: Why Nexora (Engineering & Commercial Rigor) */}
        <WhyNexora />

        {/* Section 09: Combined Services & Solutions Matrix */}
        <SolutionsMatrix />

        {/* Section 10: Technical Consultation & Requirement Form */}
        <RequirementForm />

        {/* Section 11: Final Closing Statement & Direct Action */}
        <FinalCta />
      </main>

      {/* Section 12: Production Footer */}
      <Footer />
    </div>
  );
}
