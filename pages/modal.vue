<template>
  <section>
    <b-button
      label="Launch component modal"
      type="is-primary"
      size="is-medium"
      @click="isComponentModalActive = true"
    />

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :can-cancel="['escape', 'x']"
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <div class="card">
        <div class="card-content">Ola</div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing',
      },
    }
  },
}
</script>
