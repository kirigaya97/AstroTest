import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astrotesteanding.netlify.app/",
  integrations: [preact()]
});