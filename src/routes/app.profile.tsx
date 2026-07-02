import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/public-shell";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile - GLC" }] }),
  component: Profile,
});

function Profile() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Profile" }]} />}
      title="My Profile"
      subtitle="Update your personal information and contact details."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="gov-card p-6 text-center lg:col-span-1">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gold text-gold-foreground font-display text-2xl font-black">JM</div>
          <div className="mt-4 font-display text-lg font-bold">James Morrison</div>
          <div className="text-sm text-muted-foreground">Acme Convenience LLC</div>
          <div className="mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Verified Applicant</div>
          <button className="mt-5 w-full rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Change photo</button>
        </div>

        <div className="gov-card p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-bold">Personal information</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["First name","James"],["Last name","Morrison"],["Email","james@acmeconv.com"],["Phone","(404) 555-0123"],
              ["Role","Primary Applicant"],["Member since","June 2026"],
            ].map(([l, v]) => (
              <div key={l}><label className="text-sm font-medium">{l}</label><input defaultValue={v} className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm" /></div>
            ))}
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Save changes</button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
