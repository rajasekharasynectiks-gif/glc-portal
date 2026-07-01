import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, LineChart, SparkBars } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { FileDown, FileSpreadsheet, Calendar, Layers, BarChart3, TrendingUp, Users, Clock, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/reports")({
  head: () => ({ meta: [{ title: "Reports & BI — GLC Admin" }] }),
  component: ReportsPage,
});

const reports = [
  { t: "Application Volume", d: "Monthly submissions across regions", i: TrendingUp, ch: [12,18,22,26,30,28,34,38,36,42,45,48] },
  { t: "Approval Rate", d: "Approvals / total decisions", i: BarChart3, ch: [72,74,76,78,79,80,82,81,83,85,86,84] },
  { t: "Payment Revenue", d: "Fees, renewals, conveniences", i: TrendingUp, ch: [80,120,110,140,160,155,180,210,205,240,260,290] },
  { t: "Processing Time", d: "Average days per application", i: Clock, ch: [11,10,10,9,9,8,8,7,7,7,6,6] },
  { t: "Document Statistics", d: "Uploaded, scanned, quarantined", i: Layers, ch: [30,42,38,50,55,60,58,72,80,88,92,100] },
  { t: "User Activity", d: "DAU, MAU and session length", i: Users, ch: [200,220,240,260,255,280,300,310,330,340,360,380] },
];

function ReportsPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Reports" }]}
      title="Reports & business intelligence"
      subtitle="Prebuilt reports, dashboard builder, and scheduled distribution."
      actions={
        <>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Calendar className="h-3.5 w-3.5" /> Schedule</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><FileDown className="h-3.5 w-3.5" /> PDF</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><FileSpreadsheet className="h-3.5 w-3.5" /> Excel</button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><Plus className="h-3.5 w-3.5" /> New dashboard</button>
        </>
      }
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="YTD Applications" value="18,204" delta="▲ 12% vs LY" tone="success" />
        <KpiCard label="YTD Revenue" value="$4.28M" delta="▲ 9.4% vs LY" tone="success" />
        <KpiCard label="Approval rate" value="81.4%" delta="Target 85%" tone="warning" />
        <KpiCard label="Avg processing" value="6.8 days" delta="▼ 1.2 d MoM" tone="success" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Fiscal year</div>
              <h2 className="font-display text-lg font-bold">Revenue vs applications</h2>
            </div>
            <Chip tone="info">FY 2026</Chip>
          </div>
          <LineChart data={[42,55,60,72,84,92,110,124,138,152,164,182]} height={180} />
        </section>
        <section className="gov-card p-5">
          <h2 className="font-display text-lg font-bold">Compliance</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[["Background checks","On track","success",92],["Bond verification","On track","success",88],["Tax standing","Needs review","warning",74],["Doc retention","On track","success",96]].map(([l,s,t,p]: any) => (
              <li key={l}>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-medium">{l}</span>
                  <Chip tone={t}>{s}</Chip>
                  <span className="ml-auto text-muted-foreground">{p}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-muted"><div className={`h-full rounded-full ${t === "success" ? "bg-success" : "bg-warning"}`} style={{ width: `${p}%` }} /></div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {reports.map(r => (
          <button key={r.t} className="gov-card p-4 text-left hover:border-primary">
            <div className="flex items-center gap-2">
              <r.i className="h-4 w-4 text-primary" />
              <div className="font-semibold">{r.t}</div>
              <Chip tone="muted">Drill-down</Chip>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{r.d}</div>
            <div className="mt-3"><SparkBars data={r.ch} /></div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Updated 12m ago</span>
              <span className="inline-flex items-center gap-1 text-primary">Open →</span>
            </div>
          </button>
        ))}
      </div>
    </AdminShell>
  );
}
