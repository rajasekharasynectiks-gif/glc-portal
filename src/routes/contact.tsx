import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell, Breadcrumb } from "@/components/public-shell";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact - GLC Retailer Licensing" }, { name: "description", content: "Contact the Georgia Lottery Corporation licensing team." }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PublicShell>
      <section className="border-b border-border bg-surface-muted">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Our licensing team is here to help. Reach out by phone, email, or send us a secure message.</p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          {[
            { i: Phone, t: "Phone", v: "(404) 215-5000" },
            { i: Mail, t: "Email", v: "licensing@galottery.org" },
            { i: MapPin, t: "Headquarters", v: "250 Williams Street NW, Atlanta, GA 30303" },
            { i: Clock, t: "Business Hours", v: "Monday-Friday • 8:00 AM - 5:00 PM ET" },
          ].map((c) => (
            <div key={c.t} className="gov-card flex items-start gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><c.i className="h-5 w-5" /></span>
              <div><div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div><div className="mt-0.5 font-semibold">{c.v}</div></div>
            </div>
          ))}
          <div className="gov-card overflow-hidden">
            <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_50%_50%,_oklch(0.85_0.05_240)_0%,_oklch(0.92_0.02_240)_60%)] relative">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(oklch(0.7 0.04 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.04 240) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-destructive text-destructive-foreground shadow-lifted"><MapPin className="h-6 w-6" /></div>
                <div className="mt-2 rounded-md bg-card px-3 py-1 text-center text-xs font-semibold shadow-card">GLC HQ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {sent ? (
            <div className="gov-card p-10 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success"><CheckCircle2 className="h-7 w-7" /></span>
              <h2 className="mt-5 font-display text-2xl font-bold">Message received</h2>
              <p className="mt-2 text-muted-foreground">Thank you. A member of our licensing team will respond within 1 business day.</p>
              <div className="mt-4 inline-block rounded-md bg-surface-muted px-3 py-1.5 text-xs font-mono">Ref #GLC-2026-08831</div>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => setSent(false)} className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Send another</button>
                <Link to="/" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Return home</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="gov-card p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the form and we'll reply within one business day.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["First name", "John"], ["Last name", "Smith"], ["Email", "you@business.com"], ["Phone", "(404) 555-0100"],
                ].map(([l, p]) => (
                  <div key={l}>
                    <label className="text-sm font-medium">{l} <span className="text-destructive">*</span></label>
                    <input required placeholder={p} className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">Topic</label>
                <select className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30">
                  <option>General licensing question</option><option>New application</option><option>Renewal</option><option>Document upload</option><option>Payment issue</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
                <textarea required rows={6} placeholder="How can we help you?" className="mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
              </div>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="reset" className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">Clear</button>
                <button type="submit" className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover">Send message</button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PublicShell>
  );
}
