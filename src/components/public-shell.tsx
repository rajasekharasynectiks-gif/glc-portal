import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Search, Bell, User } from "lucide-react";

const publicNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Licensing", to: "/licensing", mega: true },
  { label: "Documents", to: "/documents" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="opacity-90">Official site of the Georgia Lottery Corporation</span>
          <div className="hidden gap-4 sm:flex">
            <Link to="/auth/login" className="hover:underline">Sign in</Link>
            <Link to="/auth/register" className="hover:underline">Create account</Link>
          </div>
        </div>
      </div>
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-black">
            GLC
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-display text-[15px] font-bold text-foreground">Georgia Lottery</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Retailer Licensing Portal</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {publicNav.map((n) => (
            <div key={n.to} className="relative" onMouseEnter={() => n.mega && setMega(true)} onMouseLeave={() => setMega(false)}>
              <Link
                to={n.to}
                activeProps={{ className: "text-primary" }}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
                {n.mega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {n.mega && mega && (
                <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3">
                  <div className="gov-card grid grid-cols-2 gap-1 p-3 shadow-lifted">
                    {[
                      { t: "Overview", d: "Eligibility & benefits", to: "/licensing" },
                      { t: "Apply Now", d: "Begin your application", to: "/auth/register" },
                      { t: "Process", d: "Step-by-step guide", to: "/licensing#process" },
                      { t: "Fees & Bonds", d: "Pricing and requirements", to: "/licensing#fees" },
                      { t: "Renewals", d: "Renew an existing license", to: "/auth/login" },
                      { t: "Compliance", d: "Standards & regulations", to: "/about#compliance" },
                    ].map((i) => (
                      <Link key={i.t} to={i.to} className="rounded-lg p-3 transition-colors hover:bg-muted">
                        <div className="text-sm font-semibold text-foreground">{i.t}</div>
                        <div className="text-xs text-muted-foreground">{i.d}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground md:grid">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/auth/login" className="hidden rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted md:inline-flex">
            Sign in
          </Link>
          <Link to="/auth/register" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-hover md:inline-flex">
            Apply Now
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-md hover:bg-muted lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {publicNav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link to="/auth/login" onClick={() => setOpen(false)} className="rounded-md border border-border px-4 py-2 text-center text-sm font-medium">Sign in</Link>
              <Link to="/auth/register" onClick={() => setOpen(false)} className="rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">Apply</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-black">GLC</div>
              <div>
                <div className="font-display font-bold">Georgia Lottery</div>
                <div className="text-xs text-muted-foreground">Retailer Licensing Portal</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The official online application system for Georgia Lottery retailer licensing, operated by the Georgia Lottery Corporation.
            </p>
          </div>
          {[
            { t: "Licensing", l: [["Overview","/licensing"],["Apply Now","/auth/register"],["Renewals","/auth/login"],["Fees & Bonds","/licensing#fees"]] },
            { t: "Resources", l: [["Documents","/documents"],["FAQ","/faq"],["Application Guides","/documents"],["Policies","/documents"]] },
            { t: "Corporate", l: [["About GLC","/about"],["Compliance","/about#compliance"],["Contact","/contact"],["Accessibility","/about"]] },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-sm font-semibold text-foreground">{c.t}</div>
              <ul className="mt-4 space-y-2.5">
                {c.l.map(([t, to]) => (
                  <li key={t}><Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{t}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Georgia Lottery Corporation. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/about">Privacy</Link>
            <Link to="/about">Terms</Link>
            <Link to="/about">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />
    </div>
  );
}

// ----- shared bits -----
export function Chip({ tone = "muted", children }: { tone?: "success"|"warning"|"info"|"error"|"muted"; children: React.ReactNode }) {
  const cls = { success: "chip-success", warning: "chip-warning", info: "chip-info", error: "chip-error", muted: "chip-muted" }[tone];
  return <span className={`${cls} inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`}>{children}</span>;
}

export function StatDot({ tone = "info" }: { tone?: "success"|"warning"|"info"|"error" }) {
  const c = { success: "bg-success", warning: "bg-warning", info: "bg-info", error: "bg-destructive" }[tone];
  return <span className={`inline-block h-2 w-2 rounded-full ${c}`} />;
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {it.to ? <Link to={it.to} className="hover:text-foreground">{it.label}</Link> : <span className="text-foreground">{it.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
