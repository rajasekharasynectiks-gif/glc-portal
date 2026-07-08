import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Derive a router `basepath` from Vite's `BASE_URL` so the app can
  // be mounted under a subpath (e.g. `/glc-portal/`). Trim any trailing
  // slash so the router receives `/glc-portal` or `/`.
  const rawBase = (import.meta.env.BASE_URL as string) || "/";
  const basepath = rawBase.replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};
