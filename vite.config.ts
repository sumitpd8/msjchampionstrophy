import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',  // 👈 Proxy for API
      '/create-order': 'http://localhost:5000'  // 👈 Proxy for Razorpay order route
    },
  },
});
