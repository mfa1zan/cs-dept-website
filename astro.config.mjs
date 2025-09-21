// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
        '@content': '/src/content',
      },
    },
  },
});
