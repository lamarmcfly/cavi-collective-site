"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface ContactCTAProps {
  variant?: "button" | "card" | "inline";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function ContactCTA({
  variant = "button",
  size = "md",
  text = "Contact for Pricing",
  className,
}: ContactCTAProps) {
  if (variant === "button") {
    return (
      <Button variant="primary" size={size} className={className} asChild>
        <Link href="/pilot" className="group">
          {text}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    );
  }

  if (variant === "inline") {
    return (
      <Link
        href="/pilot"
        className="group inline-flex items-center gap-2 font-medium text-indigo-700 transition-colors hover:text-violet-900"
      >
        {text}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-blue-50 to-violet-50 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-zinc-200/80 bg-white p-3 shadow-sm">
          <Calendar className="h-6 w-6 text-indigo-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900">Ready to get started?</h3>
          <p className="mt-1 text-sm text-zinc-600">
            Book a free consultation to discuss your needs and get a custom quote.
          </p>
          <Button variant="primary" size="md" className="mt-4" asChild>
            <Link href="/pilot" className="group">
              Book a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
