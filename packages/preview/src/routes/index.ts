import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from "./routes";
import { nextTick } from "vue";

const router = createRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash && !!document.querySelector(to.hash)) {
      let el = document.querySelector(to.hash);
      let y = (el?.getBoundingClientRect().top ?? 0) + window.scrollY - 50;
      return {
        top: y,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      if (to.path != from.path) return { top: 0, left: 0, behavior: "smooth" };
    }
  },
  history: createWebHistory("/file-icons/"),
  routes,
});

router.afterEach(() => {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
