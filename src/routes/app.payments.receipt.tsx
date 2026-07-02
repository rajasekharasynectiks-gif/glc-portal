import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { Download, Printer, Mail, CheckCircle2, QrCode } from "lucide-react";

export const Route = createFileRoute("/app/payments/receipt")({
  head: () => ({ meta: [{ title: "Payment Receipt - GLC" }] }),
  component: ReceiptPage,
});

function ReceiptPage() {
  return (
    <AppShell breadcrumb={<Breadcrumb items={[{ label: "Payments", to: "/app/payments" }, { label: "Receipt" }]} />}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap justify-end gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Mail className="h-4 w-4" /> Email receipt</button>
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Printer className="h-4 w-4" /> Print</button>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><Download className="h-4 w-4" /> Download PDF</button>
        </div>

        <div className="gov-card overflow-hidden">
          {/* header */}
          <div className="relative overflow-hidden p-8" style={{ background: "var(--gradient-hero)" }}>
            <div className="flex items-start justify-between gap-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-foreground/10 font-display font-black backdrop-blur">GLC</div>
                <div>
                  <div className="font-display text-lg font-bold">Georgia Lottery Corporation</div>
                  <div className="text-xs opacity-80">250 Williams St NW · Atlanta, GA 30303</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider opacity-80">Official receipt</div>
                <div className="font-display text-xl font-bold">RCT-000-104-8831</div>
                <Chip tone="success"><CheckCircle2 className="h-3 w-3" /> Paid</Chip>
              </div>
            </div>
          </div>

          {/* meta grid */}
          <div className="grid gap-x-8 gap-y-2 border-b border-border p-6 sm:grid-cols-2">
            <Row l="Application number" v="APP-2026-08831" />
            <Row l="Merchant reference" v="M1-TX-2026-889201" />
            <Row l="Applicant" v="James Morrison" />
            <Row l="Business" v="Acme Convenience LLC" />
            <Row l="Payment method" v="Visa •••• 4421" />
            <Row l="Date" v={new Date().toLocaleString()} />
          </div>

          {/* line items */}
          <div className="p-6">
            <table className="w-full text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="py-2 text-left">Description</th><th className="py-2 text-right">Amount</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-3">Application fee</td><td className="py-3 text-right font-semibold">$75.00</td></tr>
                <tr><td className="py-3">Retailer license fee - Traditional Lottery</td><td className="py-3 text-right font-semibold">$150.00</td></tr>
                <tr><td className="py-3">Add-on: Keno endorsement</td><td className="py-3 text-right font-semibold">$50.00</td></tr>
                <tr><td className="py-3 text-muted-foreground">Convenience fee</td><td className="py-3 text-right text-muted-foreground">$8.25</td></tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-foreground/80"><td className="pt-3 font-display font-bold">Total paid</td><td className="pt-3 text-right font-display text-2xl font-bold">$283.25</td></tr>
              </tfoot>
            </table>
          </div>

          {/* footer with QR */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-surface-muted p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-20 w-20 place-items-center rounded-md border border-border bg-background text-muted-foreground"><QrCode className="h-14 w-14" /></div>
              <div className="text-xs text-muted-foreground">
                <div className="font-semibold text-foreground">Verify this receipt</div>
                Scan to confirm authenticity at<br />verify.galottery.org/RCT-000-104-8831
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              This receipt is proof of payment. Keep for your records.<br />
              Processed by MerchantOne™ · PCI DSS Certified · TLS 1.3 Secure.
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link to="/app/applications/tracking" className="text-sm font-semibold text-primary hover:underline">Continue to application tracking →</Link>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-border/60 py-1.5 text-sm">
      <span className="text-muted-foreground">{l}</span>
      <span className="font-semibold text-foreground">{v}</span>
    </div>
  );
}
