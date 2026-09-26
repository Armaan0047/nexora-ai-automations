import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "status" | "demo" | "brand";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider rounded-full border transition-all duration-200 select-none";

  const variantStyles = {
    default:
      "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 shadow-sm",
    accent:
      "border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium shadow-[0_0_14px_rgba(59,130,246,0.18)]",
    status:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium shadow-[0_0_14px_rgba(16,185,129,0.18)]",
    demo:
      "border-sky-500/30 bg-sky-500/10 text-sky-400 font-medium tracking-wider uppercase shadow-[0_0_14px_rgba(14,165,233,0.15)]",
    brand:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-medium shadow-[0_0_14px_rgba(99,102,241,0.18)]",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
