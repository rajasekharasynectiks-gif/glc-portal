import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, LineChart } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { CreditCard, Banknote, AlertTriangle, RotateCcw, Download, Search, Filter, Receipt, ArrowLeftRight } from "lucide-react";

export const Route = createFileRoute("/admin/payments")({
  head: () => ({ meta: [{ title: "Payments — GLC Admin" }] }),
  component: PayPage,
});

const tx = [
  ["TX-88213","APP-2026-00142","Acme Convenience LLC","Visa •••• 4421","$279.25","Authorized","Jun 28 09:16"],
  ["TX-88212","APP-2026-00141","Sunrise Foods GA","ACH · Wells Fargo","$425.00","Captured","Jun 28 08:04"],
  ["TX-88211","APP-2026-00139","Ridge & Main Fuel","Visa •••• 8812","$425.00","Captured","Jun 27 15:11"],
  ["TX-88210","APP-2026-00138","Metro Snack Hub","MC •••• 1102","$425.00","Refunded","Jun 27 10:33"],
  ["TX-88209","APP-2026-00137","Buckhead Beverages","ACH · Truist","$279.25","Pending","Jun 26 20:41"],
  ["TX-88208","APP-2026-00136","Piedmont Petroleum","Visa •••• 9910","$425.00","Captured","Jun 26 12:18"],
  ["TX-88207","APP-2026-00135","Athens Market Co","Amex •••• 3312","$279.25","Declined","Jun 26 09:44"],
] as const;

const tone: Record<string, "success"|"warning"|"info"|"error"|"muted"> = {
  Authorized:"info",Captured:"success",Pending:"warning",Refunded:"info",Declined:"error",
};

function PayPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Payments" }]}
      title="Payment operations"
      subtitle="Reconcile transactions, manage refunds, monitor merchant health."
      actions={
        <>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><ArrowLeftRight className="h-3.5 w-3.5" /> Reconcile</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Download className="h-3.5 w-3.5" /> Export</button>
        </>
      }
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <KpiCard label="Pending" value="$34,120" tone="warning" icon={CreditCard} sub="18 invoices" />
        <KpiCard label="Successful (7d)" value="$284,912" tone="success" icon={Receipt} sub="612 charges" />
        <KpiCard label="Failed (7d)" value="$8,412" tone="error" icon={AlertTriangle} sub="Retry 4" />
        <KpiCard label="Refunds" value="$3,244" tone="info" icon={RotateCcw} sub="9 refunded" />
        <KpiCard label="Chargebacks" value="$860" tone="error" icon={AlertTriangle} sub="2 disputes" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-[1fr_320px]">
        <section className="gov-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Volume trend</div>
              <h2 className="font-display text-lg font-bold">Daily payments · last 30 days</h2>
            </div>
            <Chip tone="success">▲ 8.9% MoM</Chip>
          </div>
          <LineChart data={[8,12,10,14,17,15,20,22,18,25,28,26,31,29,34,32,38,36,41,44,42,48,46,52,55,58,60,64,62,68]} height={160} />
        </section>
        <section className="gov-card p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Method mix</div>
          <div className="mt-3 space-y-3 text-sm">
            {[["Credit / Debit", 68, CreditCard],["ACH transfer", 24, Banknote],["Refunds", 8, RotateCcw]].map(([l, p, Icon]: any) => (
              <div key={l}>
                <div className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-medium">{l}</span>
                  <span className="ml-auto text-muted-foreground">{p}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${p}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-border bg-surface-muted p-3 text-xs">
            <div className="font-semibold">MerchantOne · Gateway</div>
            <div className="mt-0.5 text-muted-foreground">Status <span className="text-warning font-semibold">Degraded</span> · 218ms avg</div>
          </div>
        </section>
      </div>

      <div className="gov-card mb-3 p-3">
        <div className="grid gap-2 md:grid-cols-[1fr_auto_auto_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search TX ID, application #, card last 4…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
          </div>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>All statuses</option></select>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>Any method</option></select>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-muted"><Filter className="h-3.5 w-3.5" /> Advanced</button>
        </div>
      </div>

      <div className="gov-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              {["Transaction","Application","Business","Method","Amount","Status","Date","Actions"].map(h => <th key={h} className="px-3 py-2.5 text-left font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {tx.map(r => (
              <tr key={r[0]} className="border-b border-border last:border-0 hover:bg-muted/40">
                <td className="px-3 py-2.5 font-mono text-primary">{r[0]}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{r[1]}</td>
                <td className="px-3 py-2.5 font-medium">{r[2]}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{r[3]}</td>
                <td className="px-3 py-2.5 font-semibold">{r[4]}</td>
                <td className="px-3 py-2.5"><Chip tone={tone[r[5]] ?? "muted"}>{r[5]}</Chip></td>
                <td className="px-3 py-2.5 text-muted-foreground">{r[6]}</td>
                <td className="px-3 py-2.5">
                  <div className="flex gap-1">
                    <button className="rounded border border-border px-2 py-0.5 text-xs hover:bg-muted">View</button>
                    <button className="rounded border border-border px-2 py-0.5 text-xs hover:bg-muted">Receipt</button>
                    {r[5] === "Captured" && <button className="rounded border border-border px-2 py-0.5 text-xs hover:bg-muted">Refund</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
