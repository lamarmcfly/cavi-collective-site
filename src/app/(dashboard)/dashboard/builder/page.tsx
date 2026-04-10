"use client";

import { useState } from "react";
import Link from "next/link";
import { divisions } from "@/data/divisions";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/shared/contact-cta";
import { Users, Check, Plus, ArrowRight } from "lucide-react";

export default function BuilderPage() {
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>([
    "engineering",
    "marketing",
  ]);

  const toggleDivision = (id: string) => {
    setSelectedDivisions((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedDivisions.length;
  const totalAgents = divisions
    .filter((d) => selectedDivisions.includes(d.id))
    .reduce((acc, d) => acc + d.agentCount, 0);

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
            Team Builder
          </h1>
          <p className="mt-1 text-zinc-400">
            Select divisions to build your custom AI team
          </p>
        </div>
      </div>

      {/* Summary Bar */}
      <GlassCard className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-zinc-400">Selected Divisions</p>
              <p className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
                {selectedCount}
              </p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div>
              <p className="text-sm text-zinc-400">Total Agents</p>
              <p className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
                {totalAgents}
              </p>
            </div>
            {selectedCount >= 2 && (
              <>
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <Badge variant="success" size="lg">
                  Bundle Discount Applied
                </Badge>
              </>
            )}
          </div>
          <Button variant="primary" size="lg" asChild>
            <Link href="/pilot" className="group">
              Get Custom Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </GlassCard>

      {/* Division Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {divisions.map((division) => {
          const isSelected = selectedDivisions.includes(division.id);
          return (
            <GlassCard
              key={division.id}
              variant="interactive"
              accentColor={isSelected ? division.color.primary : undefined}
              className={`cursor-pointer ${
                isSelected ? "ring-1 ring-white/20" : ""
              }`}
              onClick={() => toggleDivision(division.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${division.color.primary}20`,
                    }}
                  >
                    <Users
                      className="w-5 h-5"
                      style={{ color: division.color.primary }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{division.name}</h3>
                    <p className="text-sm text-zinc-500">
                      {division.agentCount} agents
                    </p>
                  </div>
                </div>
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-green-500 text-white"
                      : "bg-white/5 text-zinc-400 hover:bg-white/10"
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="mt-4 text-sm text-zinc-400 line-clamp-2">
                {division.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1">
                {division.capabilities.slice(0, 3).map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zinc-500"
                  >
                    {cap.split("(")[0].trim().slice(0, 25)}
                    {cap.split("(")[0].trim().length > 25 ? "..." : ""}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <ContactCTA variant="card" />
      </div>
    </div>
  );
}
