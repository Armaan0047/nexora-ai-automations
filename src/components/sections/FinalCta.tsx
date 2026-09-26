import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden ambient-glow-bottom">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="mb-6">
          <Badge variant="accent">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>LET&apos;S WORK TOGETHER</span>
          </Badge>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-sans">
          Ready to build a website that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
            actually grows your business?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
          Whether you need a brand-new business website, a complete redesign, an AI chatbot, or smart customer contact tools—tell us what you need and get a clear, custom quotation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            withArrow
            href="#consultation"
          >
            Start Your Project
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="mailto:ai.nexora.automations@gmail.com"
          >
            <Mail className="w-4 h-4 mr-2 text-blue-400" />
            Email Us Directly
          </Button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 text-xs font-mono text-slate-500 tracking-wider">
          NEXORA // MODERN BUSINESS WEBSITES &amp; SMART DIGITAL SOLUTIONS
        </div>
      </div>
    </section>
  );
}
