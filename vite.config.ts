import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/b2api': {
        target: 'https://awx.pro',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
