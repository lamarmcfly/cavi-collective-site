"use client";

import { cn } from "@/lib/utils";

interface FloatingOrbsProps {
  className?: string;
  variant?: "hero" | "subtle";
}

export function FloatingOrbs({ className, variant = "hero" }: FloatingOrbsProps) {
  if (variant === "subtle") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div
          className="absolute w-[280px] h-[280px] rounded-full blur-[90px] opacity-[0.18] animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(13, 148, 136, 0.45) 0%, transparent 72%)",
            top: "10%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-[220px] h-[220px] rounded-full blur-[72px] opacity-[0.12] animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, transparent 72%)",
            bottom: "20%",
            left: "5%",
            animationDelay: "5s",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[130px] opacity-[0.22] animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.35) 0%, transparent 70%)",
          top: "-12%",
          right: "-8%",
        }}
      />

      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-[110px] opacity-[0.16] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 116, 144, 0.32) 0%, transparent 70%)",
          top: "28%",
          left: "-12%",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute w-[320px] h-[320px] rounded-full blur-[90px] opacity-[0.12] animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)",
          bottom: "8%",
          left: "38%",
          animationDelay: "7s",
        }}
      />

      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[100px] opacity-[0.1] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 116, 139, 0.22) 0%, transparent 70%)",
          top: "4%",
          left: "18%",
          animationDelay: "10s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24, 24, 27, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24, 24, 27, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
