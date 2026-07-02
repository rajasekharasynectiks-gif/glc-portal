import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PrimaryButton, n as Field, r as Input, t as AuthShell } from "./auth-shell-CAsh7mSZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.register-h5PTiNnC.js
var import_jsx_runtime = require_jsx_runtime();
function Register() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Create your account",
		subtitle: "It takes about 2 minutes. You'll receive a verification email next.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (e) => {
				e.preventDefault();
				window.location.href = "/auth/verify";
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "fn",
						label: "First name",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "fn",
							placeholder: "John"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "ln",
						label: "Last name",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ln",
							placeholder: "Smith"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "biz",
					label: "Legal business name",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "biz",
						placeholder: "Acme Convenience LLC"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Business email",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						placeholder: "you@business.com"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "phone",
					label: "Phone number",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						type: "tel",
						placeholder: "(404) 555-0100"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw",
					label: "Password",
					hint: "At least 12 characters, including a number and symbol.",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "pw",
						type: "password",
						placeholder: "••••••••••••"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-md border border-border bg-surface-muted p-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "mt-0.5 h-4 w-4 rounded border-input accent-primary",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"I agree to the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "font-semibold text-primary hover:underline",
								children: "Terms of Service"
							}),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "font-semibold text-primary hover:underline",
								children: "Privacy Policy"
							}),
							"."
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "mt-0.5 h-4 w-4 rounded border-input accent-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send me product updates and licensing announcements." })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Create account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: ["Already registered? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth/login",
						className: "font-semibold text-primary hover:underline",
						children: "Sign in"
					})]
				})
			]
		})
	});
}
//#endregion
export { Register as component };
