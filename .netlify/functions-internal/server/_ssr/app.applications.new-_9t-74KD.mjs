import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Mail, C as Pencil, H as Eye, K as Copy, L as Info, N as Lock, P as LifeBuoy, Q as Check, R as IdCard, U as Download, V as FileText, Z as ChevronDown, _ as RefreshCw, _t as CloudUpload, a as Upload, at as ArrowRight, bt as CircleCheck, d as ShieldCheck, ft as LoaderCircle, g as Save, gt as FileCheckCorner, i as User, k as MapPin, lt as Sparkles, n as WifiOff, ot as ArrowLeft, p as Send, q as Clock, s as Trash2, t as X, tt as Building2, x as Plus, xt as CircleAlert, yt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { n as Chip, t as Breadcrumb } from "./public-shell-DNC9M9u6.mjs";
import { t as AppShell } from "./app-shell-CkqBcVQC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.applications.new-_9t-74KD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		key: "eligibility",
		t: "Eligibility",
		d: "Requirements & checklist",
		icon: ShieldCheck
	},
	{
		key: "retailer",
		t: "Retailer Information",
		d: "Business profile",
		icon: Building2
	},
	{
		key: "business",
		t: "Business Information",
		d: "Operations & products",
		icon: FileText
	},
	{
		key: "address",
		t: "Business Address",
		d: "Premises location",
		icon: MapPin
	},
	{
		key: "mailing",
		t: "Mailing Address",
		d: "Correspondence",
		icon: Mail
	},
	{
		key: "owners",
		t: "Owners",
		d: "Officers & disclosures",
		icon: User
	},
	{
		key: "documents",
		t: "Documents",
		d: "Upload attachments",
		icon: FolderIcon
	},
	{
		key: "review",
		t: "Review",
		d: "Verify your data",
		icon: FileCheckCorner
	},
	{
		key: "submit",
		t: "Submit",
		d: "Sign & pay",
		icon: Send
	}
];
function FolderIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { ...props });
}
function WizardPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [save, setSave] = (0, import_react.useState)("saved");
	const [toast, setToast] = (0, import_react.useState)(null);
	const [cancelOpen, setCancelOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setSave("saving");
			setTimeout(() => setSave("saved"), 700);
		}, 18e3);
		return () => clearInterval(id);
	}, []);
	function go(next) {
		setSave("saving");
		setTimeout(() => {
			setSave("saved");
			setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}, 350);
	}
	function notify(tone, msg) {
		setToast({
			tone,
			msg
		});
		setTimeout(() => setToast(null), 3200);
	}
	const pct = Math.round(step / (STEPS.length - 1) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		breadcrumb: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [
			{
				label: "Dashboard",
				to: "/app/dashboard"
			},
			{
				label: "Applications",
				to: "/app/applications"
			},
			{ label: "New" }
		] }),
		title: "New Retailer License Application",
		subtitle: "Application #APP-2026-08831 · Draft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBadge, { state: save }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-success" }), " Encrypted in transit (TLS 1.3)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-muted-foreground sm:inline",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden text-muted-foreground sm:inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
								" Est. ",
								Math.max(2, 18 - step * 2),
								" min remaining"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => notify("info", "Draft saved. You can resume from My Applications."),
						className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5" }), " Save & exit"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setCancelOpen(true),
						className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), " Cancel application"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
					step,
					onJump: go,
					pct
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gov-card p-5 sm:p-8",
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EligibilityStep, { onStart: () => go(1) }),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetailerStep, {}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessStep, {}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressStep, {}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailingStep, {}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnersStep, { notify }),
							step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsStep, { notify }),
							step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewStep, { onEdit: go }),
							step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitStep, { notify })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky bottom-0 z-20 mt-4 -mx-2 sm:mx-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col-reverse items-stretch justify-between gap-3 rounded-xl border border-border bg-background/95 px-4 py-3 shadow-lifted backdrop-blur-xl sm:flex-row sm:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => go(step - 1),
									disabled: step === 0,
									className: "inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted disabled:opacity-40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Previous"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden flex-1 px-4 sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-full overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-hover transition-all",
											style: { width: `${pct}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: [
											"Step ",
											step + 1,
											" of ",
											STEPS.length,
											" · ",
											pct,
											"% complete"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => notify("success", "Draft saved successfully."),
										className: "inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Save draft"]
									}), step < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => go(step + 1),
										className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-hover",
										children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => notify("success", "Application submitted! Confirmation #GLC-2026-08831"),
										className: "inline-flex items-center justify-center gap-2 rounded-md bg-success px-5 py-2.5 text-sm font-semibold text-success-foreground shadow-card hover:opacity-90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Submit application"]
									})]
								})
							]
						})
					})]
				})]
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lifted animate-in fade-in slide-in-from-bottom-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid h-8 w-8 place-items-center rounded-full ${toast.tone === "success" ? "bg-success/10 text-success" : toast.tone === "error" ? "bg-destructive/10 text-destructive" : "bg-info/10 text-info"}`,
					children: toast.tone === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : toast.tone === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: toast.msg
				})]
			}),
			cancelOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-lifted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-destructive/10 text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold",
								children: "Cancel this application?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Your draft will be discarded. This action cannot be undone."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCancelOpen(false),
							className: "rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted",
							children: "Keep draft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setCancelOpen(false);
								notify("info", "Application discarded.");
							},
							className: "rounded-md bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground hover:opacity-90",
							children: "Discard application"
						})]
					})]
				})
			})
		]
	});
}
function Stepper({ step, onJump, pct }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "lg:hidden -mx-2 overflow-x-auto pb-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex min-w-max gap-2 px-2",
			children: STEPS.map((s, i) => {
				const state = i < step ? "done" : i === step ? "active" : "pending";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onJump(i),
					className: `flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${state === "active" ? "border-primary bg-primary text-primary-foreground" : state === "done" ? "border-success/30 bg-success/10 text-success" : "border-border bg-surface text-muted-foreground"}`,
					children: [state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-4 w-4 place-items-center rounded-full bg-background/30 text-[10px] font-bold",
						children: i + 1
					}), s.t]
				}) }, s.key);
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gov-card sticky top-24 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Application progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold text-primary",
						children: [pct, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 h-1.5 w-full overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-hover transition-all",
						style: { width: `${pct}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-1",
					children: STEPS.map((s, i) => {
						const state = i < step ? "done" : i === step ? "active" : "pending";
						const Icon = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onJump(i),
							className: `group flex w-full items-start gap-3 rounded-lg px-2.5 py-2 text-left transition-all ${state === "active" ? "bg-primary/8 ring-1 ring-primary/20" : "hover:bg-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition-all ${state === "done" ? "bg-success text-success-foreground" : state === "active" ? "bg-primary text-primary-foreground ring-4 ring-primary/15" : "bg-muted text-muted-foreground"}`,
								children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center gap-1.5 text-sm font-semibold ${state === "pending" ? "text-muted-foreground" : "text-foreground"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 opacity-70" }),
										" ",
										s.t
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: s.d
								})]
							})]
						}) }, s.key);
					})
				})
			]
		})
	})] });
}
function Field({ label, required, hint, error, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-1 text-sm font-medium text-foreground",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-destructive",
						children: "*"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-destructive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3" }),
					" ",
					error
				]
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
var inputCls = "w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm shadow-sm transition-all placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: `${inputCls} ${props.className ?? ""}`
	});
}
function SelectInput({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			...props,
			className: `${inputCls} appearance-none pr-9 ${props.className ?? ""}`,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })]
	});
}
function SectionHeader({ icon: Icon, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold tracking-tight sm:text-2xl",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm text-muted-foreground",
				children: subtitle
			})]
		})]
	});
}
function SaveBadge({ state }) {
	if (state === "saving") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full bg-info/10 px-2.5 py-1 text-xs font-medium text-info",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Saving…"]
	});
	if (state === "offline") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-medium text-warning",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "h-3 w-3" }), " Offline · changes queued"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " All changes saved"]
	});
}
function EligibilityStep({ onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-hover to-primary p-7 text-primary-foreground sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-info/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-background/15 px-3 py-1 text-xs font-medium backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Retailer Licensing Program"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl",
								children: "Become a licensed Georgia Lottery retailer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-primary-foreground/85 sm:text-base",
								children: "Confirm eligibility, prepare required documentation, and complete your application in roughly 15 minutes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-3 sm:grid-cols-3",
								children: [
									{
										icon: Clock,
										t: "~15 minutes",
										d: "Average completion time"
									},
									{
										icon: ShieldCheck,
										t: "Bank-grade security",
										d: "FIPS 140-2 encryption"
									},
									{
										icon: FileCheckCorner,
										t: "9 simple steps",
										d: "Save & resume any time"
									}
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-background/15 bg-background/10 p-3 backdrop-blur-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-4 w-4 opacity-80" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1.5 text-sm font-bold",
											children: m.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] opacity-75",
											children: m.d
										})
									]
								}, m.t))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-success" }), " Eligibility requirements"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: [
							"Valid Georgia business registration",
							"Owner(s) must be 21 years of age or older",
							"No felony convictions within the last 10 years",
							"Established physical retail premises in Georgia",
							"Compliant with Georgia state tax obligations",
							"Surety bond of $10,000 minimum"
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }),
								" ",
								r
							]
						}, r))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-primary" }), " Required documentation"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: [
							"Federal Tax ID (EIN) confirmation letter",
							"Georgia business license",
							"Premises lease or property deed",
							"Surety bond certificate",
							"Owner government-issued photo ID (each owner)",
							"Voided business check (for ACH setup)"
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
								" ",
								r
							]
						}, r))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-info/30 bg-info/5 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-5 w-5 shrink-0 text-info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Before you begin:"
						}), " Have digital copies of the documents above in PDF, JPG, PNG, JPEG, or TIFF format (10 MB maximum per file). You may save your progress and return at any time."]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-stretch gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download requirements PDF"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4" }), " View FAQ"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-4 w-4" }), " Need help?"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onStart,
					className: "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-hover",
					children: ["Start application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		]
	});
}
function RetailerStep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Building2,
				title: "Retailer information",
				subtitle: "Tell us about the business that will sell lottery products."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Legal business name",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "Peachtree Quick Stop LLC" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "DBA / trade name",
						hint: "Optional doing-business-as name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "Peachtree Mart" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business type",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "llc",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "llc",
									children: "Limited Liability Company (LLC)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "corp",
									children: "Corporation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "sole",
									children: "Sole Proprietorship"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "partnership",
									children: "Partnership"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "nonprofit",
									children: "Non-profit"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Federal Tax ID (EIN)",
						required: true,
						hint: "Format: XX-XXXXXXX",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							defaultValue: "58-1234567",
							inputMode: "numeric"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business phone",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							defaultValue: "(404) 555-0143",
							inputMode: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business email",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "email",
							defaultValue: "operations@peachtreemart.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Website",
						hint: "Including https://",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "https://peachtreemart.com" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business category",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "conv",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "conv",
									children: "Convenience Store"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "gas",
									children: "Gas Station"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "grocery",
									children: "Grocery / Supermarket"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "liquor",
									children: "Liquor Store"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pharmacy",
									children: "Pharmacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "restaurant",
									children: "Restaurant / Bar"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Years in business",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Less than 1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "5",
									children: "5-10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "10+" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Estimated annual revenue",
						hint: "Used for bond tier calculation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "500k",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "100k",
									children: "Under $250K"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "500k",
									children: "$250K - $1M"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "1m",
									children: "$1M - $5M"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "5m",
									children: "$5M+"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 text-sm font-medium",
				children: ["Lottery products requested ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: "*"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						id: "scratch",
						label: "Scratch-off tickets",
						desc: "Instant-win games",
						on: true
					},
					{
						id: "draw",
						label: "Draw games",
						desc: "Cash 3, Cash 4, Fantasy 5",
						on: true
					},
					{
						id: "mega",
						label: "Mega Millions",
						desc: "Multi-state jackpot",
						on: true
					},
					{
						id: "power",
						label: "Powerball",
						desc: "Multi-state jackpot",
						on: false
					},
					{
						id: "keno",
						label: "KENO!",
						desc: "Every 4 minutes",
						on: false
					},
					{
						id: "fast",
						label: "Fast Play",
						desc: "Print-on-demand",
						on: false
					}
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all ${p.on ? "border-primary/40 bg-primary/5" : "border-border bg-surface hover:bg-muted"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						defaultChecked: p.on,
						className: "mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: p.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: p.desc
						})]
					})]
				}, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 text-sm font-medium",
				children: "Store hours of operation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface-muted text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2 text-left font-semibold",
								children: "Day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2 text-left font-semibold",
								children: "Open"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2 text-left font-semibold",
								children: "Close"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2 text-left font-semibold",
								children: "Closed"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border bg-surface",
						children: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-2 font-medium",
								children: d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "time",
									defaultValue: "06:00",
									className: "max-w-[140px]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "time",
									defaultValue: "23:00",
									className: "max-w-[140px]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "h-4 w-4 accent-[oklch(0.32_0.14_255)]"
								})
							})
						] }, d))
					})]
				})
			})] })
		]
	});
}
function BusinessStep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: FileText,
				title: "Business operations",
				subtitle: "Operational details about how the business runs."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Number of locations",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "10+" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Number of employees",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "5",
									children: "5-10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "11-25" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "25+" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bank name (for ACH settlement)",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "Wells Fargo Bank, N.A." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bank account type",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Business Checking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Business Savings" })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Routing number",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							defaultValue: "061000227",
							inputMode: "numeric"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Account number",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "password",
							defaultValue: "••••••4421"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Insurance carrier",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "The Hartford" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Liability coverage",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$1,000,000" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$2,000,000" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "$5,000,000" })
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 text-sm font-medium",
					children: ["Business description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-destructive",
						children: "*"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					defaultValue: "Family-owned convenience store serving the Buckhead neighborhood since 2019. We offer fuel, groceries, prepared foods, and a full beverage selection.",
					rows: 4,
					className: inputCls
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "214 / 500 characters"
				})
			] })
		]
	});
}
function AddressStep() {
	const [verified, setVerified] = (0, import_react.useState)(false);
	const [validating, setValidating] = (0, import_react.useState)(false);
	const [showSuggestion, setShowSuggestion] = (0, import_react.useState)(false);
	function validate() {
		setValidating(true);
		setShowSuggestion(false);
		setTimeout(() => {
			setValidating(false);
			setShowSuggestion(true);
		}, 1100);
	}
	function accept() {
		setShowSuggestion(false);
		setVerified(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: MapPin,
				title: "Business address",
				subtitle: "Where your customers will purchase lottery products."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Address line 1",
						required: true,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "3290 Peachtree Rd NE" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Address line 2",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							defaultValue: "Suite 110",
							placeholder: "Apt, suite, unit (optional)"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "City",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { defaultValue: "Atlanta" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "County",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, {
							defaultValue: "fulton",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "fulton",
									children: "Fulton"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "DeKalb" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cobb" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Gwinnett" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "State",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
							defaultValue: "ga",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "ga",
								children: "Georgia"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "ZIP code",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							defaultValue: "30305",
							inputMode: "numeric"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface-muted/50 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: validate,
						disabled: validating,
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover disabled:opacity-60",
						children: [validating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), validating ? "Validating with Melissa…" : "Validate address"]
					}),
					verified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Verified · USPS DPV confirmed"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-xs text-muted-foreground",
						children: "Powered by Melissa Address Verification"
					})
				]
			}),
			showSuggestion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-info/30 bg-info/5 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-5 w-5 shrink-0 text-info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: "We found a more accurate address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "USPS standardized address suggestion:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-background p-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "You entered"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1",
										children: [
											"3290 Peachtree Rd NE, Suite 110",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Atlanta, GA 30305"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border-2 border-success/50 bg-success/5 p-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold uppercase tracking-wider text-success",
										children: "Suggested"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 font-medium",
										children: [
											"3290 PEACHTREE RD NE STE 110",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"ATLANTA, GA 30305-2455"
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: accept,
									className: "rounded-md bg-success px-3.5 py-1.5 text-xs font-semibold text-success-foreground hover:opacity-90",
									children: "Use suggested"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setShowSuggestion(false);
										setVerified(true);
									},
									className: "rounded-md border border-border bg-background px-3.5 py-1.5 text-xs font-medium hover:bg-muted",
									children: "Keep as entered"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[1fr_280px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-xl border border-border bg-surface-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[2/1] w-full",
						style: {
							backgroundImage: "linear-gradient(135deg, oklch(0.94 0.02 250) 0%, oklch(0.90 0.03 220) 100%), repeating-linear-gradient(0deg, transparent 0 32px, oklch(0.85 0.02 250 / 0.5) 32px 33px), repeating-linear-gradient(90deg, transparent 0 32px, oklch(0.85 0.02 250 / 0.5) 32px 33px)",
							backgroundBlendMode: "multiply"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lifted ring-8 ring-primary/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs font-semibold text-foreground/70",
									children: "33.8412° N, 84.3787° W"
								})]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-3 top-3 rounded-md bg-background/95 px-2.5 py-1 text-[11px] font-medium shadow-card backdrop-blur-sm",
						children: "Premises location preview"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Address confidence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-black text-success",
								children: "98%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "High"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-success",
								style: { width: "98%" }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-1.5 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-success" }), " USPS DPV confirmed"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-success" }), " ZIP+4 verified"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-success" }), " Commercial address"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-success" }), " Geocoded to rooftop"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function MailingStep() {
	const [same, setSame] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Mail,
				title: "Mailing address",
				subtitle: "Where the GLC will send official correspondence."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: `flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${same ? "border-primary/40 bg-primary/5" : "border-border bg-surface hover:bg-muted"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: same,
					onChange: (e) => setSame(e.target.checked),
					className: "mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: "Same as business address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "3290 Peachtree Rd NE Ste 110, Atlanta, GA 30305-2455"
					})]
				})]
			}),
			!same && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 animate-in fade-in slide-in-from-top-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), " Copy from business address"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address line 1",
								required: true,
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address line 2",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { placeholder: "Apt, suite, PO box (optional)" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "County",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Select county" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fulton" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "DeKalb" })
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "State",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
									defaultValue: "ga",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ga",
										children: "Georgia"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ZIP code",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { inputMode: "numeric" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface-muted/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Validate address"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto text-xs text-muted-foreground",
							children: "Powered by Melissa Address Verification"
						})]
					})
				]
			})
		]
	});
}
var INITIAL_OWNERS = [
	{
		id: "o1",
		first: "Marcus",
		last: "Whitfield",
		role: "Managing Member",
		pct: 60,
		status: "verified",
		docs: 4,
		docsTotal: 4,
		initials: "MW"
	},
	{
		id: "o2",
		first: "Priya",
		last: "Ramanathan",
		role: "Member",
		pct: 30,
		status: "pending",
		docs: 2,
		docsTotal: 4,
		initials: "PR"
	},
	{
		id: "o3",
		first: "Daniel",
		last: "Okafor",
		role: "Member",
		pct: 10,
		status: "review",
		docs: 3,
		docsTotal: 4,
		initials: "DO"
	}
];
function OwnersStep({ notify }) {
	const [owners, setOwners] = (0, import_react.useState)(INITIAL_OWNERS);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const total = owners.reduce((s, o) => s + o.pct, 0);
	function remove(id) {
		setOwners(owners.filter((o) => o.id !== id));
		notify("info", "Owner removed.");
	}
	function duplicate(o) {
		setOwners([...owners, {
			...o,
			id: `o${Date.now()}`,
			first: o.first + " (copy)",
			pct: 0
		}]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: User,
				title: "Ownership disclosures",
				subtitle: "List all owners with 10% or greater interest. You may add up to 10."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Owners"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold",
								children: owners.length
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "of 10"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Total ownership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `font-display text-2xl font-bold ${total === 100 ? "text-success" : "text-warning"}`,
									children: [total, "%"]
								}), total !== 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-warning",
									children: "must equal 100%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full rounded-full ${total === 100 ? "bg-success" : "bg-warning"}`,
									style: { width: `${Math.min(total, 100)}%` }
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Verified"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold text-success",
								children: owners.filter((o) => o.status === "verified").length
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: ["of ", owners.length]
							})]
						})]
					})
				]
			}),
			total !== 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/5 p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-warning" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ownership must total 100%." }),
					" Currently ",
					total,
					"%. Adjust ownership percentages to continue."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: [owners.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-card transition-all hover:shadow-lifted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-4 top-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								tone: o.status === "verified" ? "success" : o.status === "review" ? "warning" : "info",
								children: o.status === "verified" ? "Verified" : o.status === "review" ? "In review" : "Pending"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-hover font-display text-base font-bold text-primary-foreground",
								children: o.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 pr-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: [
											"Owner ",
											i + 1,
											" of ",
											owners.length
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 truncate font-display text-lg font-bold",
										children: [
											o.first,
											" ",
											o.last
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-xs text-muted-foreground",
										children: o.role
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Ownership"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-xl font-bold",
								children: [o.pct, "%"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Documents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-xl font-bold",
								children: [o.docs, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["/", o.docsTotal]
								})]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full ${o.docs === o.docsTotal ? "bg-success" : "bg-primary"}`,
								style: { width: `${o.docs / o.docsTotal * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-1.5 border-t border-border pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setEditing(o),
									className: "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " View"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => duplicate(o),
									className: "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium hover:bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), " Duplicate"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => remove(o.id),
									className: "ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
								})
							]
						})
					]
				}, o.id)), owners.length < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setEditing({
						id: `o${Date.now()}`,
						first: "",
						last: "",
						role: "Member",
						pct: 0,
						status: "pending",
						docs: 0,
						docsTotal: 4,
						initials: "?"
					}),
					className: "group flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-surface-muted/40 p-5 text-center transition-all hover:border-primary hover:bg-primary/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-background ring-1 ring-border transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-base font-bold",
						children: "Add another owner"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Up to 10 owners supported"
					})] })]
				})]
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerDialog, {
				owner: editing,
				onClose: () => setEditing(null),
				onSave: (o) => {
					setOwners((prev) => {
						return prev.some((p) => p.id === o.id) ? prev.map((p) => p.id === o.id ? o : p) : [...prev, o];
					});
					setEditing(null);
					notify("success", "Owner saved.");
				}
			})
		]
	});
}
function OwnerDialog({ owner, onClose, onSave }) {
	const [tab, setTab] = (0, import_react.useState)("personal");
	const [o, setO] = (0, import_react.useState)(owner);
	const tabs = [
		{
			id: "personal",
			label: "Personal",
			icon: User
		},
		{
			id: "address",
			label: "Addresses",
			icon: MapPin
		},
		{
			id: "verify",
			label: "Identity",
			icon: IdCard
		},
		{
			id: "emergency",
			label: "Emergency",
			icon: LifeBuoy
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lifted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: o.first || o.last ? `Edit ${o.first} ${o.last}`.trim() : "Add new owner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Complete all four sections to verify the owner."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "grid h-9 w-9 place-items-center rounded-md hover:bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 border-b border-border px-4",
					children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t.id),
						className: `relative inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${tab === t.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }),
							" ",
							t.label,
							tab === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-px h-0.5 rounded-t bg-primary" })
						]
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-6",
					children: [
						tab === "personal" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "First name",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: o.first,
										onChange: (e) => setO({
											...o,
											first: e.target.value
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Middle name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last name",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: o.last,
										onChange: (e) => setO({
											...o,
											last: e.target.value
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date of birth",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "date" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "SSN",
									required: true,
									hint: "Securely encrypted at rest",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										type: "password",
										placeholder: "•••-••-••••"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "tel" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "email" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Role / title",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										value: o.role,
										onChange: (e) => setO({
											...o,
											role: e.target.value
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Ownership %",
									required: true,
									hint: "Must total 100% across all owners",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										type: "number",
										min: 0,
										max: 100,
										value: o.pct,
										onChange: (e) => setO({
											...o,
											pct: +e.target.value
										})
									})
								})
							]
						}),
						tab === "address" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-sm font-bold",
								children: "Residential address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Street address",
										required: true,
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "City",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "State",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Georgia" }) })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "ZIP",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mb-3 flex items-center gap-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									className: "h-4 w-4 accent-[oklch(0.32_0.14_255)]"
								}), " Mailing address same as residential"]
							}) })]
						}),
						tab === "verify" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Driver license number",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "License state",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Georgia" }) })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "License expiration",
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "date" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Passport number (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-info/30 bg-info/5 p-4 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground/80",
										children: "Identity verification will run a background check via our authorized partner. This may take 1-3 business days."
									})]
								})
							})]
						}),
						tab === "emergency" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Contact name",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Relationship",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectInput, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Spouse" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Parent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sibling" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "tel" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, { type: "email" })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border bg-surface-muted/40 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onSave({
							...o,
							initials: (o.first[0] ?? "?") + (o.last[0] ?? "")
						}),
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Save owner"]
					})]
				})
			]
		})
	});
}
var INITIAL_DOCS = [
	{
		t: "Federal Tax ID (EIN) letter",
		required: true,
		n: "ein_letter_2024.pdf",
		sz: "284 KB",
		st: "approved",
		scan: "clean"
	},
	{
		t: "Georgia business license",
		required: true,
		n: "GA_business_license.pdf",
		sz: "1.4 MB",
		st: "approved",
		scan: "clean"
	},
	{
		t: "Premises lease agreement",
		required: true,
		n: "peachtree_lease.pdf",
		sz: "3.1 MB",
		st: "review",
		scan: "clean"
	},
	{
		t: "Surety bond certificate ($10,000)",
		required: true,
		n: null,
		sz: null,
		st: "missing"
	},
	{
		t: "Owner #1 - Driver license",
		required: true,
		n: "marcus_dl.jpg",
		sz: "812 KB",
		st: "approved",
		scan: "clean"
	},
	{
		t: "Owner #2 - Driver license",
		required: true,
		n: "priya_dl.jpg",
		sz: "640 KB",
		st: "uploading",
		progress: 64,
		scan: "scanning"
	},
	{
		t: "Owner #3 - Driver license",
		required: true,
		n: null,
		sz: null,
		st: "missing"
	},
	{
		t: "Voided business check",
		required: false,
		n: "voided_check.pdf",
		sz: "112 KB",
		st: "approved",
		scan: "clean"
	}
];
function DocumentsStep({ notify }) {
	const [docs, setDocs] = (0, import_react.useState)(INITIAL_DOCS);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const ok = docs.filter((d) => d.st === "approved").length;
	const total = docs.length;
	const missing = docs.filter((d) => d.required && (d.st === "missing" || d.st === "error")).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: CloudUpload,
				title: "Document upload",
				subtitle: "Upload clear, legible copies. Documents are encrypted and virus-scanned automatically."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryStat, {
						label: "Approved",
						value: `${ok}/${total}`,
						tone: "success",
						icon: CircleCheck
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryStat, {
						label: "In review",
						value: docs.filter((d) => d.st === "review").length,
						tone: "warning",
						icon: Eye
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryStat, {
						label: "Uploading",
						value: docs.filter((d) => d.st === "uploading").length,
						tone: "info",
						icon: LoaderCircle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryStat, {
						label: "Missing",
						value: missing,
						tone: missing ? "error" : "muted",
						icon: CircleAlert
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragOver(true);
				},
				onDragLeave: () => setDragOver(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragOver(false);
					notify("success", "1 file added to upload queue.");
				},
				className: `relative overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all ${dragOver ? "border-primary bg-primary/8 scale-[1.01]" : "border-border bg-surface-muted/40 hover:border-primary/50"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-display text-lg font-bold",
						children: "Drag & drop files here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: ["or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-primary underline underline-offset-2",
							children: "browse from your computer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap justify-center gap-2 text-[11px]",
						children: [[
							"PDF",
							"JPG",
							"PNG",
							"JPEG",
							"TIFF"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-background px-2.5 py-1 font-semibold text-muted-foreground",
							children: f
						}, f)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground",
							children: "10 MB max"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 text-success" }), " Files are encrypted at rest (AES-256) and scanned for malware"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocCard, {
					doc: d,
					onChange: (nd) => setDocs(docs.map((x, idx) => idx === i ? nd : x))
				}, d.t))
			})
		]
	});
}
function SummaryStat({ label, value, tone, icon: Icon }) {
	const toneCls = {
		success: "bg-success/10 text-success",
		warning: "bg-warning/15 text-warning",
		info: "bg-info/10 text-info",
		error: "bg-destructive/10 text-destructive",
		muted: "bg-muted text-muted-foreground"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-7 w-7 place-items-center rounded-full ${toneCls}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-display text-2xl font-black",
			children: value
		})]
	});
}
function DocCard({ doc, onChange }) {
	const status = doc.st;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-11 w-11 shrink-0 place-items-center rounded-lg ${status === "approved" ? "bg-success/10 text-success" : status === "review" ? "bg-warning/15 text-warning" : status === "uploading" ? "bg-info/10 text-info" : status === "error" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`,
						children: status === "uploading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-5 w-5" }) : status === "missing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-semibold",
								children: doc.t
							}), doc.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-destructive/10 px-1.5 py-0.5 text-[10px] font-bold text-destructive",
								children: "REQ"
							})]
						}), doc.n && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3 w-3" }),
										" ",
										doc.n
									]
								}),
								doc.sz && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", doc.sz] }),
								doc.scan === "clean" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-0.5 text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " Virus scan clean"]
								}),
								doc.scan === "scanning" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-0.5 text-info",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Scanning…"]
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0",
					children: [
						status === "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "success",
							children: "Approved"
						}),
						status === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "warning",
							children: "In review"
						}),
						status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "info",
							children: "Uploading"
						}),
						status === "missing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "error",
							children: "Missing"
						}),
						status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							tone: "error",
							children: "Failed"
						})
					]
				})]
			}),
			status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 w-full overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-info transition-all",
						style: { width: `${doc.progress ?? 0}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center justify-between text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [doc.progress, "% · 2.1 MB/s"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "font-medium text-foreground hover:underline",
						children: "Cancel"
					})]
				})]
			}),
			status === "missing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
					" Choose file or drag & drop",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						className: "sr-only",
						onChange: () => onChange({
							...doc,
							n: "new_upload.pdf",
							sz: "1.2 MB",
							st: "uploading",
							progress: 28,
							scan: "scanning"
						})
					})
				]
			}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: "Upload failed - file exceeds 10 MB limit."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1 rounded-md bg-destructive px-2.5 py-1 text-[11px] font-semibold text-destructive-foreground hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3 w-3" }), " Retry"]
				})]
			}) : status !== "uploading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }), " Preview"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3" }), " Replace"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " Download"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onChange({
							...doc,
							st: "missing",
							n: null,
							sz: null
						}),
						"aria-label": "Remove",
						className: "ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-destructive hover:bg-destructive/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }), " Remove"]
					})
				]
			})
		]
	});
}
function ReviewStep({ onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: FileCheckCorner,
				title: "Review your application",
				subtitle: "Verify all information is accurate before submission. Click any section to edit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-warning/40 bg-warning/5 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-warning" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "2 items need attention:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-1 list-disc pl-5 text-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Surety bond certificate is missing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Owner #3 driver license is missing" })]
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						step: 1,
						title: "Retailer information",
						items: [
							["Legal name", "Peachtree Quick Stop LLC"],
							["DBA", "Peachtree Mart"],
							["Type", "Limited Liability Company"],
							["EIN", "58-1234567"],
							["Phone", "(404) 555-0143"],
							["Email", "operations@peachtreemart.com"]
						]
					},
					{
						step: 2,
						title: "Business operations",
						items: [
							["Locations", "1"],
							["Employees", "5-10"],
							["Bank", "Wells Fargo Bank, N.A."],
							["Account", "••••4421"],
							["Insurance", "The Hartford"],
							["Liability", "$1,000,000"]
						]
					},
					{
						step: 3,
						title: "Business address",
						items: [
							["Premises", "3290 Peachtree Rd NE Ste 110"],
							["City / State / ZIP", "Atlanta, GA 30305-2455"],
							["County", "Fulton"],
							["Verified", "USPS DPV confirmed (98%)"]
						]
					},
					{
						step: 4,
						title: "Mailing address",
						items: [["Mailing", "Same as business address"]]
					},
					{
						step: 5,
						title: "Owners (3)",
						items: [
							["Marcus Whitfield", "60% · Managing Member · Verified"],
							["Priya Ramanathan", "30% · Member · Pending"],
							["Daniel Okafor", "10% · Member · In review"]
						]
					},
					{
						step: 6,
						title: "Documents (7 uploaded)",
						items: [
							["Approved", "5"],
							["In review", "1"],
							["Uploading", "1"],
							["Missing", "2"]
						]
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					open: true,
					className: "group overflow-hidden rounded-xl border border-border bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer items-center justify-between gap-3 px-5 py-4 hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 transition-transform group-open:rotate-0 -rotate-90" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: s.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.preventDefault();
								onEdit(s.step);
							},
							className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3 w-3" }), " Edit"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border bg-surface-muted/30 px-5 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "grid gap-x-6 gap-y-2 sm:grid-cols-2",
							children: s.items.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right font-medium",
									children: v
								})]
							}, k))
						})
					})]
				}, s.title))
			})
		]
	});
}
function SubmitStep({ notify }) {
	const [agree1, setAgree1] = (0, import_react.useState)(false);
	const [agree2, setAgree2] = (0, import_react.useState)(false);
	const [sig, setSig] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Send,
				title: "Sign and submit",
				subtitle: "Confirm your application is complete and accurate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: "Attestations"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: agree1,
										onChange: (e) => setAgree1(e.target.checked),
										className: "mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: "I certify that all information provided in this application is true, complete, and accurate to the best of my knowledge."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: agree2,
										onChange: (e) => setAgree2(e.target.checked),
										className: "mt-0.5 h-4 w-4 accent-[oklch(0.32_0.14_255)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: "I authorize the Georgia Lottery Corporation to conduct background checks on all listed owners and verify all provided information."
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold",
									children: "Electronic signature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Type your full legal name as it appears on government-issued ID."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										placeholder: "Full legal name",
										value: sig,
										onChange: (e) => setSig(e.target.value),
										className: "font-display text-xl !py-3.5",
										style: { fontFamily: "cursive" }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Signed on ",
											(/* @__PURE__ */ new Date()).toLocaleDateString(),
											" at ",
											(/* @__PURE__ */ new Date()).toLocaleTimeString()
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Legally binding under E-SIGN Act"]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-info/30 bg-info/5 p-4 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-5 w-5 shrink-0 text-info" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Once submitted, you will receive a confirmation email with your application number. Background checks and premises inspections typically take ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "10-15 business days" }),
									". You may track the status from your dashboard."
								] })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-gradient-to-br from-primary to-primary-hover p-5 text-primary-foreground shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider opacity-80",
								children: "Total fees due"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-3xl font-black",
								children: "$425.00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs opacity-80",
								children: "Payable upon submission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 border-t border-primary-foreground/20 pt-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "opacity-85",
											children: "Application fee"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "$250.00"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "opacity-85",
											children: "Background check (3)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "$150.00"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "opacity-85",
											children: "Processing fee"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "$25.00"
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Payment method"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-3 rounded-lg border border-border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-14 place-items-center rounded bg-gradient-to-br from-primary to-primary-hover text-[10px] font-black text-primary-foreground",
										children: "VISA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: "•••• 4242"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "Expires 09/28"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "ml-auto text-xs font-medium text-primary hover:underline",
										children: "Change"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 text-success" }), " Secured by Stripe · PCI DSS Level 1"]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				disabled: !agree1 || !agree2 || sig.length < 3,
				onClick: () => notify("success", "Application submitted! Confirmation #GLC-2026-08831"),
				className: "flex w-full items-center justify-center gap-2 rounded-xl bg-success px-6 py-4 font-display text-base font-bold text-success-foreground shadow-lifted transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }), " Submit application & pay $425.00"]
			})
		]
	});
}
//#endregion
export { WizardPage as component };
