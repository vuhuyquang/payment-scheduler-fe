import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Permissions from "../views/Permissions.vue";
import configFeature from "@/store/config-feature";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Tổng quan",
    component: Dashboard,
  },
  {
    path: "/permissions",
    name: "Quyền",
    component: Permissions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeResolve(async (to, from, next) => {
  if (!configFeature.state.hasMenuData) {
    await configFeature.dispatch('getConfigFeature');
  }
  next();
});

export default router;
