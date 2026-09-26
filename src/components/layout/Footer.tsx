import { COMPANY_DETAILS } from "@/data/navigation";
import { ArrowUpRight, Mail, Sparkles, Globe, Bot, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070B] py-16 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px] shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full rounded-[7px] bg-[#07090e] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-sm bg-blue-500" />
                </div>
              </div>
              <span className="text-base font-bold tracking-[0.2em] text-white font-sans">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-blue-400 font-medium">
              {COMPANY_DETAILS.tagline}
            </p>
            <p className="mt-4 text-xs text-slate-400 max-w-sm leading-relaxed">
              Custom business websites, landing pages, website redesigns, AI chatbots, and workflow automation engineered for real business growth.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-300 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{COMPANY_DETAILS.statusMessage}</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <span className="text-xs font-mono uppercase text-white font-semibold block mb-3.5 tracking-wider">
                Services
              </span>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Business Websites
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Landing Pages &amp; Portfolios
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Website Redesigns &amp; Speed
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Website AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Direct WhatsApp Integration
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Customer FAQ Hubs &amp; Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: How We Work */}
            <div>
              <span className="text-xs font-mono uppercase text-white font-semibold block mb-3.5 tracking-wider">
                Standards
              </span>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#capabilities" className="hover:text-white transition-colors">
                    Custom Scope &amp; Quote
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    4-Phase Delivery Process
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Mobile-First Responsiveness
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    100% Code &amp; Asset Ownership
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Verified Accurate Business Info
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Direct Builder Communication
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <span className="text-xs font-mono uppercase text-white font-semibold block mb-3.5 tracking-wider">
                Get In Touch
              </span>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="mailto:ai.nexora.automations@gmail.com"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>ai.nexora.automations@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors inline-flex items-center gap-1 text-blue-400 font-medium">
                    <span>Request a Custom Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li className="pt-2 text-slate-500 font-mono text-[11px]">
                  Available for new client projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {COMPANY_DETAILS.year} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-400">
              Modern Websites &amp; Digital Solutions
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
