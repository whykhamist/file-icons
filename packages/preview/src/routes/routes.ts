export default [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/pages/home.vue"),
      },
      {
        path: "/basic",
        name: "basic",
        component: () => import("@/pages/basic.vue"),
      },
      {
        path: "/api",
        name: "api",
        component: () => import("@/pages/apiReference.vue"),
      },
      {
        path: "/icons",
        name: "icons",
        component: () => import("@/pages/icons.vue"),
      },
      {
        path: "/vue",
        name: "vue",
        component: () => import("@/pages/vue.vue"),
      },
      {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: () => import("@/pages/404.vue"),
      },
    ],
  },
];
