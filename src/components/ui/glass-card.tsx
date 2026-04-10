"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "hover" | "interactive";
  /** `dark` for dashboard; `light` for marketing pages. */
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
      "rounded-2xl border backdrop-blur-xl bg-white/[0.03] border-white/[0.08]";
    const baseLight =
      "rounded-2xl border backdrop-blur-xl bg-white/80 border-zinc-200/90 shadow-sm shadow-zinc-900/[0.04]";

    const variantStylesDark = {
      default: "",
      hover:
        "hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300",
      interactive:
        "hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-pointer",
    };

    const variantStylesLight = {
      default: "",
      hover:
        "hover:bg-white/95 hover:border-zinc-300/90 transition-all duration-300",
      interactive:
        "hover:bg-white hover:border-zinc-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/10 transition-all duration-300 cursor-pointer",
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
