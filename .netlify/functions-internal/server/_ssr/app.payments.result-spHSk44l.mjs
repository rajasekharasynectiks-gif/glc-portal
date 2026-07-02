import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as LifeBuoy, U as Download, _ as RefreshCw, bt as CircleCheck, ct as TriangleAlert, q as Clock, v as Receipt, vt as CircleX } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
import { t as Route } from "./app.payments.result-CY-3ndL3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.payments.result-spHSk44l.js
var import_jsx_runtime = require_jsx_runtime();
var map = {
	approved: {
		tone: "success",
		title: "Payment approved",
		sub: "Your payment was processed successfully.",
		icon: CircleCheck
	},
	processing: {
		tone: "info",
		title: "Processing payment",
		sub: "Please stay on this page while we confirm.",
		icon: Clock
	},
	pending: {
		tone: "warning",
		title: "Payment pending",
		sub: "Your bank is verifying the transaction. This can take up to 3 business days.",
		icon: Clock
	},
	failed: {
		tone: "error",
		title: "Payment failed",
		sub: "The transaction did not complete. No funds were captured.",
		icon: CircleX
	},
	declined: {
		tone: "error",
		title: "Payment declined",
		sub: "The issuing bank declined the transaction.",
		icon: CircleX
	},
	cancelled: {
		tone: "warning",
		title: "Payment cancelled",
		sub: "You cancelled the transaction before it completed.",
		icon: TriangleAlert
	},
	duplicate: {
		tone: "warning",
		title: "Duplicate transaction",
		sub: "A matching payment was submitted moments ago.",
		icon: TriangleAlert
	},
	timeout: {
		tone: "error",
		title: "Gateway timeout",
		sub: "The payment gateway did not respond in time.",
		icon: TriangleAlert
	}
};
function ResultPage() {
	const { status = "approved" } = Route.useSearch();
	const m = map[status];
	const ok = status === "approved";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Payments",
			to: "/app/payments"
		}, { label: "Result" }] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mx-auto grid h-20 w-20 place-items-center rounded-full ${ok ? "bg-success/10 text-success" : m.tone === "warning" ? "bg-warning/15 text-warning" : m.tone === "info" ? "bg-info/10 text-info" : "bg-destructive/10 text-destructive"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-10 w-10" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								tone: m.tone,
								children: status.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-2xl font-bold",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: m.sub
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-x-6 gap-y-2 border-t border-border bg-surface-muted p-6 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Reference number",
								v: "GLC-REF-4471029"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Merchant transaction ID",
								v: "M1-TX-2026-889201"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Receipt number",
								v: "RCT-000-104-8831"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Amount",
								v: "$283.25"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Method",
								v: "Visa •••• 4421"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Timestamp",
								v: (/* @__PURE__ */ new Date()).toLocaleString()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2 border-t border-border p-5",
						children: ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/payments/receipt",
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "h-4 w-4" }), " View receipt"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/payments/eft",
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Continue to EFT upload"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download receipt"]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/payments/checkout",
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), " Retry payment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/support",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-4 w-4" }), " Contact support"]
						})] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 gov-card p-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 font-semibold text-foreground",
					children: "Preview other outcomes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						"approved",
						"pending",
						"processing",
						"failed",
						"declined",
						"cancelled",
						"duplicate",
						"timeout"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/payments/result",
						search: { status: s },
						className: "rounded-full border border-border px-2.5 py-1 hover:bg-muted",
						children: s
					}, s))
				})]
			})]
		})
	});
}
function Row({ l, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between border-b border-border/60 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: l
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-semibold text-foreground",
			children: v
		})]
	});
}
//#endregion
export { ResultPage as component };
