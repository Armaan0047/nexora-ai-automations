import React from "react";

const STANDARDS = [
  {
    num: "01",
    title: "Custom-built",
    desc: "No slow generic themes or bloated page builders. Hand-coded for speed and reliability.",
  },
  {
    num: "02",
    title: "Mobile-first",
    desc: "Engineered to load instantly on 4G/5G mobile devices where your clients actually browse.",
  },
  {
    num: "03",
    title: "Direct communication",
    desc: "Work directly with the builder solving your problem—no junior account managers or telephone game.",
  },
  {
    num: "04",
    title: "100% client ownership",
    desc: "You own your codebase, assets, domain, and data completely. No lock-in, ever.",
  },
];

export function CredibilityStrip() {
  return (
    <section className="border-b border-[#35312B] bg-[#161512]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STANDARDS.map((item) => (
            <div
              key={item.num}
              className="p-4 sm:p-5 rounded-lg bg-[#1A1916] border border-[#35312B] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#C9784A] block mb-2 font-medium">
                  {item.num}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-[#F2EEE6] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#A7A096] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
