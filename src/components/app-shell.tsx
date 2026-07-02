import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard, FileText, FilePlus2, FolderOpen, CreditCard, Activity,
  Bell, LifeBuoy, User, Settings, LogOut, Menu, X, Search, ChevronDown,
  MessageSquare, PanelLeftClose, PanelLeftOpen,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/applications", label: "My Applications", icon: FileText },
  { to: "/app/applications/new", label: "New Application", icon: FilePlus2 },
  { to: "/app/applications/tracking", label: "Tracking", icon: Activity },
  { to: "/app/documents", label: "Documents", icon: FolderOpen },
  { to: "/app/payments", label: "Payments", icon: CreditCard },
  { to: "/app/messages", label: "Messages", icon: MessageSquare },
  { to: "/app/notifications", label: "Notifications", icon: Bell },
  { to: "/app/support", label: "Support", icon: LifeBuoy },
  { to: "/app/profile", label: "Profile", icon: User },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children, title, subtitle, breadcrumb }: {
  children: React.ReactNode; title?: string; subtitle?: string; breadcrumb?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setCollapsed(localStorage.getItem("glc-portal-sidebar-collapsed") === "true");
  }, []);

  function toggleCollapsed() {
    setCollapsed((current) => {
      const next = !current;
      localStorage.setItem("glc-portal-sidebar-collapsed", String(next));
      return next;
    });
  }

  return (
    <div className="min-h-dvh bg-surface-muted text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-muted lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/app/dashboard" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">GLC</div>
            <div className="hidden min-w-0 leading-tight sm:block">
              <div className="text-sm font-semibold">Retailer Portal</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Licensing System</div>
            </div>
          </Link>

          <div className="relative ml-4 hidden flex-1 max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search applications, documents, payments..."
              className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <ThemeToggle />
            <Link to="/app/notifications" className="relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">3</span>
            </Link>
            <div className="ml-1 hidden h-8 w-px bg-border sm:block" />
            <button className="flex items-center gap-2.5 rounded-md p-1.5 pr-2 hover:bg-muted">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-gold-foreground text-xs font-bold">JM</span>
              <div className="hidden text-left leading-tight sm:block">
                <div className="text-xs font-semibold">James Morrison</div>
                <div className="text-[10px] text-muted-foreground">Applicant</div>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={[
            "fixed inset-y-0 left-0 top-16 z-20 w-64 transform border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width,transform] duration-200 lg:translate-x-0",
            collapsed ? "lg:w-16" : "lg:w-64",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <nav className="flex h-[calc(100dvh-4rem)] flex-col gap-1 p-3">
            <button
              type="button"
              onClick={toggleCollapsed}
              className="mb-1 hidden h-9 items-center justify-center rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:flex"
              aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
              title={collapsed ? "Expand navigation" : "Collapse navigation"}
            >
              {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </button>
            {nav.map((n) => {
              const Icon = n.icon;
              const active = pathname === n.to || (n.to !== "/app/dashboard" && pathname.startsWith(n.to));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  title={collapsed ? n.label : undefined}
                  className={[
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    collapsed ? "lg:justify-center lg:px-2" : "",
                    active ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_2px_0_0] shadow-brand" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  ].join(" ")}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span className={collapsed ? "lg:hidden" : ""}>{n.label}</span>
                </Link>
              );
            })}
            <div className="mt-auto">
              <Link
                to="/"
                title={collapsed ? "Sign out" : undefined}
                className={["flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground", collapsed ? "lg:justify-center lg:px-2" : ""].join(" ")}
              >
                <LogOut className="h-4.5 w-4.5 shrink-0" />
                <span className={collapsed ? "lg:hidden" : ""}>Sign out</span>
              </Link>
              <div className={["mt-3 rounded-lg border border-border bg-surface-muted p-3", collapsed ? "lg:hidden" : ""].join(" ")}>
                <div className="text-xs font-semibold text-foreground">Need help?</div>
                <div className="mt-1 text-[11px] text-muted-foreground">Our support team is available Mon-Fri, 8am-5pm ET.</div>
                <Link to="/app/support" className="mt-2 inline-block text-xs font-semibold text-primary hover:underline">Contact support</Link>
              </div>
            </div>
          </nav>
        </aside>

        <div className={["flex-1 transition-[margin] duration-200", collapsed ? "lg:ml-16" : "lg:ml-64"].join(" ")}>
          <div className="px-4 py-6 lg:px-8 lg:py-8">
            {(title || breadcrumb) && (
              <div className="mb-6">
                {breadcrumb && <div className="mb-2">{breadcrumb}</div>}
                {title && <h1 className="text-2xl font-bold text-foreground lg:text-3xl">{title}</h1>}
                {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
