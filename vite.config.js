import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const enableWatching = process.env.VITE_ENABLE_WATCH === '1';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: '0.0.0.0',
    watch: enableWatching
      ? { usePolling: true, interval: 1000 }
      : null,
  },
  build: {
    outDir: 'dist',
  },
});
