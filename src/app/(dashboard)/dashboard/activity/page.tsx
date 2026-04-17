"use client";

import { useState, useEffect, useRef } from "react";
import { Activity } from "@/types";
import { generateActivityBatch, generateRealtimeActivity } from "@/data/fake-activity";
import { divisions } from "@/data/divisions";
import { GlassCard } from "@/components/ui/glass-card";
import { DivisionBadge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import { Activity as ActivityIcon, Radio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ActivityPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize with batch data
  useEffect(() => {
    setActivities(generateActivityBatch(50));
  }, []);

  // Add new activities in real-time
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newActivity = generateRealtimeActivity(selectedDivision || undefined);
      setActivities((prev) => {
        const updated = [newActivity, ...prev].slice(0, 100);
        return updated;
      });
    }, Math.random() * 5000 + 3000); // 3-8 seconds

    return () => clearInterval(interval);
  }, [isLive, selectedDivision]);

  const filteredActivities = selectedDivision
    ? activities.filter((a) => a.divisionId === selectedDivision)
    : activities;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
            Activity Feed
          </h1>
          <p className="mt-1 text-slate-300">Real-time agent activity across all divisions</p>
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            isLive
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-slate-800/70 text-slate-300 border border-slate-700/80"
          }`}
        >
          <Radio className={`w-4 h-4 ${isLive ? "animate-pulse" : ""}`} />
          {isLive ? "Live" : "Paused"}
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedDivision(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedDivision === null
              ? "bg-blue-500/20 text-blue-100 border border-blue-400/35"
              : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700/80"
          }`}
        >
          All
        </button>
        {divisions.map((division) => (
          <button
            key={division.id}
            onClick={() => setSelectedDivision(division.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedDivision === division.id
                ? "bg-blue-500/20 text-blue-100 border border-blue-400/35"
                : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            {division.shortName}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div ref={containerRef} className="mt-8 space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="py-4">
                <div className="flex items-start gap-4">
                  {/* Agent Avatar */}
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-sm font-medium text-slate-300 shrink-0">
                    {activity.agentName.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-white">
                        {activity.agentName}
                      </span>
                      <DivisionBadge divisionId={activity.divisionId} size="sm">
                        {activity.divisionName}
                      </DivisionBadge>
                    </div>
                    <p className="mt-1 text-zinc-300">{activity.action}</p>
                    <p className="mt-1 text-xs text-zinc-500 font-[family-name:var(--font-jetbrains)]">
                      {formatRelativeTime(activity.timestamp)}
                    </p>
                  </div>

                  {/* Status */}
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === "completed"
                        ? "bg-blue-500/20 text-blue-400"
                        : activity.status === "in_progress"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {activity.status === "completed"
                      ? "Done"
                      : activity.status === "in_progress"
                      ? "Active"
                      : "Pending"}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
