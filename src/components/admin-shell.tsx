import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, FileText, Users, CreditCard, FolderLock, Newspaper, Bell,
  BarChart3, ScrollText, UserCog, Shield, ServerCog, Plug, LifeBuoy, Settings,
  Activity, Menu, X, Search, ChevronDown, LogOut, ChevronsLeft, ChevronsRight,
  ShieldCheck, Command, Lock,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb, Chip } from "@/components/public-shell";

const nav: { section: string; items: { to: string; label: string; icon: any; badge?: string }[] }[] = [
  { section: "Operations", items: [
    { to: "/admin/dashboard", label: "Executive Dashboard", icon: LayoutDashboard },
    { to: "/admin/applications", label: "Applications", icon: FileText, badge: "142" },
    { to: "/admin/applicants", label: "Applicants", icon: Users },
    { to: "/admin/payments", label: "Payments", icon: CreditCard, badge: "18" },
    { to: "/admin/documents", label: "Documents", icon: FolderLock },
    { to: "/admin/tickets", label: "Support Tickets", icon: LifeBuoy, badge: "7" },
  ]},
  { section: "Content & Comms", items: [
    { to: "/admin/cms", label: "Content Management", icon: Newspaper },
    { to: "/admin/notifications", label: "Notifications", icon: Bell },
  ]},
  { section: "Insights", items: [
    { to: "/admin/reports", label: "Reports & BI", icon: BarChart3 },
    { to: "/admin/audit", label: "Audit Logs", icon: ScrollText },
    { to: "/admin/monitoring", label: "Monitoring", icon: Activity },
  ]},
  { section: "Administration", items: [
    { to: "/admin/users", label: "User Management", icon: UserCog },
    { to: "/admin/roles", label: "Roles & Permissions", icon: Shield },
    { to: "/admin/system", label: "System Admin", icon: ServerCog },
    { to: "/admin/integrations", label: "Integrations", icon: Plug },
    { to: "/admin/security", label: "Security", icon: ShieldCheck },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ]},
];

