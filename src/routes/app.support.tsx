import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/public-shell";
import { LifeBuoy, MessageSquare, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/app/support")({
  head: () => ({ meta: [{ title: "Support - GLC" }] }),
  component: Support,
});

function Support() {
  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Support" }]} />}
      title="Help & Support"
      subtitle="Open a ticket or browse self-service resources."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { i: Phone, t: "Call support", d: "(404) 215-5000", s: "Mon-Fri 8a-5p ET" },
          { i: Mail, t: "Email", d: "licensing@galottery.org", s: "Response within 1 business day" },
          { i: MessageSquare, t: "Live chat", d: "Start chat", s: "Available now" },
        ].map(c => (
          <div key={c.t} className="gov-card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><c.i className="h-5 w-5" /></span>
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
            <div className="font-semibold">{c.d}</div>
            <div className="text-xs text-muted-foreground">{c.s}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="gov-card p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-bold">Open a support ticket</h2>
          <div className="mt-5 grid gap-4">
            <div><label className="text-sm font-medium">Subject</label><input className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm" placeholder="Briefly describe the issue" /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="text-sm font-medium">Category</label><select className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm"><option>Application</option><option>Document upload</option><option>Payment</option><option>Account</option><option>Other</option></select></div>
              <div><label className="text-sm font-medium">Priority</label><select className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm"><option>Normal</option><option>High</option><option>Urgent</option></select></div>
            </div>
            <div><label className="text-sm font-medium">Description</label><textarea rows={5} className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm" placeholder="Provide as much detail as possible…" /></div>
            <div className="flex justify-end gap-2"><button className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button><button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Submit ticket</button></div>
          </div>
        </div>
        <div className="gov-card p-6">
          <LifeBuoy className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-display text-lg font-bold">Popular help articles</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {["How to upload documents","Resolving payment errors","Adding a co-owner","Renewing your license","Updating business address"].map(a => (
              <li key={a}><a className="text-primary hover:underline" href="/faq">{a}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
