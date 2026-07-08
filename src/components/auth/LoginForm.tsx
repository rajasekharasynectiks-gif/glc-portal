import { Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Eye } from "lucide-react";
import { Field, Input } from "@/components/auth-shell";
import { useAuth } from "@/lib/auth";

type LoginFormProps = {
  onSuccess?: () => void;
  submitLabel?: string;
  show2faLink?: boolean;
  showRegisterButton?: boolean;
  showCreateAccount?: boolean;
  focusRef?: React.Ref<HTMLInputElement>;
};

export function LoginForm({
  onSuccess,
  submitLabel = "Sign in",
  show2faLink = true,
  showRegisterButton = false,
  showCreateAccount = true,
  focusRef,
}: LoginFormProps) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter your email address and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      await login({ email, password, rememberMe });

      if (onSuccess) {
        onSuccess();
      }

      navigate({ to: "/app/dashboard" });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Field id="email" label="Email address" required>
        <Input
          id="email"
          type="email"
          placeholder="you@business.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          ref={focusRef}
        />
      </Field>

      <Field id="password" label="Password" required>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </Field>

      {errorMessage ? <p className="text-sm text-destructive">{errorMessage}</p> : null}

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-input accent-primary"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          Remember me
        </label>
        <Link to="/auth/forgot" className="font-medium text-primary hover:underline">
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Signing in…" : submitLabel}
      </button>

      {showRegisterButton ? (
        <Link
          to="/auth/register"
          className="inline-flex w-full items-center justify-center rounded-md bg-[#537fb0] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f6aa1]"
        >
          REGISTER
        </Link>
      ) : null}

      {show2faLink ? (
        <>
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">or</span>
            </div>
          </div>
          <Link
            to="/auth/2fa"
            className="inline-flex w-full items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Sign in with 2FA code
          </Link>
        </>
      ) : null}

      {!showRegisterButton && showCreateAccount ? (
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/auth/register" className="font-semibold text-primary hover:underline">
            Create one
          </Link>
        </p>
      ) : null}
    </form>
  );
}
