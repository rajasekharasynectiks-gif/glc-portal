import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Mail, U as Download, b as Printer, bt as CircleCheck, y as QrCode } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.payments.receipt-HEwNB4I1.js
var import_jsx_runtime = require_jsx_runtime();
function ReceiptPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Payments",
			to: "/app/payments"
		}, { label: "Receipt" }] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap justify-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Email receipt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), " Print"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download PDF"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden p-8",
							style: { background: "var(--gradient-hero)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4 text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-lg bg-primary-foreground/10 font-display font-black backdrop-blur",
										children: "GLC"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg font-bold",
										children: "Georgia Lottery Corporation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs opacity-80",
										children: "250 Williams St NW · Atlanta, GA 30303"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-wider opacity-80",
											children: "Official receipt"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl font-bold",
											children: "RCT-000-104-8831"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
											tone: "success",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Paid"]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-x-8 gap-y-2 border-b border-border p-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Application number",
									v: "APP-2026-08831"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Merchant reference",
									v: "M1-TX-2026-889201"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Applicant",
									v: "James Morrison"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Business",
									v: "Acme Convenience LLC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Payment method",
									v: "Visa •••• 4421"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									l: "Date",
									v: (/* @__PURE__ */ new Date()).toLocaleString()
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "border-b border-border text-xs uppercase tracking-wider text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-left",
											children: "Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right",
											children: "Amount"
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
										className: "divide-y divide-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3",
												children: "Application fee"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right font-semibold",
												children: "$75.00"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3",
												children: "Retailer license fee - Traditional Lottery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right font-semibold",
												children: "$150.00"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3",
												children: "Add-on: Keno endorsement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right font-semibold",
												children: "$50.00"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-muted-foreground",
												children: "Convenience fee"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-right text-muted-foreground",
												children: "$8.25"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t-2 border-foreground/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "pt-3 font-display font-bold",
											children: "Total paid"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "pt-3 text-right font-display text-2xl font-bold",
											children: "$283.25"
										})]
									}) })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4 border-t border-border bg-surface-muted p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-20 w-20 place-items-center rounded-md border border-border bg-background text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-14 w-14" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: "Verify this receipt"
										}),
										"Scan to confirm authenticity at",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"verify.galottery.org/RCT-000-104-8831"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									"This receipt is proof of payment. Keep for your records.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Processed by MerchantOne™ · PCI DSS Certified · TLS 1.3 Secure."
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/applications/tracking",
						className: "text-sm font-semibold text-primary hover:underline",
						children: "Continue to application tracking →"
					})
				})
			]
		})
	});
}
function Row({ l, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between border-b border-border/60 py-1.5 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: l
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-foreground",
			children: v
		})]
	});
}
//#endregion
export { ReceiptPage as component };
