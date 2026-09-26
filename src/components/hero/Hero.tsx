import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StudioVisual } from "./StudioVisual";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <Badge variant="accent">BOUTIQUE DIGITAL STUDIO</Badge>
              <span className="text-xs font-mono text-[#A7A096]">Web &amp; Automation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif font-normal text-[#F2EEE6] tracking-tight leading-[1.15]">
              Websites that make your business easier to trust—and easier to contact.
            </h1>

            <p className="text-base sm:text-lg text-[#A7A096] font-normal leading-relaxed max-w-xl">
              Nexora builds fast, thoughtful business websites and practical automations that turn more visitors into real conversations.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                withArrow
              >
                Start a project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#process"
              >
                See how we work
              </Button>
            </div>

            {/* Quick Context Sub-row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A7A096]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
                Handcrafted Next.js
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
                WhatsApp &amp; AI Integration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
                Clear fixed quotes
              </span>
            </div>
          </div>

          {/* Right Column: Art-Directed Realistic Studio Visual */}
          <div className="lg:col-span-6 lg:pl-6">
            <StudioVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
