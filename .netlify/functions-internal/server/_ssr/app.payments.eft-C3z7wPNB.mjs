import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Eye, N as Lock, V as FileText, _ as RefreshCw, _t as CloudUpload, bt as CircleCheck, d as ShieldCheck, ft as LoaderCircle, s as Trash2 } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.payments.eft-C3z7wPNB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EftPage() {
	const [docs, setDocs] = (0, import_react.useState)([
		{
			id: "check",
			t: "Voided Check",
			desc: "Clear image or PDF showing account & routing numbers.",
			status: "clean",
			size: "220 KB"
		},
		{
			id: "auth",
			t: "Bank Authorization Letter",
			desc: "Signed authorization on bank letterhead.",
			status: "uploading",
			progress: 64,
			size: "1.2 MB"
		},
		{
			id: "biz",
			t: "Business Documents",
			desc: "Certificate of formation or EIN letter.",
			status: "empty"
		}
	]);
	function trigger(id) {
		setDocs((prev) => prev.map((d) => d.id === id ? {
			...d,
			status: "uploading",
			progress: 10,
			size: "980 KB"
		} : d));
		let p = 10;
		const iv = setInterval(() => {
			p += 18;
			setDocs((prev) => prev.map((d) => d.id === id ? {
				...d,
				progress: Math.min(p, 100)
			} : d));
			if (p >= 100) {
				clearInterval(iv);
				setTimeout(() => setDocs((prev) => prev.map((d) => d.id === id ? {
					...d,
					status: "clean"
				} : d)), 400);
			}
		}, 300);
	}
	const done = docs.filter((d) => d.status === "clean").length;
	const percent = Math.round(done / docs.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Payments",
			to: "/app/payments"
		}, { label: "EFT Documents" }] }),
		title: "EFT documents",
		subtitle: "Upload the banking documents required for electronic funds transfer setup.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-base font-bold",
									children: d.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: d.desc
								})] })]
							}),
							d.status === "clean" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
								tone: "success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Approved"]
							}),
							d.status === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								tone: "warning",
								children: "In review"
							}),
							d.status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
								tone: "info",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Uploading"]
							}),
							d.status === "empty" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								tone: "muted",
								children: "Not uploaded"
							})
						]
					}), d.status === "empty" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => trigger(d.id),
						className: "mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-muted p-8 text-sm text-muted-foreground hover:border-primary/40 hover:bg-primary/[0.03]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-8 w-8 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Drop file or click to upload"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: "PDF, JPG or PNG · Max 10 MB"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-md border border-border bg-surface p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "truncate text-sm font-semibold",
											children: [d.t.toLowerCase().replace(/\s+/g, "-"), ".pdf"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: d.size
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
										tone: "success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " Virus scan · Clean"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
										tone: "info",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Encrypted"]
									})]
								})]
							}),
							d.status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary transition-all",
										style: { width: `${d.progress ?? 0}%` }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [d.progress ?? 0, "% uploaded · Scanning for threats"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex justify-end gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " Preview"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), " Replace"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
									})
								]
							})
						]
					})]
				}, d.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/applications/tracking",
						className: "rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
						children: "Save & continue later"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
						children: "Submit for review"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Upload progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-4xl font-bold",
								children: [percent, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pb-1 text-xs text-muted-foreground",
								children: "of documents ready"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary to-success",
								style: { width: `${percent}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${d.status === "clean" ? "bg-success" : d.status === "uploading" ? "bg-primary" : "bg-muted-foreground/40"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1",
									children: d.t
								})]
							}, d.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground",
							children: "All uploads are TLS-encrypted, scanned for malware, and stored in the GLC FIPS-140-2 vault."
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { EftPage as component };
