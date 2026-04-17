"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "hover" | "interactive";
  appearance?: "dark" | "light";
  accentColor?: string;
  noPadding?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = "default",
      appearance = "dark",
      accentColor,
      noPadding = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseDark =
      "rounded-2xl border bg-slate-900/55 border-slate-700/60 shadow-lg shadow-black/20";
    const baseLight =
      "rounded-2xl border bg-white/88 border-slate-200/80 shadow-sm shadow-slate-900/[0.06]";

    const variantStylesDark = {
      default: "",
      hover:
        "hover:bg-slate-800/65 hover:border-slate-600/70 transition-all duration-300",
      interactive:
        "hover:bg-slate-800/65 hover:border-slate-500/70 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 cursor-pointer",
    };

    const variantStylesLight = {
      default: "",
      hover:
        "hover:bg-white hover:border-slate-300/90 transition-all duration-300",
      interactive:
        "hover:bg-white hover:border-blue-200/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 cursor-pointer",
    };

    const variantStyles =
      appearance === "light" ? variantStylesLight : variantStylesDark;

    const accentStyle = accentColor
      ? { borderLeftColor: accentColor, borderLeftWidth: "3px" }
      : {};

    return (
      <motion.div
        ref={ref}
        className={cn(
          appearance === "light" ? baseLight : baseDark,
          variantStyles[variant],
          !noPadding && "p-6",
          className
        )}
        style={accentStyle}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
