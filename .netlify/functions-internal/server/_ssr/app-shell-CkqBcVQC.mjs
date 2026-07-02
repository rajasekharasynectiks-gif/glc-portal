import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as FolderOpen, D as Menu, E as MessageSquare, F as LayoutDashboard, G as CreditCard, M as LogOut, P as LifeBuoy, V as FileText, Z as ChevronDown, dt as PanelLeftClose, f as Settings, ht as FilePlusCorner, i as User, m as Search, rt as Bell, st as Activity, t as X, ut as PanelLeftOpen } from "../_libs/lucide-react.mjs";
import { i as ThemeToggle } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-CkqBcVQC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/app/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/app/applications",
		label: "My Applications",
		icon: FileText
	},
	{
		to: "/app/applications/new",
		label: "New Application",
		icon: FilePlusCorner
	},
	{
		to: "/app/applications/tracking",
		label: "Tracking",
		icon: Activity
	},
	{
		to: "/app/documents",
		label: "Documents",
		icon: FolderOpen
	},
	{
		to: "/app/payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		to: "/app/messages",
		label: "Messages",
		icon: MessageSquare
	},
	{
		to: "/app/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/app/support",
		label: "Support",
		icon: LifeBuoy
	},
	{
		to: "/app/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/app/settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell({ children, title, subtitle, breadcrumb }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setCollapsed(localStorage.getItem("glc-portal-sidebar-collapsed") === "true");
	}, []);
	function toggleCollapsed() {
		setCollapsed((current) => {
			const next = !current;
			localStorage.setItem("glc-portal-sidebar-collapsed", String(next));
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-surface-muted text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center gap-3 px-4 lg:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						"aria-label": "Menu",
						className: "grid h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-muted lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/dashboard",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-sm",
							children: "GLC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden min-w-0 leading-tight sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: "Retailer Portal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Licensing System"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative ml-4 hidden flex-1 max-w-md md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Search applications, documents, payments...",
							className: "w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/notifications",
								className: "relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted",
								"aria-label": "Notifications",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground",
									children: "3"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-1 hidden h-8 w-px bg-border sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-2.5 rounded-md p-1.5 pr-2 hover:bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-gold text-gold-foreground text-xs font-bold",
										children: "JM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden text-left leading-tight sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold",
											children: "James Morrison"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground",
											children: "Applicant"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "hidden h-4 w-4 text-muted-foreground sm:block" })
								]
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: [
					"fixed inset-y-0 left-0 top-16 z-20 w-64 transform border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width,transform] duration-200 lg:translate-x-0",
					collapsed ? "lg:w-16" : "lg:w-64",
					open ? "translate-x-0" : "-translate-x-full"
				].join(" "),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex h-[calc(100dvh-4rem)] flex-col gap-1 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleCollapsed,
							className: "mb-1 hidden h-9 items-center justify-center rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:flex",
							"aria-label": collapsed ? "Expand navigation" : "Collapse navigation",
							title: collapsed ? "Expand navigation" : "Collapse navigation",
							children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "h-4 w-4" })
						}),
						nav.map((n) => {
							const Icon = n.icon;
							const active = pathname === n.to || n.to !== "/app/dashboard" && pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								title: collapsed ? n.label : void 0,
								className: [
									"flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
									collapsed ? "lg:justify-center lg:px-2" : "",
									active ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_2px_0_0] shadow-brand" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
								].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: collapsed ? "lg:hidden" : "",
									children: n.label
								})]
							}, n.to);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								title: collapsed ? "Sign out" : void 0,
								className: ["flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground", collapsed ? "lg:justify-center lg:px-2" : ""].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4.5 w-4.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: collapsed ? "lg:hidden" : "",
									children: "Sign out"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: ["mt-3 rounded-lg border border-border bg-surface-muted p-3", collapsed ? "lg:hidden" : ""].join(" "),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold text-foreground",
										children: "Need help?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: "Our support team is available Mon-Fri, 8am-5pm ET."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/support",
										className: "mt-2 inline-block text-xs font-semibold text-primary hover:underline",
										children: "Contact support"
									})
								]
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: ["flex-1 transition-[margin] duration-200", collapsed ? "lg:ml-16" : "lg:ml-64"].join(" "),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-6 lg:px-8 lg:py-8",
					children: [(title || breadcrumb) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [
							breadcrumb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2",
								children: breadcrumb
							}),
							title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-bold text-foreground lg:text-3xl",
								children: title
							}),
							subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: subtitle
							})
						]
					}), children]
				})
			})]
		})]
	});
}
//#endregion
export { AppShell as t };
