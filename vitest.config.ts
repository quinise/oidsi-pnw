import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: '@composables', replacement: fileURLToPath(new URL('./src/composables', import.meta.url)) }
    ]
  },
  test: {
    include: ['tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./tests/setup.ts']
  }
})
