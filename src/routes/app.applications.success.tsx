import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/public-shell";
import { CheckCircle2, Download, Printer, Activity, Home, Mail, Calendar, Hash } from "lucide-react";

export const Route = createFileRoute("/app/applications/success")({
  head: () => ({ meta: [{ title: "Application Submitted — GLC" }] }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <AppShell breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Application Submitted" }]} />}>
      <div className="mx-auto max-w-3xl">
        <div className="gov-card overflow-hidden">
          <div className="relative overflow-hidden p-10 text-center" style={{ background: "var(--gradient-hero)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, var(--color-gold) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--color-primary-hover) 0%, transparent 50%)" }} />
            <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-background/10 backdrop-blur ring-8 ring-background/10">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-success text-success-foreground shadow-lifted">
                <CheckCircle2 className="h-9 w-9" />
              </div>
            </div>
            <h1 className="relative mt-6 font-display text-3xl font-bold text-primary-foreground">Application submitted successfully</h1>
            <p className="relative mt-2 text-sm text-primary-foreground/80">Your Georgia Lottery retailer license application is now in the review queue.</p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2">
            {[
              { i: Hash, l: "Application Number", v: "APP-2026-08831" },
              { i: Hash, l: "Reference Number", v: "GLC-REF-4471029" },
              { i: Calendar, l: "Submission Date", v: new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) },
              { i: Activity, l: "Estimated Review", v: "10–15 business days" },
            ].map((r) => (
              <div key={r.l} className="rounded-lg border border-border bg-surface p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"><r.i className="h-3.5 w-3.5" />{r.l}</div>
                <div className="mt-1 font-display text-lg font-bold">{r.v}</div>
              </div>
            ))}
          </div>

          <div className="mx-6 mb-6 flex items-start gap-3 rounded-md border border-info/40 bg-info/5 p-4 text-sm">
            <Mail className="mt-0.5 h-5 w-5 text-info" />
            <div>
              <div className="font-semibold">Confirmation email sent</div>
              <div className="text-muted-foreground">A copy of your submission was sent to <span className="font-medium text-foreground">james.morrison@acmecs.com</span>.</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 border-t border-border bg-surface-muted p-5">
            <Link to="/app/applications/tracking" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><Activity className="h-4 w-4" /> Track application</Link>
            <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Download className="h-4 w-4" /> Download PDF</button>
            <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Printer className="h-4 w-4" /> Print receipt</button>
            <Link to="/app/dashboard" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"><Home className="h-4 w-4" /> Return to dashboard</Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
