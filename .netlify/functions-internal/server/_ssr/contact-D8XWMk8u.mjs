import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Mail, S as Phone, bt as CircleCheck, k as MapPin, q as Clock } from "../_libs/lucide-react.mjs";
import { r as PublicShell, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D8XWMk8u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
					label: "Home",
					to: "/"
				}, { label: "Contact" }] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Contact Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Our licensing team is here to help. Reach out by phone, email, or send us a secure message."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-10 py-14 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 lg:col-span-1",
			children: [[
				{
					i: Phone,
					t: "Phone",
					v: "(404) 215-5000"
				},
				{
					i: Mail,
					t: "Email",
					v: "licensing@galottery.org"
				},
				{
					i: MapPin,
					t: "Headquarters",
					v: "250 Williams Street NW, Atlanta, GA 30303"
				},
				{
					i: Clock,
					t: "Business Hours",
					v: "Monday-Friday • 8:00 AM - 5:00 PM ET"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card flex items-start gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: c.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 font-semibold",
					children: c.v
				})] })]
			}, c.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gov-card overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aspect-[4/3] w-full bg-[radial-gradient(circle_at_50%_50%,_oklch(0.85_0.05_240)_0%,_oklch(0.92_0.02_240)_60%)] relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-30",
						style: {
							backgroundImage: "linear-gradient(oklch(0.7 0.04 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.04 240) 1px, transparent 1px)",
							backgroundSize: "32px 32px"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-destructive text-destructive-foreground shadow-lifted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 rounded-md bg-card px-3 py-1 text-center text-xs font-semibold shadow-card",
							children: "GLC HQ"
						})]
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-2",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-bold",
						children: "Message received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Thank you. A member of our licensing team will respond within 1 business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 inline-block rounded-md bg-surface-muted px-3 py-1.5 text-xs font-mono",
						children: "Ref #GLC-2026-08831"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSent(false),
							className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
							children: "Send another"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
							children: "Return home"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				className: "gov-card p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Send us a message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Fill in the form and we'll reply within one business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							["First name", "John"],
							["Last name", "Smith"],
							["Email", "you@business.com"],
							["Phone", "(404) 555-0100"]
						].map(([l, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: [
								l,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: p,
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
						})] }, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Topic"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General licensing question" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "New application" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Renewal" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Document upload" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Payment issue" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 6,
							placeholder: "How can we help you?",
							className: "mt-1.5 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "reset",
							className: "rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted",
							children: "Clear"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
							children: "Send message"
						})]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
