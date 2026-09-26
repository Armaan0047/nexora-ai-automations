import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Mail } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#35312B] bg-[#161512]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <div className="mb-4">
          <Badge variant="accent">INITIATE COLLABORATION</Badge>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F2EEE6] font-normal tracking-tight leading-[1.15]">
          Ready to build a website that works harder for your business?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#A7A096] leading-relaxed max-w-xl">
          Tell us what you need and get a clear, practical plan for your next digital step.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            withArrow
            href="#contact"
          >
            Start a project
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="mailto:ai.nexora.automations@gmail.com"
          >
            <Mail className="w-3.5 h-3.5 mr-2 text-[#C9784A]" />
            Email Nexora directly
          </Button>
        </div>

        <div className="mt-12 pt-6 border-t border-[#35312B] text-xs font-mono text-[#A7A096]">
          Direct communication • 100% code ownership • Replies within 24 hours
        </div>
      </div>
    </section>
  );
}
