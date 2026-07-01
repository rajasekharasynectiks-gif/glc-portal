import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, LineChart, SparkBars } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Cpu, MemoryStick, Database, HardDrive, Activity, AlertTriangle, Users } from "lucide-react";

export const Route = createFileRoute("/admin/monitoring")({
  head: () => ({ meta: [{ title: "Monitoring — GLC Admin" }] }),
  component: MonPage,
});

function MonPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Monitoring" }]}
      title="Monitoring & telemetry"
      subtitle="Live infrastructure, application and user telemetry."
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="CPU" value="38%" icon={Cpu} tone="success" sub="4 nodes · avg" />
        <KpiCard label="Memory" value="61%" icon={MemoryStick} tone="warning" sub="14 GB / 24 GB" />
        <KpiCard label="Database" value="42ms" icon={Database} tone="success" sub="p95 · RDS Aurora" />
        <KpiCard label="Storage" value="42%" icon={HardDrive} tone="success" sub="1.8 TB / 4 TB" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div><div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Application</div><h2 className="font-display text-lg font-bold">API response time · p95</h2></div>
            <Chip tone="success">SLO 300ms</Chip>
          </div>
          <LineChart data={[110,115,120,118,124,130,128,140,138,132,150,148,142,155,150,144,158,162,150,148,158,160,155,162,168,158,150,148,152,146]} height={160} />
          <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><span className="h-2 w-4 rounded bg-primary" /> p95</span>
            <span>Now 148ms</span>
            <span>24h max 232ms</span>
            <span className="ml-auto">Refreshed live</span>
          </div>
        </section>
        <section className="gov-card p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Error rate</div>
          <div className="mt-1 font-display text-3xl font-bold">0.14%</div>
          <SparkBars data={[1,2,1,3,2,1,3,2,1,2,1,3,2,4,2,1,2,3,2,1]} tone="warning" />
          <div className="mt-3 space-y-2 text-sm">
            {[["5xx","0.03%","success"],["4xx","0.11%","warning"],["Timeouts","0.02%","success"],["Client crashes","0.00%","success"]].map(([a,b,c]: any) => (
              <div key={a} className="flex justify-between border-b border-border pb-1 last:border-0"><span>{a}</span><Chip tone={c}>{b}</Chip></div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <section className="gov-card p-5">
          <div className="flex items-center gap-2"><Activity className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-bold">Application health</h3></div>
          <ul className="mt-3 space-y-2 text-sm">
            {[["Retailer Portal","healthy","success"],["Admin Console","healthy","success"],["Payments Service","healthy","success"],["Notification Bus","healthy","success"],["Document Vault","healthy","success"],["Integration Router","degraded","warning"]].map(([n,s,t]: any) => (
              <li key={n} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0"><span>{n}</span><Chip tone={t}>{s}</Chip></li>
            ))}
          </ul>
        </section>
        <section className="gov-card p-5">
          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-bold">Sessions & transactions</h3></div>
          <div className="mt-3 space-y-3 text-sm">
            <div><div className="flex justify-between text-xs"><span>Active sessions</span><span className="font-semibold">318</span></div><SparkBars data={[8,10,12,15,18,22,28,26,30,32,29,34,38,42,40,44]} tone="info" /></div>
            <div><div className="flex justify-between text-xs"><span>Transactions/min</span><span className="font-semibold">624</span></div><SparkBars data={[20,22,25,28,30,32,34,36,38,40,44,42,48,50,52,54]} tone="primary" /></div>
            <div><div className="flex justify-between text-xs"><span>Queue depth</span><span className="font-semibold">12</span></div><SparkBars data={[2,3,4,5,4,6,5,7,6,8,6,7,5,6,7,6]} tone="warning" /></div>
          </div>
        </section>
        <section className="gov-card p-5">
          <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-warning" /><h3 className="font-display text-base font-bold">Active alerts</h3></div>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["MerchantOne p95 > 200ms 10m","warning"],
              ["Notification bus lag 45s","warning"],
              ["Node worker-3 memory 82%","warning"],
            ].map(([a,t]: any, i) => (
              <li key={i} className="flex items-center justify-between rounded-md border border-border p-2"><span>{a}</span><Chip tone={t}>{t}</Chip></li>
            ))}
          </ul>
          <button className="mt-3 w-full rounded-md border border-border py-1.5 text-xs hover:bg-muted">Open incident room</button>
        </section>
      </div>
    </AdminShell>
  );
}
