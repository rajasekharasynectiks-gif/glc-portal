import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { P as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$32 } from "./app.payments.result-CY-3ndL3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D12cNNB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B1MT6gXj.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Georgia Lottery Retailer Licensing" },
			{
				name: "description",
				content: "Georgia Lottery Corporation Retailer Licensing Portal."
			},
			{
				name: "author",
				content: "Georgia Lottery Corporation"
			},
			{
				property: "og:title",
				content: "Georgia Lottery Retailer Licensing"
			},
			{
				property: "og:description",
				content: "Secure portal for retailer licensing applications, payments, documents, and support."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "alternate icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$30 = () => import("./licensing-GJXha1N2.mjs");
var Route$30 = createFileRoute("/licensing")({
	head: () => ({ meta: [{ title: "Retailer Licensing - Georgia Lottery" }, {
		name: "description",
		content: "Eligibility, fees, and process to become a Georgia Lottery retailer."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./faq-BBg9EH46.mjs");
var Route$29 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ - Georgia Lottery Retailer Licensing" }, {
		name: "description",
		content: "Frequently asked questions about Georgia Lottery retailer licensing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./documents-BzxVF5i2.mjs");
var Route$28 = createFileRoute("/documents")({
	head: () => ({ meta: [{ title: "Documents Library - GLC Retailer Licensing" }, {
		name: "description",
		content: "Download retailer licensing forms, policies, and application guides."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./contact-D8XWMk8u.mjs");
var Route$27 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact - GLC Retailer Licensing" }, {
		name: "description",
		content: "Contact the Georgia Lottery Corporation licensing team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./auth-CGwJ9iLr.mjs");
var Route$26 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./app-DpnSEiVG.mjs");
var Route$25 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./about-vw_P2L6r.mjs");
var Route$24 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About - Georgia Lottery Corporation" }, {
		name: "description",
		content: "Mission, vision, history, and compliance information for the Georgia Lottery Corporation."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./routes-n28KjV8m.mjs");
var Route$23 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Georgia Lottery Retailer Licensing Portal" },
		{
			name: "description",
			content: "Apply for and manage your Georgia Lottery retailer license online. Secure, accessible, and built for Georgia businesses."
		},
		{
			property: "og:title",
			content: "Georgia Lottery Retailer Licensing Portal"
		},
		{
			property: "og:description",
			content: "Apply for and manage your Georgia Lottery retailer license online."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./auth.verify-DmgriT4w.mjs");
var Route$22 = createFileRoute("/auth/verify")({
	head: () => ({ meta: [{ title: "Verify your email - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./auth.reset-CNmhSLFI.mjs");
var Route$21 = createFileRoute("/auth/reset")({
	head: () => ({ meta: [{ title: "Set a new password - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./auth.register-h5PTiNnC.mjs");
var Route$20 = createFileRoute("/auth/register")({
	head: () => ({ meta: [{ title: "Create account - GLC Retailer Portal" }] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./auth.login-D-JzjUdG.mjs");
var Route$19 = createFileRoute("/auth/login")({
	head: () => ({ meta: [{ title: "Sign in - GLC Retailer Portal" }] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./auth.forgot-CEJtw3gF.mjs");
var Route$18 = createFileRoute("/auth/forgot")({
	head: () => ({ meta: [{ title: "Forgot password - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./auth.2fa-D3Zn593F.mjs");
var Route$17 = createFileRoute("/auth/2fa")({
	head: () => ({ meta: [{ title: "Two-factor authentication - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./app.support-DcdVwmIA.mjs");
var Route$16 = createFileRoute("/app/support")({
	head: () => ({ meta: [{ title: "Support - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./app.settings-Ffsh_Hmu.mjs");
var Route$15 = createFileRoute("/app/settings")({
	head: () => ({ meta: [{ title: "Settings - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./app.profile-C_4lxmXU.mjs");
var Route$14 = createFileRoute("/app/profile")({
	head: () => ({ meta: [{ title: "Profile - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./app.payments-DYMsIqwx.mjs");
var Route$13 = createFileRoute("/app/payments")({
	head: () => ({ meta: [{ title: "Payments - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./app.notifications-hSdZUSsT.mjs");
var Route$12 = createFileRoute("/app/notifications")({
	head: () => ({ meta: [{ title: "Notifications - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./app.messages-D1zZ9-jh.mjs");
var Route$11 = createFileRoute("/app/messages")({
	head: () => ({ meta: [{ title: "Messages - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./app.documents-BuOhsrb-.mjs");
var Route$10 = createFileRoute("/app/documents")({
	head: () => ({ meta: [{ title: "My Documents - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./app.dashboard-DgVxO9GS.mjs");
var Route$9 = createFileRoute("/app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard - GLC Retailer Portal" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./app.applications.index-Cs7e2Ff4.mjs");
var Route$8 = createFileRoute("/app/applications/")({
	head: () => ({ meta: [{ title: "My Applications - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./app.payments.request-bGyduWPo.mjs");
var Route$7 = createFileRoute("/app/payments/request")({
	head: () => ({ meta: [{ title: "Payment Request - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./app.payments.receipt-HEwNB4I1.mjs");
var Route$6 = createFileRoute("/app/payments/receipt")({
	head: () => ({ meta: [{ title: "Payment Receipt - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./app.payments.eft-C3z7wPNB.mjs");
var Route$5 = createFileRoute("/app/payments/eft")({
	head: () => ({ meta: [{ title: "EFT Documents - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./app.payments.checkout-olnvWiuE.mjs");
var Route$4 = createFileRoute("/app/payments/checkout")({
	head: () => ({ meta: [{ title: "Secure Checkout - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./app.applications.tracking-DlV5jtQn.mjs");
var Route$3 = createFileRoute("/app/applications/tracking")({
	head: () => ({ meta: [{ title: "Application Tracking - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./app.applications.success-BB3lHTcm.mjs");
var Route$2 = createFileRoute("/app/applications/success")({
	head: () => ({ meta: [{ title: "Application Submitted - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./app.applications.review-CCYHPF8M.mjs");
var Route$1 = createFileRoute("/app/applications/review")({
	head: () => ({ meta: [{ title: "Review & Submit - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.applications.new-_9t-74KD.mjs");
var Route = createFileRoute("/app/applications/new")({
	head: () => ({ meta: [{ title: "New Application - GLC" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LicensingRoute = Route$30.update({
	id: "/licensing",
	path: "/licensing",
	getParentRoute: () => Route$31
});
var FaqRoute = Route$29.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$31
});
var DocumentsRoute = Route$28.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => Route$31
});
var ContactRoute = Route$27.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$31
});
var AuthRoute = Route$26.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$31
});
var AppRoute = Route$25.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$31
});
var AboutRoute = Route$24.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$31
});
var IndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var AuthVerifyRoute = Route$22.update({
	id: "/verify",
	path: "/verify",
	getParentRoute: () => AuthRoute
});
var AuthResetRoute = Route$21.update({
	id: "/reset",
	path: "/reset",
	getParentRoute: () => AuthRoute
});
var AuthRegisterRoute = Route$20.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => AuthRoute
});
var AuthLoginRoute = Route$19.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AuthRoute
});
var AuthForgotRoute = Route$18.update({
	id: "/forgot",
	path: "/forgot",
	getParentRoute: () => AuthRoute
});
var Auth2faRoute = Route$17.update({
	id: "/2fa",
	path: "/2fa",
	getParentRoute: () => AuthRoute
});
var AppSupportRoute = Route$16.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$15.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppProfileRoute = Route$14.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppPaymentsRoute = Route$13.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$12.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppMessagesRoute = Route$11.update({
	id: "/messages",
	path: "/messages",
	getParentRoute: () => AppRoute
});
var AppDocumentsRoute = Route$10.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$9.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppApplicationsIndexRoute = Route$8.update({
	id: "/applications/",
	path: "/applications/",
	getParentRoute: () => AppRoute
});
var AppPaymentsResultRoute = Route$32.update({
	id: "/result",
	path: "/result",
	getParentRoute: () => AppPaymentsRoute
});
var AppPaymentsRequestRoute = Route$7.update({
	id: "/request",
	path: "/request",
	getParentRoute: () => AppPaymentsRoute
});
var AppPaymentsReceiptRoute = Route$6.update({
	id: "/receipt",
	path: "/receipt",
	getParentRoute: () => AppPaymentsRoute
});
var AppPaymentsEftRoute = Route$5.update({
	id: "/eft",
	path: "/eft",
	getParentRoute: () => AppPaymentsRoute
});
var AppPaymentsCheckoutRoute = Route$4.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => AppPaymentsRoute
});
var AppApplicationsTrackingRoute = Route$3.update({
	id: "/applications/tracking",
	path: "/applications/tracking",
	getParentRoute: () => AppRoute
});
var AppApplicationsSuccessRoute = Route$2.update({
	id: "/applications/success",
	path: "/applications/success",
	getParentRoute: () => AppRoute
});
var AppApplicationsReviewRoute = Route$1.update({
	id: "/applications/review",
	path: "/applications/review",
	getParentRoute: () => AppRoute
});
var AppApplicationsNewRoute = Route.update({
	id: "/applications/new",
	path: "/applications/new",
	getParentRoute: () => AppRoute
});
var AppPaymentsRouteChildren = {
	AppPaymentsCheckoutRoute,
	AppPaymentsEftRoute,
	AppPaymentsReceiptRoute,
	AppPaymentsRequestRoute,
	AppPaymentsResultRoute
};
var AppRouteChildren = {
	AppDashboardRoute,
	AppDocumentsRoute,
	AppMessagesRoute,
	AppNotificationsRoute,
	AppPaymentsRoute: AppPaymentsRoute._addFileChildren(AppPaymentsRouteChildren),
	AppProfileRoute,
	AppSettingsRoute,
	AppSupportRoute,
	AppApplicationsNewRoute,
	AppApplicationsReviewRoute,
	AppApplicationsSuccessRoute,
	AppApplicationsTrackingRoute,
	AppApplicationsIndexRoute
};
var AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
var AuthRouteChildren = {
	Auth2faRoute,
	AuthForgotRoute,
	AuthLoginRoute,
	AuthRegisterRoute,
	AuthResetRoute,
	AuthVerifyRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AppRoute: AppRouteWithChildren,
	AuthRoute: AuthRoute._addFileChildren(AuthRouteChildren),
	ContactRoute,
	DocumentsRoute,
	FaqRoute,
	LicensingRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
