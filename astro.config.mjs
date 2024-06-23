import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [svelte()]
});