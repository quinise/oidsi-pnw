import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReducedMotion() {
  const isReduced = ref(false)
  let mql: MediaQueryList | null = null

  const update = () => { isReduced.value = !!mql?.matches }
  onMounted(() => {
    mql = window.matchMedia?.('(prefers-reduced-motion: reduce)') ?? null
    update()
    mql?.addEventListener('change', update)
  })
  onBeforeUnmount(() => mql?.removeEventListener('change', update))

  return { isReduced }
}