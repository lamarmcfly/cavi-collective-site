"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {tag && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-700">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight",
          "font-[family-name:var(--font-inter)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
