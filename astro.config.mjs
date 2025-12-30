// @ts-check
import { defineConfig, fontProviders} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Ojuju", // Replace with your font name
      cssVariable: "--font-ojuju",
      // Optionally define weights, styles, etc.
      weights: [400, 700],}]}});