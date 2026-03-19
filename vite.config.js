import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MuhammadAli-CS.github.io/', // Absolute base for GitHub Pages user/org repos
})
