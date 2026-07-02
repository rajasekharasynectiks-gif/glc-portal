import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { CreditCard, Download, LifeBuoy, Info, Calendar, Hash, FileText } from "lucide-react";

export const Route = createFileRoute("/app/payments/request")({
  head: () => ({ meta: [{ title: "Payment Request - GLC" }] }),
  component: RequestPage,
});

function RequestPage() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Payments", to: "/app/payments" }, { label: "Payment Request" }]} />}
      title="Payment request"
      subtitle="An invoice has been generated for your license application."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="gov-card overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border p-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Invoice</div>
              <h2 className="mt-1 font-display text-xl font-bold">INV-2026-104-8831</h2>
              <div className="mt-0.5 text-sm text-muted-foreground">Application APP-2026-08831 · Acme Convenience LLC</div>
            </div>
            <Chip tone="warning">Payment required</Chip>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2">
            {[
              { i: Hash, l: "Application Number", v: "APP-2026-08831" },
              { i: FileText, l: "Fee Type", v: "Traditional Lottery + Keno" },
              { i: Calendar, l: "Due Date", v: "Jul 15, 2026" },
              { i: Info, l: "Payment Status", v: "Awaiting payment" },
            ].map(r => (
              <div key={r.l} className="rounded-md border border-border p-3">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground"><r.i className="h-3.5 w-3.5" /> {r.l}</div>
                <div className="mt-1 text-sm font-semibold">{r.v}</div>
              </div>
            ))}
          </div>

          <div className="mx-6 mb-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface-muted text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="px-4 py-2.5 text-left">Line item</th><th className="px-4 py-2.5 text-right">Amount</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-3">Application fee</td><td className="px-4 py-3 text-right font-semibold">$75.00</td></tr>
                <tr><td className="px-4 py-3">Retailer license fee - Traditional Lottery</td><td className="px-4 py-3 text-right font-semibold">$150.00</td></tr>
                <tr><td className="px-4 py-3">Add-on: Keno endorsement</td><td className="px-4 py-3 text-right font-semibold">$50.00</td></tr>
                <tr><td className="px-4 py-3 text-muted-foreground">Convenience fee (3%)</td><td className="px-4 py-3 text-right text-muted-foreground">$8.25</td></tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-muted"><td className="px-4 py-3 font-display font-bold">Outstanding balance</td><td className="px-4 py-3 text-right font-display text-lg font-bold">$283.25</td></tr>
              </tfoot>
            </table>
          </div>

          <div className="flex flex-wrap justify-end gap-2 border-t border-border bg-surface-muted p-5">
            <Link to="/app/support" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><LifeBuoy className="h-4 w-4" /> Contact support</Link>
            <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Download className="h-4 w-4" /> Download invoice</button>
            <Link to="/app/payments/checkout" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><CreditCard className="h-4 w-4" /> Proceed to payment</Link>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="gov-hero-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amount due</div>
            <div className="mt-1 font-display text-4xl font-bold">$283.25</div>
            <div className="mt-1 text-sm text-muted-foreground">Due Jul 15, 2026 · Net 14</div>
            <Link to="/app/payments/checkout" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover">Pay now</Link>
          </div>
          <div className="gov-card p-5 text-sm">
            <div className="font-semibold">Need help?</div>
            <div className="mt-1 text-muted-foreground">Reach GLC billing at <span className="text-foreground">billing@galottery.org</span> or call (404) 555-0199.</div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
