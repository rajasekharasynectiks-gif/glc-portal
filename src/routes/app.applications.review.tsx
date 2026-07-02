import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import {
  ChevronDown, Pencil, CheckCircle2, AlertTriangle, Info, ShieldCheck,
  FileText, Building2, MapPin, Mail, User, CreditCard, Lock, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/app/applications/review")({
  head: () => ({ meta: [{ title: "Review & Submit - GLC" }] }),
  component: ReviewPage,
});

const sections = [
  { key: "business", icon: Building2, t: "Business Information", status: "complete", rows: [
    ["Legal Name", "Acme Convenience LLC"], ["DBA", "Acme Corner Store"],
    ["Federal EIN", "58-••••4421"], ["Entity Type", "Limited Liability Company"],
    ["State of Formation", "Georgia"], ["Business Phone", "(404) 555-0142"],
  ]},
  { key: "address", icon: MapPin, t: "Business Address", status: "complete", rows: [
    ["Street", "1240 Peachtree St NE"], ["City / State / ZIP", "Atlanta, GA 30309"],
    ["County", "Fulton"], ["Validation", "USPS + Melissa Verified · 11/11"],
  ]},
  { key: "mailing", icon: Mail, t: "Mailing Address", status: "complete", rows: [
    ["Same as business", "Yes"],
  ]},
  { key: "owners", icon: User, t: "Owner Information", status: "warning", rows: [
    ["Owner 1 · James Morrison (CEO)", "60% · Verified"],
    ["Owner 2 · Sarah Chen (COO)", "40% · Identity review pending"],
    ["Ownership total", "100.00%"],
  ]},
  { key: "documents", icon: FileText, t: "Uploaded Documents", status: "complete", rows: [
    ["Business License", "Approved · 2.1 MB · PDF"],
    ["Certificate of Formation", "Approved · 480 KB · PDF"],
    ["Surety Bond", "In Review · 1.4 MB · PDF"],
    ["Voided Check", "Approved · 220 KB · PDF"],
    ["Owner IDs (2)", "Approved · Encrypted"],
  ]},
  { key: "declarations", icon: ShieldCheck, t: "Declarations", status: "complete", rows: [
    ["Background disclosure", "Attested"],
    ["Tax standing", "Attested"],
    ["FBI/GBI consent", "Signed by all owners"],
  ]},
  { key: "payment", icon: CreditCard, t: "Payment Information", status: "info", rows: [
    ["Application Fee", "$75.00"], ["License Fee", "$200.00"],
    ["Convenience Fee", "$4.25"], ["Total Due", "$279.25"],
    ["Method", "Visa •••• 4421"],
  ]},
] as const;

const validations = [
  { level: "critical", t: "Surety bond amount not confirmed", d: "Bond must be at least $25,000. Verify with your issuer.", target: "documents" },
  { level: "warning",  t: "Owner 2 identity review pending", d: "Government ID for Sarah Chen is still under review.", target: "owners" },
  { level: "warning",  t: "Backup email not verified", d: "A verification link was sent to james.m@backup.co.", target: "declarations" },
  { level: "info",     t: "Payment not required yet", d: "Fees will be charged after GLC accepts your submission.", target: "payment" },
  { level: "success",  t: "Address confidence: 11/11", d: "Validated by USPS + Melissa on Jun 28, 2026.", target: "address" },
] as const;

function levelStyles(l: string) {
  if (l === "critical") return { chip: "error" as const, ring: "border-destructive/40 bg-destructive/5", icon: AlertTriangle, iconCls: "text-destructive" };
  if (l === "warning") return { chip: "warning" as const, ring: "border-warning/40 bg-warning/5", icon: AlertTriangle, iconCls: "text-warning" };
  if (l === "success") return { chip: "success" as const, ring: "border-success/40 bg-success/5", icon: CheckCircle2, iconCls: "text-success" };
  return { chip: "info" as const, ring: "border-info/40 bg-info/5", icon: Info, iconCls: "text-info" };
}

