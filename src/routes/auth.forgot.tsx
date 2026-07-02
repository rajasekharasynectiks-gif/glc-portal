import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/auth-shell";

export const Route = createFileRoute("/auth/forgot")({
  head: () => ({ meta: [{ title: "Forgot password - GLC" }] }),
  component: Forgot,
});

function Forgot() {
  const nav = useNavigate();
  return (
    <AuthShell title="Reset your password" subtitle="Enter the email associated with your account. We'll send a secure reset link.">
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); nav({ to: "/auth/reset" }); }}>
        <Field id="email" label="Email address" required><Input id="email" type="email" placeholder="you@business.com" /></Field>
        <PrimaryButton type="submit">Send reset link</PrimaryButton>
        <Link to="/auth/login" className="block text-center text-sm font-medium text-primary hover:underline">Back to sign in</Link>
      </form>
    </AuthShell>
  );
}
