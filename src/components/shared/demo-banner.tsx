"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export function DemoBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="border-b border-slate-700/70 bg-slate-900/55 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-100">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300" />
              Demo Mode
            </div>
            <p className="text-sm text-slate-300">
              <span className="hidden sm:inline">You&apos;re viewing sample data. </span>
              <span className="text-slate-200">Book a consultation to see your custom setup.</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <Link href="/pilot">Book a Call</Link>
            </Button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-slate-500 transition-colors hover:text-slate-200"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
