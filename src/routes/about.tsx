import { createFileRoute } from "@tanstack/react-router";
import { PublicShell, Breadcrumb } from "@/components/public-shell";
import { Target, Eye, Building2, ShieldCheck, Scale, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Georgia Lottery Corporation" }, { name: "description", content: "Mission, vision, history, and compliance information for the Georgia Lottery Corporation." }] }),
  component: About,
});

function About() {
  return (
    <PublicShell>
      <section className="border-b border-border bg-surface-muted">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">About the Georgia Lottery</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Since 1993, the Georgia Lottery has raised over $27 billion for education — funding HOPE Scholarships and Georgia's Pre-K Program.</p>
        </div>
      </section>

      <section className="container-page grid gap-6 py-14 md:grid-cols-2">
        {[
          { i: Target, t: "Mission", d: "To responsibly maximize revenues for educational programs benefiting the people of Georgia." },
          { i: Eye, t: "Vision", d: "To be the premier lottery in the United States, delivering exceptional games and unmatched value to our players, retailers, and beneficiaries." },
        ].map((b) => (
          <div key={b.t} className="gov-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary"><b.i className="h-6 w-6" /></span>
            <h2 className="mt-4 font-display text-2xl font-bold">{b.t}</h2>
            <p className="mt-2 text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">History</div>
        <h2 className="mt-1 font-display text-3xl font-bold">A legacy of education funding</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { y: "1992", t: "GLC established", d: "Georgia Lottery Corporation created by act of the General Assembly." },
            { y: "1993", t: "First tickets sold", d: "Public sales begin June 29, 1993." },
            { y: "2010", t: "$13B milestone", d: "Cumulative education funding crosses $13 billion." },
            { y: "2026", t: "Digital first", d: "Modern licensing portal launches for retailers." },
          ].map((h) => (
            <div key={h.y} className="gov-card p-5">
              <div className="font-display text-3xl font-bold text-primary">{h.y}</div>
              <div className="mt-2 font-semibold">{h.t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{h.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="compliance" className="bg-surface-muted py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Compliance</div>
            <h2 className="mt-1 font-display text-3xl font-bold">Responsible & accountable</h2>
            <p className="mt-3 text-muted-foreground">GLC operates under strict regulatory and ethical standards, audited annually by the State of Georgia.</p>
          </div>
          <div className="space-y-3">
            {[
              { i: ShieldCheck, t: "State & Federal Compliance", d: "Operating under O.C.G.A. § 50-27 and applicable federal regulations." },
              { i: Scale, t: "Independent Audits", d: "Financials audited annually by independent third-party firms." },
              { i: BookOpen, t: "Public Reporting", d: "Annual reports and transparency disclosures published publicly." },
              { i: Building2, t: "Corporate Governance", d: "Board of Directors appointed by the Governor of Georgia." },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><c.i className="h-5 w-5" /></span>
                <div><div className="font-semibold">{c.t}</div><div className="text-sm text-muted-foreground">{c.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
