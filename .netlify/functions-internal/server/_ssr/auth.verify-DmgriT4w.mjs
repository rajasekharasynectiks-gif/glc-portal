import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as MailCheck } from "../_libs/lucide-react.mjs";
import { i as PrimaryButton, t as AuthShell } from "./auth-shell-CAsh7mSZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.verify-DmgriT4w.js
var import_jsx_runtime = require_jsx_runtime();
function Verify() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Verify your email",
		subtitle: "We sent a 6-digit code to your inbox. Enter it below to continue.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: "Code sent to j***@business.com"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Expires in 10 minutes"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				window.location.href = "/auth/2fa";
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-between gap-2",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						maxLength: 1,
						inputMode: "numeric",
						className: "h-14 w-full max-w-[56px] rounded-md border border-input bg-surface text-center font-display text-xl font-bold focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					className: "mt-6",
					children: "Verify email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-center text-sm text-muted-foreground",
					children: ["Didn't receive a code? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-semibold text-primary hover:underline",
						children: "Resend"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/auth/login",
					className: "mt-2 block text-center text-xs text-muted-foreground hover:text-foreground",
					children: "Use a different email"
				})
			]
		})]
	});
}
//#endregion
export { Verify as component };
