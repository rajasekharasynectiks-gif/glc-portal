import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { U as Download, V as FileText, m as Search, mt as Funnel } from "../_libs/lucide-react.mjs";
import { n as Chip, r as PublicShell, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-BzxVF5i2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var docs = [
	{
		t: "2026 Retailer Fee Schedule",
		c: "Policies",
		sz: "PDF • 284 KB",
		d: "Jun 24, 2026",
		n: true
	},
	{
		t: "Retailer Application Guide",
		c: "Guides",
		sz: "PDF • 1.2 MB",
		d: "May 12, 2026"
	},
	{
		t: "Owner Background Disclosure Form",
		c: "Forms",
		sz: "PDF • 198 KB",
		d: "Apr 02, 2026"
	},
	{
		t: "Surety Bond Instructions",
		c: "Guides",
		sz: "PDF • 432 KB",
		d: "Mar 18, 2026"
	},
	{
		t: "Code of Conduct for Retailers",
		c: "Policies",
		sz: "PDF • 612 KB",
		d: "Feb 28, 2026"
	},
	{
		t: "Premises Eligibility Checklist",
		c: "Forms",
		sz: "PDF • 122 KB",
		d: "Feb 02, 2026"
	},
	{
		t: "Privacy & Data Handling Policy",
		c: "Policies",
		sz: "PDF • 248 KB",
		d: "Jan 15, 2026"
	},
	{
		t: "Renewal Quick Start",
		c: "Guides",
		sz: "PDF • 318 KB",
		d: "Jan 09, 2026"
	}
];
function Docs() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const cats = [
		"All",
		"Forms",
		"Guides",
		"Policies"
	];
	const filtered = docs.filter((d) => (cat === "All" || d.c === cat) && d.t.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
					label: "Home",
					to: "/"
				}, { label: "Documents" }] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Documents Library"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Download policies, application guides, and licensing forms."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search documents…",
						className: "w-full rounded-md border border-input bg-surface py-2.5 pl-10 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 rounded-md border border-border bg-surface p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "ml-2 h-3.5 w-3.5 text-muted-foreground" }), cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `rounded px-3 py-1.5 text-xs font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
						children: c
					}, c))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-2",
				children: filtered.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card flex items-start gap-4 p-5 transition-shadow hover:shadow-lifted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 font-semibold",
									children: d.t
								}), d.n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: "New"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									d.c,
									" · ",
									d.sz,
									" · Updated ",
									d.d
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Download ${d.t}`,
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-md text-primary hover:bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-5 w-5" })
						})
					]
				}, d.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"Showing ",
					filtered.length,
					" of ",
					docs.length,
					" documents"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted",
							children: "Previous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",
							children: "1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted",
							children: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted",
							children: "Next"
						})
					]
				})]
			})
		]
	})] });
}
//#endregion
export { Docs as component };
