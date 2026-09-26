import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StudioVisual } from "./StudioVisual";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#35312B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Supporting Copy, and Honest Trust Note */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2.5">
              <Badge variant="accent">BOUTIQUE DIGITAL STUDIO</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-serif font-normal text-[#F2EEE6] tracking-tight leading-[1.16]">
              Websites that make your business easier to trust—and easier to contact.
            </h1>

            <p className="text-sm sm:text-base text-[#A7A096] font-normal leading-relaxed max-w-xl">
              Nexora builds thoughtful business websites and practical automations that help you capture better inquiries, answer common questions, and reduce manual follow-up.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
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

            {/* Honest Trust Note */}
            <div className="pt-3 border-t border-[#2A2722] flex items-start gap-2.5 text-xs text-[#A7A096] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#8FA58A] shrink-0 mt-0.5" />
              <span>
                Every project is scoped around your business, with clear deliverables, direct communication, and full ownership after launch.
              </span>
            </div>
          </div>

          {/* Right Column: Illustrative Preview Visual */}
          <div className="lg:col-span-6 lg:pl-6">
            <StudioVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
