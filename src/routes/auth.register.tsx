import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/auth-shell";

export const Route = createFileRoute("/auth/register")({
  head: () => ({ meta: [{ title: "Create account — GLC Retailer Portal" }] }),
  component: Register,
});

function Register() {
  return (
    <AuthShell title="Create your account" subtitle="It takes about 2 minutes. You'll receive a verification email next.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/auth/verify"; }}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="fn" label="First name" required><Input id="fn" placeholder="John" /></Field>
          <Field id="ln" label="Last name" required><Input id="ln" placeholder="Smith" /></Field>
        </div>
        <Field id="biz" label="Legal business name" required><Input id="biz" placeholder="Acme Convenience LLC" /></Field>
        <Field id="email" label="Business email" required><Input id="email" type="email" placeholder="you@business.com" /></Field>
        <Field id="phone" label="Phone number" required><Input id="phone" type="tel" placeholder="(404) 555-0100" /></Field>
        <Field id="pw" label="Password" hint="At least 12 characters, including a number and symbol." required>
          <Input id="pw" type="password" placeholder="••••••••••••" />
        </Field>
        <div className="space-y-2 rounded-md border border-border bg-surface-muted p-3 text-xs">
          <label className="flex items-start gap-2"><input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-input accent-primary" required /><span>I agree to the <Link to="/about" className="font-semibold text-primary hover:underline">Terms of Service</Link> and <Link to="/about" className="font-semibold text-primary hover:underline">Privacy Policy</Link>.</span></label>
          <label className="flex items-start gap-2"><input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-input accent-primary" /><span>Send me product updates and licensing announcements.</span></label>
        </div>
        <PrimaryButton type="submit">Create account</PrimaryButton>
        <p className="text-center text-sm text-muted-foreground">Already registered? <Link to="/auth/login" className="font-semibold text-primary hover:underline">Sign in</Link></p>
      </form>
    </AuthShell>
  );
}
