import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import {
  CheckCircle2, Circle, Clock, Download, MessageSquare, CreditCard, ShieldCheck,
  FileText, Building2, AlertTriangle, ArrowRight, Loader2,
} from "lucide-react";

export const Route = createFileRoute("/app/applications/tracking")({
  head: () => ({ meta: [{ title: "Application Tracking - GLC" }] }),
  component: TrackingPage,
});

const stages = [
  { k: "draft",     t: "Draft",               s: "done", d: "Jun 18, 2026 · 2:30 PM", who: "Applicant", desc: "Application draft created and autosaved." },
  { k: "submitted", t: "Submitted",           s: "done", d: "Jun 30, 2026 · 4:12 PM", who: "Applicant", desc: "Application signed and submitted electronically." },
  { k: "received",  t: "Application Received",s: "done", d: "Jul 01, 2026 · 8:02 AM", who: "GLC System", desc: "Intake confirmed. Reference GLC-REF-4471029." },
  { k: "review",    t: "Application Review",  s: "current", d: "In progress", who: "Reviewer #214", desc: "Documents and owner disclosures under review." },
  { k: "pay-req",   t: "Payment Required",    s: "pending", d: "Est. Jul 08, 2026", who: "GLC Finance", desc: "License and application fees will be invoiced." },
  { k: "pay-recv",  t: "Payment Received",    s: "pending", d: "-", who: "MerchantOne", desc: "Payment confirmation and receipt." },
  { k: "eft",       t: "EFT Review",          s: "pending", d: "-", who: "GLC Finance", desc: "Voided check + bank authorization validated." },
  { k: "compliance",t: "Compliance Review",   s: "pending", d: "-", who: "Compliance Team", desc: "Final background & regulatory checks." },
  { k: "approved",  t: "Approved",            s: "pending", d: "-", who: "GLC Licensing", desc: "License number issued." },
  { k: "completed", t: "Completed",           s: "pending", d: "-", who: "System", desc: "License packet delivered." },
];

function stageIcon(s: string) {
  if (s === "done") return <CheckCircle2 className="h-5 w-5 text-success" />;
  if (s === "current") return <Loader2 className="h-5 w-5 animate-spin text-primary" />;
  return <Circle className="h-5 w-5 text-muted-foreground/50" />;
}

function TrackingPage() {
  const doneCount = stages.filter(s => s.s === "done").length;
  const currentIdx = stages.findIndex(s => s.s === "current");
  const percent = Math.round(((doneCount + 0.5) / stages.length) * 100);

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Tracking" }]} />}
      title="Application tracking"
      subtitle="Follow your license application through every review stage."
    >
      {/* Summary */}
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="gov-hero-card p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Active application</div>
              <h2 className="mt-1 font-display text-xl font-bold">Acme Convenience LLC</h2>
              <div className="mt-0.5 text-sm text-muted-foreground">APP-2026-08831 · Submitted Jun 30, 2026</div>
            </div>
            <Chip tone="info"><Loader2 className="h-3 w-3 animate-spin" /> {stages[currentIdx]?.t ?? "In queue"}</Chip>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-muted-foreground">Overall progress</span>
              <span className="font-semibold">{percent}%</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-primary via-info to-success" style={{ width: `${percent}%` }} />
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-background/60 p-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Assigned reviewer</div>
              <div className="mt-0.5 text-sm font-semibold">Reviewer #214 · Licensing</div>
            </div>
            <div className="rounded-md bg-background/60 p-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Payment status</div>
              <div className="mt-0.5 text-sm font-semibold text-warning">Awaiting invoice</div>
            </div>
            <div className="rounded-md bg-background/60 p-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Compliance</div>
              <div className="mt-0.5 text-sm font-semibold text-success">Passed pre-checks</div>
            </div>
          </div>
        </div>

        <div className="gov-card p-6">
          <h3 className="font-display text-base font-bold">Quick actions</h3>
          <div className="mt-3 grid gap-2">
            <Link to="/app/messages" className="flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted"><MessageSquare className="h-4 w-4 text-primary" /> Message reviewer</Link>
            <Link to="/app/payments/request" className="flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted"><CreditCard className="h-4 w-4 text-primary" /> View payment request</Link>
            <button className="flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted"><Download className="h-4 w-4 text-primary" /> Download submitted PDF</button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6 gov-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-lg font-bold">Status timeline</h2>
          <div className="flex gap-2 text-xs">
            <Chip tone="success">{doneCount} completed</Chip>
            <Chip tone="info">1 in progress</Chip>
            <Chip tone="muted">{stages.length - doneCount - 1} upcoming</Chip>
          </div>
        </div>

        <ol className="mt-6 relative space-y-6 border-l-2 border-border pl-8">
          {stages.map((s, i) => (
            <li key={s.k} className="relative">
              <span className={`absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border-2 ${s.s === "done" ? "border-success bg-success/10" : s.s === "current" ? "border-primary bg-primary/10" : "border-border bg-background"}`}>
                {stageIcon(s.s)}
              </span>
              <div className={`rounded-lg border p-4 ${s.s === "current" ? "border-primary/40 bg-primary/[0.04]" : "border-border bg-surface"}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-display text-base font-bold">{s.t}</div>
                  {s.s === "done" && <Chip tone="success">Completed</Chip>}
                  {s.s === "current" && <Chip tone="info">Current stage</Chip>}
                  {s.s === "pending" && <Chip tone="muted">Upcoming</Chip>}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {s.d}</span>
                  <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> {s.who}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AppShell>
  );
}
