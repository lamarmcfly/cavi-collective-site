"use client";

import { useState, useEffect } from "react";
import { generateAnalytics } from "@/data/fake-analytics";
import { AnalyticsData } from "@/types";
import { GlassCard } from "@/components/ui/glass-card";
import { StatCard } from "@/components/ui/stat-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  CheckCircle2,
  Clock,
  Target,
  Users,
  TrendingUp,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    setData(generateAnalytics());
  }, []);

  if (!data) {
    return (
      <div className="p-6 lg:p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 bg-slate-800/70 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-slate-800/70 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
            Analytics
          </h1>
          <p className="mt-1 text-slate-300">
            Performance metrics and insights
          </p>
        </div>
        <Button variant="secondary" size="md">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Tasks"
          value={data.summary.totalTasks.toLocaleString()}
          change={data.summary.changeFromLastWeek.tasks}
          changeLabel="vs last week"
          icon={<CheckCircle2 className="w-5 h-5" />}
        />
        <StatCard
          label="Tasks This Week"
          value={data.summary.tasksThisWeek.toLocaleString()}
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatCard
          label="Hours Saved"
          value={`${data.summary.timeSavedHours}h`}
          change={data.summary.changeFromLastWeek.timeSaved}
          changeLabel="vs last week"
          icon={<Clock className="w-5 h-5" />}
        />
        <StatCard
          label="Accuracy Rate"
          value={`${data.summary.accuracyRate}%`}
          change={data.summary.changeFromLastWeek.accuracy}
          changeLabel="vs last week"
          icon={<Target className="w-5 h-5" />}
        />
      </div>

      {/* Charts Row */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks Over Time */}
        <GlassCard>
          <h3 className="text-lg font-semibold text-white">Tasks Over Time</h3>
          <p className="text-sm text-zinc-400">Last 7 days</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.tasksByDay}>
                <XAxis
                  dataKey="label"
                  stroke="#71717A"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#71717A"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1A1D",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#A1A1AA" }}
                />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Tasks by Division */}
        <GlassCard>
          <h3 className="text-lg font-semibold text-white">Tasks by Division</h3>
          <p className="text-sm text-zinc-400">Distribution this week</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.tasksByDivision} layout="vertical">
                <XAxis type="number" stroke="#71717A" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  dataKey="divisionName"
                  type="category"
                  stroke="#71717A"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  width={80}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1A1D",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#A1A1AA" }}
                />
                <Bar dataKey="tasks" radius={[0, 4, 4, 0]}>
                  {data.tasksByDivision.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      {/* Division Breakdown */}
      <div className="mt-8">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Division Contribution
              </h3>
              <p className="text-sm text-zinc-400">Task distribution breakdown</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.tasksByDivision.slice(0, 8).map((division) => (
              <div
                key={division.divisionId}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: division.color }}
                  />
                  <span className="text-sm text-slate-300">
                    {division.divisionName}
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
                  {division.tasks}
                </p>
                <p className="text-xs text-zinc-500">{division.percentage}% of total</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
