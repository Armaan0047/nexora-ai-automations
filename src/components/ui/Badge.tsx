import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "status" | "demo";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wide rounded-full border transition-colors";

  const variantStyles = {
    default:
      "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20",
    accent:
      "border-blue-500/30 bg-blue-500/[0.08] text-blue-400 font-medium",
    status:
      "border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 font-medium",
    demo:
      "border-sky-500/30 bg-sky-500/[0.08] text-sky-400 font-medium tracking-wider uppercase",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
