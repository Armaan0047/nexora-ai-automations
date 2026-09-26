import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-medium rounded-md",
    md: "px-4.5 py-2.5 text-sm font-medium rounded-md",
    lg: "px-6 py-3 text-sm sm:text-base font-medium rounded-md",
  };

  const variantStyles = {
    primary:
      "bg-[#C9784A] text-[#11100E] font-medium hover:bg-[#E09A68] border border-[#C9784A] shadow-sm active:scale-[0.98] transition-colors",
    accent:
      "bg-[#C9784A] text-[#11100E] font-medium hover:bg-[#E09A68] border border-[#C9784A] shadow-sm active:scale-[0.98] transition-colors",
    secondary:
      "bg-transparent text-[#F2EEE6] font-medium hover:bg-[#1A1916] hover:border-[#4A453D] hover:text-white border border-[#35312B] active:scale-[0.98] transition-colors",
    ghost:
      "bg-transparent text-[#A7A096] font-medium hover:text-[#F2EEE6] hover:bg-[#1A1916] border border-transparent transition-colors",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex items-center justify-center text-current ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const combinedClasses = `group inline-flex items-center justify-center transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) return <a href={href} className={combinedClasses}>{content}</a>;
  return <button className={combinedClasses} {...props}>{content}</button>;
}
