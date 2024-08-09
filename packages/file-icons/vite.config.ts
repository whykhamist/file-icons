import { resolve } from "node:path";
import { defineConfig, mergeConfig, searchForWorkspaceRoot } from "vite";
import vue from "@vitejs/plugin-vue";
import conf from "../../vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  conf,
  defineConfig({
    plugins: [vue()],
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
    },
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
