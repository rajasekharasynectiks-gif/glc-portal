import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell, KpiCard, SparkBars, LineChart } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import {
  FileText, Clock, CreditCard, CheckCircle2, XCircle, Loader2, Users, Activity,
  AlertTriangle, LifeBuoy, DollarSign, Download, Filter, Plus, ArrowUpRight, Bell,
  ShieldCheck, Server, Database,
} from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Executive Dashboard — GLC Admin" }] }),
  component: DashboardPage,
});

const heat = Array.from({ length: 7 }, () => Array.from({ length: 24 }, () => Math.random()));

function DashboardPage() {
  return (
    <AdminShell
      role="Super Administrator"
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Executive Dashboard" }]}
      title="Executive Dashboard"
      subtitle="Real-time operational overview across licensing, payments, and compliance."
      actions={
        <>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Filter className="h-3.5 w-3.5" /> Filters</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Download className="h-3.5 w-3.5" /> Export</button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"><Plus className="h-3.5 w-3.5" /> New report</button>
        </>
      }
    >
      {/* KPI grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Total Applications" value="4,218" delta="▲ 12.4% vs last month" tone="success" icon={FileText} sub="Rolling 30 days" />
        <KpiCard label="Submitted Today" value="47" delta="▲ 6 above average" tone="info" icon={Plus} sub="Since 12:00 AM ET" />
        <KpiCard label="Pending Reviews" value="142" delta="▼ 8 vs yesterday" tone="warning" icon={Clock} sub="Avg wait 2.3 days" />
        <KpiCard label="Payment Pending" value="$34,120" delta="18 invoices open" tone="warning" icon={CreditCard} sub="Older than 7 days: 4" />
        <KpiCard label="Payment Received" value="$1.24M" delta="▲ 8.9% YTD" tone="success" icon={DollarSign} sub="Fiscal year to date" />
        <KpiCard label="Approved" value="3,412" delta="Conversion 81%" tone="success" icon={CheckCircle2} />
        <KpiCard label="Rejected" value="204" delta="Reject rate 4.8%" tone="error" icon={XCircle} />
        <KpiCard label="In Progress" value="602" delta="—" tone="info" icon={Loader2} />
      </div>

      {/* Charts row */}
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Application volume</div>
              <h2 className="font-display text-lg font-bold">Submissions vs Approvals — 30 days</h2>
            </div>
            <div className="flex gap-2 text-xs">
              <Chip tone="info">Submitted 1,240</Chip>
              <Chip tone="success">Approved 986</Chip>
              <Chip tone="warning">In review 142</Chip>
            </div>
          </div>
          <div className="mt-4">
            <LineChart data={[12,18,22,19,28,24,31,27,34,29,36,33,41,38,44,42,49,45,52,48,55,58,54,61,66,63,70,74,71,78]} height={180} />
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded bg-primary" /> Submitted</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded bg-success/60" /> Approved</span>
            <span className="ml-auto">Last synced 42s ago</span>
          </div>
        </section>

        <section className="gov-card p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Revenue mix</div>
          <h2 className="font-display text-lg font-bold">Fees this quarter</h2>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Application fees", 62, "success", "$412K"],
              ["License fees", 88, "info", "$584K"],
              ["Renewals", 44, "warning", "$188K"],
              ["Convenience", 12, "muted", "$56K"],
            ].map(([label, pct, tone, val]) => (
              <div key={label as string}>
                <div className="flex justify-between text-xs">
                  <span className="font-medium">{label}</span>
                  <span className="text-muted-foreground">{val}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${
                    tone === "success" ? "bg-success" : tone === "info" ? "bg-info" : tone === "warning" ? "bg-warning" : "bg-muted-foreground/50"
                  }`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-border pt-3 text-xs">
            <div className="flex justify-between"><span className="text-muted-foreground">Total QTD</span><span className="font-bold">$1,240,318.42</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Projected EOQ</span><span className="font-bold text-success">$1.68M</span></div>
          </div>
        </section>
      </div>

      {/* Heat map + system + activity */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Activity heatmap</div>
              <h2 className="font-display text-lg font-bold">Submissions by hour × day</h2>
            </div>
            <Chip tone="info">Peak: Wed 2 PM</Chip>
          </div>
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-2 text-[10px]">
            <div className="flex flex-col justify-between py-1 pr-1 text-right text-muted-foreground">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-rows-7 gap-1">
              {heat.map((row, r) => (
                <div key={r} className="grid grid-cols-24 gap-[3px]" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
                  {row.map((v, c) => (
                    <div key={c} className="aspect-square rounded-[2px]" style={{ background: `color-mix(in oklab, var(--color-primary) ${Math.round(v * 100)}%, transparent)` }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
            <span>Low</span>
            <div className="flex gap-0.5">
              {[10,25,45,65,85].map(v => <span key={v} className="h-3 w-4 rounded-sm" style={{ background: `color-mix(in oklab, var(--color-primary) ${v}%, transparent)` }} />)}
            </div>
            <span>High</span>
          </div>
        </section>

        <section className="gov-card p-5">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5 text-success" /> System health</div>
          <h2 className="font-display text-lg font-bold">All services operational</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["API Gateway", "42ms", "success", Server],
              ["Database (RDS)", "healthy", "success", Database],
              ["Melissa Address", "82ms", "success", Activity],
              ["MerchantOne", "degraded", "warning", CreditCard],
              ["ActivePDF Service", "healthy", "success", FileText],
              ["Notification Bus", "healthy", "success", Bell],
            ].map(([name, s, tone, Icon]: any) => (
              <li key={name} className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="flex-1 truncate">{name}</span>
                <Chip tone={tone as any}>{s}</Chip>
              </li>
            ))}
          </ul>
          <SparkBars data={[3,5,4,6,7,5,8,6,9,7,8,6,7,9,8,10,9]} />
          <div className="mt-1 text-[11px] text-muted-foreground">Requests/sec — last 60 min</div>
        </section>
      </div>

      {/* Activity + tasks + compliance */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Recent activity</h2>
            <Link to="/admin/audit" className="text-xs font-semibold text-primary hover:underline">Full audit log →</Link>
          </div>
          <ol className="mt-3 space-y-3 border-l border-border pl-4">
            {[
              ["success", "Application APP-2026-00142 approved", "Reviewer #214 · 3 min ago"],
              ["info", "New submission — Acme Convenience LLC", "Applicant portal · 8 min ago"],
              ["warning", "Payment retry required — TX-88213 · $279.25", "MerchantOne · 14 min ago"],
              ["error", "Failed document scan — SB-4421.pdf", "Voltage encryption · 22 min ago"],
              ["success", "User role granted — Compliance Officer", "System Admin · 41 min ago"],
              ["info", "Melissa validation batch complete (312)", "Integration bus · 1 hr ago"],
            ].map(([tone, t, s], i) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[21px] top-1 grid h-3 w-3 place-items-center rounded-full ring-4 ring-background ${
                  tone === "success" ? "bg-success" : tone === "warning" ? "bg-warning" : tone === "error" ? "bg-destructive" : "bg-info"
                }`} />
                <div className="text-sm font-medium">{t}</div>
                <div className="text-[11px] text-muted-foreground">{s}</div>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <div className="gov-card p-5">
            <h3 className="font-display text-base font-bold">Upcoming tasks</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Approve pending reviews", "Today", "warning", "12"],
                ["Sign compliance report Q2", "Tomorrow", "info", "1"],
                ["Weekly ops sync", "Fri 10:00", "muted", "—"],
                ["MerchantOne cert renewal", "Jul 12", "error", "!"],
              ].map(([t, w, tone, n]: any) => (
                <li key={t} className="flex items-center gap-2 rounded-md border border-border px-2.5 py-2">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${
                    tone === "warning" ? "bg-warning/20 text-warning" : tone === "info" ? "bg-info/20 text-info" : tone === "error" ? "bg-destructive/20 text-destructive" : "bg-muted text-muted-foreground"
                  }`}>{n}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{t}</div>
                    <div className="text-[10px] text-muted-foreground">{w}</div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </li>
              ))}
            </ul>
          </div>

          <div className="gov-card p-5">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-warning"><AlertTriangle className="h-3.5 w-3.5" /> Compliance alerts</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Chip tone="warning">Warn</Chip><span>4 owners with expired background checks</span></li>
              <li className="flex items-start gap-2"><Chip tone="error">High</Chip><span>1 retailer flagged by Georgia DOR tax standing</span></li>
              <li className="flex items-start gap-2"><Chip tone="info">Info</Chip><span>Retention policy review due Aug 1</span></li>
            </ul>
          </div>

          <div className="gov-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold">Support tickets</h3>
              <Link to="/admin/tickets" className="text-xs font-semibold text-primary hover:underline">Open queue →</Link>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div><div className="font-display text-xl font-bold">7</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Open</div></div>
              <div><div className="font-display text-xl font-bold text-warning">2</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">SLA risk</div></div>
              <div><div className="font-display text-xl font-bold text-success">31</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Resolved 7d</div></div>
            </div>
          </div>

          <div className="gov-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold">Active users</h3>
              <Chip tone="success">Live</Chip>
            </div>
            <div className="mt-2 flex items-end gap-1">
              <div className="font-display text-3xl font-bold">318</div>
              <div className="pb-1 text-[10px] text-muted-foreground">signed in now</div>
            </div>
            <SparkBars data={[8,10,12,15,18,22,28,26,30,32,29,34,38,42,40,44]} tone="info" />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground"><span>12 AM</span><span>Now</span></div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
