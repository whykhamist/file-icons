import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory("/file-icons/"),
  routes,
});

export default router;
