import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
}

export function Button({ children, variant = "primary", size = "md", withArrow = false, href, className = "", ...props }: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variantStyles = {
    primary: "bg-[#eeeae1] text-[#121210] font-medium hover:bg-[#d9d3c8] active:scale-[0.98] border border-[#eeeae1] shadow-sm",
    accent: "bg-[#b36f56] text-[#f8f4ed] font-medium hover:bg-[#955744] active:scale-[0.98] border border-[#b36f56] shadow-sm",
    secondary: "bg-transparent text-[#ddd7cc] font-medium hover:bg-white/[0.05] hover:text-[#eeeae1] border border-white/15 active:scale-[0.98]",
    ghost: "bg-transparent text-[#a59d91] font-medium hover:text-[#eeeae1] hover:bg-white/[0.03]",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex items-center justify-center rounded-full bg-black/10 text-current p-1 ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const combinedClasses = `group inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) return <a href={href} className={combinedClasses}>{content}</a>;
  return <button className={combinedClasses} {...props}>{content}</button>;
}
