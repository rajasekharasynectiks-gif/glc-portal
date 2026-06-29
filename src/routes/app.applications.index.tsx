import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Chip, Breadcrumb } from "@/components/public-shell";
import { Plus, Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/app/applications/")({
  head: () => ({ meta: [{ title: "My Applications — GLC" }] }),
  component: Apps,
});

const rows = [
  { id: "APP-2026-08831", biz: "Acme Convenience LLC", type: "Convenience Store", sub: "Jun 18, 2026", st: "In Review", tone: "warning" },
  { id: "APP-2026-08544", biz: "Peachtree Market", type: "Grocery", sub: "May 02, 2026", st: "Approved", tone: "success" },
  { id: "APP-2025-12108", biz: "Decatur Wine & Spirits", type: "Liquor", sub: "Nov 14, 2025", st: "Approved", tone: "success" },
  { id: "APP-2025-09812", biz: "Marietta Quick Stop", type: "Convenience Store", sub: "Aug 22, 2025", st: "Renewal Due", tone: "warning" },
  { id: "APP-2025-04401", biz: "Buckhead Café", type: "Restaurant", sub: "Mar 09, 2025", st: "Expired", tone: "error" },
] as const;

function Apps() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "My Applications" }]} />}
      title="My Applications"
      subtitle="Track every application, renewal, and license under your account."
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search applications…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
        </div>
        <Link to="/app/applications/new" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
          <Plus className="h-4 w-4" /> New Application
        </Link>
      </div>

      <div className="gov-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 text-left">Application</th>
                <th className="px-5 py-3 text-left">Business</th>
                <th className="px-5 py-3 text-left">Type</th>
                <th className="px-5 py-3 text-left">Submitted</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-muted/40">
                  <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{r.id}</td>
                  <td className="px-5 py-4 font-semibold">{r.biz}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.type}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.sub}</td>
                  <td className="px-5 py-4"><Chip tone={r.tone}>{r.st}</Chip></td>
                  <td className="px-5 py-4 text-right">
                    <Link to="/app/applications/new" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">View <ArrowRight className="h-3.5 w-3.5" /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
        <div>Showing 5 of 5</div>
        <div className="flex gap-1">
          <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Previous</button>
          <button className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground">1</button>
          <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted">Next</button>
        </div>
      </div>
    </AppShell>
  );
}
