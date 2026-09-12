import { COMPANY_DETAILS } from "@/data/navigation";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-base py-16 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-surface-2 border border-white/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-sm bg-blue-500" />
              </div>
              <span className="text-base font-semibold tracking-wider text-white font-sans">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-blue-400">
              {COMPANY_DETAILS.tagline}
            </p>
            <p className="mt-4 text-xs text-slate-400 max-w-sm leading-relaxed">
              Bespoke AI websites and autonomous agent pipelines engineered for modern businesses. Custom requirement-based solutions with zero rigid packages.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full border border-white/10 bg-surface-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{COMPANY_DETAILS.statusMessage}</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Core Disciplines */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                Core Disciplines
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Enterprise Business Websites
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Conversion Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Website Architecture Redesigns
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Website Conversational Agents
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    24/7 Customer Support Agents
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Lead Qualification Runtimes
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Architecture & Methodology */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                Architecture & Standards
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#architecture" className="hover:text-white transition-colors">
                    System Topology
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    4-Phase Engineering Protocol
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-white transition-colors">
                    Requirement-Based Model
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">
                    Deterministic RAG Guardrails
                  </span>
                </li>
                <li>
                  <span className="text-slate-400">
                    WCAG 2.2 AA Accessibility
                  </span>
                </li>
                <li>
                  <span className="text-slate-400">
                    100% Code Ownership
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Channels */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                Direct Contact
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="mailto:ai.nexora.automations@gmail.com"
                    className="hover:text-white transition-colors flex items-center gap-1 text-slate-300"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>ai.nexora.automations@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    Request Technical Scope
                  </a>
                </li>
                <li className="pt-2 text-slate-400 font-mono text-[11px]">
                  Global Edge Infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {COMPANY_DETAILS.year} {COMPANY_DETAILS.name} Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-400">
              Engineered with React 19 & Next.js 15
            </span>
            <a
              href="#top"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
