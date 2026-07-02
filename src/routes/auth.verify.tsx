import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, PrimaryButton } from "@/components/auth-shell";
import { MailCheck } from "lucide-react";

export const Route = createFileRoute("/auth/verify")({
  head: () => ({ meta: [{ title: "Verify your email - GLC" }] }),
  component: Verify,
});

function Verify() {
  return (
    <AuthShell title="Verify your email" subtitle="We sent a 6-digit code to your inbox. Enter it below to continue.">
      <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-4">
        <MailCheck className="h-6 w-6 text-primary" />
        <div className="text-sm"><div className="font-semibold">Code sent to j***@business.com</div><div className="text-xs text-muted-foreground">Expires in 10 minutes</div></div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/auth/2fa"; }}>
        <div className="flex justify-between gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <input key={i} maxLength={1} inputMode="numeric" className="h-14 w-full max-w-[56px] rounded-md border border-input bg-surface text-center font-display text-xl font-bold focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30" />
          ))}
        </div>
        <PrimaryButton type="submit" className="mt-6">Verify email</PrimaryButton>
        <p className="mt-4 text-center text-sm text-muted-foreground">Didn't receive a code? <button type="button" className="font-semibold text-primary hover:underline">Resend</button></p>
        <Link to="/auth/login" className="mt-2 block text-center text-xs text-muted-foreground hover:text-foreground">Use a different email</Link>
      </form>
    </AuthShell>
  );
}
