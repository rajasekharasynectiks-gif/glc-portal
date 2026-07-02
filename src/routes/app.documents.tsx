import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { FileText, Upload, Search } from "lucide-react";

export const Route = createFileRoute("/app/documents")({
  head: () => ({ meta: [{ title: "My Documents - GLC" }] }),
  component: MyDocs,
});

function MyDocs() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Documents" }]} />}
      title="Documents"
      subtitle="Your uploaded files and required attachments."
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search documents…" className="w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm" />
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"><Upload className="h-4 w-4" /> Upload document</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Business License", st: "approved" },
          { t: "Federal Tax ID (EIN)", st: "approved" },
          { t: "Premises Lease Agreement", st: "review" },
          { t: "Owner #1 Photo ID", st: "approved" },
          { t: "Owner #2 Photo ID", st: "missing" },
          { t: "Surety Bond Certificate", st: "missing" },
        ].map((d) => (
          <div key={d.t} className="gov-card p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive"><FileText className="h-5 w-5" /></span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">{d.t}</div>
                <div className="text-xs text-muted-foreground">Required document</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              {d.st === "approved" && <Chip tone="success">Approved</Chip>}
              {d.st === "review" && <Chip tone="warning">In review</Chip>}
              {d.st === "missing" && <Chip tone="error">Missing</Chip>}
              <button className="text-xs font-semibold text-primary hover:underline">{d.st === "missing" ? "Upload" : "View"}</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
