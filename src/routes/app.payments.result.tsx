import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { CheckCircle2, XCircle, Clock, AlertTriangle, Download, LifeBuoy, RefreshCw, Receipt } from "lucide-react";

type Status = "approved" | "pending" | "failed" | "declined" | "cancelled" | "duplicate" | "timeout" | "processing";

export const Route = createFileRoute("/app/payments/result")({
  head: () => ({ meta: [{ title: "Payment Result - GLC" }] }),
  validateSearch: (s: Record<string, unknown>): { status?: Status } => ({ status: (s.status as Status) ?? "approved" }),
  component: ResultPage,
});

const map: Record<Status, { tone: "success"|"warning"|"error"|"info"; title: string; sub: string; icon: any; }> = {
  approved:   { tone: "success", title: "Payment approved", sub: "Your payment was processed successfully.", icon: CheckCircle2 },
  processing: { tone: "info", title: "Processing payment", sub: "Please stay on this page while we confirm.", icon: Clock },
  pending:    { tone: "warning", title: "Payment pending", sub: "Your bank is verifying the transaction. This can take up to 3 business days.", icon: Clock },
  failed:     { tone: "error", title: "Payment failed", sub: "The transaction did not complete. No funds were captured.", icon: XCircle },
  declined:   { tone: "error", title: "Payment declined", sub: "The issuing bank declined the transaction.", icon: XCircle },
  cancelled:  { tone: "warning", title: "Payment cancelled", sub: "You cancelled the transaction before it completed.", icon: AlertTriangle },
  duplicate:  { tone: "warning", title: "Duplicate transaction", sub: "A matching payment was submitted moments ago.", icon: AlertTriangle },
  timeout:    { tone: "error", title: "Gateway timeout", sub: "The payment gateway did not respond in time.", icon: AlertTriangle },
};

function ResultPage() {
  const { status = "approved" } = Route.useSearch();
  const m = map[status as Status];
  const ok = status === "approved";

  return (
    <AppShell breadcrumb={<Breadcrumb items={[{ label: "Payments", to: "/app/payments" }, { label: "Result" }]} />}>
      <div className="mx-auto max-w-2xl">
        <div className="gov-card overflow-hidden">
          <div className="p-8 text-center">
            <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${ok ? "bg-success/10 text-success" : m.tone === "warning" ? "bg-warning/15 text-warning" : m.tone === "info" ? "bg-info/10 text-info" : "bg-destructive/10 text-destructive"}`}>
              <m.icon className="h-10 w-10" />
            </div>
            <Chip tone={m.tone} >{status.toUpperCase()}</Chip>
            <h1 className="mt-3 font-display text-2xl font-bold">{m.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{m.sub}</p>
          </div>

          <dl className="grid gap-x-6 gap-y-2 border-t border-border bg-surface-muted p-6 text-sm sm:grid-cols-2">
            <Row l="Reference number" v="GLC-REF-4471029" />
            <Row l="Merchant transaction ID" v="M1-TX-2026-889201" />
            <Row l="Receipt number" v="RCT-000-104-8831" />
            <Row l="Amount" v="$283.25" />
            <Row l="Method" v="Visa •••• 4421" />
            <Row l="Timestamp" v={new Date().toLocaleString()} />
          </dl>

          <div className="flex flex-wrap justify-center gap-2 border-t border-border p-5">
            {ok ? (
              <>
                <Link to="/app/payments/receipt" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><Receipt className="h-4 w-4" /> View receipt</Link>
                <Link to="/app/payments/eft" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">Continue to EFT upload</Link>
                <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Download className="h-4 w-4" /> Download receipt</button>
              </>
            ) : (
              <>
                <Link to="/app/payments/checkout" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"><RefreshCw className="h-4 w-4" /> Retry payment</Link>
                <Link to="/app/support" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><LifeBuoy className="h-4 w-4" /> Contact support</Link>
              </>
            )}
          </div>
        </div>

        {/* Status switcher for demo */}
        <div className="mt-4 gov-card p-4 text-xs text-muted-foreground">
          <div className="mb-2 font-semibold text-foreground">Preview other outcomes</div>
          <div className="flex flex-wrap gap-1.5">
            {(["approved","pending","processing","failed","declined","cancelled","duplicate","timeout"] as Status[]).map(s => (
              <Link key={s} to="/app/payments/result" search={{ status: s }} className="rounded-full border border-border px-2.5 py-1 hover:bg-muted">{s}</Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-border/60 py-1.5">
      <dt className="text-muted-foreground">{l}</dt>
      <dd className="font-semibold text-foreground">{v}</dd>
    </div>
  );
}
