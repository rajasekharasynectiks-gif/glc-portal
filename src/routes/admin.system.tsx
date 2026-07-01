import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Cpu, HardDrive, Flag, Settings, ShieldCheck, Database, RotateCcw, FileClock, Zap } from "lucide-react";

export const Route = createFileRoute("/admin/system")({
  head: () => ({ meta: [{ title: "System Administration — GLC Admin" }] }),
  component: SysPage,
});

function SysPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "System Administration" }]}
      title="System administration"
      subtitle="Business rules, workflows, policies, and environment controls."
    >
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {[
          { i: Settings, t: "Business rules", d: "Application lifecycle, holds, escalations", items: [["Auto-assign reviewer","On"],["SLA response","24h"],["Escalate ≥ 5d","On"]] },
          { i: FileClock, t: "Workflow rules", d: "Approval routing per fee tier", items: [["≤ $500","1 approver"],["$500–$1500","2 approvers"],["> $1500","Compliance + Ops"]] },
          { i: HardDrive, t: "Document rules", d: "Format, size and virus scanning", items: [["Max size","25 MB"],["Allowed types","PDF, PNG, JPG"],["Virus scan","ClamAV daily sigs"]] },
          { i: ShieldCheck, t: "Password policy", d: "Complexity, rotation, MFA", items: [["Min length","12"],["Rotation","90 days"],["MFA","Required"]] },
          { i: Database, t: "Retention", d: "Data lifecycle by category", items: [["Applications","7 years"],["Payments","10 years"],["Audit","10 years"]] },
          { i: RotateCcw, t: "Backup", d: "Frequency, region, verification", items: [["Frequency","Hourly"],["Regions","us-east-1, us-west-2"],["Restore drill","Monthly"]] },
          { i: Zap, t: "Payment configuration", d: "Gateway, fees, retries", items: [["Gateway","MerchantOne"],["Convenience fee","1.5% + $0.30"],["Max retries","3"]] },
          { i: Cpu, t: "System parameters", d: "Runtime configuration", items: [["Region","us-east-1"],["Env","Prod"],["Build","4.2.1"]] },
          { i: Flag, t: "Feature flags", d: "Progressive rollout", items: [["Owner ID OCR","10%"],["New CMS","100%"],["Push notifications","Off"]] },
        ].map(c => (
          <section key={c.t} className="gov-card p-5">
            <div className="flex items-center gap-2"><c.i className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-bold">{c.t}</h3></div>
            <p className="text-xs text-muted-foreground">{c.d}</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {c.items.map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-border pb-1 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <Chip tone="info">{v}</Chip>
                </li>
              ))}
            </ul>
            <button className="mt-3 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Configure</button>
          </section>
        ))}
      </div>
    </AdminShell>
  );
}
