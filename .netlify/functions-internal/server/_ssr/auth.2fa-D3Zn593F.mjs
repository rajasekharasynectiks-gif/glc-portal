import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ShieldCheck, u as Smartphone } from "../_libs/lucide-react.mjs";
import { i as PrimaryButton, t as AuthShell } from "./auth-shell-CAsh7mSZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.2fa-D3Zn593F.js
var import_jsx_runtime = require_jsx_runtime();
function TwoFA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Two-factor authentication",
		subtitle: "Enter the 6-digit code from your authenticator app to continue.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: "Authenticator app"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Google Authenticator · Microsoft Authenticator · Authy"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				window.location.href = "/app/dashboard";
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
					children: "Verify & continue"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " FIPS 140-2 compliant"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/auth/login",
					className: "mt-4 block text-center text-sm font-medium text-primary hover:underline",
					children: "Use a backup code"
				})
			]
		})]
	});
}
//#endregion
export { TwoFA as component };
