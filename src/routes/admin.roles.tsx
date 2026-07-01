import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Check, X, Shield, Plus, Users, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/roles")({
  head: () => ({ meta: [{ title: "Roles & Permissions — GLC Admin" }] }),
  component: RolesPage,
});

const roles = [
  { id: "super", name: "Super Administrator", n: 3, color: "error" as const, desc: "Unrestricted system access; all destructive actions" },
  { id: "lic", name: "Licensing Administrator", n: 12, color: "info" as const, desc: "Review, approve, reject, assign applications" },
  { id: "comp", name: "Compliance Officer", n: 5, color: "warning" as const, desc: "Compliance reports, background review, holds" },
  { id: "supp", name: "Customer Support", n: 18, color: "success" as const, desc: "Case notes, applicant assistance, ticketing" },
  { id: "fin", name: "Finance Team", n: 6, color: "info" as const, desc: "Payments, refunds, reconciliation, receipts" },
  { id: "ops", name: "Operations Manager", n: 4, color: "success" as const, desc: "Ops dashboard, capacity, SLA, staffing" },
  { id: "sys", name: "System Administrator", n: 2, color: "error" as const, desc: "Integrations, environment, feature flags" },
  { id: "audit", name: "Read-Only Auditor", n: 36, color: "muted" as const, desc: "View everything, edit nothing" },
];

const modules = ["Applications","Applicants","Payments","Documents","CMS","Notifications","Reports","Audit","Users","Roles","System","Integrations","Security","Settings"];
const actions = ["View","Create","Edit","Approve","Delete","Export"];

function cell(role: string, mod: string, act: string) {
  if (role === "super") return true;
  if (role === "audit") return act === "View";
  if (role === "lic" && ["Applications","Applicants","Documents","Reports"].includes(mod)) return act !== "Delete";
  if (role === "comp" && ["Applications","Applicants","Documents","Audit","Reports"].includes(mod)) return ["View","Edit","Approve","Export"].includes(act);
  if (role === "supp" && ["Applications","Applicants","Documents","Notifications"].includes(mod)) return ["View","Create","Edit"].includes(act);
  if (role === "fin" && ["Payments","Reports"].includes(mod)) return ["View","Create","Edit","Export"].includes(act);
  if (role === "ops" && ["Applications","Reports"].includes(mod)) return ["View","Export"].includes(act);
  if (role === "sys" && ["System","Integrations","Users","Security","Settings"].includes(mod)) return true;
  return false;
}

function RolesPage() {
  const [sel, setSel] = useState(roles[1]);
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Roles & Permissions" }]}
      title="Roles & permissions"
      subtitle="RBAC matrix with module, feature, and field-level controls."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><Plus className="h-3.5 w-3.5" /> New role</button>}
    >
      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <aside className="gov-card p-2">
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Roles</div>
          <ul className="mt-1 space-y-0.5">
            {roles.map(r => (
              <li key={r.id}>
                <button onClick={() => setSel(r)} className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left ${sel.id === r.id ? "bg-primary/10" : "hover:bg-muted"}`}>
                  <Shield className={`h-4 w-4 ${sel.id === r.id ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground"><Users className="mr-1 inline h-3 w-3" />{r.n} members</div>
                  </div>
                  <Chip tone={r.color}>RBAC</Chip>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-4">
          <div className="gov-card p-5">
            <div className="flex flex-wrap items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary"><Shield className="h-5 w-5" /></div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl font-bold">{sel.name}</h2>
                <p className="text-sm text-muted-foreground">{sel.desc}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Duplicate</button>
                <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Assign members</button>
                <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">Save changes</button>
              </div>
            </div>
          </div>

          <section className="gov-card overflow-x-auto">
            <div className="border-b border-border p-4">
              <h3 className="font-display text-base font-bold">Permission matrix</h3>
              <p className="text-xs text-muted-foreground">Effective permissions for <b>{sel.name}</b>.</p>
            </div>
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Module</th>
                  {actions.map(a => <th key={a} className="px-3 py-2 text-center font-semibold">{a}</th>)}
                </tr>
              </thead>
              <tbody>
                {modules.map(m => (
                  <tr key={m} className="border-b border-border last:border-0 hover:bg-muted/40">
                    <td className="px-3 py-2 font-medium">{m}</td>
                    {actions.map(a => {
                      const ok = cell(sel.id, m, a);
                      return (
                        <td key={a} className="px-3 py-2 text-center">
                          {ok ? <Check className="mx-auto h-4 w-4 text-success" /> : <X className="mx-auto h-3.5 w-3.5 text-muted-foreground/40" />}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="gov-card p-4">
              <h3 className="font-display text-base font-bold">Approval matrix</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {[["Application < $500","Any Licensing Admin"],["Application ≥ $500","Licensing Admin + Compliance"],["Refund < $200","Finance"],["Refund ≥ $200","Finance + Ops Manager"],["Config change","System Admin + Super Admin"]].map(([a,b], i) => (
                  <li key={i} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0">
                    <span>{a}</span>
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="gov-card p-4">
              <h3 className="font-display text-base font-bold">Access groups</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {[["North GA reviewers", 8],["Enterprise applicants", 4],["Finance approvers", 3],["Emergency responders", 2]].map(([g,n]) => (
                  <li key={g as string} className="flex items-center gap-2 rounded border border-border px-2 py-1.5">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" /><span>{g}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{n} members</span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
