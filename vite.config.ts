import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/client',
  base: '/mon_portfolio/',
  publicDir: '../../public',
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
