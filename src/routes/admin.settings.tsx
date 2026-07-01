import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Building2, Palette, Bell, ShieldCheck, KeyRound, Globe2, Wrench } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Admin Settings — GLC" }] }),
  component: SetPage,
});

function SetPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Settings" }]}
      title="Console settings"
      subtitle="Organization, branding, security, notifications, and localization."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          {
            i: Building2, t: "Organization",
            body: (
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Legal name" v="Georgia Lottery Corporation" />
                <Field label="Agency code" v="GLC" />
                <Field label="Support email" v="support@glc.gov" />
                <Field label="Support phone" v="(800) 555-0142" />
              </div>
            ),
          },
          {
            i: Palette, t: "Branding",
            body: (
              <div>
                <div className="grid gap-2 sm:grid-cols-4">
                  {["#123B7A","#F0A21C","#0F1F3D","#F5F7FB"].map(c => (
                    <div key={c} className="rounded-md border border-border p-2 text-center">
                      <div className="h-10 rounded" style={{ background: c }} />
                      <div className="mt-1 font-mono text-[10px]">{c}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2 text-xs">
                  <Chip tone="info">Plus Jakarta Sans</Chip>
                  <Chip tone="info">Inter</Chip>
                  <Chip tone="success">Dark mode ready</Chip>
                </div>
              </div>
            ),
          },
          {
            i: ShieldCheck, t: "Security",
            body: (
              <ul className="space-y-2 text-sm">
                {[["Session timeout","30 minutes"],["Max concurrent sessions","3"],["Enforce MFA","On"],["IP allowlist","VPN + office"],["Password rotation","90 days"]].map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0"><span>{k}</span><Chip tone="success">{v}</Chip></li>
                ))}
              </ul>
            ),
          },
          {
            i: KeyRound, t: "API keys",
            body: (
              <ul className="space-y-2 text-sm">
                {[["Reporting BI","•••• 8712","Rotated 12d ago"],["Melissa integration","•••• 3921","Rotated 44d ago"],["MerchantOne","•••• 1204","Rotates in 7d"]].map(([n,k,r]) => (
                  <li key={n} className="flex items-center gap-2 rounded border border-border p-2 text-xs">
                    <span className="font-semibold">{n}</span><span className="font-mono text-muted-foreground">{k}</span><span className="ml-auto text-muted-foreground">{r}</span>
                    <button className="rounded border border-border px-2 py-0.5 hover:bg-muted">Rotate</button>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            i: Bell, t: "Notification defaults",
            body: (
              <ul className="space-y-2 text-sm">
                {[["Ops alerts","Slack #glc-ops"],["Security alerts","PagerDuty · 24/7"],["Compliance digest","Email · weekly"],["Executive summary","Email · monthly"]].map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0"><span>{k}</span><span className="text-muted-foreground">{v}</span></li>
                ))}
              </ul>
            ),
          },
          {
            i: Globe2, t: "Localization",
            body: (
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Timezone" v="America/New_York (ET)" />
                <Field label="Date format" v="MM/DD/YYYY" />
                <Field label="Currency" v="USD" />
                <Field label="Language" v="English (US)" />
              </div>
            ),
          },
          {
            i: Wrench, t: "Maintenance mode",
            body: (
              <div>
                <p className="text-sm text-muted-foreground">Temporarily block public access with a friendly maintenance page. Admin console remains available.</p>
                <div className="mt-3 flex items-center gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm"><input type="checkbox" className="accent-primary" /> Enable</label>
                  <input placeholder="Schedule window" className="flex-1 rounded-md border border-input bg-surface px-3 py-1.5 text-sm" />
                </div>
              </div>
            ),
          },
        ].map(c => (
          <section key={c.t} className="gov-card p-5">
            <div className="mb-3 flex items-center gap-2"><c.i className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-bold">{c.t}</h3></div>
            {c.body}
          </section>
        ))}
      </div>
    </AdminShell>
  );
}

function Field({ label, v }: { label: string; v: string }) {
  return (
    <div>
      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input defaultValue={v} className="mt-0.5 w-full rounded-md border border-input bg-surface px-3 py-1.5 text-sm" />
    </div>
  );
}
