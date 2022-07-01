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
    ingredientName: {
      type: String,
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
    delIngredient() {
      this.$buefy.dialog.confirm({
        title: `Excluir Ingrediente - ${this.ingredientName.toUpperCase()}`,
        message: `Deseja realmente excluir este ingrediente?`,
        confirmText: 'Excluir',
        cancelText: 'Não',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
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
      })
    },
  },
}
</script>

<style></style>
