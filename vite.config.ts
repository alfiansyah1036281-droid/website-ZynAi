import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    nitro: true,
  },
  vite: {
    plugins: [netlify()],
  },
});
