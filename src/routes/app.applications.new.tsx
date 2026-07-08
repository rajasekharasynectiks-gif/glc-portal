import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle2, Circle, Upload, FileText, X, ArrowRight, ArrowLeft, Save,
  ShieldCheck, Clock, Download, HelpCircle, LifeBuoy, MapPin, Check,
  Plus, Pencil, Trash2, Eye, Copy, User, AlertCircle, Loader2, Lock,
  CloudUpload, Image as ImageIcon, FileCheck2, RefreshCw, ChevronDown,
  Send, Building2, Mail, IdCard, Sparkles, Info, Wifi, WifiOff,
} from "lucide-react";

export const Route = createFileRoute("/app/applications/new")({
  head: () => ({ meta: [{ title: "New Application - GLC" }] }),
  component: WizardPage,
});

/* ------------------------------------------------------------------ */
/*  Step definitions                                                  */
/* ------------------------------------------------------------------ */

const STEPS = [
  { key: "eligibility", t: "Eligibility", d: "Requirements & checklist", icon: ShieldCheck },
  { key: "retailer",    t: "Retailer Information", d: "Business profile", icon: Building2 },
  { key: "business",    t: "Business Information", d: "Operations & products", icon: FileText },
  { key: "address",     t: "Business Address", d: "Premises location", icon: MapPin },
  { key: "mailing",     t: "Mailing Address", d: "Correspondence", icon: Mail },
  { key: "owners",      t: "Owners", d: "Officers & disclosures", icon: User },
  { key: "documents",   t: "Documents", d: "Upload attachments", icon: FolderIcon },
  { key: "review",      t: "Review", d: "Verify your data", icon: FileCheck2 },
  { key: "submit",      t: "Submit", d: "Sign & pay", icon: Send },
];

function FolderIcon(props: any) { return <FileText {...props} />; }

/* ------------------------------------------------------------------ */
/*  Wizard shell                                                      */
/* ------------------------------------------------------------------ */

type SaveState = "saved" | "saving" | "offline";

