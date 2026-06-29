import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { CheckCircle2, Upload, FileText, X, ArrowRight, ArrowLeft, Save } from "lucide-react";

export const Route = createFileRoute("/app/applications/new")({
  head: () => ({ meta: [{ title: "New Application — GLC" }] }),
  component: NewApp,
});

const steps = [
  { t: "Business Information", d: "Legal entity & retail premises" },
  { t: "Owner Profiles", d: "Officers & background disclosures" },
  { t: "Documents", d: "Upload required attachments" },
  { t: "Fees & Submission", d: "Review and pay" },
];

function NewApp() {
  const [step, setStep] = useState(2);

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Applications", to: "/app/applications" }, { label: "New" }]} />}
      title="New Retailer License Application"
      subtitle="Application #APP-2026-08831 · Auto-saved 12 seconds ago"
    >
      {/* Stepper */}
      <ol className="gov-card grid gap-3 p-4 sm:grid-cols-4">
        {steps.map((s, i) => {
          const state = i < step ? "done" : i === step ? "active" : "pending";
          return (
            <li key={s.t} className={`flex items-start gap-3 rounded-lg p-3 ${state === "active" ? "bg-primary/8 ring-1 ring-primary/20" : ""}`}>
              <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-md text-sm font-bold ${
                state === "done" ? "bg-success text-success-foreground"
                : state === "active" ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
              }`}>{state === "done" ? <CheckCircle2 className="h-5 w-5" /> : i + 1}</div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{s.t}</div>
                <div className="text-[11px] text-muted-foreground">{s.d}</div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 gov-card p-6 sm:p-8">
        {step === 2 ? <DocumentsStep /> : <PlaceholderStep title={steps[step].t} />}

        <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <button onClick={() => setStep(Math.max(0, step - 1))} className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"><Save className="h-4 w-4" /> Save draft</button>
            <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function PlaceholderStep({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">Complete the fields below. All fields marked with * are required.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {["Legal Business Name *","Doing Business As","Federal Tax ID (EIN) *","Business Phone *","Premises Street Address *","City *","State *","ZIP Code *"].map((l) => (
          <div key={l}>
            <label className="text-sm font-medium">{l}</label>
            <input className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsStep() {
  return (
    <div>
      <h2 className="font-display text-xl font-bold">Required documents</h2>
      <p className="mt-1 text-sm text-muted-foreground">Upload clear, legible copies. Accepted formats: PDF, JPG, PNG. Maximum 10 MB per file.</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {[
          { t: "Business License", n: "GA_business_license_2026.pdf", sz: "1.4 MB", st: "approved" },
          { t: "Federal Tax ID (EIN)", n: "ein_letter.pdf", sz: "284 KB", st: "approved" },
          { t: "Surety Bond Certificate", n: null, sz: null, st: "missing" },
          { t: "Premises Lease Agreement", n: "lease_agreement.pdf", sz: "3.1 MB", st: "review" },
          { t: "Owner #1 Photo ID", n: "owner1_id.jpg", sz: "812 KB", st: "approved" },
          { t: "Owner #2 Photo ID", n: null, sz: null, st: "missing" },
        ].map((d) => (
          <div key={d.t} className="rounded-lg border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-semibold">{d.t}</div>
                {d.n && <div className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground"><FileText className="h-3.5 w-3.5" /> {d.n} · {d.sz}</div>}
              </div>
              {d.st === "approved" && <Chip tone="success">Approved</Chip>}
              {d.st === "review" && <Chip tone="warning">In review</Chip>}
              {d.st === "missing" && <Chip tone="error">Missing</Chip>}
            </div>
            {d.st === "missing" ? (
              <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-border bg-surface-muted/50 px-4 py-5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Upload className="h-4 w-4" /> Choose file or drag & drop
                <input type="file" className="sr-only" />
              </label>
            ) : (
              <div className="mt-3 flex gap-2">
                <button className="rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">Replace</button>
                <button className="rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">Preview</button>
                <button aria-label="Remove" className="ml-auto grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><X className="h-4 w-4" /></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
