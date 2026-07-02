import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PrimaryButton, n as Field, r as Input, t as AuthShell } from "./auth-shell-CAsh7mSZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.reset-CNmhSLFI.js
var import_jsx_runtime = require_jsx_runtime();
function Reset() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Set a new password",
		subtitle: "Choose a strong password you haven't used before.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5",
			onSubmit: (e) => {
				e.preventDefault();
				window.location.href = "/auth/login";
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "pw",
					label: "New password",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "pw",
						type: "password",
						placeholder: "••••••••••••"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "cpw",
					label: "Confirm new password",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "cpw",
						type: "password",
						placeholder: "••••••••••••"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-border bg-surface-muted p-3 text-xs text-muted-foreground",
					children: "Password must be at least 12 characters and include a number and a symbol."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Update password"
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
export { Reset as component };
