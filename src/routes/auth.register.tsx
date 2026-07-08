import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Building2, Mail, User, Phone, Lock, CheckCircle2 } from "lucide-react";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/auth/register")({
  head: () => ({ meta: [{ title: "Register - Georgia Lottery Retailer Portal" }] }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please complete all required fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      setError("You must agree to the Terms of Use to continue.");
      return;
    }
    setError("");
    navigate({ to: "/app/dashboard" });
  };

  const inputClass =
    "w-full rounded-sm border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0a7a44] focus:outline-none focus:ring-2 focus:ring-[#0a7a44]/25";

  return (
    <PublicShell>
      <section className="bg-[#f5f5f0] py-10 md:py-14">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Create Account</span>
          </nav>
          <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#0a7a44]">
            Create Your Retailer Account
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
            Register to apply for a Georgia Lottery retailer license, manage renewals,
            and track your application status online.
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-md border border-border bg-white shadow-card">
              <div className="border-b border-border bg-[#0a7a44] px-6 py-4 rounded-t-md">
                <h2 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                  Account Registration
                </h2>
              </div>

              <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-800">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="firstName" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} placeholder="John" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-800">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="lastName" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} placeholder="Smith" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="you@business.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800">
                      Phone Number
                    </label>
                    <div className="relative mt-1.5">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="(404) 555-0100" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-slate-800">
                    Business / Store Name
                  </label>
                  <div className="relative mt-1.5">
                    <Building2 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input id="businessName" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} className={inputClass} placeholder="Peach State Convenience" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-800">
                      Password <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} className={inputClass} placeholder="At least 8 characters" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm" className="block text-sm font-semibold text-slate-800">
                      Confirm Password <span className="text-destructive">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input id="confirm" type="password" value={form.confirm} onChange={(e) => update("confirm", e.target.value)} className={inputClass} placeholder="Re-enter password" />
                    </div>
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => update("agree", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#0a7a44]"
                  />
                  <span>
                    I agree to the Georgia Lottery{" "}
                    <a href="https://www.galottery.com/en-us/content/termsandconditions.html" target="_blank" rel="noopener noreferrer" className="text-[#0a7a44] font-semibold hover:underline">Terms of Use</a>{" "}
                    and{" "}
                    <a href="https://www.galottery.com/en-us/content/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-[#0a7a44] font-semibold hover:underline">Privacy Policy</a>.
                  </span>
                </label>

                {error ? (
                  <div className="rounded-sm border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                    {error}
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-sm bg-[#0a7a44] px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#08663a] focus:outline-none focus:ring-2 focus:ring-[#0a7a44]/40"
                  >
                    Create Account
                  </button>
                  <Link
                    to="/auth/login"
                    className="inline-flex h-11 items-center justify-center rounded-sm border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Already have an account? Sign in
                  </Link>
                </div>
              </form>
            </div>

            <aside className="space-y-4">
              <div className="rounded-md border border-border bg-white shadow-card overflow-hidden">
                <div className="bg-[#EE7B2D] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                    Why Register?
                  </h3>
                </div>
                <ul className="p-5 space-y-3 text-sm text-slate-700">
                  {[
                    "Save your application progress",
                    "Upload and manage documents securely",
                    "Track application status in real time",
                    "Pay license fees online",
                    "Receive official notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0a7a44] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-border bg-white shadow-card p-5 text-sm">
                <h4 className="font-semibold text-slate-900">Need Assistance?</h4>
                <p className="mt-1 text-slate-600">
                  Our support team is available Monday–Friday, 8am–5pm ET.
                </p>
                <p className="mt-2 font-bold text-[#0a7a44]">1-800-GA-LUCKY</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
