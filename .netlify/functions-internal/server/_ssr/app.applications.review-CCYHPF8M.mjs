import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Mail, C as Pencil, G as CreditCard, L as Info, N as Lock, V as FileText, Z as ChevronDown, bt as CircleCheck, ct as TriangleAlert, d as ShieldCheck, i as User, k as MapPin, lt as Sparkles, tt as Building2 } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.applications.review-CCYHPF8M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		key: "business",
		icon: Building2,
		t: "Business Information",
		status: "complete",
		rows: [
			["Legal Name", "Acme Convenience LLC"],
			["DBA", "Acme Corner Store"],
			["Federal EIN", "58-••••4421"],
			["Entity Type", "Limited Liability Company"],
			["State of Formation", "Georgia"],
			["Business Phone", "(404) 555-0142"]
		]
	},
	{
		key: "address",
		icon: MapPin,
		t: "Business Address",
		status: "complete",
		rows: [
			["Street", "1240 Peachtree St NE"],
			["City / State / ZIP", "Atlanta, GA 30309"],
			["County", "Fulton"],
			["Validation", "USPS + Melissa Verified · 11/11"]
		]
	},
	{
		key: "mailing",
		icon: Mail,
		t: "Mailing Address",
		status: "complete",
		rows: [["Same as business", "Yes"]]
	},
	{
		key: "owners",
		icon: User,
		t: "Owner Information",
		status: "warning",
		rows: [
			["Owner 1 · James Morrison (CEO)", "60% · Verified"],
			["Owner 2 · Sarah Chen (COO)", "40% · Identity review pending"],
			["Ownership total", "100.00%"]
		]
	},
	{
		key: "documents",
		icon: FileText,
		t: "Uploaded Documents",
		status: "complete",
		rows: [
			["Business License", "Approved · 2.1 MB · PDF"],
			["Certificate of Formation", "Approved · 480 KB · PDF"],
			["Surety Bond", "In Review · 1.4 MB · PDF"],
			["Voided Check", "Approved · 220 KB · PDF"],
			["Owner IDs (2)", "Approved · Encrypted"]
		]
	},
	{
		key: "declarations",
		icon: ShieldCheck,
		t: "Declarations",
		status: "complete",
		rows: [
			["Background disclosure", "Attested"],
			["Tax standing", "Attested"],
			["FBI/GBI consent", "Signed by all owners"]
		]
	},
	{
		key: "payment",
		icon: CreditCard,
		t: "Payment Information",
		status: "info",
		rows: [
			["Application Fee", "$75.00"],
			["License Fee", "$200.00"],
			["Convenience Fee", "$4.25"],
			["Total Due", "$279.25"],
			["Method", "Visa •••• 4421"]
		]
	}
];
var validations = [
	{
		level: "critical",
		t: "Surety bond amount not confirmed",
		d: "Bond must be at least $25,000. Verify with your issuer.",
		target: "documents"
	},
	{
		level: "warning",
		t: "Owner 2 identity review pending",
		d: "Government ID for Sarah Chen is still under review.",
		target: "owners"
	},
	{
		level: "warning",
		t: "Backup email not verified",
		d: "A verification link was sent to james.m@backup.co.",
		target: "declarations"
	},
	{
		level: "info",
		t: "Payment not required yet",
		d: "Fees will be charged after GLC accepts your submission.",
		target: "payment"
	},
	{
		level: "success",
		t: "Address confidence: 11/11",
		d: "Validated by USPS + Melissa on Jun 28, 2026.",
		target: "address"
	}
];
function levelStyles(l) {
	if (l === "critical") return {
		chip: "error",
		ring: "border-destructive/40 bg-destructive/5",
		icon: TriangleAlert,
		iconCls: "text-destructive"
	};
	if (l === "warning") return {
		chip: "warning",
		ring: "border-warning/40 bg-warning/5",
		icon: TriangleAlert,
		iconCls: "text-warning"
	};
	if (l === "success") return {
		chip: "success",
		ring: "border-success/40 bg-success/5",
		icon: CircleCheck,
		iconCls: "text-success"
	};
	return {
		chip: "info",
		ring: "border-info/40 bg-info/5",
		icon: Info,
		iconCls: "text-info"
	};
}
function ReviewPage() {
	const nav = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(Object.fromEntries(sections.map((s) => [s.key, true])));
	const [ack, setAck] = (0, import_react.useState)({
		accurate: false,
		terms: false,
		verify: false
	});
	const canSubmit = ack.accurate && ack.terms && ack.verify;
	const critical = validations.filter((v) => v.level === "critical").length;
	const warnings = validations.filter((v) => v.level === "warning").length;
	const complete = sections.filter((s) => s.status === "complete").length;
	const percent = Math.round(complete / sections.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [
			{
				label: "Dashboard",
				to: "/app/dashboard"
			},
			{
				label: "My Applications",
				to: "/app/applications"
			},
			{ label: "Review & Submit" }
		] }),
		title: "Review & submit application",
		subtitle: "Confirm every section, resolve validation issues, then sign and submit.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					sections.map((s) => {
						const isOpen = open[s.key];
						const badge = s.status === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Complete"]
						}) : s.status === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "warning",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }), " Attention"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
							tone: "info",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3 w-3" }), " Info"]
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "gov-card overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen({
									...open,
									[s.key]: !isOpen
								}),
								className: "flex w-full items-center gap-4 p-5 text-left hover:bg-muted/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "min-w-0 flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-base font-bold",
												children: s.t
											}), badge]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/app/applications/new",
										className: "hidden items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted sm:inline-flex",
										onClick: (e) => e.stopPropagation(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}` })
								]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border bg-surface-muted/40 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "grid gap-x-8 gap-y-2.5 sm:grid-cols-2",
									children: s.rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4 border-b border-border/60 py-1.5 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right font-medium text-foreground",
											children: v
										})]
									}, k))
								})
							})]
						}, s.key);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "gov-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Final validation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Resolve critical issues before you can submit."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
										tone: "error",
										children: [critical, " Critical"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
										tone: "warning",
										children: [warnings, " Warnings"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "success",
										children: "1 Passed"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3",
							children: validations.map((v, i) => {
								const st = levelStyles(v.level);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-start gap-3 rounded-lg border p-4 ${st.ring}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(st.icon, { className: `mt-0.5 h-5 w-5 shrink-0 ${st.iconCls}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold",
													children: v.t
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
													tone: st.chip,
													children: v.level.toUpperCase()
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground",
												children: v.d
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "shrink-0 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-muted",
											children: "Resolve"
										})
									]
								}, i);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "gov-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), " Submission attestation"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-lg font-bold",
								children: "Terms, privacy & legal declaration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3",
								children: [
									["accurate", "I certify that all information provided is true, complete, and accurate to the best of my knowledge."],
									["terms", "I have read and agree to the Georgia Lottery Corporation Retailer Terms, Privacy Policy, and Rules of Conduct."],
									["verify", "I authorize GLC to verify identity, tax standing, and criminal background for every listed owner."]
								].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-md border border-border p-3 text-sm hover:bg-muted/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "mt-0.5 h-4 w-4 rounded border-input accent-primary",
										checked: ack[k],
										onChange: (e) => setAck({
											...ack,
											[k]: e.target.checked
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Applicant name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										defaultValue: "James Morrison",
										className: "mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										defaultValue: (/* @__PURE__ */ new Date()).toLocaleDateString(),
										className: "mt-1 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Electronic signature"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											placeholder: "Type full legal name",
											className: "mt-1 w-full rounded-md border border-input bg-surface px-4 py-4 text-2xl italic tracking-wide",
											style: { fontFamily: "'Segoe Script','Brush Script MT',cursive" }
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap justify-end gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
										children: "Cancel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
										children: "Save draft"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										disabled: !canSubmit,
										onClick: () => nav({ to: "/app/applications/success" }),
										className: "rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50",
										children: "Submit application"
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Submission readiness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-4xl font-bold",
								children: [percent, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pb-1 text-xs text-muted-foreground",
								children: "of sections verified"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary to-info",
								style: { width: `${percent}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2 text-sm",
							children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [s.status === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }) : s.status === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-warning" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 text-info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1",
									children: s.t
								})]
							}, s.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), " Estimated review"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: "10-15 business days after submission."
							})]
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { ReviewPage as component };
