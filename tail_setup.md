1. npm install tailwindcss @tailwindcss/vite
2. vite.config.ts : 
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
3. Index.css : @import "tailwindcss";