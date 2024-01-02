import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  vite: {
    define: {
      "import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID": JSON.stringify(
        process.env.VERCEL_ANALYTICS_ID,
      ),
    },
  },
  // Add the headers configuration to set CSP
  serverOptions: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';",
    },
  },
});
