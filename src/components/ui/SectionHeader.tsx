import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  badgeVariant?: "default" | "accent" | "status" | "demo" | "brand";
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
        <div className="mb-3.5">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F2EEE6] font-normal tracking-tight leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#A7A096] font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
