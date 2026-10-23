import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: '/' — for custom domain deployment (dreamsmakerstudio.in)
// Change base to '/repo-name/' if deploying to a GitHub project page
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
