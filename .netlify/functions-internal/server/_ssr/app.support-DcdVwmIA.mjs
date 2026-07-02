import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Mail, E as MessageSquare, P as LifeBuoy, S as Phone } from "../_libs/lucide-react.mjs";
import { t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.support-DcdVwmIA.js
var import_jsx_runtime = require_jsx_runtime();
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Support" }] }),
		title: "Help & Support",
		subtitle: "Open a ticket or browse self-service resources.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				{
					i: Phone,
					t: "Call support",
					d: "(404) 215-5000",
					s: "Mon-Fri 8a-5p ET"
				},
				{
					i: Mail,
					t: "Email",
					d: "licensing@galottery.org",
					s: "Response within 1 business day"
				},
				{
					i: MessageSquare,
					t: "Live chat",
					d: "Start chat",
					s: "Available now"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground",
						children: c.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: c.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: c.s
					})
				]
			}, c.t))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-6 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Open a support ticket"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Subject"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm",
							placeholder: "Briefly describe the issue"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Application" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Document upload" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Payment" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Account" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Priority"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Normal" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "High" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Urgent" })
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm",
							placeholder: "Provide as much detail as possible…"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
								children: "Submit ticket"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-lg font-bold",
						children: "Popular help articles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							"How to upload documents",
							"Resolving payment errors",
							"Adding a co-owner",
							"Renewing your license",
							"Updating business address"
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary hover:underline",
							href: "/faq",
							children: a
						}) }, a))
					})
				]
			})]
		})]
	});
}
//#endregion
export { Support as component };