export function AdminShell({
  children, title, subtitle, breadcrumb, actions, role = "Super Administrator",
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
  actions?: React.ReactNode;
  role?: string;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [cmd, setCmd] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const width = collapsed ? "lg:w-16" : "lg:w-64";
  const margin = collapsed ? "lg:ml-16" : "lg:ml-64";

  return (
    <div className="min-h-dvh bg-surface-muted">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="flex h-14 items-center gap-3 px-3 lg:px-5">
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-md hover:bg-muted lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/admin/dashboard" className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display font-black text-xs">GLC</div>
            <div className="hidden leading-tight sm:block">
              <div className="text-[13px] font-bold">Admin Console</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Retailer Licensing</div>
            </div>
          </Link>
          <span className="ml-1 hidden lg:inline-flex"><Chip tone="info"><Lock className="h-3 w-3" /> Restricted</Chip></span>

          <button
            onClick={() => setCmd(true)}
            className="relative ml-3 hidden max-w-lg flex-1 items-center gap-2 rounded-md border border-input bg-surface px-3 py-1.5 text-left text-sm text-muted-foreground hover:bg-muted md:flex"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1">Search records, applicants, transactions…</span>
            <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-foreground/70 sm:inline">⌘K</kbd>
          </button>

          <div className="ml-auto flex items-center gap-1">
            <ThemeToggle compact />
            <button className="relative grid h-9 w-9 place-items-center rounded-md hover:bg-muted" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[9px] font-bold text-destructive-foreground">12</span>
            </button>
            <div className="mx-1 hidden h-6 w-px bg-border sm:block" />
            <button className="flex items-center gap-2 rounded-md p-1 pr-2 hover:bg-muted">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold">AD</span>
              <div className="hidden text-left leading-tight sm:block">
                <div className="text-xs font-semibold">Alicia Danvers</div>
                <div className="text-[10px] text-muted-foreground">{role}</div>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 top-14 z-20 w-64 transform border-r border-border bg-surface transition-all lg:translate-x-0 ${width} ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <nav className="flex h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto p-2">
            {nav.map((group) => (
              <div key={group.section} className="mt-2">
                {!collapsed && (
                  <div className="px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{group.section}</div>
                )}
                {group.items.map((n) => {
                  const Icon = n.icon;
                  const active = pathname === n.to || (n.to !== "/admin/dashboard" && pathname.startsWith(n.to));
                  return (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      title={collapsed ? n.label : undefined}
                      className={`group flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
                        active ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${active ? "text-primary" : ""}`} />
                      {!collapsed && <span className="flex-1 truncate">{n.label}</span>}
                      {!collapsed && n.badge && (
                        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70"}`}>{n.badge}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}

            <div className="mt-auto space-y-2 pt-3">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden w-full items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted lg:flex"
              >
                {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
                {!collapsed && "Collapse"}
              </button>
              {!collapsed && (
                <div className="rounded-md border border-border bg-surface-muted p-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold"><ShieldCheck className="h-3.5 w-3.5 text-success" /> System operational</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">All services green · v4.2.1</div>
                </div>
              )}
              <Link to="/" className="flex items-center gap-2 rounded-md px-2.5 py-2 text-xs font-medium text-muted-foreground hover:bg-muted">
                <LogOut className="h-4 w-4" /> {!collapsed && "Sign out"}
              </Link>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className={`flex-1 ${margin}`}>
          <div className="px-4 py-5 lg:px-7 lg:py-6">
            {(title || breadcrumb) && (
              <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="min-w-0">
                  {breadcrumb && <div className="mb-1.5"><Breadcrumb items={breadcrumb} /></div>}
                  {title && <h1 className="font-display text-xl font-bold text-foreground lg:text-2xl">{title}</h1>}
                  {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
                </div>
                {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
              </div>
            )}
            {children}
          </div>
          <footer className="border-t border-border px-6 py-4 text-[11px] text-muted-foreground">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>© {new Date().getFullYear()} Georgia Lottery Corporation · Internal Admin Console · Restricted access</span>
              <span className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-success" /> API 42ms</span>
                <span>Region: us-east-1</span>
                <span>Build 4.2.1</span>
              </span>
            </div>
          </footer>
        </div>
      </div>

      {/* Command palette */}
      {cmd && (
        <div className="fixed inset-0 z-50 grid place-items-start bg-foreground/40 p-4 pt-24 backdrop-blur-sm" onClick={() => setCmd(false)}>
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-border bg-background shadow-lifted" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Command className="h-4 w-4 text-muted-foreground" />
              <input autoFocus placeholder="Type to search anything…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2 text-sm">
              {[
                { g: "Recent", i: [["APP-2026-00142 · Acme Convenience","/admin/applications"], ["Payment #TX-88213 · $279.25","/admin/payments"], ["Reviewer #214 · Ken Walters","/admin/users"]] },
                { g: "Jump to", i: [["Executive Dashboard","/admin/dashboard"], ["Audit Logs","/admin/audit"], ["Integrations Health","/admin/integrations"]] },
              ].map((s) => (
                <div key={s.g}>
                  <div className="px-2 pt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{s.g}</div>
                  {s.i.map(([t, to]) => (
                    <Link key={t} to={to} onClick={() => setCmd(false)} className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted">
                      <Search className="h-3.5 w-3.5 text-muted-foreground" />{t}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Small primitives used across admin pages
export function KpiCard({ label, value, delta, tone = "info", icon: Icon, sub }: {
  label: string; value: string | number; delta?: string; tone?: "success"|"warning"|"info"|"error"|"muted"; icon?: any; sub?: string;
}) {
  const toneMap = { success: "text-success", warning: "text-warning", info: "text-info", error: "text-destructive", muted: "text-muted-foreground" };
  return (
    <div className="gov-card p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="truncate text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 font-display text-2xl font-bold text-foreground">{value}</div>
          {sub && <div className="text-[11px] text-muted-foreground">{sub}</div>}
        </div>
        {Icon && <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md bg-muted ${toneMap[tone]}`}><Icon className="h-4.5 w-4.5" /></span>}
      </div>
      {delta && <div className={`mt-2 text-[11px] font-semibold ${toneMap[tone]}`}>{delta}</div>}
    </div>
  );
}

export function SparkBars({ data, tone = "primary" }: { data: number[]; tone?: "primary"|"success"|"warning"|"info" }) {
  const max = Math.max(...data, 1);
  const cls = { primary: "bg-primary/70", success: "bg-success/70", warning: "bg-warning/70", info: "bg-info/70" }[tone];
  return (
    <div className="flex h-12 items-end gap-1">
      {data.map((v, i) => (
        <div key={i} className={`flex-1 rounded-t ${cls}`} style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

export function LineChart({ data, height = 140 }: { data: number[]; height?: number }) {
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const w = 100 / (data.length - 1);
  const pts = data.map((v, i) => `${i * w},${100 - ((v - min) / range) * 90 - 5}`).join(" ");
  const area = `0,100 ${pts} 100,100`;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height }} className="w-full">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#lg)" />
      <polyline points={pts} fill="none" stroke="var(--color-primary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
