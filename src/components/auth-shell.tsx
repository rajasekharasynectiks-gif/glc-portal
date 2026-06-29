import { Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";

export function AuthShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden p-12 text-primary-foreground lg:flex" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 90px 90px",
        }} />
        <Link to="/" className="relative z-10 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/15 backdrop-blur font-display font-black">GLC</div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold">Georgia Lottery</div>
            <div className="text-xs uppercase tracking-wider text-white/70">Retailer Licensing Portal</div>
          </div>
        </Link>
        <div className="relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Official Government Portal
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight">Apply for your Georgia Lottery retailer license — securely, online.</h2>
          <p className="mt-4 text-white/80">A modern, accessible licensing experience for Georgia businesses. Save your progress, upload documents, and track every step from a single dashboard.</p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              { icon: ShieldCheck, t: "FIPS-compliant identity verification" },
              { icon: Lock, t: "End-to-end encrypted document upload" },
              { icon: BadgeCheck, t: "WCAG 2.1 AA accessibility" },
            ].map(({ icon: I, t }) => (
              <li key={t} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-md bg-white/10"><I className="h-4 w-4" /></span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 text-xs text-white/60">© {new Date().getFullYear()} Georgia Lottery Corporation</div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 lg:hidden">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-black text-sm">GLC</div>
            <span className="text-sm font-bold">Georgia Lottery</span>
          </Link>
          <Link to="/" className="text-xs font-medium text-muted-foreground hover:text-foreground">Back to site</Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-6 py-10 lg:px-12">
          <div className="w-full max-w-md">
            <h1 className="font-display text-3xl font-bold text-foreground">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Field({ label, hint, children, id, required }: { label: string; hint?: string; children: React.ReactNode; id: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 ${props.className ?? ""}`} />;
}

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/40 ${props.className ?? ""}`} />;
}
