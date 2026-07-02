import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as MessageSquare, G as CreditCard, L as Info, bt as CircleCheck, ct as TriangleAlert } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-hSdZUSsT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"All",
	"Unread",
	"System",
	"Application",
	"Payment"
];
var items = [
	{
		i: CircleCheck,
		tone: "success",
		t: "Business license approved",
		d: "Your business license has been verified by Reviewer #214.",
		time: "10 min ago",
		read: false,
		cat: "Application"
	},
	{
		i: TriangleAlert,
		tone: "warning",
		t: "Payment due in 14 days",
		d: "Your $200 license fee is due July 15, 2026.",
		time: "2 hours ago",
		read: false,
		cat: "Payment"
	},
	{
		i: MessageSquare,
		tone: "info",
		t: "New message from licensing",
		d: "Please clarify your premises lease end date.",
		time: "1 day ago",
		read: false,
		cat: "System"
	},
	{
		i: Info,
		tone: "info",
		t: "Scheduled maintenance July 4",
		d: "Portal unavailable Sat July 4, 2 AM-6 AM ET.",
		time: "3 days ago",
		read: true,
		cat: "System"
	},
	{
		i: CreditCard,
		tone: "success",
		t: "Payment received",
		d: "$75 application fee processed successfully.",
		time: "Jun 18",
		read: true,
		cat: "Payment"
	}
];
var toneClass = {
	success: "bg-success/10 text-success",
	warning: "bg-warning/15 text-amber-600",
	info: "bg-info/10 text-info"
};
function Notifs() {
	const [tab, setTab] = (0, import_react.useState)("All");
	const filtered = items.filter((i) => tab === "All" || (tab === "Unread" ? !i.read : i.cat === tab));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Notifications" }] }),
		title: "Notifications",
		subtitle: "Stay on top of application updates, payments, and system messages.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1 rounded-md border border-border bg-surface p-1",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `rounded px-3 py-1.5 text-xs font-semibold transition-colors ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
					children: t
				}, t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm font-semibold text-primary hover:underline",
				children: "Mark all as read"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 gov-card divide-y divide-border",
			children: filtered.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-start gap-4 p-5 ${!n.read ? "bg-primary/[0.03]" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-10 w-10 shrink-0 place-items-center rounded-md ${toneClass[n.tone]}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.i, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: n.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: n.cat })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: n.d
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 text-xs text-muted-foreground",
						children: n.time
					})
				]
			}, i))
		})]
	});
}
//#endregion
export { Notifs as component };
