import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, PrimaryButton } from "@/components/auth-shell";

export const Route = createFileRoute("/auth/login")({
  head: () => ({ meta: [{ title: "Sign in - GLC Retailer Portal" }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();

  return (
    <AuthShell title="Sign in to your account" subtitle="Demo mode only. No credentials are required for this client preview.">
      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-surface-muted p-5 text-sm text-muted-foreground">
          This is a mock sign-in flow for the client demo. Use the button below to continue straight into the portal.
        </div>

        <PrimaryButton type="button" onClick={() => navigate({ to: "/app/dashboard" })}>
          Enter demo dashboard
        </PrimaryButton>

        <p className="text-center text-sm text-muted-foreground">
          Need to test the registration flow instead?{' '}
          <Link to="/auth/register" className="font-semibold text-primary hover:underline">
            Go to register
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
