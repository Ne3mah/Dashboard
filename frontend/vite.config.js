import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import frappeui from "frappe-ui/vite"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
		outDir: "../dashboard/public/frontend",
		emptyOutDir: true,
		target: "es2015",
    commonjsOptions: {
      include: [/tailwind.config.js/, /node_modules/],
    }
  },
  plugins: [
    vue(), frappeui(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [
      'feather-icons',
      'showdown',
      'tailwind.config.js',
    ],
  },
})
