import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/auth-shell";
import { Eye } from "lucide-react";

export const Route = createFileRoute("/auth/login")({
  head: () => ({ meta: [{ title: "Sign in - GLC Retailer Portal" }] }),
  component: Login,
});

function Login() {
  return (
    <AuthShell title="Sign in to your account" subtitle="Welcome back. Continue your application or manage your license.">
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "/app/dashboard"; }}>
        <Field id="email" label="Email address" required><Input id="email" type="email" placeholder="you@business.com" autoComplete="email" /></Field>
        <Field id="password" label="Password" required>
          <div className="relative">
            <Input id="password" type="password" placeholder="••••••••••" autoComplete="current-password" />
            <button type="button" aria-label="Show password" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><Eye className="h-4 w-4" /></button>
          </div>
        </Field>
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-input accent-primary" /> Remember me</label>
          <Link to="/auth/forgot" className="font-medium text-primary hover:underline">Forgot password?</Link>
        </div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>

        <div className="relative my-3"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div><div className="relative flex justify-center"><span className="bg-background px-3 text-xs text-muted-foreground">or</span></div></div>

        <Link to="/auth/2fa" className="inline-flex w-full items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium hover:bg-muted">Sign in with 2FA code</Link>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-semibold text-primary hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}
