import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
      features: '/src/features',
      assets: '/src/assets',
      styles: '/src/styles',
    },
  },
});
