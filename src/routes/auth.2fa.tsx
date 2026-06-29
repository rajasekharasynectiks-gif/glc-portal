import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, PrimaryButton } from "@/components/auth-shell";
import { Smartphone, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/auth/2fa")({
  head: () => ({ meta: [{ title: "Two-factor authentication — GLC" }] }),
  component: TwoFA,
});

function TwoFA() {
  return (
    <AuthShell title="Two-factor authentication" subtitle="Enter the 6-digit code from your authenticator app to continue.">
      <div className="mb-5 flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-4">
        <Smartphone className="h-6 w-6 text-primary" />
        <div className="text-sm"><div className="font-semibold">Authenticator app</div><div className="text-xs text-muted-foreground">Google Authenticator · Microsoft Authenticator · Authy</div></div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/app/dashboard"; }}>
        <div className="flex justify-between gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <input key={i} maxLength={1} inputMode="numeric" className="h-14 w-full max-w-[56px] rounded-md border border-input bg-surface text-center font-display text-xl font-bold focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
          ))}
        </div>
        <PrimaryButton type="submit" className="mt-6">Verify & continue</PrimaryButton>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" /> FIPS 140-2 compliant</div>
        <Link to="/auth/login" className="mt-4 block text-center text-sm font-medium text-primary hover:underline">Use a backup code</Link>
      </form>
    </AuthShell>
  );
}
