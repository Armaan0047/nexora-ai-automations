import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  badgeVariant?: "default" | "accent" | "status" | "demo";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  badgeVariant = "accent",
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
