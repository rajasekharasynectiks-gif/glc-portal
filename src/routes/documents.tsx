import { createFileRoute } from "@tanstack/react-router";
import { PublicShell, Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { Search, FileText, Download, Filter } from "lucide-react";

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [{ title: "Documents Library - GLC Retailer Licensing" }, { name: "description", content: "Download retailer licensing forms, policies, and application guides." }] }),
  component: Docs,
});

const docs = [
  { t: "2026 Retailer Fee Schedule", c: "Policies", sz: "PDF • 284 KB", d: "Jun 24, 2026", n: true },
  { t: "Retailer Application Guide", c: "Guides", sz: "PDF • 1.2 MB", d: "May 12, 2026" },
  { t: "Owner Background Disclosure Form", c: "Forms", sz: "PDF • 198 KB", d: "Apr 02, 2026" },
  { t: "Surety Bond Instructions", c: "Guides", sz: "PDF • 432 KB", d: "Mar 18, 2026" },
  { t: "Code of Conduct for Retailers", c: "Policies", sz: "PDF • 612 KB", d: "Feb 28, 2026" },
  { t: "Premises Eligibility Checklist", c: "Forms", sz: "PDF • 122 KB", d: "Feb 02, 2026" },
  { t: "Privacy & Data Handling Policy", c: "Policies", sz: "PDF • 248 KB", d: "Jan 15, 2026" },
  { t: "Renewal Quick Start", c: "Guides", sz: "PDF • 318 KB", d: "Jan 09, 2026" },
];

function Docs() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", "Forms", "Guides", "Policies"];
  const filtered = docs.filter((d) => (cat === "All" || d.c === cat) && d.t.toLowerCase().includes(q.toLowerCase()));
  return (
    <PublicShell>
      <section className="border-b border-border bg-surface-muted">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Documents" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Documents Library</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Download policies, application guides, and licensing forms.</p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…"
              className="w-full rounded-md border border-input bg-surface py-2.5 pl-10 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-border bg-surface p-1">
            <Filter className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {filtered.map((d) => (
            <div key={d.t} className="gov-card flex items-start gap-4 p-5 transition-shadow hover:shadow-lifted">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive"><FileText className="h-5 w-5" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 font-semibold">{d.t}</div>
                  {d.n && <Chip tone="success">New</Chip>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{d.c} · {d.sz} · Updated {d.d}</div>
              </div>
              <button aria-label={`Download ${d.t}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-primary hover:bg-primary/10"><Download className="h-5 w-5" /></button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
          <div>Showing {filtered.length} of {docs.length} documents</div>
          <div className="flex gap-1">
            <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Previous</button>
            <button className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground">1</button>
            <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">2</button>
            <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Next</button>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
