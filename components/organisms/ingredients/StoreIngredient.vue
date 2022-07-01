<template>
  <div>
    <b-button
      type="is-primary"
      size="is-small"
      expanded
      icon-left="plus"
      @click="show = !show"
      >Add Ingrediente</b-button
    >
    <form v-if="show" @submit.prevent="onSubmit()">
      <div class="columns">
        <div class="column">
          <b-field label="Nome">
            <b-input v-model="form.name"></b-input>
          </b-field>
          <b-field label="Quantia inicial">
            <b-input v-model="form.initialAmount"></b-input>
          </b-field>
          <b-field label="Unidade de medida">
            <b-input v-model="form.usedUnit"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Custo">
            <b-input v-model="form.cost"></b-input>
          </b-field>
          <b-field label="Quantia usada">
            <b-input v-model="form.usedAmount"></b-input>
          </b-field>
        </div>
      </div>
      <b-button
        :loading="loading"
        native-type="submit"
        type="is-primary"
        expanded
        size="is-small"
        >Adicionar ingrediente</b-button
      >
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        budgetId: this.$route.params.budgetId,
        name: 'Aveia',
        initialAmount: 500,
        cost: 8,
        usedAmount: 200,
        usedUnit: 'g',
      },
      loading: false,
      show: false,
    }
  },
  computed: {
    ...mapGetters('budgets', ['$getBudget']),
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('ingredients/storeBudgetIngredient', this.form)
      await this.$store.dispatch('budgets/getBudget', this.form.budgetId)
    },
  },
}
</script>

<style></style>
