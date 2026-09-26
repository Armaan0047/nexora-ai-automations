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
              Custom modern websites, landing pages, AI chatbots, and business automation built around your specific business requirements.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full border border-white/10 bg-surface-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{COMPANY_DETAILS.statusMessage}</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                Our Services
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Business & Company Websites
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    High-Converting Landing Pages
                  </a>
                </li>
                <li>
                  <a href="#websites" className="hover:text-white transition-colors">
                    Website Redesigns & Updates
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    AI Chatbots & Support Assistants
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Direct WhatsApp Integration
                  </a>
                </li>
                <li>
                  <a href="#agents" className="hover:text-white transition-colors">
                    Lead Intake & Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: How We Work */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                How We Work
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#capabilities" className="hover:text-white transition-colors">
                    Custom Quote by Requirement
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    4-Phase Delivery Process
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Fast & Mobile-Friendly
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    100% Code & Content Ownership
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Accurate Business FAQ Info
                  </a>
                </li>
                <li>
                  <a href="#why-nexora" className="hover:text-white transition-colors">
                    Reliable Ongoing Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-3">
                Get In Touch
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
                    Request a Free Quote
                  </a>
                </li>
                <li className="pt-2 text-slate-400 font-mono text-[11px]">
                  Available for new projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {COMPANY_DETAILS.year} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-400">
              Modern Websites & Digital Solutions
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
