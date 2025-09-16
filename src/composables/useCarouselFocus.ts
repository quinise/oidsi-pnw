import { ref, onMounted, onBeforeUnmount } from 'vue'
import Carousel from 'bootstrap/js/dist/carousel'

export function useCarouselFocus(carouselId: string) {
  const activeIndex = ref(0)
  let carousel: Carousel | null = null

  onMounted(() => {
    const el = document.getElementById(carouselId)
    if (el) {
      carousel = new Carousel(el)
      el.addEventListener('slid.bs.carousel', (event: any) => {
        activeIndex.value = event.to
      })
    }
  })

  onBeforeUnmount(() => {
    carousel?.dispose()
    carousel = null
  })

  return { activeIndex }
}