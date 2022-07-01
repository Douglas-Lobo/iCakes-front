<template>
  <div>
    <form @submit.prevent="onSubmit">
      <b-field>
        <b-input
          v-model.trim="form.username"
          placeholder="Username"
          type="text"
          icon="account"
          required
        >
        </b-input>
      </b-field>
      <b-field>
        <b-input
          v-model.trim="form.password"
          type="password"
          placeholder="Senha"
          password-reveal
          icon="lock"
          required
        >
        </b-input>
      </b-field>
      <b-field>
        <b-checkbox v-model="rememberMe" size="is-small"
          >Lembrar de mim</b-checkbox
        >
      </b-field>
      <div class="buttons">
        <b-button
          :loading="loading"
          native-type="submit"
          type="is-primary"
          expanded
          >Entrar</b-button
        >
      </div>
    </form>
    <nuxt-link to="index">Esqueci a senha</nuxt-link>
    <div class="mt-2">
      <span>Ainda sem conta?</span>
      <nuxt-link :to="{ name: 'sign-up' }">Cadastre-se</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rememberMe: false,
      loading: false,
    }
  },
  created() {
    const username = this.$cookies.get('rememberMe') || null
    if (username) {
      this.rememberMe = true
      this.form.username = username
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true
        this.rememberMe
          ? this.$cookies.set('rememberMe', this.form.username)
          : this.$cookies.remove('rememberMe')

        await this.$store.dispatch('users/login', this.form)
        this.$router.push({ name: 'index' })
      } catch ({ response }) {
        const msg =
          response.data.errors[0].message ===
          'E_INVALID_AUTH_UID: User not found'
            ? 'Usuário não cadastrado'
            : 'Sua senha não confere'

        this.$buefy.notification.open({
          message: msg,
          type: 'is-danger',
        })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
E_INVALID_AUTH_UID: User not found E_INVALID_AUTH_PASSWORD: Password mis-match
