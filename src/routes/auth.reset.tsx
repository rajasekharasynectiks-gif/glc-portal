import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, Input, PrimaryButton } from "@/components/auth-shell";

export const Route = createFileRoute("/auth/reset")({
  head: () => ({ meta: [{ title: "Set a new password - GLC" }] }),
  component: Reset,
});

function Reset() {
  const nav = useNavigate();
  return (
    <AuthShell title="Set a new password" subtitle="Enter a secure new password for your account.">
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); nav({ to: "/auth/login" }); }}>
        <Field id="pw" label="New password" required><Input id="pw" type="password" placeholder="••••••••••••" /></Field>
        <Field id="cpw" label="Confirm new password" required><Input id="cpw" type="password" placeholder="••••••••••••" /></Field>
        <div className="rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground">Password must be at least 12 characters and include a number and a symbol.</div>
        <PrimaryButton type="submit">Update password</PrimaryButton>
        <Link to="/auth/login" className="block text-center text-sm font-medium text-primary hover:underline">Back to sign in</Link>
      </form>
    </AuthShell>
  );
}
