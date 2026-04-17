"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-100 border border-slate-700",
        primary: "border border-blue-200 bg-blue-50 text-blue-700",
        secondary: "bg-violet-100 text-violet-700 border border-violet-200",
        success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        warning: "bg-amber-100 text-amber-700 border border-amber-200",
        danger: "bg-red-100 text-red-700 border border-red-200",
        outline: "border border-slate-300 text-slate-600 bg-white/90",
        executive: "bg-indigo-100 text-indigo-700 border border-indigo-200",
        engineering: "bg-blue-100 text-blue-700 border border-blue-200",
        marketing: "bg-purple-100 text-purple-700 border border-purple-200",
        media: "bg-teal-100 text-teal-700 border border-teal-200",
        talent: "bg-amber-100 text-amber-700 border border-amber-200",
        "project-ops": "bg-red-100 text-red-700 border border-red-200",
        research: "bg-cyan-100 text-cyan-700 border border-cyan-200",
        infrastructure: "bg-lime-100 text-lime-700 border border-lime-200",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-1",
        lg: "text-sm px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: string;
}

function Badge({
  className,
  variant,
  size,
  dot,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full mr-1.5"
          style={{ backgroundColor: dotColor || "currentColor" }}
        />
      )}
      {children}
    </span>
  );
}

function DivisionBadge({
  divisionId,
  children,
  ...props
}: BadgeProps & { divisionId: string }) {
  const divisionVariants: Record<string, BadgeProps["variant"]> = {
    "executive-ops": "executive",
    engineering: "engineering",
    marketing: "marketing",
    media: "media",
    talent: "talent",
    "project-ops": "project-ops",
    research: "research",
    infrastructure: "infrastructure",
  };

  return (
    <Badge variant={divisionVariants[divisionId] || "default"} {...props}>
      {children}
    </Badge>
  );
}

export { Badge, DivisionBadge, badgeVariants };
