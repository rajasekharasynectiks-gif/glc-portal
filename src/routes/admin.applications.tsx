import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { useState } from "react";
import {
  Search, Filter, Download, Star, MoreHorizontal, Eye, Pencil, Archive, UserCheck,
  Save, ChevronDown, X, FileText, MessageSquare, Clock, ShieldAlert,
  Building2, User, CreditCard, ScrollText, Paperclip,
} from "lucide-react";

export const Route = createFileRoute("/admin/applications")({
  head: () => ({ meta: [{ title: "Applications — GLC Admin" }] }),
  component: AppsPage,
});

const rows = [
  ["APP-2026-00142", "Acme Convenience LLC", "James Morrison", "In Review", "Pending", "Jun 28 2026", "3h ago", "K. Walters", "High"],
  ["APP-2026-00141", "Sunrise Foods GA", "Priya Shah", "Approved", "Paid", "Jun 28 2026", "5h ago", "M. Chen", "Normal"],
  ["APP-2026-00140", "Peach Corner Mart", "Devon Blake", "Documents Requested", "N/A", "Jun 27 2026", "1d ago", "K. Walters", "Normal"],
  ["APP-2026-00139", "Ridge & Main Fuel", "Alicia Danvers", "Background Check", "Paid", "Jun 27 2026", "1d ago", "T. Reyes", "High"],
  ["APP-2026-00138", "Metro Snack Hub", "Ivan Kozlov", "Rejected", "Refunded", "Jun 26 2026", "2d ago", "M. Chen", "Low"],
  ["APP-2026-00137", "Buckhead Beverages", "Nia Franklin", "Submitted", "Pending", "Jun 26 2026", "2d ago", "—", "Normal"],
  ["APP-2026-00136", "Piedmont Petroleum", "Sam Nakamura", "Approved", "Paid", "Jun 25 2026", "3d ago", "T. Reyes", "Normal"],
  ["APP-2026-00135", "Athens Market Co", "Ellen Park", "In Review", "Pending", "Jun 25 2026", "3d ago", "K. Walters", "Normal"],
] as const;

const statusTone: Record<string, "success"|"warning"|"info"|"error"|"muted"> = {
  "Approved":"success","Rejected":"error","In Review":"warning","Documents Requested":"warning",
  "Background Check":"info","Submitted":"info",
};
const payTone: Record<string, "success"|"warning"|"info"|"error"|"muted"> = {
  "Paid":"success","Pending":"warning","Refunded":"info","N/A":"muted",
};

