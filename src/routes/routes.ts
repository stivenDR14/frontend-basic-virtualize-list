import { lazy } from "react";
import { AppRoute } from "../models/index.ts";

export const LoginPage = lazy(() => import("../pages/auth.page"));
export const HomePage = lazy(() => import("../pages/home.page"));
export const NotFoundPage = lazy(() => import("../pages/not-found.page"));
export const publicRoutes: AppRoute[] = [
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
    exact: true,
  },
];

export const privateRoutes: AppRoute[] = [
  {
    path: "/home",
    component: HomePage,
    exact: true,
  },
];

export const DEFAULT_PRIVATE_ROUTE = "/home";
export const DEFAULT_PUBLIC_ROUTE = "/login";
