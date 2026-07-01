import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, SparkBars } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Plug, Activity, RotateCcw, MapPin, CreditCard, FileText, ShieldCheck, Mail, Server, Play } from "lucide-react";

export const Route = createFileRoute("/admin/integrations")({
  head: () => ({ meta: [{ title: "Integrations — GLC Admin" }] }),
  component: IntPage,
});

const systems = [
  { i: MapPin, n: "Melissa Data", d: "Address validation & USPS confidence", s: "healthy", lat: "82ms", err: "0.02%", data: [4,5,4,6,5,7,6,8,7,9,8,10] },
  { i: CreditCard, n: "MerchantOne", d: "Payments gateway (ACH + Card)", s: "degraded", lat: "218ms", err: "1.4%", data: [3,4,4,5,4,6,5,7,4,8,3,6] },
  { i: FileText, n: "ActivePDF", d: "PDF generation & rendering", s: "healthy", lat: "112ms", err: "0.1%", data: [2,3,3,4,4,5,4,6,5,7,6,7] },
  { i: ShieldCheck, n: "Voltage SecureData", d: "PII tokenization & encryption", s: "healthy", lat: "31ms", err: "0.00%", data: [1,2,2,3,3,2,4,3,4,3,4,5] },
  { i: Mail, n: "SMTP Relay", d: "Transactional email delivery", s: "healthy", lat: "64ms", err: "0.3%", data: [5,6,5,7,6,8,7,9,8,10,9,11] },
  { i: Server, n: "GLC Internal APIs", d: "Retailer master, ledger, GRC", s: "healthy", lat: "22ms", err: "0.05%", data: [8,9,8,10,9,11,10,12,11,13,12,14] },
];

function IntPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Integrations" }]}
      title="Integrations dashboard"
      subtitle="External system health, retry queues, and alerting."
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Systems" value="6" icon={Plug} tone="info" sub="1 degraded" />
        <KpiCard label="Success 24h" value="99.6%" icon={Activity} tone="success" />
        <KpiCard label="Retry queue" value="14" icon={RotateCcw} tone="warning" sub="Auto-processing" />
        <KpiCard label="Alerts open" value="2" icon={Activity} tone="error" />
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {systems.map(sys => (
          <section key={sys.n} className="gov-card p-4">
            <div className="flex items-start gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><sys.i className="h-5 w-5" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-bold">{sys.n}</h3>
                  <Chip tone={sys.s === "healthy" ? "success" : "warning"}>{sys.s}</Chip>
                </div>
                <p className="text-[11px] text-muted-foreground">{sys.d}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded border border-border p-2"><div className="text-muted-foreground">Latency</div><div className="font-semibold">{sys.lat}</div></div>
              <div className="rounded border border-border p-2"><div className="text-muted-foreground">Error rate</div><div className="font-semibold">{sys.err}</div></div>
            </div>
            <div className="mt-3"><SparkBars data={sys.data} tone={sys.s === "healthy" ? "success" : "warning"} /></div>
            <div className="mt-2 flex gap-1.5">
              <button className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs hover:bg-muted"><Play className="h-3 w-3" /> Health check</button>
              <button className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs hover:bg-muted"><RotateCcw className="h-3 w-3" /> Retry</button>
              <button className="rounded border border-border px-2 py-1 text-xs hover:bg-muted">Logs</button>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="gov-card p-5">
          <h3 className="font-display text-base font-bold">Failed transactions (last 24h)</h3>
          <table className="mt-3 w-full text-sm">
            <thead className="text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr><th className="py-1 text-left">Time</th><th className="py-1 text-left">System</th><th className="py-1 text-left">Reason</th><th className="py-1 text-right">Retry</th></tr>
            </thead>
            <tbody className="font-mono text-xs">
              {[["12:04","MerchantOne","Gateway 502","2/3"],["11:41","MerchantOne","AVS mismatch","done"],["10:22","ActivePDF","Timeout 30s","1/3"],["09:11","Melissa","Rate limit","done"]].map((r,i) => (
                <tr key={i} className="border-t border-border"><td className="py-1.5 text-muted-foreground">{r[0]}</td><td className="py-1.5">{r[1]}</td><td className="py-1.5">{r[2]}</td><td className="py-1.5 text-right"><Chip tone={r[3] === "done" ? "success" : "warning"}>{r[3]}</Chip></td></tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="gov-card p-5">
          <h3 className="font-display text-base font-bold">Alerting rules</h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[["p95 latency > 500ms 5m","warning"],["Error rate > 2% 10m","critical"],["Circuit breaker open","critical"],["Retry queue > 100","warning"],["Cert expiry ≤ 14d","warning"]].map(([r,t]: any, i) => (
              <li key={i} className="flex items-center justify-between border-b border-border py-1.5 last:border-0"><span>{r}</span><Chip tone={t === "critical" ? "error" : "warning"}>{t}</Chip></li>
            ))}
          </ul>
        </section>
      </div>
    </AdminShell>
  );
}
