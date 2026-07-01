import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Search, UserPlus, ShieldCheck, LockOpen, KeyRound, Ban, MoreHorizontal, Users, ShieldAlert, Cpu } from "lucide-react";

export const Route = createFileRoute("/admin/users")({
  head: () => ({ meta: [{ title: "User Management — GLC Admin" }] }),
  component: UsersPage,
});

const users = [
  ["Alicia Danvers","aliciad@glc.gov","Super Administrator","Active",true,"Just now","Chrome · Atlanta"],
  ["Ken Walters","kwalters@glc.gov","Licensing Administrator","Active",true,"3m ago","Edge · Macon"],
  ["Marcy Chen","mchen@glc.gov","Compliance Officer","Active",true,"12m ago","Firefox · Atlanta"],
  ["Trevor Reyes","treyes@glc.gov","Licensing Administrator","Active",true,"1h ago","Chrome · Savannah"],
  ["Naomi Park","npark@glc.gov","Customer Support","Locked",false,"Yesterday","Chrome · Athens"],
  ["Isabel Cortez","icortez@glc.gov","Finance Team","Active",true,"Today","Safari · Atlanta"],
  ["Marcus Wong","mwong@glc.gov","Operations Manager","Active",true,"5h ago","Chrome · Atlanta"],
  ["Ethan Wright","ewright@glc.gov","System Administrator","Active",true,"25m ago","Terminal · vpn"],
  ["Read-Only Auditor","auditor01@glc.gov","Read-Only Auditor","Active",true,"1d ago","Chrome · Remote"],
];

function UsersPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "User Management" }]}
      title="User management"
      subtitle="Internal staff, roles, sessions and device controls."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><UserPlus className="h-3.5 w-3.5" /> New user</button>}
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Staff accounts" value="86" icon={Users} tone="info" />
        <KpiCard label="MFA enrollment" value="96.5%" icon={ShieldCheck} tone="success" sub="Policy: 100%" />
        <KpiCard label="Locked / disabled" value="4" icon={Ban} tone="warning" />
        <KpiCard label="Anomalies (24h)" value="1" icon={ShieldAlert} tone="error" sub="Impossible travel" />
      </div>

      <div className="gov-card mb-3 flex flex-wrap items-center gap-2 p-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search name, email, role…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
        </div>
        <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>All roles</option></select>
        <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>Any status</option></select>
      </div>

      <div className="gov-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>{["User","Role","Status","MFA","Last session","Device",""].map(h => <th key={h} className="px-3 py-2.5 text-left font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u[1] as string} className="border-b border-border last:border-0 hover:bg-muted/40">
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">{(u[0] as string).split(" ").map(s => s[0]).join("")}</span>
                    <div><div className="font-semibold">{u[0]}</div><div className="text-[11px] text-muted-foreground">{u[1]}</div></div>
                  </div>
                </td>
                <td className="px-3 py-2.5"><Chip tone="info">{u[2]}</Chip></td>
                <td className="px-3 py-2.5"><Chip tone={u[3] === "Active" ? "success" : "warning"}>{u[3]}</Chip></td>
                <td className="px-3 py-2.5"><Chip tone={u[4] ? "success" : "error"}>{u[4] ? "TOTP" : "Off"}</Chip></td>
                <td className="px-3 py-2.5 text-muted-foreground">{u[5]}</td>
                <td className="px-3 py-2.5 text-muted-foreground"><Cpu className="mr-1 inline h-3 w-3" />{u[6]}</td>
                <td className="px-3 py-2.5">
                  <div className="inline-flex gap-1">
                    <button className="rounded border border-border p-1.5 hover:bg-muted" title="Reset password"><KeyRound className="h-3.5 w-3.5" /></button>
                    <button className="rounded border border-border p-1.5 hover:bg-muted" title="Unlock"><LockOpen className="h-3.5 w-3.5" /></button>
                    <button className="rounded border border-border p-1.5 hover:bg-muted" title="Disable"><Ban className="h-3.5 w-3.5" /></button>
                    <button className="rounded border border-border p-1.5 hover:bg-muted"><MoreHorizontal className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
