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
    "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono tracking-wider rounded border select-none transition-colors";

  const variantStyles = {
    default:
      "border-[#35312B] bg-[#1A1916] text-[#A7A096]",
    accent:
      "border-[#C9784A]/30 bg-[#C9784A]/10 text-[#C9784A]",
    status:
      "border-[#8FA58A]/30 bg-[#8FA58A]/10 text-[#8FA58A]",
    demo:
      "border-[#35312B] bg-[#24221E] text-[#A7A096] uppercase",
    brand:
      "border-[#C9784A]/40 bg-[#1A1916] text-[#F2EEE6]",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === "status" && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A] inline-block" />
      )}
      {children}
    </span>
  );
}
