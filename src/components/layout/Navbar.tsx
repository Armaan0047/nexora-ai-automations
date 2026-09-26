"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, COMPANY_DETAILS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, Sparkles } from "lucide-react";

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
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-nav py-2.5 px-4 sm:px-6 shadow-2xl"
            : "glass-nav py-3.5 px-5 sm:px-7 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Nexora Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px] shadow-[0_0_16px_rgba(59,130,246,0.35)] transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-[11px] bg-[#07090e] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
            <span className="text-base font-bold tracking-[0.2em] text-white font-sans">
              NEXORA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-300"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span>Available for projects</span>
            </div>
            <Button
              variant="primary"
              size="sm"
              withArrow
              href="#consultation"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="primary"
              size="sm"
              href="#consultation"
              className="text-xs px-3 py-1.5"
            >
              Start
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/15 bg-[#0C0F17]/98 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">
                {COMPANY_DETAILS.statusMessage}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10">
              <Button
                variant="accent"
                size="md"
                withArrow
                href="#consultation"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
