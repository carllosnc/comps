// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});