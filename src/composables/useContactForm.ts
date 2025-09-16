import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const formEl = ref<HTMLFormElement | null>(null)
  const fieldSr = ref<HTMLElement | null>(null)

  const submitting = ref(false)
  const status = reactive({ type: '', message: '' })
  const invalidFields = reactive({ name: false, email: false, message: false })

  const contactNumber = Math.floor(Math.random() * 1_000_000)
    .toString()
    .padStart(6, '0')

  function touch(field: 'name' | 'email' | 'message') {
    if (!formEl.value) return
    const map: Record<string, HTMLInputElement | HTMLTextAreaElement | null> = {
      name: formEl.value.querySelector('#cf-name'),
      email: formEl.value.querySelector('#cf-email'),
      message: formEl.value.querySelector('#cf-message'),
    }
    const el = map[field]
    if (!el) return

    const isInvalid = !el.checkValidity()
    invalidFields[field] = isInvalid

    if (isInvalid && fieldSr.value) {
      const errId = el.getAttribute('aria-errormessage')
      const errEl = errId ? document.getElementById(errId) : null
      fieldSr.value.textContent =
        errEl?.textContent?.trim() || 'Please correct this field.'
    } else if (fieldSr.value) {
      fieldSr.value.textContent = ''
    }
  }

  function onInvalid() {
    touch('name')
    touch('email')
    touch('message')
  }

  function resetValidation() {
    invalidFields.name = invalidFields.email = invalidFields.message = false
    formEl.value?.classList.remove('was-validated')
  }

  async function onSubmit() {
    if (!formEl.value) return

    const honey = formEl.value.querySelector<HTMLInputElement>('input[name="website"]')
    if (honey && honey.value) {
      status.type = 'success'
      status.message = 'Thanks! Your message has been received.'
      formEl.value.reset()
      resetValidation()
      return
    }

    if (!formEl.value.checkValidity()) {
      onInvalid()
      formEl.value.classList.add('was-validated')
      status.type = 'error'
      status.message = 'Please fix the highlighted fields.'
      return
    }

    submitting.value = true
    status.type = ''
    status.message = ''

    try {
      await emailjs.sendForm(
        'OIDSIPNWemailService',
        'template_9wiizu7',
        formEl.value,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      status.type = 'success'
      status.message = 'Message sent! We’ll get back to you shortly.'
      formEl.value.reset()
      resetValidation()
    } catch (err) {
      status.type = 'error'
      status.message =
        'Sorry—something went wrong sending your message. Please try again, or call/text instead.'
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