function ReviewPage() {
  const nav = useNavigate();
  const [open, setOpen] = useState<Record<string, boolean>>(Object.fromEntries(sections.map(s => [s.key, true])));
  const [ack, setAck] = useState({ accurate: false, terms: false, verify: false });
  const canSubmit = ack.accurate && ack.terms && ack.verify;

  const critical = validations.filter(v => v.level === "critical").length;
  const warnings = validations.filter(v => v.level === "warning").length;
  const complete = sections.filter(s => s.status === "complete").length;
  const percent = Math.round((complete / sections.length) * 100);

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "My Applications", to: "/app/applications" }, { label: "Review & Submit" }]} />}
      title="Review & submit application"
      subtitle="Confirm every section, resolve validation issues, then sign and submit."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {/* Sections */}
          {sections.map((s) => {
            const isOpen = open[s.key];
            const badge = s.status === "complete" ? <Chip tone="success"><CheckCircle2 className="h-3 w-3" /> Complete</Chip>
              : s.status === "warning" ? <Chip tone="warning"><AlertTriangle className="h-3 w-3" /> Attention</Chip>
              : <Chip tone="info"><Info className="h-3 w-3" /> Info</Chip>;
            return (
              <section key={s.key} className="gov-card overflow-hidden">
                <button onClick={() => setOpen({ ...open, [s.key]: !isOpen })} className="flex w-full items-center gap-4 p-5 text-left hover:bg-muted/40">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-display text-base font-bold">{s.t}</div>
                      {badge}
                    </div>
                  </div>
                  <Link to="/app/applications/new" className="hidden items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted sm:inline-flex" onClick={(e) => e.stopPropagation()}>
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </Link>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border bg-surface-muted/40 p-5">
                    <dl className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {s.rows.map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 border-b border-border/60 py-1.5 text-sm">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="text-right font-medium text-foreground">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </section>
            );
          })}

          {/* Validation */}
          <section className="gov-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold">Final validation</h2>
                <p className="text-sm text-muted-foreground">Resolve critical issues before you can submit.</p>
              </div>
              <div className="flex gap-2 text-xs">
                <Chip tone="error">{critical} Critical</Chip>
                <Chip tone="warning">{warnings} Warnings</Chip>
                <Chip tone="success">1 Passed</Chip>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {validations.map((v, i) => {
                const st = levelStyles(v.level);
                return (
                  <div key={i} className={`flex items-start gap-3 rounded-lg border p-4 ${st.ring}`}>
                    <st.icon className={`mt-0.5 h-5 w-5 shrink-0 ${st.iconCls}`} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-semibold">{v.t}</div>
                        <Chip tone={st.chip}>{v.level.toUpperCase()}</Chip>
                      </div>
                      <div className="text-sm text-muted-foreground">{v.d}</div>
                    </div>
                    <button className="shrink-0 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-muted">Resolve</button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Attestation & signature */}
          <section className="gov-card p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"><Lock className="h-4 w-4" /> Submission attestation</div>
            <h2 className="mt-1 font-display text-lg font-bold">Terms, privacy & legal declaration</h2>
            <div className="mt-4 grid gap-3">
              {[
                ["accurate", "I certify that all information provided is true, complete, and accurate to the best of my knowledge."],
                ["terms", "I have read and agree to the Georgia Lottery Corporation Retailer Terms, Privacy Policy, and Rules of Conduct."],
                ["verify", "I authorize GLC to verify identity, tax standing, and criminal background for every listed owner."],
              ].map(([k, label]) => (
                <label key={k} className="flex cursor-pointer items-start gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted/40">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-input accent-primary" checked={(ack as any)[k]} onChange={(e) => setAck({ ...ack, [k]: e.target.checked })} />
                  <span>{label}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Applicant name</label>
                <input defaultValue="James Morrison" className="mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</label>
                <input defaultValue={new Date().toLocaleDateString()} className="mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Electronic signature</label>
                <input placeholder="Type full legal name" className="mt-1 w-full rounded-md border border-input bg-surface px-4 py-4 text-2xl italic tracking-wide" style={{ fontFamily: "'Segoe Script','Brush Script MT',cursive" }} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
              <button className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Save draft</button>
              <button
                disabled={!canSubmit}
                onClick={() => nav({ to: "/app/applications/success" })}
                className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit application
              </button>
            </div>
          </section>
        </div>

        {/* Sticky summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="gov-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Submission readiness</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="font-display text-4xl font-bold">{percent}%</div>
              <div className="pb-1 text-xs text-muted-foreground">of sections verified</div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-info" style={{ width: `${percent}%` }} />
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {sections.map(s => (
                <li key={s.key} className="flex items-center gap-2">
                  {s.status === "complete"
                    ? <CheckCircle2 className="h-4 w-4 text-success" />
                    : s.status === "warning"
                      ? <AlertTriangle className="h-4 w-4 text-warning" />
                      : <Info className="h-4 w-4 text-info" />}
                  <span className="flex-1">{s.t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-foreground"><Sparkles className="h-3.5 w-3.5 text-gold" /> Estimated review</div>
              <div className="mt-1">10-15 business days after submission.</div>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