function AppsPage() {
  const [sel, setSel] = useState<string[]>([]);
  const [detail, setDetail] = useState<any | null>(null);
  const toggle = (id: string) => setSel(sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
  const allSel = sel.length === rows.length;
  const anySel = sel.length > 0;

  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Applications" }]}
      title="Applications"
      subtitle="Case management for every retailer licensing application."
      actions={
        <>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Save className="h-3.5 w-3.5" /> Saved views</button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Download className="h-3.5 w-3.5" /> Export</button>
        </>
      }
    >
      {/* Toolbar */}
      <div className="gov-card mb-3 p-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_auto_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search by application #, business, EIN, applicant…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
          </div>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm">
            <option>All statuses</option><option>In Review</option><option>Approved</option><option>Rejected</option>
          </select>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm">
            <option>Any assignee</option><option>K. Walters</option><option>M. Chen</option><option>T. Reyes</option>
          </select>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-muted"><Filter className="h-3.5 w-3.5" /> Advanced</button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
          {["Status: In Review","Priority: High","Submitted: Last 30d","Region: North GA"].map(t => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-1">{t}<X className="h-3 w-3 cursor-pointer" /></span>
          ))}
          <button className="text-primary hover:underline">Clear all</button>
        </div>
      </div>

      {/* Bulk bar */}
      {anySel && (
        <div className="mb-2 flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-sm">
          <span className="font-semibold">{sel.length} selected</span>
          <div className="ml-auto flex gap-1.5">
            <button className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs hover:bg-muted"><UserCheck className="h-3 w-3" /> Assign</button>
            <button className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs hover:bg-muted"><Download className="h-3 w-3" /> Export</button>
            <button className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs hover:bg-muted"><Archive className="h-3 w-3" /> Archive</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="gov-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="w-10 px-3 py-2.5"><input type="checkbox" checked={allSel} onChange={() => setSel(allSel ? [] : rows.map(r => r[0]))} className="accent-primary" /></th>
                {["Application #","Business","Applicant","Status","Payment","Submitted","Updated","Assigned","Priority",""].map(h => (
                  <th key={h} className="px-3 py-2.5 text-left font-semibold">
                    <span className="inline-flex items-center gap-1">{h}{h && h !== "" && <ChevronDown className="h-3 w-3 opacity-50" />}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const [id, biz, app, status, pay, sub, upd, asg, pr] = r;
                return (
                  <tr key={id} className={`border-b border-border last:border-0 hover:bg-muted/40 ${sel.includes(id) ? "bg-primary/5" : ""}`}>
                    <td className="px-3 py-2.5"><input type="checkbox" checked={sel.includes(id)} onChange={() => toggle(id)} className="accent-primary" /></td>
                    <td className="px-3 py-2.5">
                      <button onClick={() => setDetail({ id, biz, app, status, pay, sub, asg })} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
                        <Star className="h-3.5 w-3.5 text-gold" /> {id}
                      </button>
                    </td>
                    <td className="px-3 py-2.5 font-medium">{biz}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{app}</td>
                    <td className="px-3 py-2.5"><Chip tone={statusTone[status] ?? "muted"}>{status}</Chip></td>
                    <td className="px-3 py-2.5"><Chip tone={payTone[pay] ?? "muted"}>{pay}</Chip></td>
                    <td className="px-3 py-2.5 text-muted-foreground">{sub}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{upd}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1.5">
                        {asg !== "—" ? <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-[9px] font-bold text-primary">{asg.split(" ").map(s => s[0]).join("")}</span> : null}
                        {asg}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <Chip tone={pr === "High" ? "error" : pr === "Low" ? "muted" : "info"}>{pr}</Chip>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <div className="inline-flex gap-0.5">
                        <button aria-label="View" onClick={() => setDetail({ id, biz, app, status, pay, sub, asg })} className="grid h-7 w-7 place-items-center rounded hover:bg-muted"><Eye className="h-3.5 w-3.5" /></button>
                        <button aria-label="Edit" className="grid h-7 w-7 place-items-center rounded hover:bg-muted"><Pencil className="h-3.5 w-3.5" /></button>
                        <button aria-label="More" className="grid h-7 w-7 place-items-center rounded hover:bg-muted"><MoreHorizontal className="h-3.5 w-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          <span>Showing 1–8 of 4,218</span>
          <div className="flex gap-1">
            {["‹",1,2,3,4,"…",528,"›"].map((p, i) => (
              <button key={i} className={`grid h-7 min-w-7 place-items-center rounded border border-border px-2 ${p === 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail drawer */}
      {detail && <DetailDrawer d={detail} onClose={() => setDetail(null)} />}
    </AdminShell>
  );
}

function DetailDrawer({ d, onClose }: { d: any; onClose: () => void }) {
  const [tab, setTab] = useState("overview");
  const tabs = [
    ["overview","Overview",Eye],["business","Business",Building2],["owners","Owners",User],
    ["documents","Documents",Paperclip],["payments","Payments",CreditCard],["timeline","Timeline",Clock],
    ["notes","Notes",FileText],["audit","Audit",ScrollText],["comm","Comms",MessageSquare],
  ] as const;

  return (
    <div className="fixed inset-0 z-40 flex bg-foreground/40 backdrop-blur-sm">
      <div className="ml-auto flex h-full w-full max-w-4xl flex-col bg-background shadow-lifted">
        <div className="flex items-center gap-3 border-b border-border px-5 py-3">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{d.id}</div>
            <div className="font-display text-lg font-bold">{d.biz}</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Chip tone={statusTone[d.status] ?? "muted"}>{d.status}</Chip>
            <button className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted">Assign</button>
            <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover">Approve</button>
            <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-md hover:bg-muted"><X className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto border-b border-border px-4">
          {tabs.map(([k, l, Icon]: any) => (
            <button key={k} onClick={() => setTab(k)} className={`inline-flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm ${tab === k ? "border-primary text-primary font-semibold" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <Icon className="h-3.5 w-3.5" /> {l}
            </button>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto p-5 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            {tab === "overview" && (
              <>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[["Applicant",d.app],["EIN","58-••••4421"],["Submitted",d.sub],["Payment",d.pay],["Assigned",d.asg],["County","Fulton"]].map(([k,v]) => (
                    <div key={k} className="gov-card p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
                      <div className="mt-0.5 text-sm font-semibold">{v}</div>
                    </div>
                  ))}
                </div>
                <section className="gov-card p-4">
                  <h3 className="font-display text-base font-bold">Application timeline</h3>
                  <ol className="mt-3 space-y-3 border-l border-border pl-4">
                    {[
                      ["success","Application submitted","Jun 26 · 9:14 AM"],
                      ["info","Payment authorized · $279.25","Jun 26 · 9:16 AM"],
                      ["success","Melissa address confidence 11/11","Jun 26 · 9:17 AM"],
                      ["warning","Documents flagged for reviewer","Jun 27 · 11:02 AM"],
                      ["info","Assigned to K. Walters","Jun 28 · 8:30 AM"],
                    ].map(([tone,t,s]: any, i) => (
                      <li key={i} className="relative">
                        <span className={`absolute -left-[21px] top-1 grid h-3 w-3 rounded-full ring-4 ring-background ${
                          tone === "success" ? "bg-success" : tone === "warning" ? "bg-warning" : "bg-info"
                        }`} />
                        <div className="text-sm font-medium">{t}</div>
                        <div className="text-[11px] text-muted-foreground">{s}</div>
                      </li>
                    ))}
                  </ol>
                </section>
              </>
            )}
            {tab !== "overview" && (
              <div className="gov-card p-8 text-center text-sm text-muted-foreground">
                <FileText className="mx-auto mb-2 h-6 w-6" />
                Detailed <b className="text-foreground">{tab}</b> view — mirrors the applicant module data with reviewer-level edit rights.
              </div>
            )}
          </div>

          <aside className="space-y-3">
            <div className="gov-card p-3">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Risk indicators</div>
              <ul className="mt-2 space-y-1.5 text-xs">
                <li className="flex items-center gap-2"><ShieldAlert className="h-3.5 w-3.5 text-warning" /> Owner 2 identity review pending</li>
                <li className="flex items-center gap-2"><ShieldAlert className="h-3.5 w-3.5 text-success" /> No adverse records found</li>
                <li className="flex items-center gap-2"><ShieldAlert className="h-3.5 w-3.5 text-info" /> Bond amount within threshold</li>
              </ul>
            </div>
            <div className="gov-card p-3">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Compliance flags</div>
              <div className="mt-2 flex flex-wrap gap-1.5"><Chip tone="success">Tax OK</Chip><Chip tone="warning">BG pending</Chip><Chip tone="info">Bond OK</Chip></div>
            </div>
            <div className="gov-card p-3">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Activity feed</div>
              <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                <li>K. Walters opened case · 12m ago</li>
                <li>Doc requested from applicant · 1h ago</li>
                <li>Note added · 3h ago</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
