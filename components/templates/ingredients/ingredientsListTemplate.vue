<template>
  <div>
    <IngredientsList
      :budgets-ingredients="$getBudgetsIngredientsWithPriceSignAndUnit"
      :loading="$getLoading"
    />
    <Pagination
      module="ingredients"
      :total="$getBudgetsIngredients.meta.total"
      :per-page="$getBudgetsIngredients.meta.per_page"
      :current="$getBudgetsIngredients.meta.current_page"
    />
    <StoreIngredient />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IngredientsListTemplate',
  computed: {
    ...mapGetters('ingredients', [
      '$getBudgetsIngredientsWithPriceSignAndUnit',
      '$getBudgetsIngredients',
      '$getLoading',
    ]),
    ...mapGetters('budgets', ['$getBudget']),
  },
}
</script>

<style></style>
