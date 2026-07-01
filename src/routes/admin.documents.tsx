import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Folder, FileText, Search, Grid3x3, List, Download, ShieldCheck, Lock, ScanLine, Clock, History } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/documents")({
  head: () => ({ meta: [{ title: "Documents — GLC Admin" }] }),
  component: DocsPage,
});

const folders = ["All Documents","Business Licenses","Certificates","IDs & Verifications","Financials","Legal & Bonds","Archived"];
const files = [
  { n: "Business_License_Acme.pdf", a: "Acme Convenience LLC", size: "2.1 MB", scan: "Clean", enc: true, exp: "2027-06-01", v: 3 },
  { n: "Surety_Bond_25k.pdf", a: "Ridge & Main Fuel", size: "1.4 MB", scan: "Clean", enc: true, exp: "2026-12-14", v: 1 },
  { n: "OwnerID_Chen_Sarah.pdf", a: "Acme Convenience LLC", size: "820 KB", scan: "Clean", enc: true, exp: "2029-03-04", v: 2 },
  { n: "Voided_Check_Truist.pdf", a: "Buckhead Beverages", size: "220 KB", scan: "Scanning", enc: true, exp: "—", v: 1 },
  { n: "EIN_Letter_IRS.pdf", a: "Sunrise Foods GA", size: "180 KB", scan: "Clean", enc: true, exp: "—", v: 1 },
  { n: "Certificate_Formation.pdf", a: "Athens Market Co", size: "480 KB", scan: "Quarantine", enc: true, exp: "—", v: 4 },
];

function DocsPage() {
  const [view, setView] = useState<"grid"|"list">("list");
  const [sel, setSel] = useState(files[0]);

  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Documents" }]}
      title="Document repository"
      subtitle="Encrypted vault with virus scanning, retention, and full audit history."
    >
      <div className="grid gap-4 lg:grid-cols-[220px_1fr_320px]">
        <aside className="gov-card p-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Folders</div>
          <ul className="mt-2 space-y-0.5">
            {folders.map((f, i) => (
              <li key={f}><button className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ${i === 0 ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"}`}>
                <Folder className="h-3.5 w-3.5" /> {f}
              </button></li>
            ))}
          </ul>
          <div className="mt-4 rounded-md border border-border bg-surface-muted p-2.5 text-[11px]">
            <div className="flex items-center gap-1.5 font-semibold"><ShieldCheck className="h-3.5 w-3.5 text-success" /> Encryption</div>
            <div className="mt-0.5 text-muted-foreground">AES-256 at rest · TLS 1.3 in transit</div>
          </div>
        </aside>

        <div className="space-y-3">
          <div className="gov-card flex flex-wrap items-center gap-2 p-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search filename, applicant, tag…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
            </div>
            <div className="flex overflow-hidden rounded-md border border-border">
              <button onClick={() => setView("list")} className={`grid h-8 w-8 place-items-center ${view === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}><List className="h-4 w-4" /></button>
              <button onClick={() => setView("grid")} className={`grid h-8 w-8 place-items-center ${view === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}><Grid3x3 className="h-4 w-4" /></button>
            </div>
          </div>

          {view === "list" ? (
            <div className="gov-card overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr>{["File","Applicant","Size","Virus scan","Encryption","Expires","Ver.",""].map(h => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {files.map(f => (
                    <tr key={f.n} onClick={() => setSel(f)} className={`cursor-pointer border-b border-border last:border-0 hover:bg-muted/40 ${sel.n === f.n ? "bg-primary/5" : ""}`}>
                      <td className="px-3 py-2"><span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />{f.n}</span></td>
                      <td className="px-3 py-2 text-muted-foreground">{f.a}</td>
                      <td className="px-3 py-2 text-muted-foreground">{f.size}</td>
                      <td className="px-3 py-2"><Chip tone={f.scan === "Clean" ? "success" : f.scan === "Scanning" ? "info" : "error"}>{f.scan}</Chip></td>
                      <td className="px-3 py-2"><Chip tone="success"><Lock className="h-3 w-3" /> AES-256</Chip></td>
                      <td className="px-3 py-2 text-muted-foreground">{f.exp}</td>
                      <td className="px-3 py-2 font-mono">v{f.v}</td>
                      <td className="px-3 py-2"><button className="rounded border border-border p-1 hover:bg-muted"><Download className="h-3.5 w-3.5" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {files.map(f => (
                <button key={f.n} onClick={() => setSel(f)} className={`gov-card p-4 text-left hover:border-primary ${sel.n === f.n ? "border-primary" : ""}`}>
                  <div className="grid h-24 place-items-center rounded-md bg-surface-muted"><FileText className="h-8 w-8 text-primary" /></div>
                  <div className="mt-3 truncate text-sm font-semibold">{f.n}</div>
                  <div className="text-[11px] text-muted-foreground">{f.a}</div>
                  <div className="mt-2 flex gap-1.5">
                    <Chip tone={f.scan === "Clean" ? "success" : f.scan === "Scanning" ? "info" : "error"}>{f.scan}</Chip>
                    <Chip tone="muted">{f.size}</Chip>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <aside className="gov-card p-4">
          <div className="grid h-32 place-items-center rounded-md bg-surface-muted"><FileText className="h-10 w-10 text-primary" /></div>
          <div className="mt-3 text-sm font-bold">{sel.n}</div>
          <div className="text-[11px] text-muted-foreground">{sel.a} · {sel.size}</div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded border border-border p-2"><div className="text-muted-foreground">Virus scan</div><div className="font-semibold">{sel.scan}</div></div>
            <div className="rounded border border-border p-2"><div className="text-muted-foreground">Encryption</div><div className="font-semibold">AES-256</div></div>
            <div className="rounded border border-border p-2"><div className="text-muted-foreground">Expiration</div><div className="font-semibold">{sel.exp}</div></div>
            <div className="rounded border border-border p-2"><div className="text-muted-foreground">Version</div><div className="font-semibold">v{sel.v}</div></div>
          </div>
          <button className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"><Download className="h-3.5 w-3.5" /> Download</button>
          <div className="mt-4">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Recent audit</div>
            <ul className="space-y-1 text-[11px] text-muted-foreground">
              <li className="flex gap-1.5"><ScanLine className="h-3 w-3" /> Scanned clean · 12m ago</li>
              <li className="flex gap-1.5"><History className="h-3 w-3" /> Version v{sel.v} uploaded · 3h ago</li>
              <li className="flex gap-1.5"><Clock className="h-3 w-3" /> Viewed by K. Walters · 5h ago</li>
            </ul>
          </div>
        </aside>
      </div>
    </AdminShell>
  );
}
