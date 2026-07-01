import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { Search, Paperclip, Send, CheckCheck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/app/messages")({
  head: () => ({ meta: [{ title: "Messages — GLC" }] }),
  component: MessagesPage,
});

const threads = [
  { id: "1", subj: "Surety bond clarification", from: "Reviewer #214 · Licensing", preview: "Please confirm the bond effective date matches…", time: "10m", unread: 2, active: true },
  { id: "2", subj: "Owner 2 identity documents", from: "Compliance Team", preview: "We received the updated ID. Verifying now.", time: "1h", unread: 0 },
  { id: "3", subj: "Payment invoice generated", from: "GLC Billing", preview: "Your invoice INV-2026-104-8831 is ready.", time: "Jun 30", unread: 0 },
  { id: "4", subj: "Welcome to the Retailer Portal", from: "GLC System", preview: "Thanks for creating your applicant account.", time: "Jun 18", unread: 0 },
];

const msgs = [
  { from: "them", who: "Reviewer #214", t: "Hi James — could you confirm the effective date on the surety bond you uploaded? The scan is a little dark on page 2.", time: "9:52 AM" },
  { from: "me",   who: "You", t: "Hi — effective date is July 1, 2026 for 12 months. I'll re-upload a clearer copy today.", time: "10:04 AM", read: true },
  { from: "them", who: "Reviewer #214", t: "Perfect, thanks. Once uploaded I'll approve the document and move you to the payment stage.", time: "10:11 AM" },
  { from: "them", who: "Reviewer #214", t: "One more thing — please attach the endorsement rider if you added Keno coverage.", time: "10:12 AM" },
];

function MessagesPage() {
  const [active, setActive] = useState("1");

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Dashboard", to: "/app/dashboard" }, { label: "Messages" }]} />}
      title="Messages"
      subtitle="Secure two-way conversations with GLC reviewers and support."
    >
      <div className="gov-card grid overflow-hidden lg:grid-cols-[320px_1fr]" style={{ minHeight: "70dvh" }}>
        {/* Threads */}
        <aside className="border-b border-border lg:border-b-0 lg:border-r">
          <div className="border-b border-border p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search conversations" className="w-full rounded-md border border-input bg-surface py-2 pl-8 pr-3 text-sm" />
            </div>
          </div>
          <ul className="divide-y divide-border">
            {threads.map(t => (
              <li key={t.id}>
                <button onClick={() => setActive(t.id)} className={`w-full p-4 text-left transition-colors ${active === t.id ? "bg-primary/[0.06]" : "hover:bg-muted/40"}`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate text-sm font-semibold">{t.subj}</div>
                    <span className="shrink-0 text-[11px] text-muted-foreground">{t.time}</span>
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{t.from}</div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div className="truncate text-xs text-muted-foreground">{t.preview}</div>
                    {t.unread > 0 && <span className="grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">{t.unread}</span>}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Conversation */}
        <section className="flex flex-col">
          <header className="flex flex-wrap items-center justify-between gap-2 border-b border-border p-4">
            <div>
              <div className="font-display text-base font-bold">Surety bond clarification</div>
              <div className="text-xs text-muted-foreground">Reviewer #214 · Licensing · APP-2026-08831</div>
            </div>
            <Chip tone="success"><ShieldCheck className="h-3 w-3" /> End-to-end encrypted</Chip>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-surface-muted/50 p-5">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${m.from === "me" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-background border border-border rounded-bl-sm"}`}>
                  <div className={`mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    <span>{m.who}</span><span>·</span><span>{m.time}</span>
                    {m.from === "me" && m.read && <CheckCheck className="h-3.5 w-3.5" />}
                  </div>
                  {m.t}
                </div>
              </div>
            ))}
          </div>

          <footer className="border-t border-border p-3">
            <div className="flex items-end gap-2 rounded-lg border border-input bg-surface p-2">
              <button className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-muted" aria-label="Attach"><Paperclip className="h-4 w-4" /></button>
              <textarea rows={2} placeholder="Type your reply…" className="flex-1 resize-none bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground" />
              <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover"><Send className="h-4 w-4" /> Send</button>
            </div>
          </footer>
        </section>
      </div>
    </AppShell>
  );
}