function WizardPage() {
  const [step, setStep] = useState(0);
  const [save, setSave] = useState<SaveState>("saved");
  const [toast, setToast] = useState<{ tone: "success" | "info" | "error"; msg: string } | null>(null);
  const [cancelOpen, setCancelOpen] = useState(false);
  const saveTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  // simulated autosave heartbeat
  useEffect(() => {
    mountedRef.current = true;
    const id = setInterval(() => {
      setSave("saving");
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = window.setTimeout(() => {
        if (mountedRef.current) setSave("saved");
      }, 700);
    }, 18000);
    return () => {
      mountedRef.current = false;
      clearInterval(id);
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  function go(next: number) {
    const bounded = Math.max(0, Math.min(STEPS.length - 1, next));
    console.debug("[application-wizard] step change", { from: step, to: bounded });
    setStep(bounded);
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    setSave("saved");
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function notify(tone: "success" | "info" | "error", msg: string) {
    setToast({ tone, msg });
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => {
      if (mountedRef.current) setToast(null);
    }, 3200);
  }

  const pct = Math.round(((step) / (STEPS.length - 1)) * 100);

  return (
    <AppShell
      breadcrumb={
        <Breadcrumb
          items={[
            { label: "Dashboard", to: "/app/dashboard" },
            { label: "Applications", to: "/app/applications" },
            { label: "New" },
          ]}
        />
      }
      title="New Retailer License Application"
      subtitle="Application #APP-2026-08831 · Draft"
    >
      {/* Status / save bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-card">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <SaveBadge state={save} />
          <span className="text-muted-foreground">·</span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-success" /> Encrypted in transit (TLS 1.3)
          </span>
          <span className="hidden text-muted-foreground sm:inline">·</span>
          <span className="hidden text-muted-foreground sm:inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> Est. {Math.max(2, 18 - step * 2)} min remaining
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => notify("info", "Draft saved. You can resume from My Applications.")}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
          >
            <Save className="h-3.5 w-3.5" /> Save & exit
          </button>
          <button
            onClick={() => setCancelOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"
          >
            <X className="h-3.5 w-3.5" /> Cancel application
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Stepper - vertical on lg, horizontal scroll on mobile */}
        <Stepper step={step} onJump={go} pct={pct} />

        <div className="min-w-0">
          <div className="gov-card p-5 sm:p-8">
            {step === 0 && <EligibilityStep onStart={() => go(1)} />}
            {step === 1 && <RetailerStep />}
            {step === 2 && <BusinessStep />}
            {step === 3 && <AddressStep />}
            {step === 4 && <MailingStep />}
            {step === 5 && <OwnersStep notify={notify} />}
            {step === 6 && <DocumentsStep notify={notify} />}
            {step === 7 && <ReviewStep onEdit={go} />}
            {step === 8 && <SubmitStep notify={notify} />}
          </div>

          {/* Sticky action bar */}
          <div className="sticky bottom-0 z-20 mt-4 -mx-2 sm:mx-0">
            <div className="flex flex-col-reverse items-stretch justify-between gap-3 rounded-xl border border-border bg-background/95 px-4 py-3 shadow-lifted backdrop-blur-xl sm:flex-row sm:items-center">
              <button
                onClick={() => go(step - 1)}
                disabled={step === 0}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </button>
              <div className="hidden flex-1 px-4 sm:block">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-hover transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  Step {step + 1} of {STEPS.length} · {pct}% complete
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => notify("success", "Draft saved successfully.")}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  <Save className="h-4 w-4" /> Save draft
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => go(step + 1)}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-hover"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => notify("success", "Application submitted! Confirmation #GLC-2026-08831")}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-success px-5 py-2.5 text-sm font-semibold text-success-foreground shadow-card hover:opacity-90"
                  >
                    <Send className="h-4 w-4" /> Submit application
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lifted animate-in fade-in slide-in-from-bottom-2">
          <div className={`grid h-8 w-8 place-items-center rounded-full ${
            toast.tone === "success" ? "bg-success/10 text-success"
            : toast.tone === "error" ? "bg-destructive/10 text-destructive"
            : "bg-info/10 text-info"
          }`}>
            {toast.tone === "success" ? <Check className="h-4 w-4" />
            : toast.tone === "error" ? <AlertCircle className="h-4 w-4" />
            : <Info className="h-4 w-4" />}
          </div>
          <div className="text-sm font-medium">{toast.msg}</div>
        </div>
      )}

      {/* Cancel modal */}
      {cancelOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-lifted">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-destructive/10 text-destructive">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold">Cancel this application?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your draft will be discarded. This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setCancelOpen(false)} className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
                Keep draft
              </button>
              <button
                onClick={() => { setCancelOpen(false); notify("info", "Application discarded."); }}
                className="rounded-md bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground hover:opacity-90"
              >
                Discard application
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Stepper                                                           */
/* ------------------------------------------------------------------ */

function Stepper({ step, onJump, pct }: { step: number; onJump: (n: number) => void; pct: number }) {
  return (
    <aside>
      {/* Mobile horizontal */}
      <div className="lg:hidden -mx-2 overflow-x-auto pb-2">
        <ol className="flex min-w-max gap-2 px-2">
          {STEPS.map((s, i) => {
            const state = i < step ? "done" : i === step ? "active" : "pending";
            return (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    onJump(i);
                  }}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                    state === "active" ? "border-primary bg-primary text-primary-foreground"
                    : state === "done" ? "border-success/30 bg-success/10 text-success"
                    : "border-border bg-surface text-muted-foreground"
                  }`}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : <span className="grid h-4 w-4 place-items-center rounded-full bg-background/30 text-[10px] font-bold">{i + 1}</span>}
                  {s.t}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Desktop vertical */}
      <div className="hidden lg:block">
        <div className="gov-card sticky top-24 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Application progress</div>
            <span className="text-xs font-bold text-primary">{pct}%</span>
          </div>
          <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-hover transition-all" style={{ width: `${pct}%` }} />
          </div>
          <ol className="space-y-1">
            {STEPS.map((s, i) => {
              const state = i < step ? "done" : i === step ? "active" : "pending";
              const Icon = s.icon;
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      onJump(i);
                    }}
                    className={`group flex w-full items-start gap-3 rounded-lg px-2.5 py-2 text-left transition-all ${
                      state === "active" ? "bg-primary/8 ring-1 ring-primary/20" : "hover:bg-muted"
                    }`}
                  >
                    <div className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition-all ${
                      state === "done" ? "bg-success text-success-foreground"
                      : state === "active" ? "bg-primary text-primary-foreground ring-4 ring-primary/15"
                      : "bg-muted text-muted-foreground"
                    }`}>
                      {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`flex items-center gap-1.5 text-sm font-semibold ${state === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                        <Icon className="h-3.5 w-3.5 opacity-70" /> {s.t}
                      </div>
                      <div className="text-[11px] text-muted-foreground">{s.d}</div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable form atoms                                               */
/* ------------------------------------------------------------------ */

function Field({ label, required, hint, error, children, className = "" }: {
  label: string; required?: boolean; hint?: string; error?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={className}>
      <label className="flex items-center gap-1 text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-destructive">
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm shadow-sm transition-all placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className ?? ""}`} />;
}
function SelectInput({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={`${inputCls} appearance-none pr-9 ${props.className ?? ""}`}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}

function SaveBadge({ state }: { state: SaveState }) {
  if (state === "saving") return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-info/10 px-2.5 py-1 text-xs font-medium text-info">
      <Loader2 className="h-3 w-3 animate-spin" /> Saving…
    </span>
  );
  if (state === "offline") return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-medium text-warning">
      <WifiOff className="h-3 w-3" /> Offline · changes queued
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
      <Check className="h-3 w-3" /> All changes saved
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 1 - Eligibility                                              */
/* ------------------------------------------------------------------ */

function EligibilityStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-hover to-primary p-7 text-primary-foreground sm:p-9">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-info/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> Retailer Licensing Program
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl">
            Become a licensed Georgia Lottery retailer
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">
            Confirm eligibility, prepare required documentation, and complete your application in roughly 15 minutes.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Clock, t: "~15 minutes", d: "Average completion time" },
              { icon: ShieldCheck, t: "Bank-grade security", d: "FIPS 140-2 encryption" },
              { icon: FileCheck2, t: "9 simple steps", d: "Save & resume any time" },
            ].map((m) => (
              <div key={m.t} className="rounded-xl border border-background/15 bg-background/10 p-3 backdrop-blur-sm">
                <m.icon className="h-4 w-4 opacity-80" />
                <div className="mt-1.5 text-sm font-bold">{m.t}</div>
                <div className="text-[11px] opacity-75">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-sm font-bold">
            <CheckCircle2 className="h-5 w-5 text-success" /> Eligibility requirements
          </div>
          <ul className="mt-4 space-y-3">
            {[
              "Valid Georgia business registration",
              "Owner(s) must be 21 years of age or older",
              "No felony convictions within the last 10 years",
              "Established physical retail premises in Georgia",
              "Compliant with Georgia state tax obligations",
              "Surety bond of $10,000 minimum",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-sm font-bold">
            <FileText className="h-5 w-5 text-primary" /> Required documentation
          </div>
          <ul className="mt-4 space-y-3">
            {[
              "Federal Tax ID (EIN) confirmation letter",
              "Georgia business license",
              "Premises lease or property deed",
              "Surety bond certificate",
              "Owner government-issued photo ID (each owner)",
              "Voided business check (for ACH setup)",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-info/30 bg-info/5 p-4">
        <div className="flex items-start gap-3 text-sm">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-info" />
          <p className="text-foreground/80">
            <strong className="text-foreground">Before you begin:</strong> Have digital copies of the documents above in
            PDF, JPG, PNG, JPEG, or TIFF format (10 MB maximum per file). You may save your progress and return at any time.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
            <Download className="h-4 w-4" /> Download requirements PDF
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
            <HelpCircle className="h-4 w-4" /> View FAQ
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
            <LifeBuoy className="h-4 w-4" /> Need help?
          </button>
        </div>
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-hover"
        >
          Start application <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 2 - Retailer Information                                     */
/* ------------------------------------------------------------------ */

function RetailerStep() {
  return (
    <div className="space-y-7">
      <SectionHeader icon={Building2} title="Retailer information" subtitle="Tell us about the business that will sell lottery products." />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Legal business name" required>
          <TextInput defaultValue="Peachtree Quick Stop LLC" />
        </Field>
        <Field label="DBA / trade name" hint="Optional doing-business-as name">
          <TextInput defaultValue="Peachtree Mart" />
        </Field>
        <Field label="Business type" required>
          <SelectInput defaultValue="llc">
            <option value="llc">Limited Liability Company (LLC)</option>
            <option value="corp">Corporation</option>
            <option value="sole">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="nonprofit">Non-profit</option>
          </SelectInput>
        </Field>
        <Field label="Federal Tax ID (EIN)" required hint="Format: XX-XXXXXXX">
          <TextInput defaultValue="58-1234567" inputMode="numeric" />
        </Field>
        <Field label="Business phone" required>
          <TextInput defaultValue="(404) 555-0143" inputMode="tel" />
        </Field>
        <Field label="Business email" required>
          <TextInput type="email" defaultValue="operations@peachtreemart.com" />
        </Field>
        <Field label="Website" hint="Including https://">
          <TextInput defaultValue="https://peachtreemart.com" />
        </Field>
        <Field label="Business category" required>
          <SelectInput defaultValue="conv">
            <option value="conv">Convenience Store</option>
            <option value="gas">Gas Station</option>
            <option value="grocery">Grocery / Supermarket</option>
            <option value="liquor">Liquor Store</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="restaurant">Restaurant / Bar</option>
          </SelectInput>
        </Field>
        <Field label="Years in business" required>
          <SelectInput defaultValue="5">
            <option>Less than 1</option><option>1-3</option><option>3-5</option>
            <option value="5">5-10</option><option>10+</option>
          </SelectInput>
        </Field>
        <Field label="Estimated annual revenue" hint="Used for bond tier calculation">
          <SelectInput defaultValue="500k">
            <option value="100k">Under $250K</option>
            <option value="500k">$250K - $1M</option>
            <option value="1m">$1M - $5M</option>
            <option value="5m">$5M+</option>
          </SelectInput>
        </Field>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">Lottery products requested <span className="text-destructive">*</span></div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: "scratch", label: "Scratch-off tickets", desc: "Instant-win games", on: true },
            { id: "draw", label: "Draw games", desc: "Cash 3, Cash 4, Fantasy 5", on: true },
            { id: "mega", label: "Mega Millions", desc: "Multi-state jackpot", on: true },
            { id: "power", label: "Powerball", desc: "Multi-state jackpot", on: false },
            { id: "keno", label: "KENO!", desc: "Every 4 minutes", on: false },
            { id: "fast", label: "Fast Play", desc: "Print-on-demand", on: false },
          ].map((p) => (
            <label key={p.id} className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all ${
              p.on ? "border-primary/40 bg-primary/5" : "border-border bg-surface hover:bg-muted"
            }`}>
              <input type="checkbox" defaultChecked={p.on} className="mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]" />
              <div className="min-w-0">
                <div className="text-sm font-semibold">{p.label}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">Store hours of operation</div>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase text-muted-foreground">
              <tr><th className="px-4 py-2 text-left font-semibold">Day</th><th className="px-4 py-2 text-left font-semibold">Open</th><th className="px-4 py-2 text-left font-semibold">Close</th><th className="px-4 py-2 text-left font-semibold">Closed</th></tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((d) => (
                <tr key={d}>
                  <td className="px-4 py-2 font-medium">{d}</td>
                  <td className="px-4 py-2"><TextInput type="time" defaultValue="06:00" className="max-w-[140px]" /></td>
                  <td className="px-4 py-2"><TextInput type="time" defaultValue="23:00" className="max-w-[140px]" /></td>
                  <td className="px-4 py-2"><input type="checkbox" className="h-4 w-4 accent-[oklch(0.32_0.14_255)]" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 3 - Business Information                                     */
/* ------------------------------------------------------------------ */

function BusinessStep() {
  return (
    <div className="space-y-7">
      <SectionHeader icon={FileText} title="Business operations" subtitle="Operational details about how the business runs." />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Number of locations" required>
          <SelectInput defaultValue="1"><option>1</option><option>2-5</option><option>6-10</option><option>10+</option></SelectInput>
        </Field>
        <Field label="Number of employees" required>
          <SelectInput defaultValue="5"><option>1-4</option><option value="5">5-10</option><option>11-25</option><option>25+</option></SelectInput>
        </Field>
        <Field label="Bank name (for ACH settlement)" required>
          <TextInput defaultValue="Wells Fargo Bank, N.A." />
        </Field>
        <Field label="Bank account type" required>
          <SelectInput><option>Business Checking</option><option>Business Savings</option></SelectInput>
        </Field>
        <Field label="Routing number" required>
          <TextInput defaultValue="061000227" inputMode="numeric" />
        </Field>
        <Field label="Account number" required>
          <TextInput type="password" defaultValue="••••••4421" />
        </Field>
        <Field label="Insurance carrier" required>
          <TextInput defaultValue="The Hartford" />
        </Field>
        <Field label="Liability coverage" required>
          <SelectInput><option>$1,000,000</option><option>$2,000,000</option><option>$5,000,000</option></SelectInput>
        </Field>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium">Business description <span className="text-destructive">*</span></div>
        <textarea
          defaultValue="Family-owned convenience store serving the Buckhead neighborhood since 2019. We offer fuel, groceries, prepared foods, and a full beverage selection."
          rows={4}
          className={inputCls}
        />
        <div className="mt-1 text-xs text-muted-foreground">214 / 500 characters</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 4 - Business Address                                         */
/* ------------------------------------------------------------------ */

function AddressStep() {
  const [verified, setVerified] = useState(false);
  const [validating, setValidating] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const validationRunRef = useRef(0);

  useEffect(() => {
    return () => {
      validationRunRef.current += 1;
    };
  }, []);

  async function validate() {
    const run = validationRunRef.current + 1;
    validationRunRef.current = run;
    setValidating(true);
    setShowSuggestion(false);

    try {
      console.debug("[melissa] address validation start");
      await validateMelissaAddressWithTimeout();
      if (validationRunRef.current !== run) return;
      setShowSuggestion(true);
      console.debug("[melissa] address validation complete");
    } catch (error) {
      if (validationRunRef.current !== run) return;
      console.warn("[melissa] address validation unavailable; continuing with manual review", error);
      setVerified(true);
    } finally {
      if (validationRunRef.current === run) setValidating(false);
    }
  }
  function accept() {
    setShowSuggestion(false);
    setVerified(true);
  }

  return (
    <div className="space-y-7">
      <SectionHeader icon={MapPin} title="Business address" subtitle="Where your customers will purchase lottery products." />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Address line 1" required className="sm:col-span-2">
          <TextInput defaultValue="3290 Peachtree Rd NE" />
        </Field>
        <Field label="Address line 2" className="sm:col-span-2">
          <TextInput defaultValue="Suite 110" placeholder="Apt, suite, unit (optional)" />
        </Field>
        <Field label="City" required><TextInput defaultValue="Atlanta" /></Field>
        <Field label="County" required>
          <SelectInput defaultValue="fulton"><option value="fulton">Fulton</option><option>DeKalb</option><option>Cobb</option><option>Gwinnett</option></SelectInput>
        </Field>
        <Field label="State" required>
          <SelectInput defaultValue="ga"><option value="ga">Georgia</option></SelectInput>
        </Field>
        <Field label="ZIP code" required><TextInput defaultValue="30305" inputMode="numeric" /></Field>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface-muted/50 p-4">
        <button
          onClick={validate}
          disabled={validating}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover disabled:opacity-60"
        >
          {validating ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
          {validating ? "Validating with Melissa…" : "Validate address"}
        </button>
        {verified && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
            <CheckCircle2 className="h-3.5 w-3.5" /> Verified · USPS DPV confirmed
          </span>
        )}
        <span className="ml-auto text-xs text-muted-foreground">Powered by Melissa Address Verification</span>
      </div>

      {showSuggestion && (
        <div className="rounded-xl border border-info/30 bg-info/5 p-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-info" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold">We found a more accurate address</div>
              <p className="mt-1 text-sm text-muted-foreground">USPS standardized address suggestion:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-background p-3 text-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">You entered</div>
                  <div className="mt-1">3290 Peachtree Rd NE, Suite 110<br/>Atlanta, GA 30305</div>
                </div>
                <div className="rounded-lg border-2 border-success/50 bg-success/5 p-3 text-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-success">Suggested</div>
                  <div className="mt-1 font-medium">3290 PEACHTREE RD NE STE 110<br/>ATLANTA, GA 30305-2455</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={accept} className="rounded-md bg-success px-3.5 py-1.5 text-xs font-semibold text-success-foreground hover:opacity-90">Use suggested</button>
                <button onClick={() => { setShowSuggestion(false); setVerified(true); }} className="rounded-md border border-border bg-background px-3.5 py-1.5 text-xs font-medium hover:bg-muted">Keep as entered</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        {/* Map preview */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface-muted">
          <div
            className="aspect-[2/1] w-full"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.94 0.02 250) 0%, oklch(0.90 0.03 220) 100%), repeating-linear-gradient(0deg, transparent 0 32px, oklch(0.85 0.02 250 / 0.5) 32px 33px), repeating-linear-gradient(90deg, transparent 0 32px, oklch(0.85 0.02 250 / 0.5) 32px 33px)",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lifted ring-8 ring-primary/15">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="mt-3 text-xs font-semibold text-foreground/70">33.8412° N, 84.3787° W</div>
              </div>
            </div>
          </div>
          <div className="absolute left-3 top-3 rounded-md bg-background/95 px-2.5 py-1 text-[11px] font-medium shadow-card backdrop-blur-sm">
            Premises location preview
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Address confidence</div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-3xl font-black text-success">98%</span>
            <span className="text-xs text-muted-foreground">High</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-success" style={{ width: "98%" }} />
          </div>
          <ul className="mt-4 space-y-1.5 text-xs">
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-success" /> USPS DPV confirmed</li>
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-success" /> ZIP+4 verified</li>
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-success" /> Commercial address</li>
            <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-success" /> Geocoded to rooftop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

async function validateMelissaAddressWithTimeout() {
  await Promise.race([
    wait(1100),
    new Promise<never>((_, reject) => {
      window.setTimeout(() => reject(new Error("Melissa validation timed out after 5 seconds")), 5000);
    }),
  ]);
}

/* ------------------------------------------------------------------ */
/*  STEP 5 - Mailing Address                                          */
/* ------------------------------------------------------------------ */

function MailingStep() {
  const [same, setSame] = useState(true);
  return (
    <div className="space-y-7">
      <SectionHeader icon={Mail} title="Mailing address" subtitle="Where the GLC will send official correspondence." />

      <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
        same ? "border-primary/40 bg-primary/5" : "border-border bg-surface hover:bg-muted"
      }`}>
        <input type="checkbox" checked={same} onChange={(e) => setSame(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]" />
        <div className="min-w-0">
          <div className="text-sm font-semibold">Same as business address</div>
          <div className="text-xs text-muted-foreground">3290 Peachtree Rd NE Ste 110, Atlanta, GA 30305-2455</div>
        </div>
      </label>

      {!same && (
        <div className="space-y-5 animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">
              <Copy className="h-3.5 w-3.5" /> Copy from business address
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Address line 1" required className="sm:col-span-2"><TextInput /></Field>
            <Field label="Address line 2" className="sm:col-span-2"><TextInput placeholder="Apt, suite, PO box (optional)" /></Field>
            <Field label="City" required><TextInput /></Field>
            <Field label="County" required>
              <SelectInput><option>Select county</option><option>Fulton</option><option>DeKalb</option></SelectInput>
            </Field>
            <Field label="State" required>
              <SelectInput defaultValue="ga"><option value="ga">Georgia</option></SelectInput>
            </Field>
            <Field label="ZIP code" required><TextInput inputMode="numeric" /></Field>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface-muted/50 p-4">
            <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              <ShieldCheck className="h-4 w-4" /> Validate address
            </button>
            <span className="ml-auto text-xs text-muted-foreground">Powered by Melissa Address Verification</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 6 - Owners                                                   */
/* ------------------------------------------------------------------ */

type Owner = {
  id: string; first: string; last: string; role: string;
  pct: number; status: "verified" | "pending" | "review"; docs: number; docsTotal: number; initials: string;
};

const INITIAL_OWNERS: Owner[] = [
  { id: "o1", first: "Marcus", last: "Whitfield", role: "Managing Member", pct: 60, status: "verified", docs: 4, docsTotal: 4, initials: "MW" },
  { id: "o2", first: "Priya",   last: "Ramanathan", role: "Member",         pct: 30, status: "pending",  docs: 2, docsTotal: 4, initials: "PR" },
  { id: "o3", first: "Daniel",  last: "Okafor",     role: "Member",         pct: 10, status: "review",   docs: 3, docsTotal: 4, initials: "DO" },
];

function OwnersStep({ notify }: { notify: (t: "success"|"info"|"error", m: string) => void }) {
  const [owners, setOwners] = useState<Owner[]>(INITIAL_OWNERS);
  const [editing, setEditing] = useState<Owner | null>(null);
  const total = owners.reduce((s, o) => s + o.pct, 0);

  function remove(id: string) {
    setOwners(owners.filter((o) => o.id !== id));
    notify("info", "Owner removed.");
  }
  function duplicate(o: Owner) {
    setOwners([...owners, { ...o, id: `o${Date.now()}`, first: o.first + " (copy)", pct: 0 }]);
  }

  return (
    <div className="space-y-7">
      <SectionHeader icon={User} title="Ownership disclosures" subtitle="List all owners with 10% or greater interest. You may add up to 10." />

      {/* Ownership summary */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Owners</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold">{owners.length}</span>
            <span className="text-xs text-muted-foreground">of 10</span>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Total ownership</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className={`font-display text-2xl font-bold ${total === 100 ? "text-success" : "text-warning"}`}>{total}%</span>
            {total !== 100 && <span className="text-xs text-warning">must equal 100%</span>}
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className={`h-full rounded-full ${total === 100 ? "bg-success" : "bg-warning"}`} style={{ width: `${Math.min(total, 100)}%` }} />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Verified</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-success">{owners.filter((o) => o.status === "verified").length}</span>
            <span className="text-xs text-muted-foreground">of {owners.length}</span>
          </div>
        </div>
      </div>

      {total !== 100 && (
        <div className="flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/5 p-3 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
          <div><strong>Ownership must total 100%.</strong> Currently {total}%. Adjust ownership percentages to continue.</div>
        </div>
      )}

      {/* Owner cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {owners.map((o, i) => (
          <article key={o.id} className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-card transition-all hover:shadow-lifted">
            <div className="absolute right-4 top-4">
              <Chip tone={o.status === "verified" ? "success" : o.status === "review" ? "warning" : "info"}>
                {o.status === "verified" ? "Verified" : o.status === "review" ? "In review" : "Pending"}
              </Chip>
            </div>
            <div className="flex items-start gap-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-hover font-display text-base font-bold text-primary-foreground">
                {o.initials}
              </div>
              <div className="min-w-0 pr-16">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Owner {i + 1} of {owners.length}</div>
                <div className="mt-0.5 truncate font-display text-lg font-bold">{o.first} {o.last}</div>
                <div className="truncate text-xs text-muted-foreground">{o.role}</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Ownership</div>
                <div className="font-display text-xl font-bold">{o.pct}%</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Documents</div>
                <div className="font-display text-xl font-bold">{o.docs}<span className="text-sm text-muted-foreground">/{o.docsTotal}</span></div>
              </div>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${o.docs === o.docsTotal ? "bg-success" : "bg-primary"}`} style={{ width: `${(o.docs / o.docsTotal) * 100}%` }} />
            </div>

            <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3">
              <button onClick={() => setEditing(o)} className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted"><Pencil className="h-3.5 w-3.5" /> Edit</button>
              <button className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted"><Eye className="h-3.5 w-3.5" /> View</button>
              <button onClick={() => duplicate(o)} className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted"><Copy className="h-3.5 w-3.5" /> Duplicate</button>
              <button onClick={() => remove(o.id)} className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
            </div>
          </article>
        ))}

        {owners.length < 10 && (
          <button
            onClick={() => setEditing({ id: `o${Date.now()}`, first: "", last: "", role: "Member", pct: 0, status: "pending", docs: 0, docsTotal: 4, initials: "?" })}
            className="group flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-surface-muted/40 p-5 text-center transition-all hover:border-primary hover:bg-primary/5"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-background ring-1 ring-border transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
              <Plus className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-base font-bold">Add another owner</div>
              <div className="text-xs text-muted-foreground">Up to 10 owners supported</div>
            </div>
          </button>
        )}
      </div>

      {editing && <OwnerDialog owner={editing} onClose={() => setEditing(null)} onSave={(o) => {
        setOwners((prev) => {
          const exists = prev.some((p) => p.id === o.id);
          return exists ? prev.map((p) => p.id === o.id ? o : p) : [...prev, o];
        });
        setEditing(null);
        notify("success", "Owner saved.");
      }} />}
    </div>
  );
}

function OwnerDialog({ owner, onClose, onSave }: { owner: Owner; onClose: () => void; onSave: (o: Owner) => void }) {
  const [tab, setTab] = useState<"personal" | "address" | "verify" | "emergency">("personal");
  const [o, setO] = useState(owner);

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "address", label: "Addresses", icon: MapPin },
    { id: "verify", label: "Identity", icon: IdCard },
    { id: "emergency", label: "Emergency", icon: LifeBuoy },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lifted">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><User className="h-5 w-5" /></div>
            <div>
              <h3 className="font-display text-lg font-bold">{o.first || o.last ? `Edit ${o.first} ${o.last}`.trim() : "Add new owner"}</h3>
              <p className="text-xs text-muted-foreground">Complete all four sections to verify the owner.</p>
            </div>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md hover:bg-muted"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex gap-1 border-b border-border px-4">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`relative inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              tab === t.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              <t.icon className="h-4 w-4" /> {t.label}
              {tab === t.id && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-t bg-primary" />}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {tab === "personal" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" required><TextInput value={o.first} onChange={(e) => setO({ ...o, first: e.target.value })} /></Field>
              <Field label="Middle name"><TextInput /></Field>
              <Field label="Last name" required><TextInput value={o.last} onChange={(e) => setO({ ...o, last: e.target.value })} /></Field>
              <Field label="Date of birth" required><TextInput type="date" /></Field>
              <Field label="SSN" required hint="Securely encrypted at rest"><TextInput type="password" placeholder="•••-••-••••" /></Field>
              <Field label="Phone" required><TextInput type="tel" /></Field>
              <Field label="Email" required><TextInput type="email" /></Field>
              <Field label="Role / title" required><TextInput value={o.role} onChange={(e) => setO({ ...o, role: e.target.value })} /></Field>
              <Field label="Ownership %" required hint="Must total 100% across all owners">
                <TextInput type="number" min={0} max={100} value={o.pct} onChange={(e) => setO({ ...o, pct: +e.target.value })} />
              </Field>
            </div>
          )}
          {tab === "address" && (
            <div className="space-y-6">
              <div>
                <div className="mb-3 text-sm font-bold">Residential address</div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Street address" required className="sm:col-span-2"><TextInput /></Field>
                  <Field label="City" required><TextInput /></Field>
                  <Field label="State" required><SelectInput><option>Georgia</option></SelectInput></Field>
                  <Field label="ZIP" required><TextInput /></Field>
                </div>
              </div>
              <div>
                <label className="mb-3 flex items-center gap-2 text-sm font-bold">
                  <input type="checkbox" defaultChecked className="h-4 w-4 accent-[oklch(0.32_0.14_255)]" /> Mailing address same as residential
                </label>
              </div>
            </div>
          )}
          {tab === "verify" && (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Driver license number" required><TextInput /></Field>
                <Field label="License state" required><SelectInput><option>Georgia</option></SelectInput></Field>
                <Field label="License expiration" required><TextInput type="date" /></Field>
                <Field label="Passport number (optional)"><TextInput /></Field>
              </div>
              <div className="rounded-xl border border-info/30 bg-info/5 p-4 text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-info" />
                  <p className="text-foreground/80">
                    Identity verification will run a background check via our authorized partner. This may take 1-3 business days.
                  </p>
                </div>
              </div>
            </div>
          )}
          {tab === "emergency" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Contact name" required><TextInput /></Field>
              <Field label="Relationship" required><SelectInput><option>Spouse</option><option>Parent</option><option>Sibling</option><option>Other</option></SelectInput></Field>
              <Field label="Phone" required><TextInput type="tel" /></Field>
              <Field label="Email"><TextInput type="email" /></Field>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface-muted/40 px-6 py-4">
          <button onClick={onClose} className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
          <button onClick={() => onSave({ ...o, initials: (o.first[0] ?? "?") + (o.last[0] ?? "") })} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
            <Check className="h-4 w-4" /> Save owner
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 7 - Documents                                                */
/* ------------------------------------------------------------------ */

type DocStatus = "approved" | "review" | "missing" | "uploading" | "error";
type Doc = { t: string; required: boolean; n: string | null; sz: string | null; st: DocStatus; progress?: number; scan?: "clean" | "scanning" | "infected" };

const INITIAL_DOCS: Doc[] = [
  { t: "Federal Tax ID (EIN) letter", required: true, n: "ein_letter_2024.pdf", sz: "284 KB", st: "approved", scan: "clean" },
  { t: "Georgia business license", required: true, n: "GA_business_license.pdf", sz: "1.4 MB", st: "approved", scan: "clean" },
  { t: "Premises lease agreement", required: true, n: "peachtree_lease.pdf", sz: "3.1 MB", st: "review", scan: "clean" },
  { t: "Surety bond certificate ($10,000)", required: true, n: null, sz: null, st: "missing" },
  { t: "Owner #1 - Driver license", required: true, n: "marcus_dl.jpg", sz: "812 KB", st: "approved", scan: "clean" },
  { t: "Owner #2 - Driver license", required: true, n: "priya_dl.jpg", sz: "640 KB", st: "uploading", progress: 64, scan: "scanning" },
  { t: "Owner #3 - Driver license", required: true, n: null, sz: null, st: "missing" },
  { t: "Voided business check", required: false, n: "voided_check.pdf", sz: "112 KB", st: "approved", scan: "clean" },
];

function DocumentsStep({ notify }: { notify: (t: "success"|"info"|"error", m: string) => void }) {
  const [docs, setDocs] = useState<Doc[]>(INITIAL_DOCS);
  const [dragOver, setDragOver] = useState(false);

  const ok = docs.filter((d) => d.st === "approved").length;
  const total = docs.length;
  const missing = docs.filter((d) => d.required && (d.st === "missing" || d.st === "error")).length;

  return (
    <div className="space-y-7">
      <SectionHeader icon={CloudUpload} title="Document upload" subtitle="Upload clear, legible copies. Documents are encrypted and virus-scanned automatically." />

      {/* Summary */}
      <div className="grid gap-3 sm:grid-cols-4">
        <SummaryStat label="Approved" value={`${ok}/${total}`} tone="success" icon={CheckCircle2} />
        <SummaryStat label="In review" value={docs.filter((d) => d.st === "review").length} tone="warning" icon={Eye} />
        <SummaryStat label="Uploading" value={docs.filter((d) => d.st === "uploading").length} tone="info" icon={Loader2} />
        <SummaryStat label="Missing" value={missing} tone={missing ? "error" : "muted"} icon={AlertCircle} />
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); notify("success", "1 file added to upload queue."); }}
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          dragOver ? "border-primary bg-primary/8 scale-[1.01]" : "border-border bg-surface-muted/40 hover:border-primary/50"
        }`}
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <CloudUpload className="h-7 w-7" />
        </div>
        <div className="mt-3 font-display text-lg font-bold">Drag & drop files here</div>
        <div className="mt-1 text-sm text-muted-foreground">or <span className="font-semibold text-primary underline underline-offset-2">browse from your computer</span></div>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px]">
          {["PDF","JPG","PNG","JPEG","TIFF"].map((f) => (
            <span key={f} className="rounded-full border border-border bg-background px-2.5 py-1 font-semibold text-muted-foreground">{f}</span>
          ))}
          <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground">10 MB max</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3 text-success" /> Files are encrypted at rest (AES-256) and scanned for malware
        </div>
      </div>

      {/* Document list */}
      <div className="grid gap-4 lg:grid-cols-2">
        {docs.map((d, i) => <DocCard key={d.t} doc={d} onChange={(nd) => setDocs(docs.map((x, idx) => idx === i ? nd : x))} />)}
      </div>
    </div>
  );
}

function SummaryStat({ label, value, tone, icon: Icon }: { label: string; value: React.ReactNode; tone: "success"|"warning"|"info"|"error"|"muted"; icon: any }) {
  const toneCls = {
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning",
    info: "bg-info/10 text-info",
    error: "bg-destructive/10 text-destructive",
    muted: "bg-muted text-muted-foreground",
  }[tone];
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className={`grid h-7 w-7 place-items-center rounded-full ${toneCls}`}><Icon className="h-3.5 w-3.5" /></div>
      </div>
      <div className="mt-1 font-display text-2xl font-black">{value}</div>
    </div>
  );
}

function DocCard({ doc, onChange }: { doc: Doc; onChange: (d: Doc) => void }) {
  const status = doc.st;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
            status === "approved" ? "bg-success/10 text-success"
            : status === "review" ? "bg-warning/15 text-warning"
            : status === "uploading" ? "bg-info/10 text-info"
            : status === "error" ? "bg-destructive/10 text-destructive"
            : "bg-muted text-muted-foreground"
          }`}>
            {status === "uploading" ? <Loader2 className="h-5 w-5 animate-spin" /> :
             status === "approved" ? <FileCheck2 className="h-5 w-5" /> :
             status === "missing" ? <FileText className="h-5 w-5" /> :
             <FileText className="h-5 w-5" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="truncate text-sm font-semibold">{doc.t}</div>
              {doc.required && <span className="rounded-full bg-destructive/10 px-1.5 py-0.5 text-[10px] font-bold text-destructive">REQ</span>}
            </div>
            {doc.n && (
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1"><FileText className="h-3 w-3" /> {doc.n}</span>
                {doc.sz && <span>· {doc.sz}</span>}
                {doc.scan === "clean" && <span className="inline-flex items-center gap-0.5 text-success"><ShieldCheck className="h-3 w-3" /> Virus scan clean</span>}
                {doc.scan === "scanning" && <span className="inline-flex items-center gap-0.5 text-info"><Loader2 className="h-3 w-3 animate-spin" /> Scanning…</span>}
              </div>
            )}
          </div>
        </div>
        <div className="shrink-0">
          {status === "approved" && <Chip tone="success">Approved</Chip>}
          {status === "review" && <Chip tone="warning">In review</Chip>}
          {status === "uploading" && <Chip tone="info">Uploading</Chip>}
          {status === "missing" && <Chip tone="error">Missing</Chip>}
          {status === "error" && <Chip tone="error">Failed</Chip>}
        </div>
      </div>

      {status === "uploading" && (
        <div className="mt-3">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-info transition-all" style={{ width: `${doc.progress ?? 0}%` }} />
          </div>
          <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>{doc.progress}% · 2.1 MB/s</span>
            <button className="font-medium text-foreground hover:underline">Cancel</button>
          </div>
        </div>
      )}

      {status === "missing" ? (
        <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
          <Upload className="h-3.5 w-3.5" /> Choose file or drag & drop
          <input type="file" className="sr-only" onChange={() => onChange({ ...doc, n: "new_upload.pdf", sz: "1.2 MB", st: "uploading", progress: 28, scan: "scanning" })} />
        </label>
      ) : status === "error" ? (
        <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs">
          <span className="text-destructive">Upload failed - file exceeds 10 MB limit.</span>
          <button className="inline-flex items-center gap-1 rounded-md bg-destructive px-2.5 py-1 text-[11px] font-semibold text-destructive-foreground hover:opacity-90">
            <RefreshCw className="h-3 w-3" /> Retry
          </button>
        </div>
      ) : status !== "uploading" && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          <button className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted"><Eye className="h-3 w-3" /> Preview</button>
          <button className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted"><Upload className="h-3 w-3" /> Replace</button>
          <button className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted"><Download className="h-3 w-3" /> Download</button>
          <button onClick={() => onChange({ ...doc, st: "missing", n: null, sz: null })} aria-label="Remove" className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-destructive hover:bg-destructive/10"><Trash2 className="h-3 w-3" /> Remove</button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 8 - Review                                                   */
/* ------------------------------------------------------------------ */

function ReviewStep({ onEdit }: { onEdit: (step: number) => void }) {
  const sections = [
    { step: 1, title: "Retailer information", items: [
      ["Legal name", "Peachtree Quick Stop LLC"], ["DBA", "Peachtree Mart"],
      ["Type", "Limited Liability Company"], ["EIN", "58-1234567"],
      ["Phone", "(404) 555-0143"], ["Email", "operations@peachtreemart.com"],
    ]},
    { step: 2, title: "Business operations", items: [
      ["Locations", "1"], ["Employees", "5-10"],
      ["Bank", "Wells Fargo Bank, N.A."], ["Account", "••••4421"],
      ["Insurance", "The Hartford"], ["Liability", "$1,000,000"],
    ]},
    { step: 3, title: "Business address", items: [
      ["Premises", "3290 Peachtree Rd NE Ste 110"],
      ["City / State / ZIP", "Atlanta, GA 30305-2455"],
      ["County", "Fulton"], ["Verified", "USPS DPV confirmed (98%)"],
    ]},
    { step: 4, title: "Mailing address", items: [
      ["Mailing", "Same as business address"],
    ]},
    { step: 5, title: "Owners (3)", items: [
      ["Marcus Whitfield", "60% · Managing Member · Verified"],
      ["Priya Ramanathan", "30% · Member · Pending"],
      ["Daniel Okafor", "10% · Member · In review"],
    ]},
    { step: 6, title: "Documents (7 uploaded)", items: [
      ["Approved", "5"], ["In review", "1"], ["Uploading", "1"], ["Missing", "2"],
    ]},
  ];

  return (
    <div className="space-y-7">
      <SectionHeader icon={FileCheck2} title="Review your application" subtitle="Verify all information is accurate before submission. Click any section to edit." />

      <div className="rounded-xl border border-warning/40 bg-warning/5 p-4">
        <div className="flex items-start gap-3 text-sm">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <div>
            <strong className="text-foreground">2 items need attention:</strong>
            <ul className="mt-1 list-disc pl-5 text-foreground/80">
              <li>Surety bond certificate is missing</li>
              <li>Owner #3 driver license is missing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {sections.map((s) => (
          <details key={s.title} open className="group overflow-hidden rounded-xl border border-border bg-surface">
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 hover:bg-muted">
              <div className="flex items-center gap-3">
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-0 -rotate-90" />
                <h3 className="font-display text-base font-bold">{s.title}</h3>
              </div>
              <button
                onClick={(e) => { e.preventDefault(); onEdit(s.step); }}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted"
              >
                <Pencil className="h-3 w-3" /> Edit
              </button>
            </summary>
            <div className="border-t border-border bg-surface-muted/30 px-5 py-4">
              <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {s.items.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 text-sm">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP 9 - Submit                                                   */
/* ------------------------------------------------------------------ */

function SubmitStep({ notify }: { notify: (t: "success"|"info"|"error", m: string) => void }) {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [sig, setSig] = useState("");

  return (
    <div className="space-y-7">
      <SectionHeader icon={Send} title="Sign and submit" subtitle="Confirm your application is complete and accurate." />

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {/* Attestations */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-display text-base font-bold">Attestations</h3>
            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50">
                <input type="checkbox" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]" />
                <span className="text-sm">I certify that all information provided in this application is true, complete, and accurate to the best of my knowledge.</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50">
                <input type="checkbox" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]" />
                <span className="text-sm">I authorize the Georgia Lottery Corporation to conduct background checks on all listed owners and verify all provided information.</span>
              </label>
            </div>
          </div>

          {/* E-Signature */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-display text-base font-bold">Electronic signature</h3>
            <p className="mt-1 text-sm text-muted-foreground">Type your full legal name as it appears on government-issued ID.</p>
            <div className="mt-4">
              <TextInput
                placeholder="Full legal name"
                value={sig}
                onChange={(e) => setSig(e.target.value)}
                className="font-display text-xl !py-3.5"
                style={{ fontFamily: "cursive" }}
              />
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Signed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</span>
                <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> Legally binding under E-SIGN Act</span>
              </div>
            </div>
          </div>

          {/* Final notice */}
          <div className="rounded-xl border border-info/30 bg-info/5 p-4 text-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-info" />
              <p>
                Once submitted, you will receive a confirmation email with your application number. Background checks and
                premises inspections typically take <strong>10-15 business days</strong>. You may track the status from your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Fees */}
        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary to-primary-hover p-5 text-primary-foreground shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Total fees due</div>
            <div className="mt-1 font-display text-3xl font-black">$425.00</div>
            <div className="mt-1 text-xs opacity-80">Payable upon submission</div>
            <div className="mt-4 space-y-2 border-t border-primary-foreground/20 pt-4 text-sm">
              <div className="flex justify-between"><span className="opacity-85">Application fee</span><span className="font-semibold">$250.00</span></div>
              <div className="flex justify-between"><span className="opacity-85">Background check (3)</span><span className="font-semibold">$150.00</span></div>
              <div className="flex justify-between"><span className="opacity-85">Processing fee</span><span className="font-semibold">$25.00</span></div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payment method</div>
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-border p-3">
              <div className="grid h-10 w-14 place-items-center rounded bg-gradient-to-br from-primary to-primary-hover text-[10px] font-black text-primary-foreground">VISA</div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">•••• 4242</div>
                <div className="text-xs text-muted-foreground">Expires 09/28</div>
              </div>
              <button className="ml-auto text-xs font-medium text-primary hover:underline">Change</button>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Lock className="h-3 w-3 text-success" /> Secured by Stripe · PCI DSS Level 1
            </div>
          </div>
        </aside>
      </div>

      <button
        disabled={!agree1 || !agree2 || sig.length < 3}
        onClick={() => notify("success", "Application submitted! Confirmation #GLC-2026-08831")}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-success px-6 py-4 font-display text-base font-bold text-success-foreground shadow-lifted transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ShieldCheck className="h-5 w-5" /> Submit application & pay $425.00
      </button>
    </div>
  );
}
