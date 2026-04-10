"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-white",
        primary:
          "border border-indigo-200/90 bg-indigo-100 text-indigo-900",
        secondary: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
        success: "bg-green-500/20 text-green-400 border border-green-500/30",
        warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        danger: "bg-red-500/20 text-red-400 border border-red-500/30",
        outline: "border border-zinc-300 text-zinc-600 bg-white/80",
        // Division-specific variants
        executive: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
        engineering: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        marketing: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
        media: "bg-teal-500/20 text-teal-400 border border-teal-500/30",
        talent: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        "project-ops": "bg-red-500/20 text-red-400 border border-red-500/30",
        research: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
        infrastructure: "bg-lime-500/20 text-lime-400 border border-lime-500/30",
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

// Division badge helper
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
