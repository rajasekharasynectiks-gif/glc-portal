import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.profile-C_4lxmXU.js
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Profile" }] }),
		title: "My Profile",
		subtitle: "Update your personal information and contact details.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-6 text-center lg:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-24 w-24 place-items-center rounded-full bg-gold text-gold-foreground font-display text-2xl font-black",
						children: "JM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 font-display text-lg font-bold",
						children: "James Morrison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Acme Convenience LLC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success",
						children: "Verified Applicant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-5 w-full rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
						children: "Change photo"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-6 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Personal information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [
							["First name", "James"],
							["Last name", "Morrison"],
							["Email", "james@acmeconv.com"],
							["Phone", "(404) 555-0123"],
							["Role", "Primary Applicant"],
							["Member since", "June 2026"]
						].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							defaultValue: v,
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm"
						})] }, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
							children: "Save changes"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { Profile as component };
