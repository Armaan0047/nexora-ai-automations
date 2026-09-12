"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, COMPANY_DETAILS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-xl border transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-background/95 backdrop-blur-md shadow-lg py-2.5 px-4 sm:px-6"
            : "border-white/10 bg-surface-1/90 backdrop-blur-sm py-3 px-5 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none" aria-label="Nexora Home">
            <div className="w-7 h-7 rounded-md bg-surface-2 border border-white/20 flex items-center justify-center transition-colors group-hover:border-blue-500/50">
              <span className="w-2 h-2 rounded-sm bg-blue-500 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-base font-semibold tracking-[0.18em] text-white font-sans">NEXORA</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Inquiries Active</span>
            </div>
            <Button variant="primary" size="sm" withArrow href="#consultation">Start Consultation</Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="primary" size="sm" href="#consultation" className="text-xs px-3 py-1.5">Consult</Button>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10" aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl">
          <div className="rounded-xl border border-white/15 bg-surface-1/95 backdrop-blur-xl p-5 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">{COMPANY_DETAILS.statusMessage}</span>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10">
              <Button variant="accent" size="md" withArrow href="#consultation" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Start Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
