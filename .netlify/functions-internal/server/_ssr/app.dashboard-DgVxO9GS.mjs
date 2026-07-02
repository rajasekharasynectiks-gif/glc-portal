import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as MessageSquare, G as CreditCard, U as Download, V as FileText, a as Upload, at as ArrowRight, bt as CircleCheck, ct as TriangleAlert, d as ShieldCheck, ft as LoaderCircle, st as Activity, v as Receipt } from "../_libs/lucide-react.mjs";
import { n as Chip } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.dashboard-DgVxO9GS.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Welcome back, James",
		subtitle: "Your application is in the review queue. Here's the latest activity.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-hero-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
										tone: "info",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Application Review"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "muted",
										children: "APP-2026-08831"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "muted",
										children: "Submitted Jun 30, 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-bold",
								children: "Acme Convenience LLC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Assigned to Reviewer #214 · Est. completion Jul 08-15, 2026"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid h-24 w-24 place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 36 36",
									className: "absolute inset-0 h-full w-full -rotate-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "15.9",
										fill: "none",
										strokeWidth: "3",
										className: "stroke-muted"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "15.9",
										fill: "none",
										strokeWidth: "3",
										strokeLinecap: "round",
										strokeDasharray: "45 100",
										className: "stroke-primary"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl font-bold",
										children: "45%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Overall"
									})]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {
								l: "Submitted",
								v: "Complete",
								tone: "success"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {
								l: "Review",
								v: "In progress",
								tone: "info",
								active: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {
								l: "Payment",
								v: "Awaiting",
								tone: "warning"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {
								l: "Compliance",
								v: "Upcoming",
								tone: "muted"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/applications/tracking",
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" }), " Track application"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/messages",
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }), " Message reviewer"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download application PDF"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						l: "Assigned stage",
						v: "Review",
						s: "Reviewer #214",
						t: "info",
						i: ShieldCheck
					},
					{
						l: "Outstanding actions",
						v: "2",
						s: "1 EFT · 1 clarification",
						t: "warning",
						i: TriangleAlert
					},
					{
						l: "Payment status",
						v: "$283.25",
						s: "Invoice ready",
						t: "warning",
						i: CreditCard
					},
					{
						l: "Compliance",
						v: "Passed",
						s: "Pre-checks green",
						t: "success",
						i: CircleCheck
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "h-4.5 w-4.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								tone: s.t,
								children: s.s
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: s.l
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-2xl font-bold",
							children: s.v
						})
					]
				}, s.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Application timeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/applications/tracking",
							className: "text-xs font-semibold text-primary hover:underline",
							children: "View full timeline →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative mt-5 space-y-5 border-l-2 border-border pl-6",
						children: [
							{
								d: "Today · 10:12 AM",
								t: "New message from Reviewer #214",
								c: "Please attach the endorsement rider for Keno coverage.",
								tone: "info"
							},
							{
								d: "Today · 8:02 AM",
								t: "Application received by GLC",
								c: "Reference GLC-REF-4471029 assigned.",
								tone: "success"
							},
							{
								d: "Jun 30 · 4:12 PM",
								t: "Application submitted",
								c: "Signed and locked for review.",
								tone: "success"
							},
							{
								d: "Jun 28 · 3:20 PM",
								t: "Address validation passed",
								c: "USPS + Melissa 11/11 confidence.",
								tone: "success"
							}
						].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `absolute -left-[31px] grid h-4 w-4 place-items-center rounded-full border-2 bg-background ${e.tone === "success" ? "border-success" : "border-info"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${e.tone === "success" ? "bg-success" : "bg-info"}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: e.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-semibold",
									children: e.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: e.c
								})
							]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gov-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Outstanding actions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: [
								{
									t: "Pay license invoice",
									d: "$283.25 · Due Jul 15",
									to: "/app/payments/request",
									i: CreditCard,
									tone: "warning"
								},
								{
									t: "Upload voided check",
									d: "Required for EFT setup",
									to: "/app/payments/eft",
									i: Upload,
									tone: "info"
								},
								{
									t: "Reply to reviewer",
									d: "Endorsement rider requested",
									to: "/app/messages",
									i: MessageSquare,
									tone: "info"
								}
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: t.to,
								className: "flex items-start gap-3 rounded-md border border-border p-3 hover:bg-muted/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md ${t.tone === "warning" ? "bg-warning/15 text-warning" : "bg-info/10 text-info"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.i, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: t.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: t.d
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-2 h-4 w-4 text-muted-foreground" })
								]
							}) }, t.t))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gov-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Quick actions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2",
							children: [
								{
									i: Receipt,
									t: "View last receipt",
									to: "/app/payments/receipt"
								},
								{
									i: FileText,
									t: "Review submission",
									to: "/app/applications/review"
								},
								{
									i: CreditCard,
									t: "Payment gateway",
									to: "/app/payments/checkout"
								}
							].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: q.to,
								className: "flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm font-medium hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.i, { className: "h-4 w-4" })
								}), q.t]
							}, q.t))
						})]
					})]
				})]
			})
		]
	});
}
function Stage({ l, v, tone, active }) {
	const dot = {
		success: "bg-success",
		info: "bg-info",
		warning: "bg-warning",
		muted: "bg-muted-foreground/40"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-md border p-3 ${active ? "border-primary/40 bg-background/70" : "border-border bg-background/40"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${dot}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold uppercase tracking-wider text-muted-foreground",
				children: l
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm font-semibold text-foreground",
			children: v
		})]
	});
}
//#endregion
export { Dashboard as component };
