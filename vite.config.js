import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'postcss',
  },
  server: {
    port: 3012,
    host: true, // Listen on all network interfaces
    open: true, // Automatically open browser
  },
})
