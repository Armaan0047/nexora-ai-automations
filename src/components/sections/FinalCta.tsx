import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-surface-1/40">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="mb-6">
          <Badge variant="accent">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>LET&apos;S WORK TOGETHER</span>
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
          Ready to build a better website for your business?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
          Whether you need a brand-new company website, a redesign, an AI chatbot, or smart customer contact tools—tell us what you need and we will provide a clear, custom plan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            withArrow
            href="#consultation"
          >
            Tell Us What You Need
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="mailto:ai.nexora.automations@gmail.com"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Us Directly
          </Button>
        </div>

        <div className="mt-12 text-xs font-mono text-slate-500">
          NEXORA // MODERN WEBSITES & SMART TOOLS // BUILT AROUND YOUR REQUIREMENTS
        </div>
      </div>
    </section>
  );
}
