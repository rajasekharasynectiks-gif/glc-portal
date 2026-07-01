import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Bold, Italic, Link2, List, Image as ImageIcon, Eye, Save, Clock, History, CheckCircle2, GitBranch, Newspaper } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/cms")({
  head: () => ({ meta: [{ title: "Content Management — GLC Admin" }] }),
  component: CmsPage,
});

const pages = [
  ["home","Home Page","Published","Alicia D.","Jun 28"],
  ["faq","FAQ Page","Published","Ken W.","Jun 27"],
  ["docs","Documents Page","Draft","Alicia D.","Jun 28"],
  ["about","About Us","Published","Marketing","May 12"],
  ["contact","Contact Us","Published","Marketing","May 03"],
  ["announce","Announcements","Scheduled","Alicia D.","Jul 01"],
  ["banner","Homepage Banner","Published","Alicia D.","Jun 28"],
  ["carousel","Carousel Images","Draft","Marketing","Jun 20"],
  ["policies","Policies","Published","Legal","Apr 18"],
  ["terms","Terms of Service","Published","Legal","Apr 18"],
  ["privacy","Privacy Policy","Published","Legal","Apr 18"],
  ["sms","SMS Terms","Draft","Legal","Jun 30"],
];

function CmsPage() {
  const [sel, setSel] = useState(pages[0]);
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Content Management" }]}
      title="Content management"
      subtitle="Manage public-facing pages, banners, and policies with approval workflow and version history."
      actions={
        <>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Eye className="h-3.5 w-3.5" /> Preview</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Save className="h-3.5 w-3.5" /> Save draft</button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><CheckCircle2 className="h-3.5 w-3.5" /> Publish</button>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[280px_1fr_260px]">
        <aside className="gov-card p-2">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Content library</div>
          <ul className="mt-1 space-y-0.5">
            {pages.map(p => (
              <li key={p[0]}><button onClick={() => setSel(p)} className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${sel[0] === p[0] ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}>
                <Newspaper className="h-3.5 w-3.5" />
                <span className="flex-1 truncate">{p[1]}</span>
                <Chip tone={p[2] === "Published" ? "success" : p[2] === "Scheduled" ? "info" : "warning"}>{p[2][0]}</Chip>
              </button></li>
            ))}
          </ul>
        </aside>

        <section className="gov-card">
          <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
            <input defaultValue={sel[1] as string} className="rounded-md border border-input bg-surface px-3 py-1.5 text-sm font-semibold" />
            <Chip tone={sel[2] === "Published" ? "success" : sel[2] === "Scheduled" ? "info" : "warning"}>{sel[2]}</Chip>
            <span className="text-[11px] text-muted-foreground">Last edited {sel[4]} · {sel[3]}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 border-b border-border p-2">
            {[Bold, Italic, Link2, List, ImageIcon].map((I, i) => (
              <button key={i} className="grid h-7 w-7 place-items-center rounded hover:bg-muted"><I className="h-3.5 w-3.5" /></button>
            ))}
            <div className="mx-2 h-5 w-px bg-border" />
            <select className="rounded border border-input bg-surface px-2 py-0.5 text-xs"><option>Paragraph</option><option>H1</option><option>H2</option></select>
          </div>
          <div className="p-5">
            <input defaultValue="Welcome to the Georgia Lottery Retailer Portal" className="w-full border-0 bg-transparent p-0 font-display text-2xl font-bold outline-none" />
            <textarea
              defaultValue={`Apply, track, and manage your retailer license entirely online. Our secure portal is built for Georgia small business owners and complies with FIPS 140-2 and WCAG 2.1 AA standards.\n\nUse the sections below to explore eligibility, fees, and application timing.`}
              rows={16}
              className="mt-3 w-full resize-none border-0 bg-transparent p-0 text-sm leading-relaxed outline-none"
            />
            <div className="mt-4 rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              <ImageIcon className="mx-auto mb-2 h-6 w-6" /> Drop media here or use the library
            </div>
          </div>
        </section>

        <aside className="space-y-3">
          <div className="gov-card p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Publish</div>
            <div className="mt-2 space-y-2 text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="pub" defaultChecked className="accent-primary" /> Publish now</label>
              <label className="flex items-center gap-2"><input type="radio" name="pub" className="accent-primary" /> Schedule</label>
              <input type="datetime-local" className="w-full rounded-md border border-input bg-surface px-2 py-1.5 text-xs" />
            </div>
          </div>
          <div className="gov-card p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Approval workflow</div>
            <ol className="mt-2 space-y-2 text-xs">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> Author — Alicia D.</li>
              <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-warning" /> Legal review — pending</li>
              <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-muted-foreground" /> Publisher sign-off</li>
            </ol>
          </div>
          <div className="gov-card p-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"><History className="h-3.5 w-3.5" /> Version history</div>
            <ul className="mt-2 space-y-1.5 text-xs">
              {[["v12","Alicia D.","3h ago","current"],["v11","Alicia D.","1d ago",""],["v10","Ken W.","5d ago",""],["v9","Marketing","2w ago",""]].map(([v,a,t,c]) => (
                <li key={v} className="flex items-center gap-2 rounded border border-border px-2 py-1.5">
                  <GitBranch className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono">{v}</span>
                  <span className="text-muted-foreground">{a}</span>
                  <span className="ml-auto text-muted-foreground">{t}</span>
                  {c && <Chip tone="info">now</Chip>}
                </li>
              ))}
            </ul>
            <button className="mt-2 w-full rounded-md border border-border py-1.5 text-xs hover:bg-muted">Rollback</button>
          </div>
        </aside>
      </div>
    </AdminShell>
  );
}
