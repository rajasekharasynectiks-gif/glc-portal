import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { CloudUpload, ShieldCheck, Lock, FileText, Eye, RefreshCw, Trash2, CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/app/payments/eft")({
  head: () => ({ meta: [{ title: "EFT Documents - GLC" }] }),
  component: EftPage,
});

type Doc = { id: string; t: string; desc: string; status: "empty" | "uploading" | "clean" | "review"; size?: string; progress?: number };

function EftPage() {
  const [docs, setDocs] = useState<Doc[]>([
    { id: "check", t: "Voided Check", desc: "Clear image or PDF showing account & routing numbers.", status: "clean", size: "220 KB" },
    { id: "auth",  t: "Bank Authorization Letter", desc: "Signed authorization on bank letterhead.", status: "uploading", progress: 64, size: "1.2 MB" },
    { id: "biz",   t: "Business Documents", desc: "Certificate of formation or EIN letter.", status: "empty" },
  ]);

  function trigger(id: string) {
    setDocs(prev => prev.map(d => d.id === id ? { ...d, status: "uploading", progress: 10, size: "980 KB" } : d));
    let p = 10;
    const iv = setInterval(() => {
      p += 18;
      setDocs(prev => prev.map(d => d.id === id ? { ...d, progress: Math.min(p, 100) } : d));
      if (p >= 100) { clearInterval(iv); setTimeout(() => setDocs(prev => prev.map(d => d.id === id ? { ...d, status: "clean" } : d)), 400); }
    }, 300);
  }

  const done = docs.filter(d => d.status === "clean").length;
  const percent = Math.round((done / docs.length) * 100);

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Payments", to: "/app/payments" }, { label: "EFT Documents" }]} />}
      title="EFT documents"
      subtitle="Upload the banking documents required for electronic funds transfer setup."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {docs.map(d => (
            <div key={d.id} className="gov-card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary"><FileText className="h-5 w-5" /></span>
                  <div>
                    <div className="font-display text-base font-bold">{d.t}</div>
                    <div className="text-sm text-muted-foreground">{d.desc}</div>
                  </div>
                </div>
                {d.status === "clean" && <Chip tone="success"><CheckCircle2 className="h-3 w-3" /> Approved</Chip>}
                {d.status === "review" && <Chip tone="warning">In review</Chip>}
                {d.status === "uploading" && <Chip tone="info"><Loader2 className="h-3 w-3 animate-spin" /> Uploading</Chip>}
                {d.status === "empty" && <Chip tone="muted">Not uploaded</Chip>}
              </div>

              {d.status === "empty" ? (
                <button onClick={() => trigger(d.id)} className="mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-muted p-8 text-sm text-muted-foreground hover:border-primary/40 hover:bg-primary/[0.03]">
                  <CloudUpload className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-foreground">Drop file or click to upload</span>
                  <span className="text-xs">PDF, JPG or PNG · Max 10 MB</span>
                </button>
              ) : (
                <div className="mt-4 rounded-md border border-border bg-surface p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <FileText className="h-5 w-5 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{d.t.toLowerCase().replace(/\s+/g,"-")}.pdf</div>
                        <div className="text-xs text-muted-foreground">{d.size}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Chip tone="success"><ShieldCheck className="h-3 w-3" /> Virus scan · Clean</Chip>
                      <Chip tone="info"><Lock className="h-3 w-3" /> Encrypted</Chip>
                    </div>
                  </div>
                  {d.status === "uploading" && (
                    <div className="mt-3">
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${d.progress ?? 0}%` }} />
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{d.progress ?? 0}% uploaded · Scanning for threats</div>
                    </div>
                  )}
                  <div className="mt-3 flex justify-end gap-1.5">
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted"><Eye className="h-3.5 w-3.5" /> Preview</button>
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted"><RefreshCw className="h-3.5 w-3.5" /> Replace</button>
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-end gap-2">
            <Link to="/app/applications/tracking" className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">Save & continue later</Link>
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover">Submit for review</button>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="gov-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload progress</div>
            <div className="mt-2 flex items-end gap-2"><div className="font-display text-4xl font-bold">{percent}%</div><div className="pb-1 text-xs text-muted-foreground">of documents ready</div></div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-to-r from-primary to-success" style={{ width: `${percent}%` }} /></div>
            <ul className="mt-4 space-y-2 text-sm">
              {docs.map(d => (
                <li key={d.id} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${d.status === "clean" ? "bg-success" : d.status === "uploading" ? "bg-primary" : "bg-muted-foreground/40"}`} />
                  <span className="flex-1">{d.t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground">
              All uploads are TLS-encrypted, scanned for malware, and stored in the GLC FIPS-140-2 vault.
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
