import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.settings-Ffsh_Hmu.js
var import_jsx_runtime = require_jsx_runtime();
function Toggle({ on = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${on ? "bg-primary" : "bg-muted"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-5 w-5 transform rounded-full bg-card shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}` })
	});
}
function Settings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Settings" }] }),
		title: "Account Settings",
		subtitle: "Manage security, notifications, and preferences.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "gov-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Security"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: [
							{
								t: "Two-factor authentication",
								d: "Authenticator app required at every sign-in.",
								on: true
							},
							{
								t: "Email login alerts",
								d: "Notify me when my account is used from a new device.",
								on: true
							},
							{
								t: "Session timeout (15 min)",
								d: "Sign out automatically after inactivity.",
								on: true
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 rounded-lg border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: s.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: s.d
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { on: s.on })]
						}, s.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "gov-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Notifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: [
							{
								t: "Application status updates",
								d: "Email + in-app",
								on: true
							},
							{
								t: "Payment reminders",
								d: "Email + in-app + SMS",
								on: true
							},
							{
								t: "Marketing & announcements",
								d: "Email only",
								on: false
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 rounded-lg border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: s.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: s.d
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { on: s.on })]
						}, s.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "gov-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-destructive",
						children: "Danger zone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Delete account"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "Permanently delete your portal account. Active licenses are unaffected."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md border border-destructive bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive/15",
							children: "Delete account"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { Settings as component };
