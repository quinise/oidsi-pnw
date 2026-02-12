<template>
  <form
    id="contact-form"
    ref="formEl"
    class="needs-validation"
    novalidate
    @submit.prevent="onSubmit"
    @invalid="onInvalid"
  >
    <!-- Status messages (SR-friendly) -->
    <div class="mb-3" aria-live="polite" aria-atomic="true">
      <div
          v-if="status.type === 'success'"
          data-testid="contact-success"
          role="status"
          aria-live="polite"
          class="alert alert-success py-2 mb-2"
        >
          {{ status.message || 'Message sent! We’ll get back to you shortly.' }}
        </div>
        <div
          v-else-if="status.type === 'error'"
          role="alert"
          aria-live="polite"
          data-testid="contact-error"
          class="alert alert-danger py-2 mb-2"
        >
          {{ status.message || 'Please fix the highlighted fields.' }}
        </div>
    </div>

    <!-- Hidden fields -->
    <input type="hidden" name="contact_number" :value="contactNumber" />
    <div class="d-none" aria-hidden="true">
      <label></label>
      <input type="text" name="website" tabindex="-1" autocomplete="off" />
    </div>

    <!-- Name -->
    <div class="mb-3 text-start">
      <label for="cf-name" class="form-label">Name</label>
      <input
        id="cf-name"
        name="user_name"
        type="text"
        class="form-control"
        required
        :class="{'is-invalid': invalidFields.name}"
        :aria-invalid="invalidFields.name ? 'true' : 'false'"
        aria-errormessage="cf-name-error"
        aria-describedby="cf-name-error"
        @blur="touch('name')"
      />
      <div id="cf-name-error" class="invalid-feedback" role="alert" aria-live="polite">
        Please enter your name.
      </div>
    </div>

    <!-- Email -->
    <div class="mb-3 text-start">
      <label for="cf-email" class="form-label">Email</label>
      <input
        id="cf-email"
        name="user_email"
        type="email"
        class="form-control"
        required
        inputmode="email"
        autocomplete="email"
        :class="{'is-invalid': invalidFields.email}"
        :aria-invalid="invalidFields.email ? 'true' : 'false'"
        aria-errormessage="cf-email-error"
        aria-describedby="cf-email-help cf-email-error"
        @blur="touch('email')"
      />
      <div id="cf-email-help" class="form-text">We’ll only use this to reply.</div>
      <div id="cf-email-error" class="invalid-feedback" role="alert" aria-live="polite">
        Please enter a valid email address.
      </div>
    </div>

    <!-- Message -->
    <div class="mb-3 text-start">
      <label for="cf-message" class="form-label">Message</label>
      <textarea
        id="cf-message"
        name="message"
        class="form-control"
        rows="6"
        required
        :class="{'is-invalid': invalidFields.message}"
        :aria-invalid="invalidFields.message ? 'true' : 'false'"
        aria-errormessage="cf-message-error"
        aria-describedby="cf-message-error"
        @blur="touch('message')"
      ></textarea>
      <div id="cf-message-error" class="invalid-feedback" role="alert" aria-live="polite">
        Please include a brief message.
      </div>
    </div>

    <!-- Submit -->
    <div class="d-grid d-sm-flex gap-2 justify-content-sm-end">
      <button
        type="submit"
        class="btn btn-success fw-semibold btn-contrast"
        :disabled="submitting"
        :aria-busy="submitting ? 'true' : 'false'"
      >
        <span v-if="submitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        {{ submitting ? 'Sending…' : 'Send' }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { useContactForm } from '@/composables/useContactForm';

export default {
  name: 'ContactFormComponent',
  setup() {
    const {
      formEl,
      submitting,
      status,
      invalidFields,
      contactNumber,
      touch,
      onInvalid,
      onSubmit,
    } = useContactForm();

    return {
      formEl,
      submitting,
      status,
      invalidFields,
      contactNumber,
      touch,
      onInvalid,
      onSubmit,
    };
  }
};
</script>

<style scoped>
  .btn-contrast { color: #ffffff !important; font-weight: 700; letter-spacing: .2px; }
</style>