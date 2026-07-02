import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as ClipboardCheck, St as BadgeCheck, V as FileText, W as DollarSign, at as ArrowRight, bt as CircleCheck } from "../_libs/lucide-react.mjs";
import { r as PublicShell, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/licensing-GJXha1N2.js
var import_jsx_runtime = require_jsx_runtime();
function Licensing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-surface-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
						label: "Home",
						to: "/"
					}, { label: "Licensing" }] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
						children: "Retailer Licensing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Everything you need to know about becoming and remaining a Georgia Lottery retailer."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "process",
			className: "container-page py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold",
				children: "Application process"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 relative space-y-6 border-l-2 border-border pl-8",
				children: [
					{
						i: FileText,
						t: "Pre-qualification",
						d: "Confirm your business meets eligibility requirements."
					},
					{
						i: ClipboardCheck,
						t: "Application",
						d: "Submit business, ownership, and location details."
					},
					{
						i: DollarSign,
						t: "Fees & Bond",
						d: "Pay applicable licensing fees and post your surety bond."
					},
					{
						i: BadgeCheck,
						t: "Approval",
						d: "Receive your digital license within 5-7 business days."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-elegant",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gov-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: s.t
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.d
						})]
					})]
				}, s.t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "fees",
			className: "bg-surface-muted py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold",
						children: "Fees & bonds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface-muted text-xs uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-left",
										children: "Retailer Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-left",
										children: "Application Fee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-left",
										children: "Annual License"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3 text-left",
										children: "Surety Bond"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: [
									[
										"Convenience Store",
										"$75",
										"$200",
										"$5,000"
									],
									[
										"Grocery / Supermarket",
										"$100",
										"$300",
										"$10,000"
									],
									[
										"Liquor / Package Store",
										"$100",
										"$250",
										"$7,500"
									],
									[
										"Restaurant / Bar",
										"$75",
										"$200",
										"$5,000"
									],
									[
										"Specialty Retailer",
										"$125",
										"$350",
										"$10,000"
									]
								].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
									className: "hover:bg-muted/50",
									children: r.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: `px-5 py-3.5 ${i === 0 ? "font-semibold" : "text-muted-foreground"}`,
										children: c
									}, i))
								}, r[0]))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Fees subject to change. Refer to the 2026 Fee Schedule in the Documents Library."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Eligibility checklist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: [
							"Active Georgia business license",
							"Physical retail location in Georgia",
							"Federal tax ID (EIN) or SSN",
							"All owners/officers age 21+",
							"Pass criminal background check",
							"Compliant premises (no schools within 200ft for select categories)"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 text-success" }), t]
						}, t))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl p-7 text-primary-foreground",
					style: { background: "var(--gradient-hero)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold",
							children: "Ready to apply?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "Create your account to start your application today. Most retailers complete the process in under an hour."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth/register",
							className: "mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted",
							children: ["Begin Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { Licensing as component };
