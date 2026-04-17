"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";
import { divisions } from "@/data/divisions";
import {
  Users,
  Activity,
  BarChart3,
  PlusCircle,
  Settings,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const mainNavItems = [
  { label: "My Team", href: "/dashboard/team", icon: Users },
  { label: "Activity", href: "/dashboard/activity", icon: Activity },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Team Builder", href: "/dashboard/builder", icon: PlusCircle },
];

const settingsNavItems = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-screen bg-slate-950/75 border-r border-slate-700/70 backdrop-blur-md transition-all duration-300",
        isCollapsed ? "w-20" : "w-72",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-center border-b border-slate-700/70",
          isCollapsed
            ? "min-h-[4.75rem] justify-center px-1 py-2"
            : "min-h-[6.75rem] justify-between px-3 py-3"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex min-w-0 items-center gap-2",
            isCollapsed && "justify-center"
          )}
          aria-label="Cavi home"
        >
          <BrandLogo
            className={cn(
              "shrink-0 rounded-xl object-contain",
              isCollapsed ? "h-11 w-11" : "h-14 w-14"
            )}
          />
          {!isCollapsed && (
            <span className="truncate text-lg font-semibold text-slate-100 font-[family-name:var(--font-inter)]">
              CAVI Workspace
            </span>
          )}
        </Link>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "shrink-0 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100",
            isCollapsed
              ? "absolute right-1 top-1/2 z-10 -translate-y-1/2"
              : ""
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={cn(
              "w-5 h-5 transition-transform",
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-blue-500/20 text-blue-100 border border-blue-400/35"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}

        {!isCollapsed && (
          <div className="pt-6">
            <p className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
              Divisions
            </p>
            <div className="mt-2 space-y-1">
              {divisions.slice(0, 4).map((division) => (
                <Link
                  key={division.id}
                  href={`/divisions/${division.slug}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: division.color.primary }}
                  />
                  <span>{division.shortName}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="py-4 px-3 border-t border-slate-700/70">
        {settingsNavItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-blue-500/20 text-blue-100 border border-blue-400/35"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden rounded-lg border border-slate-700 bg-slate-900/80 p-2 text-slate-300 hover:text-white"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-slate-950/95 border-r border-slate-700/70 backdrop-blur-md transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex min-h-[4.75rem] items-center justify-between border-b border-slate-700/70 px-4 py-2">
          <Link href="/" className="flex items-center gap-2" aria-label="Cavi home">
            <BrandLogo className="h-12 w-12 shrink-0 object-contain" />
            <span className="text-base font-semibold text-slate-100 font-[family-name:var(--font-inter)]">
              CAVI Workspace
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="py-4 px-3 space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-blue-500/20 text-blue-100 border border-blue-400/35"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
