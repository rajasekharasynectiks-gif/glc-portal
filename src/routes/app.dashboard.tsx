import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Chip } from "@/components/public-shell";
import {
  ArrowRight, CheckCircle2, Clock, FileText, Upload, MessageSquare,
  Download, AlertTriangle, CreditCard, TrendingUp
} from "lucide-react";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — GLC Retailer Portal" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <AppShell
      title="Welcome back, James"
      subtitle="Here's the latest on your retailer license application."
    >
      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Application progress", v: "62%", s: "Step 3 of 4", t: "info", i: TrendingUp },
          { l: "Outstanding tasks", v: "3", s: "2 documents · 1 payment", t: "warning", i: AlertTriangle },
          { l: "Documents uploaded", v: "8 / 11", s: "3 pending", t: "info", i: FileText },
          { l: "Compliance status", v: "Active", s: "All checks passed", t: "success", i: CheckCircle2 },
        ].map((s) => (
          <div key={s.l} className="gov-card p-5">
            <div className="flex items-start justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary"><s.i className="h-4.5 w-4.5" /></span>
              <Chip tone={s.t as any}>{s.s}</Chip>
            </div>
            <div className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
            <div className="mt-1 font-display text-3xl font-bold">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Application progress */}
        <div className="gov-card p-6 lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Active Application</div>
              <h2 className="mt-1 font-display text-xl font-bold">Acme Convenience LLC · #APP-2026-08831</h2>
              <div className="mt-1 text-sm text-muted-foreground">Convenience Store · 1240 Peachtree St NE, Atlanta GA</div>
            </div>
            <Chip tone="warning">In Review · Documents</Chip>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs"><span className="font-medium text-muted-foreground">Overall progress</span><span className="font-semibold">62%</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-info" style={{ width: "62%" }} />
            </div>
          </div>

          <ol className="mt-6 space-y-3">
            {[
              { n: 1, t: "Account & Business Information", s: "done", d: "Completed Jun 18, 2026" },
              { n: 2, t: "Owner Profiles & Background", s: "done", d: "Completed Jun 22, 2026" },
              { n: 3, t: "Document Upload", s: "active", d: "3 documents remaining" },
              { n: 4, t: "Fees & Submission", s: "pending", d: "Pending prior step" },
            ].map((step) => (
              <li key={step.n} className="flex items-center gap-4 rounded-lg border border-border p-4">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-md text-sm font-bold ${
                  step.s === "done" ? "bg-success text-success-foreground"
                  : step.s === "active" ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
                }`}>{step.s === "done" ? <CheckCircle2 className="h-5 w-5" /> : step.n}</div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold">{step.t}</div>
                  <div className="text-xs text-muted-foreground">{step.d}</div>
                </div>
                {step.s === "active" && (
                  <Link to="/app/applications/new" className="hidden shrink-0 items-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:inline-flex">
                    Continue <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap justify-end gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"><Download className="h-4 w-4" /> Download PDF</button>
            <Link to="/app/applications/new" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Continue application <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-6">
          <div className="gov-card p-6">
            <h3 className="font-display text-lg font-bold">Quick actions</h3>
            <div className="mt-4 grid gap-2">
              {[
                { i: Upload, t: "Upload document", to: "/app/documents" },
                { i: CreditCard, t: "Make a payment", to: "/app/payments" },
                { i: MessageSquare, t: "Contact support", to: "/app/support" },
                { i: FileText, t: "Start new application", to: "/app/applications/new" },
              ].map((q) => (
                <Link key={q.t} to={q.to} className="flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm font-medium transition-colors hover:bg-muted">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary"><q.i className="h-4 w-4" /></span>{q.t}
                </Link>
              ))}
            </div>
          </div>

          <div className="gov-card overflow-hidden">
            <div className="border-b border-border p-5"><h3 className="font-display text-lg font-bold">Notifications</h3></div>
            <div className="divide-y divide-border">
              {[
                { t: "Document approved", d: "Business license verified", time: "10m", tone: "success" },
                { t: "Payment due", d: "$200 license fee due Jul 15", time: "2h", tone: "warning" },
                { t: "New message", d: "From licensing@galottery.org", time: "1d", tone: "info" },
              ].map((n) => (
                <div key={n.t} className="flex items-start gap-3 p-4">
                  <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${n.tone === "success" ? "bg-success" : n.tone === "warning" ? "bg-warning" : "bg-info"}`} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{n.t}</div>
                    <div className="text-xs text-muted-foreground">{n.d}</div>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{n.time}</span>
                </div>
              ))}
            </div>
            <Link to="/app/notifications" className="block border-t border-border p-3 text-center text-sm font-semibold text-primary hover:bg-muted">View all notifications</Link>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="gov-card p-6 lg:col-span-2">
          <h3 className="font-display text-lg font-bold">Recent activity</h3>
          <ol className="mt-5 relative space-y-5 border-l-2 border-border pl-6">
            {[
              { d: "Today · 10:42 AM", t: "Business license verified", c: "Document approved by Reviewer #214" },
              { d: "Yesterday · 4:18 PM", t: "Owner background check completed", c: "All listed owners passed verification" },
              { d: "Jun 22 · 9:05 AM", t: "Application step 2 submitted", c: "Owner profiles & disclosures saved" },
              { d: "Jun 18 · 2:30 PM", t: "Account created", c: "Email verified, 2FA enabled" },
            ].map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background"><span className="h-1.5 w-1.5 rounded-full bg-primary" /></span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{e.d}</div>
                <div className="mt-0.5 font-semibold">{e.t}</div>
                <div className="text-sm text-muted-foreground">{e.c}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="gov-card p-6">
          <h3 className="font-display text-lg font-bold">Outstanding tasks</h3>
          <ul className="mt-4 space-y-3">
            {[
              { t: "Upload surety bond document", d: "Required · Due Jul 10" },
              { t: "Confirm secondary owner ID", d: "Required · Due Jul 12" },
              { t: "Pay $200 license fee", d: "Required · Due Jul 15" },
            ].map((t) => (
              <li key={t.t} className="flex items-start gap-3 rounded-md border border-border p-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-warning text-warning"><Clock className="h-3 w-3" /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{t.t}</div>
                  <div className="text-xs text-muted-foreground">{t.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
