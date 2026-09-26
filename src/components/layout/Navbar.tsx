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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      <div
        className={`w-full border-b transition-colors duration-200 ${
          scrolled
            ? "bg-[#11100E]/95 backdrop-blur-md border-[#35312B]"
            : "bg-[#11100E]/80 backdrop-blur-sm border-[#35312B]/70"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo & Studio Descriptor */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Nexora Home"
          >
            <div className="w-6 h-6 rounded bg-[#1A1916] border border-[#35312B] flex items-center justify-center">
              <span className="w-2 h-2 rounded-[2px] bg-[#C9784A]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold tracking-wider text-[#F2EEE6] font-sans">
                {COMPANY_DETAILS.name}
              </span>
              <span className="hidden sm:inline text-[11px] font-mono text-[#A7A096] tracking-tight">
                / {COMPANY_DETAILS.descriptor}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-normal text-[#A7A096]"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#A7A096] hover:text-[#F2EEE6] transition-colors duration-150 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#A7A096]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
              <span>Available</span>
            </div>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
            >
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="text-xs px-3 py-1.5"
            >
              Start a project
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-[#A7A096] hover:text-[#F2EEE6] hover:bg-[#1A1916] border border-[#35312B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F2EEE6]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F2EEE6]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#35312B] bg-[#11100E] px-4 py-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#35312B]">
            <span className="text-xs font-mono text-[#A7A096]">
              {COMPANY_DETAILS.descriptor} • {COMPANY_DETAILS.statusMessage}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#8FA58A]" />
          </div>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm text-[#F2EEE6] hover:text-[#C9784A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-3 border-t border-[#35312B]">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
