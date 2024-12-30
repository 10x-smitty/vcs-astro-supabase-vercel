// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), alpinejs(), react()],
  adapter: vercel(),
  output: 'server'
});