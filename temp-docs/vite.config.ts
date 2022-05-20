import { defineConfig } from 'vite'
import { projRoot } from './.vitepress/utils/paths'

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: [projRoot]
    }
  },
  optimizeDeps: {
    include: ['@vueuse/core']
  }
})
