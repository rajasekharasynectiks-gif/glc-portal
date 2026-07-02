import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PrimaryButton, n as Field, r as Input, t as AuthShell } from "./auth-shell-CAsh7mSZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.forgot-CEJtw3gF.js
var import_jsx_runtime = require_jsx_runtime();
function Forgot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Reset your password",
		subtitle: "Enter the email associated with your account. We'll send a secure reset link.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5",
			onSubmit: (e) => {
				e.preventDefault();
				window.location.href = "/auth/reset";
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email address",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						placeholder: "you@business.com"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Send reset link"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/auth/login",
					className: "block text-center text-sm font-medium text-primary hover:underline",
					children: "Back to sign in"
				})
			]
		})
	});
}
//#endregion
export { Forgot as component };
