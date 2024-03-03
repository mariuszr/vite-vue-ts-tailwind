import { createApp } from "vue";
import { createPinia } from "pinia";
import("preline");

import App from "@/App.vue";
import routers from "@/routers";
import { i18n } from "@/plugins";

import __AuthLayout from "@/layouts/__auth-layout.vue";
import __AppLayout from "@/layouts/__app-layout.vue";

import "@/style.css";

createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(routers)
  .component("AuthLayout", __AuthLayout)
  .component("AppLayout", __AppLayout)
  .mount("#app");
