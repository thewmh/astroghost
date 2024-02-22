import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  build: {
    // assetsPrefix: '.',
  },
  // base: './',
  vite: {
    // build: {
    //   rollupOptions: {
    //     plugins: [
    //       copy({
    //         targets: [
    //           { src: '../content/images/**/*', dest: 'src/assets' }
    //         ],
    //         verbose: true,
    //         hook: 'writeBundle'
    //       })  
    //     ]
    //   }
    // }
  }
});