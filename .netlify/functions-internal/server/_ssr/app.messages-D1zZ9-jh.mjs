import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { $ as CheckCheck, d as ShieldCheck, m as Search, p as Send, w as Paperclip } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.messages-D1zZ9-jh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var threads = [
	{
		id: "1",
		subj: "Surety bond clarification",
		from: "Reviewer #214 · Licensing",
		preview: "Please confirm the bond effective date matches…",
		time: "10m",
		unread: 2,
		active: true
	},
	{
		id: "2",
		subj: "Owner 2 identity documents",
		from: "Compliance Team",
		preview: "We received the updated ID. Verifying now.",
		time: "1h",
		unread: 0
	},
	{
		id: "3",
		subj: "Payment invoice generated",
		from: "GLC Billing",
		preview: "Your invoice INV-2026-104-8831 is ready.",
		time: "Jun 30",
		unread: 0
	},
	{
		id: "4",
		subj: "Welcome to the Retailer Portal",
		from: "GLC System",
		preview: "Thanks for creating your applicant account.",
		time: "Jun 18",
		unread: 0
	}
];
var msgs = [
	{
		from: "them",
		who: "Reviewer #214",
		t: "Hi James - could you confirm the effective date on the surety bond you uploaded? The scan is a little dark on page 2.",
		time: "9:52 AM"
	},
	{
		from: "me",
		who: "You",
		t: "Hi - effective date is July 1, 2026 for 12 months. I'll re-upload a clearer copy today.",
		time: "10:04 AM",
		read: true
	},
	{
		from: "them",
		who: "Reviewer #214",
		t: "Perfect, thanks. Once uploaded I'll approve the document and move you to the payment stage.",
		time: "10:11 AM"
	},
	{
		from: "them",
		who: "Reviewer #214",
		t: "One more thing - please attach the endorsement rider if you added Keno coverage.",
		time: "10:12 AM"
	}
];
function MessagesPage() {
	const [active, setActive] = (0, import_react.useState)("1");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Messages" }] }),
		title: "Messages",
		subtitle: "Secure two-way conversations with GLC reviewers and support.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gov-card grid overflow-hidden lg:grid-cols-[320px_1fr]",
			style: { minHeight: "70dvh" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-b border-border lg:border-b-0 lg:border-r",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Search conversations",
							className: "w-full rounded-md border border-input bg-surface py-2 pl-8 pr-3 text-sm"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: threads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(t.id),
						className: `w-full p-4 text-left transition-colors ${active === t.id ? "bg-primary/[0.06]" : "hover:bg-muted/40"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-semibold",
									children: t.subj
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-[11px] text-muted-foreground",
									children: t.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs text-muted-foreground",
								children: t.from
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: t.preview
								}), t.unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground",
									children: t.unread
								})]
							})
						]
					}) }, t.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-center justify-between gap-2 border-b border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-base font-bold",
							children: "Surety bond clarification"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Reviewer #214 · Licensing · APP-2026-08831"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " End-to-end encrypted"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-4 overflow-y-auto bg-surface-muted/50 p-5",
						children: msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex ${m.from === "me" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${m.from === "me" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-background border border-border rounded-bl-sm"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.who }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.time }),
										m.from === "me" && m.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-3.5 w-3.5" })
									]
								}), m.t]
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-2 rounded-lg border border-input bg-surface p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-muted",
									"aria-label": "Attach",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 2,
									placeholder: "Type your reply…",
									className: "flex-1 resize-none bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send"]
								})
							]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { MessagesPage as component };
