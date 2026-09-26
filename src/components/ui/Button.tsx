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
    sm: "px-4 py-2 text-xs font-medium rounded-lg",
    md: "px-5 py-2.5 text-sm font-medium rounded-xl",
    lg: "px-7 py-3.5 text-base font-semibold rounded-xl",
  };

  const variantStyles = {
    primary:
      "bg-white text-[#07090e] font-semibold hover:bg-slate-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] border border-white active:scale-[0.98] shadow-md",
    accent:
      "bg-blue-600 text-white font-medium hover:bg-blue-500 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)] border border-blue-400/30 active:scale-[0.98] shadow-sm",
    secondary:
      "bg-surface-2/90 text-slate-200 font-medium hover:bg-surface-3 hover:text-white hover:border-white/30 border border-white/12 active:scale-[0.98] shadow-sm backdrop-blur-sm",
    ghost:
      "bg-transparent text-slate-400 font-medium hover:text-white hover:bg-white/[0.05]",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex items-center justify-center rounded-full bg-black/10 dark:bg-black/15 text-current p-1 ml-2 transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const combinedClasses = `group inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) return <a href={href} className={combinedClasses}>{content}</a>;
  return <button className={combinedClasses} {...props}>{content}</button>;
}
