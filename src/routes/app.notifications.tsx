import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, Info, CreditCard, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Notifications — GLC" }] }),
  component: Notifs,
});

const tabs = ["All", "Unread", "System", "Application", "Payment"] as const;

const items = [
  { i: CheckCircle2, tone: "success", t: "Business license approved", d: "Your business license has been verified by Reviewer #214.", time: "10 min ago", read: false, cat: "Application" },
  { i: AlertTriangle, tone: "warning", t: "Payment due in 14 days", d: "Your $200 license fee is due July 15, 2026.", time: "2 hours ago", read: false, cat: "Payment" },
  { i: MessageSquare, tone: "info", t: "New message from licensing", d: "Please clarify your premises lease end date.", time: "1 day ago", read: false, cat: "System" },
  { i: Info, tone: "info", t: "Scheduled maintenance July 4", d: "Portal unavailable Sat July 4, 2 AM–6 AM ET.", time: "3 days ago", read: true, cat: "System" },
  { i: CreditCard, tone: "success", t: "Payment received", d: "$75 application fee processed successfully.", time: "Jun 18", read: true, cat: "Payment" },
] as const;

const toneClass: any = { success: "bg-success/10 text-success", warning: "bg-warning/15 text-amber-600", info: "bg-info/10 text-info" };

function Notifs() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");
  const filtered = items.filter(i => tab === "All" || (tab === "Unread" ? !i.read : i.cat === tab));

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Notifications" }]} />}
      title="Notifications"
      subtitle="Stay on top of application updates, payments, and system messages."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1 rounded-md border border-border bg-surface p-1">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
        <button className="text-sm font-semibold text-primary hover:underline">Mark all as read</button>
      </div>

      <div className="mt-4 gov-card divide-y divide-border">
        {filtered.map((n, i) => (
          <div key={i} className={`flex items-start gap-4 p-5 ${!n.read ? "bg-primary/[0.03]" : ""}`}>
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${toneClass[n.tone]}`}><n.i className="h-5 w-5" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {!n.read && <span className="h-2 w-2 rounded-full bg-primary" />}
                <div className="font-semibold">{n.t}</div>
                <Chip>{n.cat}</Chip>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{n.d}</div>
            </div>
            <div className="shrink-0 text-xs text-muted-foreground">{n.time}</div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
