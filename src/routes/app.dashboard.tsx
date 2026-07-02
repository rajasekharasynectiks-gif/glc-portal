import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Chip } from "@/components/public-shell";
import {
  ArrowRight, CheckCircle2, Clock, FileText, MessageSquare,
  Download, AlertTriangle, CreditCard, Activity, Loader2, Receipt,
  ShieldCheck, Upload,
} from "lucide-react";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard - GLC Retailer Portal" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <AppShell
      title="Welcome back, James"
      subtitle="Your application is in the review queue. Here's the latest activity."
    >
      {/* Status hero */}
      <div className="gov-hero-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Chip tone="info"><Loader2 className="h-3 w-3 animate-spin" /> Application Review</Chip>
              <Chip tone="muted">APP-2026-08831</Chip>
              <Chip tone="muted">Submitted Jun 30, 2026</Chip>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold">Acme Convenience LLC</h2>
            <p className="mt-1 text-sm text-muted-foreground">Assigned to Reviewer #214 · Est. completion Jul 08-15, 2026</p>
          </div>
          <div className="text-right">
            {/* progress ring */}
            <div className="relative grid h-24 w-24 place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" className="stroke-muted" />
                <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="45 100" className="stroke-primary" />
              </svg>
              <div className="text-center">
                <div className="font-display text-xl font-bold">45%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Overall</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <Stage l="Submitted" v="Complete" tone="success" />
          <Stage l="Review" v="In progress" tone="info" active />
          <Stage l="Payment" v="Awaiting" tone="warning" />
          <Stage l="Compliance" v="Upcoming" tone="muted" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link to="/app/applications/tracking" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><Activity className="h-4 w-4" /> Track application</Link>
          <Link to="/app/messages" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><MessageSquare className="h-4 w-4" /> Message reviewer</Link>
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Download className="h-4 w-4" /> Download application PDF</button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Assigned stage", v: "Review", s: "Reviewer #214", t: "info", i: ShieldCheck },
          { l: "Outstanding actions", v: "2", s: "1 EFT · 1 clarification", t: "warning", i: AlertTriangle },
          { l: "Payment status", v: "$283.25", s: "Invoice ready", t: "warning", i: CreditCard },
          { l: "Compliance", v: "Passed", s: "Pre-checks green", t: "success", i: CheckCircle2 },
        ].map((s) => (
          <div key={s.l} className="gov-card p-5">
            <div className="flex items-start justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary"><s.i className="h-4.5 w-4.5" /></span>
              <Chip tone={s.t as any}>{s.s}</Chip>
            </div>
            <div className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className="mt-1 font-display text-2xl font-bold">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Timeline */}
        <div className="gov-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold">Application timeline</h3>
            <Link to="/app/applications/tracking" className="text-xs font-semibold text-primary hover:underline">View full timeline →</Link>
          </div>
          <ol className="relative mt-5 space-y-5 border-l-2 border-border pl-6">
            {[
              { d: "Today · 10:12 AM", t: "New message from Reviewer #214", c: "Please attach the endorsement rider for Keno coverage.", tone: "info" },
              { d: "Today · 8:02 AM",  t: "Application received by GLC", c: "Reference GLC-REF-4471029 assigned.", tone: "success" },
              { d: "Jun 30 · 4:12 PM", t: "Application submitted", c: "Signed and locked for review.", tone: "success" },
              { d: "Jun 28 · 3:20 PM", t: "Address validation passed", c: "USPS + Melissa 11/11 confidence.", tone: "success" },
            ].map((e, i) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[31px] grid h-4 w-4 place-items-center rounded-full border-2 bg-background ${e.tone === "success" ? "border-success" : "border-info"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${e.tone === "success" ? "bg-success" : "bg-info"}`} />
                </span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{e.d}</div>
                <div className="mt-0.5 font-semibold">{e.t}</div>
                <div className="text-sm text-muted-foreground">{e.c}</div>
              </li>
            ))}
          </ol>
        </div>

        {/* Outstanding + quick actions */}
        <div className="space-y-6">
          <div className="gov-card p-6">
            <h3 className="font-display text-lg font-bold">Outstanding actions</h3>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Pay license invoice", d: "$283.25 · Due Jul 15", to: "/app/payments/request", i: CreditCard, tone: "warning" as const },
                { t: "Upload voided check", d: "Required for EFT setup", to: "/app/payments/eft", i: Upload, tone: "info" as const },
                { t: "Reply to reviewer", d: "Endorsement rider requested", to: "/app/messages", i: MessageSquare, tone: "info" as const },
              ].map((t) => (
                <li key={t.t}>
                  <Link to={t.to} className="flex items-start gap-3 rounded-md border border-border p-3 hover:bg-muted/50">
                    <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md ${t.tone === "warning" ? "bg-warning/15 text-warning" : "bg-info/10 text-info"}`}><t.i className="h-4 w-4" /></span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">{t.t}</div>
                      <div className="text-xs text-muted-foreground">{t.d}</div>
                    </div>
                    <ArrowRight className="mt-2 h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="gov-card p-6">
            <h3 className="font-display text-lg font-bold">Quick actions</h3>
            <div className="mt-3 grid gap-2">
              {[
                { i: Receipt, t: "View last receipt", to: "/app/payments/receipt" },
                { i: FileText, t: "Review submission", to: "/app/applications/review" },
                { i: CreditCard, t: "Payment gateway", to: "/app/payments/checkout" },
              ].map((q) => (
                <Link key={q.t} to={q.to} className="flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm font-medium hover:bg-muted">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary"><q.i className="h-4 w-4" /></span>{q.t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Stage({ l, v, tone, active }: { l: string; v: string; tone: "success"|"info"|"warning"|"muted"; active?: boolean }) {
  const dot = { success: "bg-success", info: "bg-info", warning: "bg-warning", muted: "bg-muted-foreground/40" }[tone];
  return (
    <div className={`rounded-md border p-3 ${active ? "border-primary/40 bg-background/70" : "border-border bg-background/40"}`}>
      <div className="flex items-center gap-2 text-xs">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <span className="font-semibold uppercase tracking-wider text-muted-foreground">{l}</span>
      </div>
      <div className="mt-1 text-sm font-semibold text-foreground">{v}</div>
    </div>
  );
}
