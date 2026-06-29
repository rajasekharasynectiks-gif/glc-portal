import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/public-shell";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — GLC" }] }),
  component: Settings,
});

function Toggle({ on = false }: { on?: boolean }) {
  return <span className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`}><span className={`inline-block h-5 w-5 transform rounded-full bg-card shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} /></span>;
}

function Settings() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Settings" }]} />}
      title="Account Settings"
      subtitle="Manage security, notifications, and preferences."
    >
      <div className="space-y-6">
        <section className="gov-card p-6">
          <h2 className="font-display text-lg font-bold">Security</h2>
          <div className="mt-4 space-y-3">
            {[
              { t: "Two-factor authentication", d: "Authenticator app required at every sign-in.", on: true },
              { t: "Email login alerts", d: "Notify me when my account is used from a new device.", on: true },
              { t: "Session timeout (15 min)", d: "Sign out automatically after inactivity.", on: true },
            ].map(s => (
              <div key={s.t} className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
                <div className="min-w-0"><div className="font-semibold">{s.t}</div><div className="text-sm text-muted-foreground">{s.d}</div></div>
                <Toggle on={s.on} />
              </div>
            ))}
          </div>
        </section>

        <section className="gov-card p-6">
          <h2 className="font-display text-lg font-bold">Notifications</h2>
          <div className="mt-4 space-y-3">
            {[
              { t: "Application status updates", d: "Email + in-app", on: true },
              { t: "Payment reminders", d: "Email + in-app + SMS", on: true },
              { t: "Marketing & announcements", d: "Email only", on: false },
            ].map(s => (
              <div key={s.t} className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
                <div className="min-w-0"><div className="font-semibold">{s.t}</div><div className="text-sm text-muted-foreground">{s.d}</div></div>
                <Toggle on={s.on} />
              </div>
            ))}
          </div>
        </section>

        <section className="gov-card p-6">
          <h2 className="font-display text-lg font-bold text-destructive">Danger zone</h2>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
            <div><div className="font-semibold">Delete account</div><div className="text-sm text-muted-foreground">Permanently delete your portal account. Active licenses are unaffected.</div></div>
            <button className="rounded-md border border-destructive bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/15">Delete account</button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
