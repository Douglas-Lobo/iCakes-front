<template>
  <form @submit.prevent="onSubmit()">
    <b-field>
      <b-input :value="$getUser.email" type="email" icon="email" disabled>
      </b-input>
    </b-field>
    <b-field>
      <b-input
        v-model="form.name"
        placeholder="Digite seu nome"
        icon="card-account-details"
        type="text"
        required
      ></b-input>
    </b-field>
    <b-field>
      <b-input
        v-model="form.username"
        placeholder="Digite um nome de usuario"
        icon="account"
        required
      ></b-input>
    </b-field>
    <b-field>
      <b-input
        v-model.trim="form.password"
        type="password"
        placeholder="Digite uma senha"
        password-reveal
        validation-message="Deve conter no minino 8 digitos"
        icon="lock"
        minlength="8"
        required
      >
      </b-input>
    </b-field>
    <b-field>
      <b-input
        v-model.trim="form.confirmPassword"
        type="password"
        placeholder="Confirme sua senha"
        validation-message="Deve conter no minino 8 digitos"
        password-reveal
        icon="lock"
        minlength="8"
        required
      >
      </b-input>
    </b-field>
    <b-button :loading="loading" native-type="submit" type="is-primary" expanded
      >Finalizar Cadastro</b-button
    >
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: 'Chupeta da silva',
        username: 'chuchu',
        password: 'secretdemais',
        confirmPassword: 'secretdemais',
      },
      loading: false,
    }
  },
  computed: {
    ...mapGetters('register', ['$getUser']),
  },
  methods: {
    callNotification(message, type, duration) {
      return this.$buefy.notification.open({
        message,
        type,
        duration,
        queue: false,
      })
    },
    async onSubmit() {
      try {
        this.loading = true
        if (this.form.password !== this.form.confirmPassword)
          return this.callNotification(
            'Senhas não coincidem',
            'is-danger',
            3000
          )
        await this.$axios
          .put(`/register/${this.$route.params.key}`, {
            name: this.form.name,
            username: this.form.username,
            password: this.form.password,
          })
          .then(() => {
            this.callNotification(
              'Cadastro realizado com sucesso! Faça o login utilizando seu Username e senha',
              'is-success',
              6000
            )
          })
        this.$router.push({ name: 'login' })
      } catch ({ response }) {
        response.data.errors.forEach((el) => {
          this.callNotification(`${el.field}: ${el.message}`, 'is-danger', 4000)
        })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
