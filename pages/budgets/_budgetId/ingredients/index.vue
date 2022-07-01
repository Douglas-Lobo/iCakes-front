<template>
  <IngredientsListTemplate />
</template>

<script>
export default {
  name: 'BudgetsIngredients',
  async asyncData({ store, params }) {
    await store.dispatch('ingredients/getBudgetsIngredients', params.budgetId)
    await store.dispatch('budgets/getBudget', params.budgetId)
  },
}
</script>

<style></style>
