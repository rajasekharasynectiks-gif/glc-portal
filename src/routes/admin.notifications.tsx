import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, SparkBars } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { Mail, MessageSquare, Bell, Smartphone, Send, Clock, CheckCheck, XOctagon, Repeat2, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/notifications")({
  head: () => ({ meta: [{ title: "Notifications — GLC Admin" }] }),
  component: NotifPage,
});

const templates = [
  ["Application submitted","Email","Active","98.4%"],
  ["Payment successful","Email + SMS","Active","99.1%"],
  ["Document required","Email + In-app","Active","97.2%"],
  ["Background check pending","In-app","Active","100%"],
  ["Application approved","Email + SMS + Push","Active","98.9%"],
  ["Weekly digest","Email","Paused","—"],
];

const queue = [
  ["Application approved","aliciad@rmfuel.io","Email","Delivered","12:04"],
  ["Payment successful","+1 (404) 555-0142","SMS","Delivered","12:04"],
  ["Document required","james.m@acmecvs.com","Email","Queued","12:03"],
  ["Weekly digest","priya@sunrisefoods.co","Email","Failed","12:00"],
  ["Application submitted","ivan.k@metrosnack.com","Email","Retry (2/3)","11:58"],
];

const tone: Record<string, "success"|"warning"|"info"|"error"|"muted"> = {
  Delivered:"success",Queued:"info","Retry (2/3)":"warning",Failed:"error",
};

function NotifPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Notifications" }]}
      title="Notification center"
      subtitle="Multi-channel messaging with templates, retry logic, and delivery analytics."
      actions={<button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"><Plus className="h-3.5 w-3.5" /> New template</button>}
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Sent 24h" value="18,342" icon={Send} tone="info" sub="4 channels" />
        <KpiCard label="Delivered" value="98.6%" icon={CheckCheck} tone="success" delta="▲ 0.4% vs 7d avg" />
        <KpiCard label="Failed" value="248" icon={XOctagon} tone="error" sub="Retry queue 12" />
        <KpiCard label="Scheduled" value="14" icon={Clock} tone="warning" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-4">
        {[
          { i: Mail, l: "Email", v: "14,208", d: [4,6,5,7,9,8,10,12,11,13,15,14,16], t: "success" as const },
          { i: MessageSquare, l: "SMS", v: "3,102", d: [2,3,3,4,4,5,6,5,7,6,8,7,9], t: "info" as const },
          { i: Bell, l: "In-app", v: "812", d: [1,2,2,3,3,2,4,3,5,4,4,3,5], t: "warning" as const },
          { i: Smartphone, l: "Push", v: "220", d: [1,1,2,2,1,3,2,3,4,3,4,3,4], t: "primary" as const },
        ].map(c => (
          <div key={c.l} className="gov-card p-4">
            <div className="flex items-center gap-2"><c.i className="h-4 w-4 text-primary" /><span className="text-sm font-semibold">{c.l}</span><span className="ml-auto text-xs text-muted-foreground">24h</span></div>
            <div className="mt-1 font-display text-2xl font-bold">{c.v}</div>
            <SparkBars data={c.d} tone={c.t} />
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <section className="gov-card">
          <div className="border-b border-border p-4">
            <h2 className="font-display text-base font-bold">Templates</h2>
            <p className="text-xs text-muted-foreground">Event-driven with retry and scheduling.</p>
          </div>
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>{["Template","Channel","Status","Deliverability",""].map(h => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {templates.map(t => (
                <tr key={t[0]} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="px-3 py-2 font-medium">{t[0]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{t[1]}</td>
                  <td className="px-3 py-2"><Chip tone={t[2] === "Active" ? "success" : "muted"}>{t[2]}</Chip></td>
                  <td className="px-3 py-2 font-semibold">{t[3]}</td>
                  <td className="px-3 py-2 text-right"><button className="text-xs text-primary hover:underline">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="gov-card">
          <div className="border-b border-border p-4">
            <h2 className="font-display text-base font-bold">Recent deliveries</h2>
            <p className="text-xs text-muted-foreground">Live queue with retry and delivery status.</p>
          </div>
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-surface-muted text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>{["Event","Recipient","Channel","Status","Time"].map(h => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {queue.map((q, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/40">
                  <td className="px-3 py-2 font-medium">{q[0]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{q[1]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{q[2]}</td>
                  <td className="px-3 py-2">
                    <Chip tone={tone[q[3]] ?? "muted"}>
                      {q[3] === "Retry (2/3)" && <Repeat2 className="h-3 w-3" />}
                      {q[3]}
                    </Chip>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{q[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </AdminShell>
  );
}
