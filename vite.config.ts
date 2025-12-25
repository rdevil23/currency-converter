import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/currency-converter/',
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
