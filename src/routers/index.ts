import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router";
import AuthRouter from "./auth";
import AppRouter from "./app";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/sign-in",
  },
  ...AuthRouter,
  ...AppRouter,
  {
    path: "/page-not-found",
    name: "PageNotFound",
    meta: {
      title: "Page Not Found",
      description: "Page Not Found",
      keywords: "Page Not Found",
      ogTitle: "Page Not Found",
      ogDescription: "Page Not Found",
      ogKeywords: "Page Not Found",
      layout: "auth-layout",
    },
    component: () => import(/* webpackChunkName: "PageNotFound" */ "@/pages/page-not-found/page-not-found.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/page-not-found",
  },
];

const options: RouterOptions = {
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
};

export default createRouter(options);
