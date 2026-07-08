import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, PrimaryButton } from "@/components/auth-shell";

export const Route = createFileRoute("/auth/register")({
  head: () => ({ meta: [{ title: "Create account - GLC Retailer Portal" }] }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();

  return (
    <AuthShell title="Create a new account" subtitle="Demo mode only. The client preview skips data entry and goes straight to the portal.">
      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-surface-muted p-5 text-sm text-muted-foreground">
          This is a mock registration flow for the client demo. No business details or passwords are required here.
        </div>

        <PrimaryButton type="button" onClick={() => navigate({ to: "/app/dashboard" })}>
          Start demo account
        </PrimaryButton>

        <p className="text-center text-sm text-muted-foreground">
          Already checking the sign-in path?{' '}
          <Link to="/auth/login" className="font-semibold text-primary hover:underline">
            Go to sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
