import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as CreditCard, I as Landmark, N as Lock, d as ShieldCheck, ft as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.payments.checkout-olnvWiuE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const nav = useNavigate();
	const [tab, setTab] = (0, import_react.useState)("card");
	const [processing, setProcessing] = (0, import_react.useState)(false);
	const [number, setNumber] = (0, import_react.useState)("");
	const brand = number.startsWith("4") ? "Visa" : number.startsWith("5") ? "Mastercard" : number.startsWith("3") ? "Amex" : "Card";
	function pay() {
		setProcessing(true);
		setTimeout(() => nav({
			to: "/app/payments/result",
			search: { status: "approved" }
		}), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
			label: "Payments",
			to: "/app/payments"
		}, { label: "Checkout" }] }),
		title: "Secure checkout",
		subtitle: "Payments are processed by MerchantOne on behalf of the Georgia Lottery Corporation.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-muted px-6 py-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-success" }), " TLS 1.3 Secure"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
									tone: "success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " PCI DSS"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "info",
									children: "MerchantOne™"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground",
							children: "We never store full card numbers."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 border-b border-border p-2",
						children: [[
							"card",
							"Credit / Debit Card",
							CreditCard
						], [
							"ach",
							"ACH Bank Transfer",
							Landmark
						]].map(([k, l, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(k),
							className: `flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${tab === k ? "bg-primary text-primary-foreground shadow-elegant" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
								" ",
								l
							]
						}, k))
					}),
					tab === "card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Card holder name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "James Morrison" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Card number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "1234 5678 9012 3456",
										value: number,
										onChange: (e) => setNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 rounded bg-muted px-2 py-0.5 text-[10px] font-bold text-foreground",
										children: brand
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Expiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "MM / YY" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "CVV" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "•••" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Billing address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "1240 Peachtree St NE, Atlanta GA 30309" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "sm:col-span-2 flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "mt-1 h-4 w-4 accent-primary",
									defaultChecked: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save this card for future GLC payments." })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bank name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Wells Fargo Bank, N.A." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Account type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Business Checking" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Business Savings" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Personal Checking" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Routing number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "9 digits" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Account number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Account number" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Confirm account number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Re-enter account number" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "sm:col-span-2 flex items-start gap-3 rounded-md border border-border bg-surface-muted p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "mt-0.5 h-4 w-4 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I authorize the Georgia Lottery Corporation and MerchantOne to debit the account above for the amount shown. I understand this authorization remains in effect until revoked in writing." })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface-muted px-6 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Accepted: Visa · Mastercard · Amex · Discover · ACH"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
								children: "Review payment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: pay,
								disabled: processing,
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover disabled:opacity-70",
								children: processing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Processing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), " Pay $283.25"] })
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4 lg:sticky lg:top-24 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Payment summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Application fee",
								v: "$75.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "License fee",
								v: "$150.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Keno endorsement",
								v: "$50.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								l: "Convenience fee",
								v: "$8.25",
								muted: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold",
									children: "$283.25"
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-success" }), " Your data is safe"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: "Card details are tokenized by MerchantOne. GLC never sees the full card number."
					})]
				})]
			})]
		})
	});
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
	});
}
function Row({ l, v, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between ${muted ? "text-muted-foreground" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold",
			children: v
		})]
	});
}
//#endregion
export { CheckoutPage as component };
