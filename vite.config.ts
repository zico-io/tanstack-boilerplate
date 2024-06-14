import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/public': path.resolve(__dirname, './public'),
    },
  },
})
