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
        "hidden lg:flex flex-col h-screen bg-[#0A0A0B] border-r border-white/5 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "relative flex items-center border-b border-white/5",
          isCollapsed
            ? "min-h-[4.5rem] justify-center px-1 py-2"
            : "min-h-[8.5rem] justify-between px-3 py-3"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex min-w-0 items-center gap-2",
            isCollapsed && "justify-center"
          )}
          aria-label="Cavi Vault home"
        >
          <BrandLogo
            className={cn(
              "shrink-0 object-contain",
              isCollapsed ? "h-11 w-11" : "h-32 w-32"
            )}
          />
          {!isCollapsed && (
            <span className="truncate text-lg font-bold text-white font-[family-name:var(--font-inter)]">
              CAVI
            </span>
          )}
        </Link>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "shrink-0 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white",
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

      {/* Main Navigation */}
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
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}

        {/* Division Shortcuts */}
        {!isCollapsed && (
          <div className="pt-6">
            <p className="px-3 text-xs font-medium text-zinc-600 uppercase tracking-wider">
              Divisions
            </p>
            <div className="mt-2 space-y-1">
              {divisions.slice(0, 4).map((division) => (
                <Link
                  key={division.id}
                  href={`/divisions/${division.slug}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
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

      {/* Settings */}
      <div className="py-4 px-3 border-t border-white/5">
        {settingsNavItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5",
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

// Mobile sidebar
export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-zinc-400 hover:text-white"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#0A0A0B] border-r border-white/5 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex min-h-[5.5rem] items-center justify-between border-b border-white/5 px-4 py-2">
          <Link href="/" className="flex items-center gap-3" aria-label="Cavi Vault home">
            <BrandLogo className="h-28 w-28 shrink-0 object-contain sm:h-32 sm:w-32" />
            <span className="text-lg font-bold text-white font-[family-name:var(--font-inter)]">
              CAVI
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zinc-400 hover:text-white"
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
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
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
