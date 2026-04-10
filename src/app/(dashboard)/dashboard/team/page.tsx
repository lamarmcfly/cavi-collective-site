"use client";

import { useState, useEffect } from "react";
import { agents } from "@/data/agents";
import { divisions } from "@/data/divisions";
import { AgentCard } from "@/components/dashboard/agent-card";
import { Badge } from "@/components/ui/badge";
import { AgentStatus } from "@/types";
import { randomItem, randomBetween } from "@/lib/utils";
import { Users, Filter } from "lucide-react";

// Generate initial statuses
function generateStatuses(): Record<string, { status: AgentStatus; task?: string }> {
  const statuses: Record<string, { status: AgentStatus; task?: string }> = {};
  const tasks = [
    "Processing API request",
    "Analyzing code changes",
    "Generating report",
    "Updating documentation",
    "Running tests",
    "Deploying to staging",
    "Reviewing PR #342",
    "Syncing data",
    "Monitoring metrics",
    "Processing queue items",
  ];

  agents.forEach((agent) => {
    const rand = Math.random();
    let status: AgentStatus;
    if (rand < 0.35) {
      status = "active";
    } else if (rand < 0.8) {
      status = "idle";
    } else {
      status = "completed";
    }

    statuses[agent.id] = {
      status,
      task: status === "active" ? randomItem(tasks) : undefined,
    };
  });

  return statuses;
}

export default function TeamPage() {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, { status: AgentStatus; task?: string }>>(
    generateStatuses
  );

  // Update statuses periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setStatuses((prev) => {
        const newStatuses = { ...prev };
        // Randomly update 1-2 agents
        const count = randomBetween(1, 2);
        for (let i = 0; i < count; i++) {
          const agent = randomItem(agents);
          const tasks = [
            "Processing API request",
            "Analyzing code changes",
            "Generating report",
            "Updating documentation",
            "Running tests",
          ];
          const rand = Math.random();
          let status: AgentStatus;
          if (rand < 0.35) {
            status = "active";
          } else if (rand < 0.8) {
            status = "idle";
          } else {
            status = "completed";
          }
          newStatuses[agent.id] = {
            status,
            task: status === "active" ? randomItem(tasks) : undefined,
          };
        }
        return newStatuses;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredAgents = selectedDivision
    ? agents.filter((a) => a.divisionId === selectedDivision)
    : agents;

  const activeCount = Object.values(statuses).filter((s) => s.status === "active").length;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
            My Team
          </h1>
          <p className="mt-1 text-zinc-400">
            {agents.length} agents across {divisions.length} divisions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="success" dot dotColor="#22C55E">
            {activeCount} Active
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedDivision(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedDivision === null
              ? "bg-white/10 text-white"
              : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
          }`}
        >
          All Divisions
        </button>
        {divisions.map((division) => (
          <button
            key={division.id}
            onClick={() => setSelectedDivision(division.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedDivision === division.id
                ? "bg-white/10 text-white"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
            style={{
              borderColor:
                selectedDivision === division.id
                  ? division.color.primary
                  : undefined,
              borderWidth: selectedDivision === division.id ? "1px" : undefined,
            }}
          >
            {division.shortName}
          </button>
        ))}
      </div>

      {/* Agent Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            status={statuses[agent.id]?.status || "idle"}
            currentTask={statuses[agent.id]?.task}
          />
        ))}
      </div>
    </div>
  );
}
