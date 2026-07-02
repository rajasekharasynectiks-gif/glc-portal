import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as MessageSquare, G as CreditCard, U as Download, Y as Circle, bt as CircleCheck, d as ShieldCheck, ft as LoaderCircle, q as Clock } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.applications.tracking-DlV5jtQn.js
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		k: "draft",
		t: "Draft",
		s: "done",
		d: "Jun 18, 2026 · 2:30 PM",
		who: "Applicant",
		desc: "Application draft created and autosaved."
	},
	{
		k: "submitted",
		t: "Submitted",
		s: "done",
		d: "Jun 30, 2026 · 4:12 PM",
		who: "Applicant",
		desc: "Application signed and submitted electronically."
	},
	{
		k: "received",
		t: "Application Received",
		s: "done",
		d: "Jul 01, 2026 · 8:02 AM",
		who: "GLC System",
		desc: "Intake confirmed. Reference GLC-REF-4471029."
	},
	{
		k: "review",
		t: "Application Review",
		s: "current",
		d: "In progress",
		who: "Reviewer #214",
		desc: "Documents and owner disclosures under review."
	},
	{
		k: "pay-req",
		t: "Payment Required",
		s: "pending",
		d: "Est. Jul 08, 2026",
		who: "GLC Finance",
		desc: "License and application fees will be invoiced."
	},
	{
		k: "pay-recv",
		t: "Payment Received",
		s: "pending",
		d: "-",
		who: "MerchantOne",
		desc: "Payment confirmation and receipt."
	},
	{
		k: "eft",
		t: "EFT Review",
		s: "pending",
		d: "-",
		who: "GLC Finance",
		desc: "Voided check + bank authorization validated."
	},
	{
		k: "compliance",
		t: "Compliance Review",
		s: "pending",
		d: "-",
		who: "Compliance Team",
		desc: "Final background & regulatory checks."
	},
	{
		k: "approved",
		t: "Approved",
		s: "pending",
		d: "-",
		who: "GLC Licensing",
		desc: "License number issued."
	},
	{
		k: "completed",
		t: "Completed",
		s: "pending",
		d: "-",
		who: "System",
		desc: "License packet delivered."
	}
];
function stageIcon(s) {
	if (s === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-success" });
	if (s === "current") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-5 w-5 text-muted-foreground/50" });
}
function TrackingPage() {
	const doneCount = stages.filter((s) => s.s === "done").length;
	const currentIdx = stages.findIndex((s) => s.s === "current");
	const percent = Math.round((doneCount + .5) / stages.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Tracking" }] }),
		title: "Application tracking",
		subtitle: "Follow your license application through every review stage.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-hero-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Active application"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-xl font-bold",
								children: "Acme Convenience LLC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-sm text-muted-foreground",
								children: "APP-2026-08831 · Submitted Jun 30, 2026"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "info",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
								" ",
								stages[currentIdx]?.t ?? "In queue"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-muted-foreground",
								children: "Overall progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: [percent, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2.5 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary via-info to-success",
								style: { width: `${percent}%` }
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-background/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Assigned reviewer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-sm font-semibold",
									children: "Reviewer #214 · Licensing"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-background/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Payment status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-sm font-semibold text-warning",
									children: "Awaiting invoice"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-background/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Compliance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-sm font-semibold text-success",
									children: "Passed pre-checks"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-bold",
					children: "Quick actions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/messages",
							className: "flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 text-primary" }), " Message reviewer"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/payments/request",
							className: "flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), " View payment request"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-primary" }), " Download submitted PDF"]
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 gov-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold",
					children: "Status timeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "success",
							children: [doneCount, " completed"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "info",
							children: "1 in progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "muted",
							children: [stages.length - doneCount - 1, " upcoming"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 relative space-y-6 border-l-2 border-border pl-8",
				children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border-2 ${s.s === "done" ? "border-success bg-success/10" : s.s === "current" ? "border-primary bg-primary/10" : "border-border bg-background"}`,
						children: stageIcon(s.s)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-lg border p-4 ${s.s === "current" ? "border-primary/40 bg-primary/[0.04]" : "border-border bg-surface"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-base font-bold",
										children: s.t
									}),
									s.s === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "success",
										children: "Completed"
									}),
									s.s === "current" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "info",
										children: "Current stage"
									}),
									s.s === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "muted",
										children: "Upcoming"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
										" ",
										s.d
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
										" ",
										s.who
									]
								})]
							})
						]
					})]
				}, s.k))
			})]
		})]
	});
}
//#endregion
export { TrackingPage as component };
