import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/auth/login")({
  head: () => ({ meta: [{ title: "Sign In - Georgia Lottery Retailer Portal" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email address and password.");
      return;
    }
    setError("");
    navigate({ to: "/app/dashboard" });
  };

  return (
    <PublicShell>
      <section className="bg-[#f5f5f0] py-10 md:py-14">
        <div className="container-page">
          {/* Page header strip */}
          <div className="mb-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Sign In</span>
            </nav>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#0a7a44]">
              Retailer Sign In
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
              Access your Georgia Lottery Retailer Licensing account to manage applications,
              renewals, documents, and payments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Sign-in card */}
            <div className="rounded-md border border-border bg-white shadow-card">
              <div className="border-b border-border bg-[#0a7a44] px-6 py-4 rounded-t-md">
                <h2 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                  Sign In to Your Account
                </h2>
              </div>

              <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@business.com"
                      className="w-full rounded-sm border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0a7a44] focus:outline-none focus:ring-2 focus:ring-[#0a7a44]/25"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-800">
                      Password <span className="text-destructive">*</span>
                    </label>
                    <Link to="/auth/forgot" className="text-xs font-semibold text-[#0a7a44] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-sm border border-slate-300 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0a7a44] focus:outline-none focus:ring-2 focus:ring-[#0a7a44]/25"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 accent-[#0a7a44]"
                  />
                  Remember me on this device
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
                    Sign In
                  </button>
                  <Link
                    to="/auth/2fa"
                    className="inline-flex h-11 items-center justify-center rounded-sm border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Sign in with 2FA code
                  </Link>
                </div>

                <p className="pt-2 text-xs text-slate-500">
                  By signing in you agree to the Georgia Lottery{" "}
                  <a href="https://www.galottery.com/en-us/content/termsandconditions.html" target="_blank" rel="noopener noreferrer" className="text-[#0a7a44] hover:underline">Terms of Use</a>{" "}
                  and{" "}
                  <a href="https://www.galottery.com/en-us/content/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-[#0a7a44] hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Side info panel */}
            <aside className="space-y-4">
              <div className="rounded-md border border-border bg-white shadow-card overflow-hidden">
                <div className="bg-[#EE7B2D] px-5 py-3">
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                    New Retailer?
                  </h3>
                </div>
                <div className="p-5 text-sm text-slate-700 space-y-3">
                  <p>Start your Georgia Lottery retailer license application online in minutes.</p>
                  <Link
                    to="/auth/register"
                    className="inline-flex w-full items-center justify-center rounded-sm bg-[#0a7a44] px-4 py-2.5 text-sm font-bold uppercase text-white hover:bg-[#08663a]"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="rounded-md border border-border bg-white shadow-card p-5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#0a7a44] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Secure Government Portal</h4>
                    <p className="mt-1 text-slate-600">
                      Your information is protected by FIPS-compliant encryption and monitored 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-border bg-white shadow-card p-5 text-sm">
                <h4 className="font-semibold text-slate-900">Need Help?</h4>
                <p className="mt-1 text-slate-600">Player Information Hotline</p>
                <p className="mt-1 font-bold text-[#0a7a44]">1-800-GA-LUCKY</p>
                <Link to="/contact" className="mt-2 inline-block text-xs font-semibold text-[#0a7a44] hover:underline">
                  Contact Support →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
