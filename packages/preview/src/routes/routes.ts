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
        path: "/installation",
        name: "installation",
        component: () => import("@/pages/installation.vue"),
      },
      {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: () => import("@/pages/404.vue"),
      },
    ],
  },
];
