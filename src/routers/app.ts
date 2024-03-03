import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { layout: "app-layout", authRequired: true },
    // eslint-disable-next-line
    component: () => import(/* webpackChunkName: "Dashboard" */ "../pages/app/dashboard"),
  },
];

export default routes;
