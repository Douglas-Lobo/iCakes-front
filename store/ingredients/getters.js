export default {
  $getBudgetsIngredients(state) {
    return state.ingredients
  },
  $getBudgetsIngredientsWithPriceSignAndUnit(state) {
    return state.ingredients.data.map((ingredient) => {
      return {
        ...ingredient,
        initialAmount: `${ingredient.initialAmount}${ingredient.usedUnit}`,
        usedAmount: `${ingredient.usedAmount}${ingredient.usedUnit}`,
        cost: `R$ ${ingredient.cost}`,
        total: `R$ ${ingredient.total}`,
      }
    })
  },
  $getLoading(state) {
    return state.loading
  },
}
