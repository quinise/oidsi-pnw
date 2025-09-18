// src/composables/useContactForm.ts
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const formEl = ref<HTMLFormElement | null>(null)
  const fieldSr = ref<HTMLElement | null>(null)

  const submitting = ref(false)
  const status = ref<{ type: '' | 'success' | 'error'; message?: string }>({ type: '' })
  const invalidFields = reactive<{ name: boolean; email: boolean; message: boolean }>({
    name: false,
    email: false,
    message: false,
  })

  // Used by EmailJS templates as a tracking number
  const contactNumber = Math.floor(Math.random() * 1_000_000)
    .toString()
    .padStart(6, '0')

  function touch(field: 'name' | 'email' | 'message') {
    if (!formEl.value) return
    const elMap: Record<typeof field, HTMLInputElement | HTMLTextAreaElement | null> = {
      name: formEl.value.querySelector('#cf-name'),
      email: formEl.value.querySelector('#cf-email'),
      message: formEl.value.querySelector('#cf-message'),
    }
    const el = elMap[field]
    if (!el) return

    const isInvalid = !el.checkValidity()
    invalidFields[field] = isInvalid

    // SR-only live update for the field error
    if (fieldSr.value) {
      if (isInvalid) {
        const errId = el.getAttribute('aria-errormessage')
        const errEl = errId ? document.getElementById(errId) : null
        fieldSr.value.textContent = errEl?.textContent?.trim() || 'Please correct this field.'
      } else {
        fieldSr.value.textContent = ''
      }
    }
  }

  function onInvalid() {
    touch('name')
    touch('email')
    touch('message')
    // Ensure a global, visible error banner appears
    status.value = { type: 'error', message: 'Please fix the highlighted fields.' }
  }

  function resetValidation() {
    invalidFields.name = invalidFields.email = invalidFields.message = false
    formEl.value?.classList.remove('was-validated')
  }

  async function onSubmit(e?: SubmitEvent) {
    e?.preventDefault()
    const form = formEl.value
    if (!form) return

    // Honeypot: treat as success but skip sending
    const honey = form.querySelector<HTMLInputElement>('input[name="website"]')
    if (honey && honey.value) {
      status.value = { type: 'success', message: 'Thanks! Your message has been received.' }
      form.reset()
      resetValidation()
      return
    }

    // Native validity gate
    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      onInvalid()
      return
    }

    submitting.value = true
    status.value = { type: '' }

    try {
      const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env

      if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error('Email service not configured')
      }

      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      )

      status.value = { type: 'success', message: 'Message sent! We’ll get back to you shortly.' }
      form.reset()
      resetValidation()
    } catch (err) {
      status.value = {
        type: 'error',
        message: 'We could not send your message right now. Please try again later.',
      }
    } finally {
      submitting.value = false
    }
  }

  return {
    formEl,
    fieldSr,
    submitting,
    status,
    invalidFields,
    contactNumber,
    touch,
    onInvalid,
    onSubmit,
  }
}