import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { Z as ChevronDown, m as Search, yt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { r as PublicShell, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BBg9EH46.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Eligibility",
	"Application",
	"Documents",
	"Fees",
	"Renewal",
	"Compliance"
];
var faqs = [
	{
		c: "Eligibility",
		q: "Who can apply for a retailer license?",
		a: "Any business with a physical location in Georgia, an active business license, and ownership where all officers are 21 or older may apply."
	},
	{
		c: "Application",
		q: "How long does the application take?",
		a: "Most applications can be completed in 30-45 minutes. You can save progress and return at any time."
	},
	{
		c: "Application",
		q: "Can I save and continue later?",
		a: "Yes. Every step auto-saves. Sign back in to continue exactly where you left off."
	},
	{
		c: "Documents",
		q: "What documents are required?",
		a: "Business license, federal tax ID documentation, photo ID for each listed owner, and proof of premises lease or ownership."
	},
	{
		c: "Fees",
		q: "What are the licensing fees?",
		a: "Fees vary by retailer category. The 2026 fee schedule is available in the Documents Library."
	},
	{
		c: "Fees",
		q: "Which payment methods are accepted?",
		a: "ACH bank transfer, major credit/debit cards, and certified check by mail."
	},
	{
		c: "Renewal",
		q: "How do I renew my license?",
		a: "Sign in to your dashboard; you'll be prompted to renew 60 days before expiration."
	},
	{
		c: "Compliance",
		q: "What background checks are performed?",
		a: "GLC conducts criminal background and financial verification on all listed owners and officers."
	}
];
function FAQ() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(0);
	const filtered = faqs.filter((f) => (cat === "All" || f.c === cat) && (f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
					label: "Home",
					to: "/"
				}, { label: "FAQ" }] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Help & frequently asked questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Find answers to common questions about retailer licensing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search the knowledge base…",
						className: "w-full rounded-lg border border-input bg-surface py-3.5 pl-11 pr-4 text-sm shadow-card focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-8 py-12 lg:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: "Categories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`,
					children: c
				}) }, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 gov-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm font-semibold",
						children: "Still need help?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Our support team is here to help."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/contact",
						className: "mt-3 inline-block text-xs font-semibold text-primary hover:underline",
						children: "Contact support →"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [filtered.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(open === i ? null : i),
					className: "flex w-full items-center justify-between gap-4 p-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-primary",
							children: f.c
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 font-semibold",
							children: f.q
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}` })]
				}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-surface-muted/50 p-5 text-sm text-muted-foreground",
					children: f.a
				})]
			}, f.q)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: "No results found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Try a different search or category."
				})]
			})]
		})]
	})] });
}
//#endregion
export { FAQ as component };
