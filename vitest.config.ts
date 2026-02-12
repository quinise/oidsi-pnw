import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: '@composables', replacement: fileURLToPath(new URL('./src/composables', import.meta.url)) }
    ]
  },
  test: { // TODO: Config wide not being applied
    include: ['tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'happy-dom'
  }
})
