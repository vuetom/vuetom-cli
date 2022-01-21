import path from 'path'
import { defineConfig } from 'vite'
import { projRoot } from './.vitepress/utils/paths'
import type { Alias } from 'vite'

const alias: Alias[] = []

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: [projRoot],
    },
  },
  // resolve: {
  //   alias,
  // },
  // plugins: [Inspect()],
  optimizeDeps: {
    include: ['@vueuse/core', 'dayjs'],
  },
})
