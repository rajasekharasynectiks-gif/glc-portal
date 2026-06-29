import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell, Chip } from "@/components/public-shell";
import {
  ArrowRight, CheckCircle2, FileText, ShieldCheck, Clock,
  Users, Award, TrendingUp, ChevronRight, Megaphone, Phone, Mail, MapPin, HelpCircle, Download
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Lottery Retailer Licensing Portal" },
      { name: "description", content: "Apply for and manage your Georgia Lottery retailer license online. Secure, accessible, and built for Georgia businesses." },
      { property: "og:title", content: "Georgia Lottery Retailer Licensing Portal" },
      { property: "og:description", content: "Apply for and manage your Georgia Lottery retailer license online." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PublicShell>
      {/* Hero */}
      <section className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: "radial-gradient(circle at 15% 30%, white 1.2px, transparent 1.2px), radial-gradient(circle at 75% 70%, white 1px, transparent 1px)",
          backgroundSize: "80px 80px, 120px 120px",
        }} />
        <div className="container-page relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Official Georgia Lottery Corporation Portal
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Become a licensed <span className="text-gold">Georgia Lottery</span> retailer.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Apply, renew, and manage your retailer licensing entirely online. Save your progress, upload required documents, and track every step from a single secure dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/auth/register" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted transition-transform hover:-translate-y-0.5">
                Begin Application <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/auth/login" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                Continue Application
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { v: "9,400+", l: "Licensed retailers" },
                { v: "98.6%", l: "Application uptime" },
                { v: "5–7 days", l: "Avg. review time" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-bold text-gold sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs text-white/70">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-xl shadow-lifted">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Application Status</div>
                <Chip tone="success">Live</Chip>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { t: "Account & Business Information", d: "Completed", s: "ok" },
                  { t: "Owner Profiles & Background", d: "Completed", s: "ok" },
                  { t: "Document Upload", d: "In progress", s: "now" },
                  { t: "Fees & Submission", d: "Pending", s: "wait" },
                ].map((step, i) => (
                  <div key={step.t} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-md text-xs font-bold ${
                      step.s === "ok" ? "bg-success text-success-foreground" : step.s === "now" ? "bg-gold text-gold-foreground" : "bg-white/10 text-white/60"
                    }`}>{i + 1}</div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold">{step.t}</div>
                      <div className="text-[11px] text-white/60">{step.d}</div>
                    </div>
                    {step.s === "ok" && <CheckCircle2 className="h-5 w-5 text-success" />}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-white/[0.04] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Overall completion</span>
                  <span className="font-semibold">62%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-gold to-amber-300" style={{ width: "62%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container-page -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Start Application", d: "Apply in 4 steps", to: "/auth/register", i: FileText },
            { t: "Renew License", d: "Existing retailers", to: "/auth/login", i: Clock },
            { t: "Download Forms", d: "Guides & PDFs", to: "/documents", i: Download },
            { t: "Get Help", d: "FAQ & Support", to: "/faq", i: HelpCircle },
          ].map((q) => (
            <Link key={q.t} to={q.to} className="group gov-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lifted">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><q.i className="h-5 w-5" /></span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              <div className="mt-4 font-display font-bold">{q.t}</div>
              <div className="text-xs text-muted-foreground">{q.d}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="container-page py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Retailer Licensing</div>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A modern licensing experience for Georgia businesses.</h2>
            <p className="mt-4 text-muted-foreground">The Georgia Lottery Retailer Licensing System lets eligible businesses apply, upload supporting documentation, pay applicable fees, and receive their license — all through one secure portal.</p>
            <div className="mt-6 space-y-3">
              {[
                "Save your progress and resume any time",
                "Real-time application status & messaging",
                "Secure document vault for owners and locations",
                "Integrated background verification workflow",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /><span className="text-sm">{t}</span></div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Eligibility</div>
            <h3 className="mt-2 font-display text-2xl font-bold">Who can apply</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Located in Georgia", d: "Physical retail location within state" },
                { t: "Valid Business License", d: "Active GA business registration" },
                { t: "Federal Tax ID", d: "EIN or SSN for sole proprietors" },
                { t: "21+ Owners/Officers", d: "All listed parties must be 21 or older" },
                { t: "Background Check", d: "Owners pass GLC background verification" },
                { t: "Surety Bond", d: "Bond posted per fee schedule" },
              ].map((e) => (
                <div key={e.t} className="gov-card p-4">
                  <div className="text-sm font-semibold">{e.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-muted py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">How it Works</div>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">From application to approval in 4 steps</h2>
            <p className="mt-3 text-muted-foreground">A guided experience designed for clarity, transparency, and speed.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Create Account", d: "Verify your email and set up multi-factor authentication." },
              { n: "02", t: "Complete Application", d: "Provide business, ownership, and location details." },
              { n: "03", t: "Upload & Pay", d: "Submit required documents and applicable fees securely." },
              { n: "04", t: "Review & Approval", d: "Track status; receive your license digitally upon approval." },
            ].map((s) => (
              <div key={s.n} className="gov-card relative overflow-hidden p-6">
                <div className="font-display text-5xl font-black text-primary/10">{s.n}</div>
                <div className="mt-3 font-display text-lg font-bold">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { i: TrendingUp, t: "Grow Your Revenue", d: "Lottery retailers receive commission on every ticket sold plus bonus incentives for winning ticket sales." },
            { i: Users, t: "Increase Foot Traffic", d: "Lottery players visit retail locations multiple times per week, driving incremental in-store purchases." },
            { i: Award, t: "Community Impact", d: "Proceeds fund HOPE Scholarships and Georgia Pre-K — your business helps power education." },
          ].map((b) => (
            <div key={b.t} className="gov-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                <b.i className="h-6 w-6 text-gold-foreground" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements + FAQ */}
      <section className="container-page grid gap-10 pb-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Latest Updates</div>
              <h2 className="mt-1 font-display text-2xl font-bold">Announcements</h2>
            </div>
            <Link to="/about" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
          </div>
          <div className="space-y-4">
            {[
              { d: "Jun 24, 2026", t: "2026 Licensing fee schedule published", c: "The updated retailer fee structure for fiscal year 2026 is now available in the Documents Library." },
              { d: "Jun 12, 2026", t: "Scheduled maintenance: July 4 weekend", c: "The portal will be unavailable from 2 AM – 6 AM ET on Saturday, July 4 for routine upgrades." },
              { d: "May 30, 2026", t: "New owner profile workflow", c: "Owner background verification has been streamlined to reduce average application time by 30%." },
            ].map((a) => (
              <article key={a.t} className="gov-card flex gap-5 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Megaphone className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{a.d}</div>
                  <h3 className="mt-0.5 font-semibold">{a.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.c}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</div>
          <h2 className="mt-1 font-display text-2xl font-bold">Common questions</h2>
          <div className="mt-5 space-y-3">
            {[
              "How long does the application take?",
              "What documents are required?",
              "What are the licensing fees?",
              "How do I renew my license?",
            ].map((q) => (
              <Link key={q} to="/faq" className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted">
                <span className="text-sm font-medium">{q}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-2xl p-10 text-primary-foreground sm:p-14" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to become a licensed retailer?</h2>
              <p className="mt-3 max-w-xl text-white/80">Start your application today. Save your progress and complete it on your schedule.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/auth/register" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted">Begin Application <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">Contact GLC</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="container-page grid gap-4 pb-24 md:grid-cols-3">
        {[
          { i: Phone, t: "Call us", d: "(404) 215-5000", s: "Mon–Fri • 8am–5pm ET" },
          { i: Mail, t: "Email", d: "licensing@galottery.org", s: "Response within 1 business day" },
          { i: MapPin, t: "Headquarters", d: "250 Williams Street NW", s: "Atlanta, GA 30303" },
        ].map((c) => (
          <div key={c.t} className="gov-card flex items-start gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><c.i className="h-5 w-5" /></span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</div>
              <div className="mt-0.5 font-semibold">{c.d}</div>
              <div className="text-xs text-muted-foreground">{c.s}</div>
            </div>
          </div>
        ))}
      </section>
    </PublicShell>
  );
}
