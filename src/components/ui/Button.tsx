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
    primary: "bg-[#1b1a17] text-[#f7f5ef] font-medium hover:bg-[#302d28] active:scale-[0.98] border border-[#1b1a17] shadow-sm",
    accent: "bg-[#9a5b45] text-white font-medium hover:bg-[#7f4736] active:scale-[0.98] border border-[#9a5b45] shadow-sm",
    secondary: "bg-transparent text-[#2f2d28] font-medium hover:bg-black/[0.04] hover:text-[#1b1a17] border border-black/15 active:scale-[0.98]",
    ghost: "bg-transparent text-[#68635b] font-medium hover:text-[#1b1a17] hover:bg-black/[0.03]",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex items-center justify-center rounded-full bg-white/10 text-current p-1 ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const combinedClasses = `group inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) return <a href={href} className={combinedClasses}>{content}</a>;
  return <button className={combinedClasses} {...props}>{content}</button>;
}
