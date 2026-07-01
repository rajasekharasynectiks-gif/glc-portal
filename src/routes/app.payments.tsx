import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { CreditCard, Download } from "lucide-react";

export const Route = createFileRoute("/app/payments")({
  head: () => ({ meta: [{ title: "Payments — GLC" }] }),
  component: Payments,
});

function Payments() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Payments" }]} />}
      title="Payments"
      subtitle="Outstanding balances and payment history."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="gov-hero-card p-6 lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amount due</div>
          <div className="mt-1 font-display text-4xl font-bold">$275.00</div>
          <div className="mt-1 text-sm text-muted-foreground">License fee + processing · Due Jul 15, 2026</div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><CreditCard className="h-4 w-4" /> Pay now</button>
        </div>
        <div className="gov-card p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payment methods</div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between rounded-md border border-border p-3"><div><div className="text-sm font-semibold">Visa •••• 4421</div><div className="text-xs text-muted-foreground">Exp 09/27</div></div><Chip tone="info">Default</Chip></div>
            <div className="flex items-center justify-between rounded-md border border-border p-3"><div><div className="text-sm font-semibold">ACH · Wells Fargo</div><div className="text-xs text-muted-foreground">Acct •••• 8821</div></div></div>
            <button className="w-full rounded-md border border-dashed border-border py-2 text-sm font-medium text-muted-foreground hover:bg-muted">+ Add payment method</button>
          </div>
        </div>
      </div>

      <div className="mt-6 gov-card overflow-hidden">
        <div className="border-b border-border p-5"><h3 className="font-display text-lg font-bold">Payment history</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wider text-muted-foreground"><tr>
              <th className="px-5 py-3 text-left">Date</th><th className="px-5 py-3 text-left">Description</th><th className="px-5 py-3 text-left">Method</th><th className="px-5 py-3 text-right">Amount</th><th className="px-5 py-3 text-left">Status</th><th className="px-5 py-3"></th>
            </tr></thead>
            <tbody className="divide-y divide-border">
              {[
                ["Jun 18, 2026","Application fee","Visa ••4421","$75.00","Paid"],
                ["May 02, 2025","Renewal fee","ACH ••8821","$200.00","Paid"],
                ["Apr 10, 2025","Surety bond","Check #1043","$5,000.00","Paid"],
                ["Mar 01, 2024","License fee","Visa ••4421","$200.00","Paid"],
              ].map((r) => (
                <tr key={r[0]+r[1]} className="hover:bg-muted/40">
                  <td className="px-5 py-3.5">{r[0]}</td>
                  <td className="px-5 py-3.5 font-semibold">{r[1]}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r[2]}</td>
                  <td className="px-5 py-3.5 text-right font-semibold">{r[3]}</td>
                  <td className="px-5 py-3.5"><Chip tone="success">{r[4]}</Chip></td>
                  <td className="px-5 py-3.5 text-right"><button className="text-muted-foreground hover:text-foreground" aria-label="Download receipt"><Download className="h-4 w-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
