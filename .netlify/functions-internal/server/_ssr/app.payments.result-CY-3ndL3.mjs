import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.payments.result-CY-3ndL3.js
var $$splitComponentImporter = () => import("./app.payments.result-spHSk44l.mjs");
var Route = createFileRoute("/app/payments/result")({
	head: () => ({ meta: [{ title: "Payment Result - GLC" }] }),
	validateSearch: (s) => ({ status: s.status ?? "approved" }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
