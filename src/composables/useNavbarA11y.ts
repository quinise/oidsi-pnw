import { ref, onMounted, onBeforeUnmount } from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'

export function useNavbarA11y(menuId: string) {
  const isOpen = ref(false)
  const navToggler = ref<HTMLButtonElement | null>(null)
  const navMenu = ref<HTMLElement | null>(null)
  let lastTrigger: HTMLElement | null = null
  let collapseInstance: Collapse | null = null

  const getFocusable = (root: HTMLElement) => {
    const selectors = [
      'a[href]:not([tabindex="-1"])',
      'button:not([disabled]):not([tabindex="-1"])',
      'input:not([disabled]):not([tabindex="-1"])',
      'select:not([disabled]):not([tabindex="-1"])',
      'textarea:not([disabled]):not([tabindex="-1"])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',')
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(selectors))
    return nodes.filter(el => el.offsetParent !== null || getComputedStyle(el).position === 'fixed')
  }

  const setAria = (open: boolean) => {
    navToggler.value?.setAttribute('aria-expanded', open ? 'true' : 'false')
    if (!navMenu.value) return
    if (open) {
      navMenu.value.setAttribute('role', 'dialog')
      navMenu.value.setAttribute('aria-modal', 'true')
      navMenu.value.removeAttribute('aria-hidden') // ensure not hidden when open
      navMenu.value.setAttribute('tabindex', '-1')
    } else {
      navMenu.value.removeAttribute('role')
      navMenu.value.removeAttribute('aria-modal')
      navMenu.value.setAttribute('aria-hidden', 'true')
      navMenu.value.removeAttribute('tabindex')
    }
  }

  const focusFirstItem = () => {
    if (!navMenu.value) return
    const items = getFocusable(navMenu.value)
    if (items.length) items[0].focus()
    else navMenu.value.focus()
  }

  // called by Bootstrap events
  const onShown = () => {
    isOpen.value = true
    lastTrigger = (document.activeElement as HTMLElement) || navToggler.value
    setAria(true)
    requestAnimationFrame(focusFirstItem)
  }
  const onHidden = () => {
    isOpen.value = false
    setAria(false)
    requestAnimationFrame(() => lastTrigger?.focus())
  }

  const trapFocus = (e: KeyboardEvent) => {
    if (!isOpen.value || !navMenu.value) return
    if (e.key !== 'Tab') return
    const focusables = getFocusable(navMenu.value)
    if (!focusables.length) {
      e.preventDefault()
      navMenu.value.focus()
      return
    }
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement as HTMLElement | null
    const backward = e.shiftKey
    if (!active) return
    if (!backward && active === last) { e.preventDefault(); first.focus() }
    if (backward && active === first) { e.preventDefault(); last.focus() }
  }

  const keydownHandler = (e: KeyboardEvent) => {
    if (!isOpen.value) return
    if (e.key === 'Escape') {
      e.stopPropagation()
      collapseInstance?.hide()       // use the instance instead of clicking
      return
    }
    trapFocus(e)
  }

  const onDocumentPointerDown = (e: PointerEvent) => {
    if (!isOpen.value) return
    const target = e.target as Node
    const insideMenu = !!navMenu.value?.contains(target)
    const onToggler = !!navToggler.value?.contains(target)
    if (!insideMenu && !onToggler) collapseInstance?.hide()
  }

  onMounted(() => {
    navMenu.value = document.getElementById(menuId) as HTMLElement | null
    if (!navMenu.value) return

    // Create one collapse instance (don’t auto-toggle)
    collapseInstance = Collapse.getOrCreateInstance(navMenu.value, { toggle: false })

    // Bootstrap events
    navMenu.value.addEventListener('shown.bs.collapse', onShown as any)
    navMenu.value.addEventListener('hidden.bs.collapse', onHidden as any)

    document.addEventListener('keydown', keydownHandler)
    document.addEventListener('pointerdown', onDocumentPointerDown, true)

    setAria(false)
  })

  onBeforeUnmount(() => {
    if (navMenu.value) {
      navMenu.value.removeEventListener('shown.bs.collapse', onShown as any)
      navMenu.value.removeEventListener('hidden.bs.collapse', onHidden as any)
    }
    document.removeEventListener('keydown', keydownHandler)
    document.removeEventListener('pointerdown', onDocumentPointerDown, true)
  })

  // expose the instance-controlled close for callers
  const hideForMobile = () => {
    if (!navMenu.value || !collapseInstance) return
    if (window.matchMedia('(min-width: 992px)').matches) return
    if (!navMenu.value.classList.contains('show') && !navMenu.value.classList.contains('collapsing')) return
    if (navMenu.value.classList.contains('collapsing')) {
      queueMicrotask(() => collapseInstance?.hide())
    } else {
      collapseInstance.hide()
    }
  }

  const toggle = () => {                           // <-- expose toggle for the hamburger
    if (!collapseInstance) return
    collapseInstance.toggle()
  }

  return { isOpen, navToggler, navMenu, hideForMobile, toggle }
}
