import { fileURLToPath, URL } from "url";
import { defineConfig, mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import conf from "../../vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  conf,
  defineConfig({
    base: "/file-icons/",
    resolve: {
      alias: [
        {
          find: "@vue/runtime-core",
          replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
        },
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
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
    build: {
      sourcemap: false,
      emptyOutDir: true,
      outDir: "../../docs",
      rollupOptions: {
        output: {
          chunkFileNames: `[hash].js`,
          assetFileNames: `assets/[hash].[ext]`,
        },
      },
    },
    plugins: [vue()],
  })
);
