import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  adapter: vercel({ analytics: true }),
  vite: {
    define: {
      "import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID": JSON.stringify(
        process.env.VERCEL_ANALYTICS_ID,
      ),
    },
  },
  // serverOptions: {
  //   headers: {
  //     "Content-Security-Policy":
  //       "default-src 'self'; script-src 'self' https://vitals.vercel-insights.com; style-src 'self'; img-src 'self' https://youtube.com;",
  //   },
  // },
});
