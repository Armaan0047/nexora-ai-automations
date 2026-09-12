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
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variantStyles = {
    primary:
      "bg-white text-slate-950 font-medium hover:bg-slate-200 active:scale-[0.98] border border-white/20 shadow-sm",
    accent:
      "bg-blue-600 text-white font-medium hover:bg-blue-500 active:scale-[0.98] border border-blue-400/30 shadow-sm",
    secondary:
      "bg-white/[0.04] text-slate-200 font-medium hover:bg-white/[0.08] hover:text-white border border-white/10 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-400 font-medium hover:text-white hover:bg-white/[0.04]",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          className={`inline-flex items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 ${
            variant === "primary"
              ? "bg-slate-900/10 text-slate-900 p-1 ml-2"
              : variant === "accent"
              ? "bg-white/20 text-white p-1 ml-2"
              : "bg-white/10 text-slate-300 p-1 ml-2"
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  const combinedClasses = `group inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
