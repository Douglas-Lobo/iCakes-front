<template>
  <form @submit.prevent="onSubmit()">
    <b-field>
      <b-input
        v-model="form.email"
        placeholder="Email"
        type="email"
        icon="email"
        icon-right="close-circle"
        icon-right-clickable
        validation-message="Insira um email válido"
        required
        @icon-right-click="clearIconClick"
      >
      </b-input>
    </b-field>
    <b-button :loading="loading" native-type="submit" type="is-primary" expanded
      >Cadastrar email</b-button
    >
    <div class="mt-2 is-flex is-justify-content-center">
      <nuxt-link :to="{ name: 'login' }">Página de login</nuxt-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: 'w@w.com',
        redirectUrl: '/sign-up/',
      },
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        await this.$axios.$post(`/register/`, {
          email: this.form.email,
          redirectUrl: `${process.env.baseUrl}${this.form.redirectUrl}`,
        })
        this.$buefy.notification.open({
          message: `Um email de verificação foi enviado para o endereço - ${this.form.email}`,
          type: 'is-success',
          duration: 6000,
        })
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
    clearIconClick() {
      this.email = ''
    },
  },
}
</script>

<style></style>
