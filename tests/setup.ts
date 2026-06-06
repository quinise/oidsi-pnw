import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import { h, type VNodeChild } from 'vue'

vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn().mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ status: 200, text: 'OK' }), 150)),
    ),
  },
}))

config.global.stubs = {
  ...(config.global.stubs || {}),
  RouterLink: {
    props: {
      to: {
        type: [String, Object],
        default: '#',
      },
      custom: {
        type: Boolean,
        default: false,
      },
    },
    setup(
      props: { to: string | Record<string, unknown>; custom: boolean },
      {
        slots,
        attrs,
      }: {
        slots: { default?: (props?: Record<string, unknown>) => Exclude<VNodeChild, void> }
        attrs: Record<string, unknown>
      },
    ) {
      const href = typeof props.to === 'string' ? props.to : '#'
      const navigate = (event?: Event) => event?.preventDefault()
      const slotProps = { href, navigate, isActive: false, isExactActive: false, route: props.to }

      return () => {
        if (props.custom) {
          return slots.default ? slots.default(slotProps) : null
        }

        return h(
          'a',
          { ...attrs, href, onClick: navigate },
          slots.default ? slots.default() : undefined,
        )
      }
    },
  },
}