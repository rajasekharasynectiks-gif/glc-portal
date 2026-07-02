import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Menu, T as Moon, Z as ChevronDown, l as Sun, m as Search, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-shell-DNC9M9u6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle({ compact = false }) {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem("glc-theme") : null;
		const isDark = stored ? stored === "dark" : false;
		if (!stored) try {
			localStorage.setItem("glc-theme", "light");
		} catch {}
		setDark(isDark);
		document.documentElement.classList.toggle("dark", isDark);
	}, []);
	function toggle() {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("glc-theme", next ? "dark" : "light");
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
		"aria-pressed": dark,
		className: `grid ${compact ? "h-9 w-9" : "h-10 w-10"} place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40`,
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
	});
}
var publicNav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Licensing",
		to: "/licensing",
		mega: true
	},
	{
		label: "Documents",
		to: "/documents"
	},
	{
		label: "FAQ",
		to: "/faq"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function PublicHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mega, setMega] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/60 bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex h-9 items-center justify-between text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-90",
						children: "Official site of the Georgia Lottery Corporation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden gap-4 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth/login",
							className: "hover:underline",
							children: "Sign in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth/register",
							className: "hover:underline",
							children: "Create account"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-14 items-center justify-between gap-6 px-4 lg:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-black",
							children: "GLC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-foreground",
								children: "Georgia Lottery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Retailer Licensing Portal"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: publicNav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => n.mega && setMega(true),
							onMouseLeave: () => setMega(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								activeProps: { className: "text-primary" },
								className: "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
								children: [n.label, n.mega && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
							}), n.mega && mega && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "gov-card grid grid-cols-2 gap-1 p-3 shadow-lifted",
									children: [
										{
											t: "Overview",
											d: "Eligibility & benefits",
											to: "/licensing"
										},
										{
											t: "Apply Now",
											d: "Begin your application",
											to: "/auth/register"
										},
										{
											t: "Process",
											d: "Step-by-step guide",
											to: "/licensing#process"
										},
										{
											t: "Fees & Bonds",
											d: "Pricing and requirements",
											to: "/licensing#fees"
										},
										{
											t: "Renewals",
											d: "Renew an existing license",
											to: "/auth/login"
										},
										{
											t: "Compliance",
											d: "Standards & regulations",
											to: "/about#compliance"
										}
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: i.to,
										className: "rounded-lg p-3 transition-colors hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-foreground",
											children: i.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: i.d
										})]
									}, i.t))
								})
							})]
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Search",
								className: "hidden h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground md:grid",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth/login",
								className: "hidden rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted md:inline-flex",
								children: "Sign in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth/register",
								className: "hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-hover md:inline-flex",
								children: "Apply Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen(!open),
								"aria-label": "Menu",
								className: "grid h-10 w-10 place-items-center rounded-md hover:bg-muted lg:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-card lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-col gap-1 py-3",
					children: [publicNav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted",
						children: n.label
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth/login",
							onClick: () => setOpen(false),
							className: "rounded-md border border-border px-4 py-2 text-center text-sm font-medium",
							children: "Sign in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth/register",
							onClick: () => setOpen(false),
							className: "rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground",
							children: "Apply"
						})]
					})]
				})
			})
		]
	});
}
function PublicFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border bg-surface-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-black",
						children: "GLC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold",
						children: "Georgia Lottery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Retailer Licensing Portal"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm text-muted-foreground",
					children: "The official online application system for Georgia Lottery retailer licensing, operated by the Georgia Lottery Corporation."
				})] }), [
					{
						t: "Licensing",
						l: [
							["Overview", "/licensing"],
							["Apply Now", "/auth/register"],
							["Renewals", "/auth/login"],
							["Fees & Bonds", "/licensing#fees"]
						]
					},
					{
						t: "Resources",
						l: [
							["Documents", "/documents"],
							["FAQ", "/faq"],
							["Application Guides", "/documents"],
							["Policies", "/documents"]
						]
					},
					{
						t: "Corporate",
						l: [
							["About GLC", "/about"],
							["Compliance", "/about#compliance"],
							["Contact", "/contact"],
							["Accessibility", "/about"]
						]
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold text-foreground",
					children: c.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: c.l.map(([t, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-sm text-muted-foreground hover:text-foreground",
						children: t
					}) }, t))
				})] }, c.t))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Georgia Lottery Corporation. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Accessibility"
						})
					]
				})]
			})]
		})
	});
}
function PublicShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicFooter, {})
		]
	});
}
function Chip({ tone = "muted", children }) {
	const cls = {
		success: "chip-success",
		warning: "chip-warning",
		info: "chip-info",
		error: "chip-error",
		muted: "chip-muted"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `${cls} inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`,
		children
	});
}
function Breadcrumb({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1.5",
			children: [it.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: it.to,
				className: "hover:text-foreground",
				children: it.label
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground",
				children: it.label
			}), i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" })]
		}, i))
	});
}
//#endregion
export { ThemeToggle as i, Chip as n, PublicShell as r, Breadcrumb as t };
