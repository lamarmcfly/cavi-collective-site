"use client";

import { cn } from "@/lib/utils";
import { AgentStatus } from "@/types";

interface StatusDotProps {
  status: AgentStatus;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

const statusColors: Record<AgentStatus, string> = {
  active: "bg-green-500",
  idle: "bg-zinc-500",
  completed: "bg-blue-500",
};

const statusLabels: Record<AgentStatus, string> = {
  active: "Active",
  idle: "Idle",
  completed: "Completed",
};

const sizeClasses = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
};

export function StatusDot({
  status,
  size = "md",
  pulse = false,
  className,
}: StatusDotProps) {
  return (
    <span
      className={cn(
        "relative inline-flex rounded-full",
        sizeClasses[size],
        statusColors[status],
        className
      )}
      title={statusLabels[status]}
    >
      {pulse && status === "active" && (
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
            statusColors[status]
          )}
        />
      )}
    </span>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: AgentStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        status === "active" && "text-green-400",
        status === "idle" && "text-zinc-400",
        status === "completed" && "text-blue-400",
        className
      )}
    >
      <StatusDot status={status} size="sm" pulse={status === "active"} />
      {statusLabels[status]}
    </span>
  );
}
