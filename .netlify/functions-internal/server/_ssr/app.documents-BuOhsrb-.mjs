import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { V as FileText, a as Upload, m as Search } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.documents-BuOhsrb-.js
var import_jsx_runtime = require_jsx_runtime();
function MyDocs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Dashboard",
			to: "/app/dashboard"
		}, { label: "Documents" }] }),
		title: "Documents",
		subtitle: "Your uploaded files and required attachments.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-sm flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					placeholder: "Search documents…",
					className: "w-full rounded-md border border-input bg-surface py-2 pl-9 pr-3 text-sm"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), " Upload document"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					t: "Business License",
					st: "approved"
				},
				{
					t: "Federal Tax ID (EIN)",
					st: "approved"
				},
				{
					t: "Premises Lease Agreement",
					st: "review"
				},
				{
					t: "Owner #1 Photo ID",
					st: "approved"
				},
				{
					t: "Owner #2 Photo ID",
					st: "missing"
				},
				{
					t: "Surety Bond Certificate",
					st: "missing"
				}
			].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: d.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Required document"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between",
					children: [
						d.st === "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "success",
							children: "Approved"
						}),
						d.st === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "warning",
							children: "In review"
						}),
						d.st === "missing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "error",
							children: "Missing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary hover:underline",
							children: d.st === "missing" ? "Upload" : "View"
						})
					]
				})]
			}, d.t))
		})]
	});
}
//#endregion
export { MyDocs as component };
