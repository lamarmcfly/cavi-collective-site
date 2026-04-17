"use client";

import { Agent, AgentStatus } from "@/types";
import { GlassCard } from "@/components/ui/glass-card";
import { DivisionBadge } from "@/components/ui/badge";
import { StatusDot, StatusBadge } from "@/components/ui/status-dot";
import { getDivisionById } from "@/data/divisions";

interface AgentCardProps {
  agent: Agent;
  status: AgentStatus;
  currentTask?: string;
}

export function AgentCard({ agent, status, currentTask }: AgentCardProps) {
  const division = getDivisionById(agent.divisionId);

  return (
    <GlassCard variant="hover" className="h-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium relative"
            style={{
              backgroundColor: division ? `${division.color.primary}20` : "#3B82F620",
              color: division?.color.primary || "#3B82F6",
            }}
          >
            {agent.name.charAt(0)}
            <StatusDot
              status={status}
              size="sm"
              pulse={status === "active"}
              className="absolute -bottom-0.5 -right-0.5 ring-2 ring-[#1A1A1D]"
            />
          </div>
          <div>
            <h3 className="font-medium text-slate-100">{agent.name}</h3>
            <p className="text-sm text-slate-300">{agent.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <DivisionBadge divisionId={agent.divisionId} size="sm">
          {division?.shortName || agent.divisionId}
        </DivisionBadge>
      </div>

      {currentTask && status === "active" && (
        <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/80">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Current Task
          </p>
          <p className="text-sm text-slate-200 line-clamp-2">{currentTask}</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-700/80">
        <StatusBadge status={status} />
      </div>
    </GlassCard>
  );
}
