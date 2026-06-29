import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell, Breadcrumb } from "@/components/public-shell";
import { ArrowRight, CheckCircle2, FileText, DollarSign, ClipboardCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/licensing")({
  head: () => ({ meta: [{ title: "Retailer Licensing — Georgia Lottery" }, { name: "description", content: "Eligibility, fees, and process to become a Georgia Lottery retailer." }] }),
  component: Licensing,
});

function Licensing() {
  return (
    <PublicShell>
      <section className="border-b border-border bg-surface-muted">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Licensing" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Retailer Licensing</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Everything you need to know about becoming and remaining a Georgia Lottery retailer.</p>
        </div>
      </section>

      <section id="process" className="container-page py-14">
        <h2 className="font-display text-3xl font-bold">Application process</h2>
        <ol className="mt-8 relative space-y-6 border-l-2 border-border pl-8">
          {[
            { i: FileText, t: "Pre-qualification", d: "Confirm your business meets eligibility requirements." },
            { i: ClipboardCheck, t: "Application", d: "Submit business, ownership, and location details." },
            { i: DollarSign, t: "Fees & Bond", d: "Pay applicable licensing fees and post your surety bond." },
            { i: BadgeCheck, t: "Approval", d: "Receive your digital license within 5–7 business days." },
          ].map((s, i) => (
            <li key={s.t} className="relative">
              <span className="absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-elegant">{i+1}</span>
              <div className="gov-card p-5">
                <div className="flex items-center gap-3"><s.i className="h-5 w-5 text-primary" /><div className="font-semibold">{s.t}</div></div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="fees" className="bg-surface-muted py-14">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold">Fees & bonds</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-surface-muted text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="px-5 py-3 text-left">Retailer Category</th><th className="px-5 py-3 text-left">Application Fee</th><th className="px-5 py-3 text-left">Annual License</th><th className="px-5 py-3 text-left">Surety Bond</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Convenience Store", "$75", "$200", "$5,000"],
                  ["Grocery / Supermarket", "$100", "$300", "$10,000"],
                  ["Liquor / Package Store", "$100", "$250", "$7,500"],
                  ["Restaurant / Bar", "$75", "$200", "$5,000"],
                  ["Specialty Retailer", "$125", "$350", "$10,000"],
                ].map((r) => (
                  <tr key={r[0]} className="hover:bg-muted/50">
                    {r.map((c, i) => <td key={i} className={`px-5 py-3.5 ${i === 0 ? "font-semibold" : "text-muted-foreground"}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Fees subject to change. Refer to the 2026 Fee Schedule in the Documents Library.</p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="gov-card p-7">
            <h3 className="font-display text-xl font-bold">Eligibility checklist</h3>
            <ul className="mt-4 space-y-2.5">
              {["Active Georgia business license","Physical retail location in Georgia","Federal tax ID (EIN) or SSN","All owners/officers age 21+","Pass criminal background check","Compliant premises (no schools within 200ft for select categories)"].map(t => (
                <li key={t} className="flex items-start gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 text-success" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-7 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
            <h3 className="font-display text-xl font-bold">Ready to apply?</h3>
            <p className="mt-2 text-sm text-white/80">Create your account to start your application today. Most retailers complete the process in under an hour.</p>
            <Link to="/auth/register" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted">Begin Application <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
