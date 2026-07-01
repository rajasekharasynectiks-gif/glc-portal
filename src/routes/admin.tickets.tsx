import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { LifeBuoy, Timer, CheckCircle2, AlertOctagon, Send, Paperclip, Search, Plus, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/tickets")({
  head: () => ({ meta: [{ title: "Support Tickets — GLC Admin" }] }),
  component: TicketsPage,
});

const cols = ["New","In progress","Waiting on applicant","Resolved"] as const;

const cards: Record<string, { id: string; title: string; from: string; prio: "high"|"med"|"low"; sla: string }[]> = {
  New: [
    { id: "TCK-4501", title: "Cannot upload surety bond PDF", from: "Ivan Kozlov · Metro Snack", prio: "high", sla: "3h left" },
    { id: "TCK-4500", title: "MFA reset requested", from: "Priya Shah · Sunrise Foods", prio: "med", sla: "12h left" },
  ],
  "In progress": [
    { id: "TCK-4489", title: "Address validation confidence 8/11", from: "James Morrison · Acme", prio: "med", sla: "8h left" },
    { id: "TCK-4482", title: "Refund status inquiry TX-88210", from: "Nia Franklin · Buckhead", prio: "med", sla: "18h left" },
    { id: "TCK-4478", title: "Account locked after travel", from: "Devon Blake · Peach Corner", prio: "high", sla: "Breach in 1h", },
  ],
  "Waiting on applicant": [
    { id: "TCK-4465", title: "Need updated EIN letter", from: "Ridge & Main Fuel", prio: "low", sla: "—" },
  ],
  Resolved: [
    { id: "TCK-4412", title: "Password reset", from: "Acme Convenience", prio: "low", sla: "Closed" },
  ],
};

const prioTone = { high: "error", med: "warning", low: "muted" } as const;

function TicketsPage() {
  const [sel, setSel] = useState(cards["In progress"][2]);
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Support Tickets" }]}
      title="Support tickets"
      subtitle="Kanban queue with SLA, escalation, and internal notes."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><Plus className="h-3.5 w-3.5" /> New ticket</button>}
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Open" value="7" icon={LifeBuoy} tone="info" />
        <KpiCard label="SLA risk" value="2" icon={AlertOctagon} tone="warning" />
        <KpiCard label="Avg first response" value="42m" icon={Timer} tone="success" />
        <KpiCard label="Resolved 7d" value="31" icon={CheckCircle2} tone="success" />
      </div>

      <div className="gov-card mb-3 flex flex-wrap items-center gap-2 p-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search subject, applicant, ticket #…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
        </div>
        <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>All priorities</option></select>
        <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>Any assignee</option></select>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {cols.map(c => (
            <div key={c} className="gov-card p-3">
              <div className="mb-2 flex items-center justify-between px-1">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c}</div>
                <Chip tone="muted">{cards[c].length}</Chip>
              </div>
              <div className="space-y-2">
                {cards[c].map(t => (
                  <button key={t.id} onClick={() => setSel(t)} className={`w-full rounded-md border border-border bg-surface p-2.5 text-left hover:border-primary ${sel.id === t.id ? "border-primary shadow-elegant" : ""}`}>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-primary">{t.id}</span>
                      <Chip tone={prioTone[t.prio]}>{t.prio}</Chip>
                      <span className="ml-auto text-[10px] text-muted-foreground">{t.sla}</span>
                    </div>
                    <div className="mt-1 text-sm font-semibold">{t.title}</div>
                    <div className="text-[11px] text-muted-foreground">{t.from}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="gov-card flex h-fit flex-col">
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary">{sel.id}</span>
              <Chip tone={prioTone[sel.prio]}>{sel.prio}</Chip>
              <Chip tone="warning">SLA {sel.sla}</Chip>
            </div>
            <h3 className="mt-1 font-display text-base font-bold">{sel.title}</h3>
            <div className="text-xs text-muted-foreground">{sel.from}</div>
          </div>
          <div className="max-h-[420px] space-y-3 overflow-y-auto p-4 text-sm">
            <div className="rounded-md bg-surface-muted p-3">
              <div className="flex items-center gap-2 text-xs font-semibold"><User className="h-3 w-3" /> Devon Blake · 3h ago</div>
              <p className="mt-1 text-muted-foreground">Locked out after logging in from Kyiv accidentally through VPN. Need urgent unlock, application review due today.</p>
            </div>
            <div className="rounded-md border border-border p-3">
              <div className="flex items-center gap-2 text-xs font-semibold"><MessageSquare className="h-3 w-3" /> Naomi Park (Support) · 2h ago</div>
              <p className="mt-1 text-muted-foreground">Confirmed identity via callback. Escalating to Compliance to unlock and reset MFA.</p>
            </div>
            <div className="rounded-md border border-dashed border-warning/60 bg-warning/5 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-warning">Internal note</div>
              <p className="mt-1 text-xs">Recommend enabling geo-fence rule for known VPN endpoints.</p>
            </div>
          </div>
          <div className="border-t border-border p-3">
            <textarea placeholder="Reply to applicant…" rows={3} className="w-full resize-none rounded-md border border-input bg-surface p-2 text-sm" />
            <div className="mt-2 flex items-center gap-2">
              <button className="rounded border border-border p-1.5 hover:bg-muted"><Paperclip className="h-3.5 w-3.5" /></button>
              <label className="flex items-center gap-1 text-xs text-muted-foreground"><input type="checkbox" className="accent-primary" /> Internal only</label>
              <button className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"><Send className="h-3.5 w-3.5" /> Send</button>
            </div>
          </div>
        </aside>
      </div>
    </AdminShell>
  );
}
