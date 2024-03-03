import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/sign-in",
    name: "SignIn",
    meta: { title: "ayvue - Sign In", layout: "auth-layout", redirectToDashboard: true },
    // eslint-disable-next-line
    component: () => import(/* webpackChunkName: "SignIn" */ "../pages/auth/sign-in"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    meta: { layout: "auth-layout" },
    component: () => import(/* webpackChunkName: "SignUp" */ "../pages/auth/sign-up"),
  },
];

export default routes;
