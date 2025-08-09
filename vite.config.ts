import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' // Было просто import path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // убери ./
    },
  },
})