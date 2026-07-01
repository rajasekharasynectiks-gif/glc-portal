import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Search, Filter, Users, ShieldCheck, LockOpen, AlertOctagon, Download, Mail, Phone, MapPin, KeyRound, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/applicants")({
  head: () => ({ meta: [{ title: "Applicants — GLC Admin" }] }),
  component: ApplicantsPage,
});

const list = [
  { id: "USR-88421", name: "James Morrison", email: "james.m@acmecvs.com", phone: "(404) 555-0142", city: "Atlanta, GA", status: "Active", mfa: true, apps: 3, since: "2024" },
  { id: "USR-88399", name: "Priya Shah", email: "priya@sunrisefoods.co", phone: "(770) 555-0918", city: "Marietta, GA", status: "Active", mfa: true, apps: 1, since: "2025" },
  { id: "USR-88371", name: "Devon Blake", email: "devon@peachcorner.com", phone: "(478) 555-2001", city: "Macon, GA", status: "Locked", mfa: false, apps: 2, since: "2023" },
  { id: "USR-88356", name: "Alicia Danvers", email: "adanvers@rmfuel.io", phone: "(706) 555-4488", city: "Augusta, GA", status: "Active", mfa: true, apps: 5, since: "2022" },
  { id: "USR-88322", name: "Ivan Kozlov", email: "ivan.k@metrosnack.com", phone: "(404) 555-7761", city: "Atlanta, GA", status: "Suspended", mfa: false, apps: 1, since: "2025" },
];

function ApplicantsPage() {
  const [sel, setSel] = useState<any | null>(list[0]);
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Applicants" }]}
      title="Applicant directory"
      subtitle="Complete registry of retailer applicants with profile, security, and account tools."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Download className="h-3.5 w-3.5" /> Export</button>}
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Applicants" value="18,204" icon={Users} tone="info" sub="Active accounts" />
        <KpiCard label="MFA Enabled" value="82.4%" icon={ShieldCheck} tone="success" sub="Target 90%" />
        <KpiCard label="Locked" value="46" icon={LockOpen} tone="warning" sub="Auto-unlock 24h" />
        <KpiCard label="Suspicious 7d" value="12" icon={AlertOctagon} tone="error" sub="Under review" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[380px_1fr]">
        <div className="gov-card">
          <div className="border-b border-border p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search applicants…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
            </div>
            <button className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"><Filter className="h-3 w-3" /> Filter · Any status</button>
          </div>
          <ul className="max-h-[560px] overflow-y-auto">
            {list.map(u => (
              <li key={u.id}>
                <button onClick={() => setSel(u)} className={`flex w-full items-center gap-3 border-b border-border p-3 text-left hover:bg-muted/40 ${sel?.id === u.id ? "bg-primary/5" : ""}`}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">{u.name.split(" ").map(s => s[0]).join("")}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="truncate text-sm font-semibold">{u.name}</div>
                      <Chip tone={u.status === "Active" ? "success" : u.status === "Locked" ? "warning" : "error"}>{u.status}</Chip>
                    </div>
                    <div className="truncate text-[11px] text-muted-foreground">{u.email}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {sel && (
          <div className="space-y-4">
            <div className="gov-card p-5">
              <div className="flex flex-wrap items-start gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">{sel.name.split(" ").map((s: string) => s[0]).join("")}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-xl font-bold">{sel.name}</h2>
                    <Chip tone={sel.status === "Active" ? "success" : sel.status === "Locked" ? "warning" : "error"}>{sel.status}</Chip>
                    <Chip tone={sel.mfa ? "success" : "warning"}>MFA {sel.mfa ? "on" : "off"}</Chip>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" /> {sel.email}</span>
                    <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3" /> {sel.phone}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {sel.city}</span>
                    <span>ID {sel.id}</span>
                    <span>Since {sel.since}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted"><KeyRound className="h-3.5 w-3.5" /> Reset password</button>
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted"><LockOpen className="h-3.5 w-3.5" /> Unlock</button>
                  <button className="rounded-md bg-destructive px-3 py-1.5 text-xs font-semibold text-destructive-foreground">Suspend</button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <section className="gov-card p-4">
                <h3 className="font-display text-base font-bold">Application history</h3>
                <ul className="mt-2 text-sm">
                  {[["APP-2026-00142","In Review","Jun 28"],["APP-2025-19812","Approved","Nov 12 2025"],["APP-2024-11288","Approved","Apr 04 2024"]].map(([id, s, d]) => (
                    <li key={id} className="flex items-center gap-2 border-b border-border py-2 last:border-0">
                      <span className="font-mono text-xs text-primary">{id}</span>
                      <Chip tone={s === "Approved" ? "success" : "warning"}>{s}</Chip>
                      <span className="ml-auto text-xs text-muted-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="gov-card p-4">
                <h3 className="font-display text-base font-bold">Login history</h3>
                <ul className="mt-2 space-y-1.5 text-xs">
                  {[["Today 08:14","Chrome · Atlanta, GA","74.212.9.14","success"],["Yesterday 19:02","Safari · Atlanta, GA","74.212.9.14","success"],["Jun 27 11:42","Chrome · Marietta, GA","98.201.4.11","success"],["Jun 26 03:12","Unknown · Kyiv, UA","5.188.211.14","error"]].map(([t,d,ip,tone]: any, i) => (
                    <li key={i} className="flex items-center gap-2 rounded border border-border px-2 py-1.5">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{t}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="truncate">{d}</span>
                      <span className="ml-auto font-mono text-[10px]">{ip}</span>
                      <Chip tone={tone}>{tone === "error" ? "Blocked" : "OK"}</Chip>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="gov-card p-4">
                <h3 className="font-display text-base font-bold">Documents</h3>
                <ul className="mt-2 text-sm text-muted-foreground">
                  <li className="flex justify-between py-1"><span>Business License.pdf</span><span>Approved</span></li>
                  <li className="flex justify-between py-1"><span>EIN Letter.pdf</span><span>Approved</span></li>
                  <li className="flex justify-between py-1"><span>Owner ID (2).pdf</span><span>Encrypted</span></li>
                </ul>
              </section>
              <section className="gov-card p-4">
                <h3 className="font-display text-base font-bold">Support cases</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Chip tone="success">Resolved</Chip> TCK-4412 · Password reset</li>
                  <li className="flex items-center gap-2"><Chip tone="warning">Open</Chip> TCK-4489 · Document upload error</li>
                </ul>
              </section>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
