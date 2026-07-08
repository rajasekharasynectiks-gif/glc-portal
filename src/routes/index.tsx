import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell, Chip } from "@/components/public-shell";
import {
  ArrowRight, ChevronRight, FileText, HelpCircle, Download,
  LogIn, ExternalLink, Megaphone, AlertCircle, CheckCircle2, Calendar, Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Lottery Retailer Licensing Portal" },
      { name: "description", content: "Apply for and manage your Georgia Lottery retailer license online. Secure, accessible, and built for Georgia businesses." },
      { property: "og:title", content: "Georgia Lottery Retailer Licensing Portal" },
      { property: "og:description", content: "Apply for and manage your Georgia Lottery retailer license online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ---------------- Page ---------------- */

function Home() {
  return (
    <PublicShell>
      {/* Hero carousel is rendered by PublicHeaderIntegrated (shared background). */}

      {/* Application Instructions */}
      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Get Started</div>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">How to apply for retailer licensing</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Follow five simple steps to submit your application. You can save your progress and return at any time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/auth/register" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover">
                Start Application <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/licensing" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold hover:bg-muted">
                Learn More
              </Link>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {[
              { n: "1", t: "Register", d: "Create your secure retailer account." },
              { n: "2", t: "Complete Application", d: "Business, ownership, and premises." },
              { n: "3", t: "Upload Documents", d: "PDF, JPG, PNG or TIFF, up to 10 MB." },
              { n: "4", t: "Pay Fees", d: "ACH or credit card via MerchantOne." },
              { n: "5", t: "Await Approval", d: "Track your status in the dashboard." },
            ].map((s) => (
              <li key={s.n} className="gov-card flex items-start gap-4 p-4">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg font-display text-sm font-bold text-gold-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {s.n}
                </span>
                <div className="min-w-0">
                  <div className="font-semibold">{s.t}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* System Updates + Key Announcements */}
      <section className="bg-surface-muted py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">System Updates</div>
                <h2 className="mt-1 font-display text-2xl font-bold">Portal notices</h2>
              </div>
              <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {[
                { i: Wrench, t: "System Upgrade Coming Soon", d: "Scheduled maintenance on July 4, 2026, 2 AM–6 AM ET.", tone: "warning" as const, tag: "Maintenance" },
                { i: CheckCircle2, t: "MerchantOne Payments Restored", d: "ACH transactions have resumed normal processing.", tone: "success" as const, tag: "Resolved" },
                { i: AlertCircle, t: "Document Uploader Update", d: "TIFF files up to 10 MB are now supported.", tone: "info" as const, tag: "Update" },
              ].map((a) => (
                <article key={a.t} className="gov-card flex items-start gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <a.i className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Chip tone={a.tone}>{a.tag}</Chip>
                    </div>
                    <h3 className="mt-1.5 font-semibold">{a.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Key Announcements</div>
                <h2 className="mt-1 font-display text-2xl font-bold">Important notices</h2>
              </div>
              <Link to="/documents" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {[
                { d: "Jun 24, 2026", t: "2026 Retailer Fee Schedule Published", c: "Updated fee structure now effective for fiscal year 2026 applications and renewals." },
                { d: "Jun 12, 2026", t: "New Compliance Requirements", c: "Owner background disclosures now require additional identity verification." },
                { d: "May 30, 2026", t: "Application Deadline Reminder", c: "Q3 licensing applications must be submitted by August 31, 2026." },
              ].map((a) => (
                <article key={a.t} className="gov-card flex items-start gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{a.d}</div>
                    <h3 className="mt-0.5 font-semibold">{a.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.c}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container-page py-16">
        <div className="mb-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Quick Links</div>
          <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">Everything you need in one place</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Login", d: "Access your retailer account", to: "/auth/login", i: LogIn, tone: "primary" },
            { t: "FAQs", d: "Answers to common questions", to: "/faq", i: HelpCircle, tone: "info" },
            { t: "Documents", d: "Forms, guides, and PDFs", to: "/documents", i: Download, tone: "success" },
            { t: "Georgia Lottery", d: "Return to galottery.com", to: "https://www.galottery.com/", i: ExternalLink, tone: "gold", external: true },
          ].map((q) => {
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-lg ${
                      q.tone === "primary" ? "bg-primary/10 text-primary"
                        : q.tone === "info" ? "bg-info/15 text-info"
                        : q.tone === "success" ? "bg-success/15 text-success"
                        : "text-gold-foreground"
                    }`}
                    style={q.tone === "gold" ? { background: "var(--gradient-gold)" } : undefined}
                  >
                    <q.i className="h-6 w-6" />
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <div className="mt-5 font-display text-lg font-bold">{q.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{q.d}</div>
              </>
            );
            return q.external ? (
              <a key={q.t} href={q.to} target="_blank" rel="noreferrer" className="group gov-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lifted">
                {inner}
              </a>
            ) : (
              <Link key={q.t} to={q.to} className="group gov-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lifted">
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-2xl p-10 text-white sm:p-14" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to become a licensed retailer?</h2>
              <p className="mt-3 max-w-xl text-white/80">Start your application today. Save your progress and complete it on your schedule.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/auth/register" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted">
                Begin Application <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                Contact GLC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
