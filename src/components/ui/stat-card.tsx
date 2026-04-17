"use client";

import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  changeLabel,
  icon,
  className,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const isNeutral = change === 0;

  return (
    <GlassCard
      appearance="dark"
      className={cn("relative overflow-hidden", className)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-300">{label}</p>
          <p className="mt-2 text-3xl font-bold text-white font-[family-name:var(--font-inter)]">
            {value}
          </p>
          {change !== undefined && (
            <div className="mt-2 flex items-center gap-1">
              {isPositive && <TrendingUp className="w-4 h-4 text-green-400" />}
              {isNegative && <TrendingDown className="w-4 h-4 text-red-400" />}
              {isNeutral && <Minus className="w-4 h-4 text-slate-300" />}
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive && "text-green-400",
                  isNegative && "text-red-400",
                  isNeutral && "text-slate-300"
                )}
              >
                {isPositive && "+"}
                {change}%
              </span>
              {changeLabel && (
                <span className="text-sm text-slate-400">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div className="p-2 rounded-xl bg-slate-800/70 text-slate-300">{icon}</div>
        )}
      </div>
    </GlassCard>
  );
}

// Big stat for hero sections
interface BigStatProps {
  value: string | number;
  label: string;
  className?: string;
}

export function BigStat({ value, label, className }: BigStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-inter)]">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-300 uppercase tracking-wider">{label}</p>
    </div>
  );
}
