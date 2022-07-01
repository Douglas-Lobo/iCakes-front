<template>
  <b-button
    :size="size"
    :type="type"
    :icon-right="icon"
    @click="delIngredient()"
  />
</template>

<script>
export default {
  props: {
    ingredientId: {
      type: Number,
      required: true,
    },
    budgetId: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    async delIngredient() {
      try {
        await this.$store.dispatch('ingredients/destroyBudgetIngredient', {
          ingredientId: this.ingredientId,
          budgetId: this.budgetId,
        })
        await this.$store.dispatch('budgets/getBudget', this.budgetId)
        this.$buefy.notification.open({
          message: 'Ingrediente excluido com sucesso',
          type: 'is-success',
        })
      } catch (error) {
        return error.response
      }
    },
  },
}
</script>

<style></style>
