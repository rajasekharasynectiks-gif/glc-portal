import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Mail, O as Megaphone, S as Phone, U as Download, V as FileText, X as ChevronRight, at as ArrowRight, bt as CircleCheck, it as Award, k as MapPin, o as TrendingUp, q as Clock, r as Users, yt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { n as Chip, r as PublicShell } from "./public-shell-DNC9M9u6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-n28KjV8m.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden text-primary-foreground",
			style: { background: "var(--gradient-hero)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.12]",
				style: {
					backgroundImage: "radial-gradient(circle at 15% 30%, white 1.2px, transparent 1.2px), radial-gradient(circle at 75% 70%, white 1px, transparent 1px)",
					backgroundSize: "80px 80px, 120px 120px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }), "Official Georgia Lottery Corporation Portal"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: [
								"Become a licensed ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "Georgia Lottery"
								}),
								" retailer."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-white/80 sm:text-lg",
							children: "Apply, renew, and manage your retailer licensing entirely online. Save your progress, upload required documents, and track every step from a single secure dashboard."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/auth/register",
								className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted transition-transform hover:-translate-y-0.5",
								children: ["Begin Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth/login",
								className: "inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10",
								children: "Continue Application"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8",
							children: [
								{
									v: "9,400+",
									l: "Licensed retailers"
								},
								{
									v: "98.6%",
									l: "Application uptime"
								},
								{
									v: "5-7 days",
									l: "Avg. review time"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-bold text-gold sm:text-3xl",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs text-white/70",
								children: s.l
							})] }, s.l))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-xl shadow-lifted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-wider text-white/70",
									children: "Application Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									tone: "success",
									children: "Live"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-3",
								children: [
									{
										t: "Account & Business Information",
										d: "Completed",
										s: "ok"
									},
									{
										t: "Owner Profiles & Background",
										d: "Completed",
										s: "ok"
									},
									{
										t: "Document Upload",
										d: "In progress",
										s: "now"
									},
									{
										t: "Fees & Submission",
										d: "Pending",
										s: "wait"
									}
								].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid h-9 w-9 shrink-0 place-items-center rounded-md text-xs font-bold ${step.s === "ok" ? "bg-success text-success-foreground" : step.s === "now" ? "bg-gold text-gold-foreground" : "bg-white/10 text-white/60"}`,
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-semibold",
												children: step.t
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-white/60",
												children: step.d
											})]
										}),
										step.s === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-success" })
									]
								}, step.t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-lg bg-white/[0.04] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/70",
										children: "Overall completion"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "62%"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-2 overflow-hidden rounded-full bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-gradient-to-r from-gold to-amber-300",
										style: { width: "62%" }
									})
								})]
							})
						]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page -mt-10 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						t: "Start Application",
						d: "Apply in 4 steps",
						to: "/auth/register",
						i: FileText
					},
					{
						t: "Renew License",
						d: "Existing retailers",
						to: "/auth/login",
						i: Clock
					},
					{
						t: "Download Forms",
						d: "Guides & PDFs",
						to: "/documents",
						i: Download
					},
					{
						t: "Get Help",
						d: "FAQ & Support",
						to: "/faq",
						i: CircleQuestionMark
					}
				].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: q.to,
					className: "group gov-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lifted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.i, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display font-bold",
							children: q.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: q.d
						})
					]
				}, q.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Retailer Licensing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "A modern licensing experience for Georgia businesses."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "The Georgia Lottery Retailer Licensing System lets eligible businesses apply, upload supporting documentation, pay applicable fees, and receive their license - all through one secure portal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: [
							"Save your progress and resume any time",
							"Real-time application status & messaging",
							"Secure document vault for owners and locations",
							"Integrated background verification workflow"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: t
							})]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Eligibility"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl font-bold",
						children: "Who can apply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [
							{
								t: "Located in Georgia",
								d: "Physical retail location within state"
							},
							{
								t: "Valid Business License",
								d: "Active GA business registration"
							},
							{
								t: "Federal Tax ID",
								d: "EIN or SSN for sole proprietors"
							},
							{
								t: "21+ Owners/Officers",
								d: "All listed parties must be 21 or older"
							},
							{
								t: "Background Check",
								d: "Owners pass GLC background verification"
							},
							{
								t: "Surety Bond",
								d: "Bond posted per fee schedule"
							}
						].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gov-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: e.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: e.d
							})]
						}, e.t))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-muted py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-primary",
							children: "How it Works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
							children: "From application to approval in 4 steps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "A guided experience designed for clarity, transparency, and speed."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: "01",
							t: "Create Account",
							d: "Verify your email and set up multi-factor authentication."
						},
						{
							n: "02",
							t: "Complete Application",
							d: "Provide business, ownership, and location details."
						},
						{
							n: "03",
							t: "Upload & Pay",
							d: "Submit required documents and applicable fees securely."
						},
						{
							n: "04",
							t: "Review & Approval",
							d: "Track status; receive your license digitally upon approval."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gov-card relative overflow-hidden p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-black text-primary/10",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-lg font-bold",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [
					{
						i: TrendingUp,
						t: "Grow Your Revenue",
						d: "Lottery retailers receive commission on every ticket sold plus bonus incentives for winning ticket sales."
					},
					{
						i: Users,
						t: "Increase Foot Traffic",
						d: "Lottery players visit retail locations multiple times per week, driving incremental in-store purchases."
					},
					{
						i: Award,
						t: "Community Impact",
						d: "Proceeds fund HOPE Scholarships and Georgia Pre-K - your business helps power education."
					}
				].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gov-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-lg",
							style: { background: "var(--gradient-gold)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.i, { className: "h-6 w-6 text-gold-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-bold",
							children: b.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: b.d
						})
					]
				}, b.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-10 pb-20 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Latest Updates"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl font-bold",
						children: "Announcements"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "text-sm font-semibold text-primary hover:underline",
						children: "View all →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						{
							d: "Jun 24, 2026",
							t: "2026 Licensing fee schedule published",
							c: "The updated retailer fee structure for fiscal year 2026 is now available in the Documents Library."
						},
						{
							d: "Jun 12, 2026",
							t: "Scheduled maintenance: July 4 weekend",
							c: "The portal will be unavailable from 2 AM - 6 AM ET on Saturday, July 4 for routine upgrades."
						},
						{
							d: "May 30, 2026",
							t: "New owner profile workflow",
							c: "Owner background verification has been streamlined to reduce average application time by 30%."
						}
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "gov-card flex gap-5 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground",
									children: a.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-0.5 font-semibold",
									children: a.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: a.c
								})
							]
						})]
					}, a.t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-primary",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl font-bold",
					children: "Common questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3",
					children: [
						"How long does the application take?",
						"What documents are required?",
						"What are the licensing fees?",
						"How do I renew my license?"
					].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faq",
						className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })]
					}, q))
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl p-10 text-primary-foreground sm:p-14",
				style: { background: "var(--gradient-hero)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold sm:text-4xl",
						children: "Ready to become a licensed retailer?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-white/80",
						children: "Start your application today. Save your progress and complete it on your schedule."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth/register",
							className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-lifted",
							children: ["Begin Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10",
							children: "Contact GLC"
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page grid gap-4 pb-24 md:grid-cols-3",
			children: [
				{
					i: Phone,
					t: "Call us",
					d: "(404) 215-5000",
					s: "Mon-Fri • 8am-5pm ET"
				},
				{
					i: Mail,
					t: "Email",
					d: "licensing@galottery.org",
					s: "Response within 1 business day"
				},
				{
					i: MapPin,
					t: "Headquarters",
					d: "250 Williams Street NW",
					s: "Atlanta, GA 30303"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gov-card flex items-start gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: c.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 font-semibold",
						children: c.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: c.s
					})
				] })]
			}, c.t))
		})
	] });
}
//#endregion
export { Home as component };
