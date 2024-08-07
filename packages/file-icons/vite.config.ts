import { resolve } from "node:path";
import { defineConfig, mergeConfig } from "vite";
import conf from "../../vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  conf,
  defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "@whykhamist/file-icons",
        fileName: "index",
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          exports: "named",
          globals: {
            vue: "vue",
          },
        },
      },
    },
  })
);
