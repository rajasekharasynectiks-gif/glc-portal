import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type SignInModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignInModal({ open, onClose }: SignInModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const goToLogin = () => {
    onClose();
    navigate({ to: "/app/dashboard" });
  };

  const goToRegister = () => {
    onClose();
    navigate({ to: "/auth/register" });
  };

  const goToForgot = () => {
    onClose();
    navigate({ to: "/auth/forgot" });
  };

  return createPortal(
    <>
      <div className="fixed inset-0 z-40 bg-black/10" onClick={onClose} />

      <div className="fixed left-1/2 top-[118px] z-50 w-[min(92vw,430px)] -translate-x-1/2">
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sign-in-modal-title"
          className="relative overflow-visible rounded-[2px] border border-slate-200 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.16)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign in dialog"
            className="absolute -right-4 -top-4 grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#ff8a2a] bg-white text-[#ff8a2a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-transform hover:scale-105"
          >
            <X className="h-4 w-4" strokeWidth={2.75} />
          </button>

          <div className="px-5 py-5 sm:px-7 sm:py-6">
            <h2 id="sign-in-modal-title" className="text-[24px] font-medium leading-none text-[#2f7a1f] sm:text-[26px]">
              Sign In
            </h2>

            <p className="mt-5 text-center text-[14px] leading-6 text-slate-900 sm:text-[15px]">
              Please sign in to your Georgia Lottery Players Club account or register an account below.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="sign-in-email" className="mb-2 block text-[18px] font-semibold text-slate-900 sm:text-[19px]">
                  Email Address
                </label>
                <input
                  id="sign-in-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  className="h-11 w-full rounded-[4px] border border-[#c9c9c9] bg-white px-4 text-[16px] text-slate-900 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] outline-none placeholder:text-slate-400 focus:border-[#2f7a1f] focus:ring-2 focus:ring-[#2f7a1f]/15"
                />
              </div>

              <div>
                <label htmlFor="sign-in-password" className="mb-2 block text-[18px] font-semibold text-slate-900 sm:text-[19px]">
                  Password
                </label>
                <input
                  id="sign-in-password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="h-11 w-full rounded-[4px] border border-[#c9c9c9] bg-white px-4 text-[16px] text-slate-900 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] outline-none placeholder:text-slate-400 focus:border-[#2f7a1f] focus:ring-2 focus:ring-[#2f7a1f]/15"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={goToForgot}
                  className="text-[16px] italic text-slate-900 underline decoration-1 underline-offset-4 hover:text-[#2f7a1f]"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="button"
                onClick={goToLogin}
                className="inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-[#3d8f2f] text-[18px] font-bold uppercase tracking-wide text-white shadow-[0_4px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-[#347629]"
              >
                SIGN IN
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-[#f0f7e8] px-5 py-5 sm:px-7">
            <div className="text-center text-[16px] font-bold text-[#ff9a1f] sm:text-[17px]">
              Not a member? It's free to join!
            </div>

            <button
              type="button"
              onClick={goToRegister}
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-[#1185bf] text-[18px] font-bold uppercase tracking-wide text-white shadow-[0_4px_0_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5 hover:bg-[#0d6f9f]"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
