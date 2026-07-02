import { createFileRoute } from "@tanstack/react-router";
import { PublicShell, Breadcrumb } from "@/components/public-shell";
import { useState } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ - Georgia Lottery Retailer Licensing" }, { name: "description", content: "Frequently asked questions about Georgia Lottery retailer licensing." }] }),
  component: FAQ,
});

const categories = ["All", "Eligibility", "Application", "Documents", "Fees", "Renewal", "Compliance"];

const faqs = [
  { c: "Eligibility", q: "Who can apply for a retailer license?", a: "Any business with a physical location in Georgia, an active business license, and ownership where all officers are 21 or older may apply." },
  { c: "Application", q: "How long does the application take?", a: "Most applications can be completed in 30-45 minutes. You can save progress and return at any time." },
  { c: "Application", q: "Can I save and continue later?", a: "Yes. Every step auto-saves. Sign back in to continue exactly where you left off." },
  { c: "Documents", q: "What documents are required?", a: "Business license, federal tax ID documentation, photo ID for each listed owner, and proof of premises lease or ownership." },
  { c: "Fees", q: "What are the licensing fees?", a: "Fees vary by retailer category. The 2026 fee schedule is available in the Documents Library." },
  { c: "Fees", q: "Which payment methods are accepted?", a: "ACH bank transfer, major credit/debit cards, and certified check by mail." },
  { c: "Renewal", q: "How do I renew my license?", a: "Sign in to your dashboard; you'll be prompted to renew 60 days before expiration." },
  { c: "Compliance", q: "What background checks are performed?", a: "GLC conducts criminal background and financial verification on all listed owners and officers." },
];

function FAQ() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = faqs.filter(f => (cat === "All" || f.c === cat) && (f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())));
  return (
    <PublicShell>
      <section className="border-b border-border bg-surface-muted">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Help & frequently asked questions</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Find answers to common questions about retailer licensing.</p>
          <div className="relative mt-6 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the knowledge base…"
              className="w-full rounded-lg border border-input bg-surface py-3.5 pl-11 pr-4 text-sm shadow-card focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[220px_1fr]">
        <aside>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categories</div>
          <ul className="mt-3 space-y-1">
            {categories.map((c) => (
              <li key={c}>
                <button onClick={() => setCat(c)} className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{c}</button>
              </li>
            ))}
          </ul>
          <div className="mt-6 gov-card p-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <div className="mt-2 text-sm font-semibold">Still need help?</div>
            <p className="mt-1 text-xs text-muted-foreground">Our support team is here to help.</p>
            <a href="/contact" className="mt-3 inline-block text-xs font-semibold text-primary hover:underline">Contact support →</a>
          </div>
        </aside>

        <div className="space-y-3">
          {filtered.map((f, i) => (
            <div key={f.q} className="gov-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">{f.c}</div>
                  <div className="mt-0.5 font-semibold">{f.q}</div>
                </div>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="border-t border-border bg-surface-muted/50 p-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="gov-card p-10 text-center">
              <div className="font-semibold">No results found</div>
              <p className="mt-1 text-sm text-muted-foreground">Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </PublicShell>
  );
}
