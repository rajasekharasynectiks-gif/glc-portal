import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Search, Filter, Download, LogIn, LogOut, Eye, Pencil, Trash2, CreditCard, Upload, DownloadCloud, ShieldCheck, Settings } from "lucide-react";

export const Route = createFileRoute("/admin/audit")({
  head: () => ({ meta: [{ title: "Audit Logs — GLC Admin" }] }),
  component: AuditPage,
});

const events: [string, string, string, string, string, string, any][] = [
  ["12:04:22","LOGIN","aliciad@glc.gov","Super Admin","74.212.9.14","Success",LogIn],
  ["12:03:11","UPDATE","kwalters@glc.gov","Licensing Admin","74.212.9.14","APP-2026-00142 status → In Review",Pencil],
  ["12:01:57","DOWNLOAD","mchen@glc.gov","Compliance","74.212.9.14","Business_License_Acme.pdf",DownloadCloud],
  ["11:58:44","PAYMENT","system","Automation","10.0.4.12","TX-88213 authorized $279.25",CreditCard],
  ["11:55:03","CONFIG","aliciad@glc.gov","Super Admin","74.212.9.14","Password policy → 12 chars, MFA required",Settings],
  ["11:44:12","VIEW","auditor01@glc.gov","Read-only Auditor","74.212.9.14","Viewed applicant USR-88356",Eye],
  ["11:32:00","DELETE","aliciad@glc.gov","Super Admin","74.212.9.14","Removed dead-letter notification #NF-8812",Trash2],
  ["11:18:41","UPLOAD","james.m@acmecvs.com","Applicant","76.14.201.9","Uploaded Surety_Bond_25k.pdf",Upload],
  ["10:52:19","APPROVAL","treyes@glc.gov","Licensing Admin","74.212.9.14","Approved APP-2026-00136",ShieldCheck],
  ["10:12:03","LOGOUT","priya@sunrisefoods.co","Applicant","74.101.2.88","Session ended",LogOut],
];

function AuditPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Audit Logs" }]}
      title="Audit trail"
      subtitle="Immutable, timestamped record of every action across the platform."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:bg-muted"><Download className="h-3.5 w-3.5" /> Export CSV</button>}
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Events 24h" value="18,412" tone="info" sub="Avg 214/hr" />
        <KpiCard label="Config changes" value="24" tone="warning" sub="4 by super admins" />
        <KpiCard label="Failed logins" value="63" tone="error" sub="12 accounts locked" />
        <KpiCard label="Integrity" value="OK" tone="success" sub="Hash-chained · verified 08:00" />
      </div>

      <div className="gov-card mb-3 p-3">
        <div className="grid gap-2 md:grid-cols-[1fr_auto_auto_auto_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search user, IP, action, entity…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
          </div>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>All actions</option></select>
          <select className="rounded-md border border-input bg-surface px-3 py-2 text-sm"><option>Any role</option></select>
          <input type="date" className="rounded-md border border-input bg-surface px-3 py-2 text-sm" />
          <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm hover:bg-muted"><Filter className="h-3.5 w-3.5" /> Advanced</button>
        </div>
      </div>

      <div className="gov-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>{["Time","Action","Actor","Role","IP","Detail"].map(h => <th key={h} className="px-3 py-2.5 text-left font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody className="font-mono text-xs">
            {events.map((e, i) => {
              const Icon = e[6] as any;
              return (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">{e[0]}</td>
                  <td className="px-3 py-2"><span className="inline-flex items-center gap-1.5"><Icon className="h-3.5 w-3.5 text-primary" /><Chip tone="info">{e[1]}</Chip></span></td>
                  <td className="px-3 py-2">{e[2]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{e[3]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{e[4]}</td>
                  <td className="px-3 py-2 font-sans">{e[5]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          <span>Immutable · SHA-256 chained · exported to SIEM every 5 min</span>
          <span>1–10 of 4,218,912</span>
        </div>
      </div>
    </AdminShell>
  );
}
