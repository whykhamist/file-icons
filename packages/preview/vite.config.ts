import { resolve } from "node:path";
import { defineConfig, mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import conf from "../../vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  conf,
  defineConfig({
    resolve: {
      alias: [
        {
          find: "@vue/runtime-core",
          replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
        },
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
        {
          find: "@whykhamist/file-icons",
          replacement: resolve(__dirname, "../file-icons/src"),
        },
      ],
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "esnext",
      },
      include: ["tailwind.config.ts"],
    },
    css: {
      devSourcemap: true,
    },
    server: {
      port: 5176,
      open: `http://localhost:5176`, // opens browser window automatically
    },
    plugins: [vue()],
  })
);
