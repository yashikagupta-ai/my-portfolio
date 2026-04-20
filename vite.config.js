import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Replace 'my-portfolio' with your repository name
  server: {
    port: 5173,
  },
})