import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb, Chip } from "@/components/public-shell";
import { useState } from "react";
import { CreditCard, Landmark, Lock, ShieldCheck, Loader2 } from "lucide-react";

export const Route = createFileRoute("/app/payments/checkout")({
  head: () => ({ meta: [{ title: "Secure Checkout — GLC" }] }),
  component: CheckoutPage,
});

type Tab = "card" | "ach";

function CheckoutPage() {
  const nav = useNavigate();
  const [tab, setTab] = useState<Tab>("card");
  const [processing, setProcessing] = useState(false);
  const [number, setNumber] = useState("");

  const brand = number.startsWith("4") ? "Visa" : number.startsWith("5") ? "Mastercard" : number.startsWith("3") ? "Amex" : "Card";

  function pay() {
    setProcessing(true);
    setTimeout(() => nav({ to: "/app/payments/result", search: { status: "approved" } as any }), 1600);
  }

  return (
    <AppShell
      breadcrumb={<Breadcrumb items={[{ label: "Payments", to: "/app/payments" }, { label: "Checkout" }]} />}
      title="Secure checkout"
      subtitle="Payments are processed by MerchantOne on behalf of the Georgia Lottery Corporation."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="gov-card overflow-hidden">
          {/* Security banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-muted px-6 py-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-semibold text-foreground"><Lock className="h-3.5 w-3.5 text-success" /> TLS 1.3 Secure</span>
              <Chip tone="success"><ShieldCheck className="h-3 w-3" /> PCI DSS</Chip>
              <Chip tone="info">MerchantOne™</Chip>
            </div>
            <div className="text-muted-foreground">We never store full card numbers.</div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border p-2">
            {([["card","Credit / Debit Card",CreditCard],["ach","ACH Bank Transfer",Landmark]] as const).map(([k, l, Icon]) => (
              <button key={k} onClick={() => setTab(k as Tab)} className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${tab === k ? "bg-primary text-primary-foreground shadow-elegant" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                <Icon className="h-4 w-4" /> {l}
              </button>
            ))}
          </div>

          {tab === "card" ? (
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>Card holder name</Label>
                <Input placeholder="James Morrison" />
              </div>
              <div className="sm:col-span-2">
                <Label>Card number</Label>
                <div className="relative">
                  <Input placeholder="1234 5678 9012 3456" value={number} onChange={(e) => setNumber(e.target.value.replace(/\D/g, "").slice(0,16))} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-muted px-2 py-0.5 text-[10px] font-bold text-foreground">{brand}</span>
                </div>
              </div>
              <div><Label>Expiry</Label><Input placeholder="MM / YY" /></div>
              <div><Label>CVV</Label><Input placeholder="•••" /></div>
              <div className="sm:col-span-2"><Label>Billing address</Label><Input placeholder="1240 Peachtree St NE, Atlanta GA 30309" /></div>
              <label className="sm:col-span-2 flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" defaultChecked />
                <span>Save this card for future GLC payments.</span>
              </label>
            </div>
          ) : (
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div><Label>Bank name</Label><Input placeholder="Wells Fargo Bank, N.A." /></div>
              <div>
                <Label>Account type</Label>
                <select className="mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm">
                  <option>Business Checking</option><option>Business Savings</option><option>Personal Checking</option>
                </select>
              </div>
              <div><Label>Routing number</Label><Input placeholder="9 digits" /></div>
              <div><Label>Account number</Label><Input placeholder="Account number" /></div>
              <div className="sm:col-span-2"><Label>Confirm account number</Label><Input placeholder="Re-enter account number" /></div>
              <label className="sm:col-span-2 flex items-start gap-3 rounded-md border border-border bg-surface-muted p-3 text-sm">
                <input type="checkbox" className="mt-0.5 h-4 w-4 accent-primary" />
                <span>I authorize the Georgia Lottery Corporation and MerchantOne to debit the account above for the amount shown. I understand this authorization remains in effect until revoked in writing.</span>
              </label>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface-muted px-6 py-4">
            <div className="text-xs text-muted-foreground">Accepted: Visa · Mastercard · Amex · Discover · ACH</div>
            <div className="flex gap-2">
              <button className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">Review payment</button>
              <button onClick={pay} disabled={processing} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover disabled:opacity-70">
                {processing ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing…</> : <><Lock className="h-4 w-4" /> Pay $283.25</>}
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="gov-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payment summary</div>
            <div className="mt-3 space-y-2 text-sm">
              <Row l="Application fee" v="$75.00" />
              <Row l="License fee" v="$150.00" />
              <Row l="Keno endorsement" v="$50.00" />
              <Row l="Convenience fee" v="$8.25" muted />
              <div className="my-2 h-px bg-border" />
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Total</span>
                <span className="font-display text-2xl font-bold">$283.25</span>
              </div>
            </div>
          </div>
          <div className="gov-card p-5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-semibold text-foreground"><ShieldCheck className="h-3.5 w-3.5 text-success" /> Your data is safe</div>
            <div className="mt-1">Card details are tokenized by MerchantOne. GLC never sees the full card number.</div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</label>;
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />;
}
function Row({ l, v, muted }: { l: string; v: string; muted?: boolean }) {
  return <div className={`flex justify-between ${muted ? "text-muted-foreground" : ""}`}><span>{l}</span><span className="font-semibold">{v}</span></div>;
}
