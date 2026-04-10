"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export function DemoBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="border-b border-white/10 bg-indigo-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Demo Mode
            </div>
            <p className="text-sm text-zinc-400">
              <span className="hidden sm:inline">
                You&apos;re viewing sample data.{" "}
              </span>
              <span className="text-zinc-300">
                Book a consultation to see your custom setup.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <Link href="/pilot">Book a Call</Link>
            </Button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
