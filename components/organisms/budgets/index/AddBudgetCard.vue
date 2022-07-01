<template>
  <div class="column is-6-tablet is-4-desktop is-3-widescreen">
    <div :class="background" class="card">
      <div v-if="hideAddCard" class="card-content has-text-centered">
        <b-button
          class="has-text-white"
          type="is-ghost"
          size="is-large"
          icon-right="plus"
          @click="hideAddCard = false"
        />
      </div>
      <div v-else class="card-content has-text-centered">
        <form @submit.prevent="onSubmit()">
          <b-field>
            <b-input
              v-model="form.name"
              placeholder="Nome"
              required
              icon="clipboard-text-outline"
            ></b-input>
          </b-field>
          <b-field>
            <b-input
              v-model="form.profitPercent"
              min="0"
              type="number"
              placeholder="Lucro"
              icon="percent"
              required
            ></b-input>
          </b-field>
          <b-field>
            <b-input
              v-model="form.description"
              placeholder="Descrição"
              icon="text"
            ></b-input>
          </b-field>
          <div class="buttons">
            <b-button native-type="submit" type="is-primary" expanded
              >Criar</b-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: 'Orçamento da Maria',
        description: 'Lorem Ipsun Dolar amet',
        profitPercent: '',
      },
      hideAddCard: true,
    }
  },
  computed: {
    background() {
      if (this.hideAddCard)
        return 'is-flex is-justify-content-center is-align-items-center has-background-primary has-text-white'
      return ''
    },
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('budgets/storeBudget', this.form)
        this.$buefy.notification.open({
          message: 'Orçamento adicionado com sucesso!',
          type: 'is-success',
        })
        this.hideAddCard = false
      } catch ({ response }) {
        this.$buefy.notification.open({
          message: response.data.errors[0].message,
          type: 'is-danger',
        })
      }
    },
  },
}
</script>

<style>
.card {
  height: 100%;
}
</style>
