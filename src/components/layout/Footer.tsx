import React from "react";
import { COMPANY_DETAILS, NAV_ITEMS } from "@/data/navigation";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#35312B] bg-[#11100E] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-[#A7A096]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#35312B]">
          {/* Brand & Studio Descriptor Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded bg-[#1A1916] border border-[#35312B] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-[2px] bg-[#C9784A]" />
              </div>
              <span className="text-base font-semibold tracking-wider text-[#F2EEE6] font-sans">
                {COMPANY_DETAILS.name}
              </span>
              <span className="text-xs font-mono text-[#A7A096]">
                / {COMPANY_DETAILS.descriptor}
              </span>
            </div>

            <p className="text-xs text-[#A7A096] max-w-sm leading-relaxed">
              Boutique digital studio building custom business websites, high-conversion landing pages, and practical automations for growing companies.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A7A096]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
              <span>{COMPANY_DETAILS.responseTime}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase text-[#F2EEE6] font-semibold block mb-3 tracking-wider">
              Studio
            </span>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#A7A096] hover:text-[#F2EEE6] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries Column */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase text-[#F2EEE6] font-semibold block mb-3 tracking-wider">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${COMPANY_DETAILS.contactEmail}`}
                  className="text-[#F2EEE6] hover:text-[#C9784A] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C9784A]" />
                  <span>{COMPANY_DETAILS.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#C9784A] hover:underline inline-flex items-center gap-1 font-medium pt-1"
                >
                  <span>Submit project requirements</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#A7A096]/80 font-mono">
                100% client code, domain, and data ownership.
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A096]/70">
          <div>
            © {COMPANY_DETAILS.year} {COMPANY_DETAILS.name} Digital Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">
              Crafted with Next.js &amp; Tailwind
            </span>
            <a
              href="#top"
              className="text-[#A7A096] hover:text-[#F2EEE6] transition-colors flex items-center gap-1"
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
