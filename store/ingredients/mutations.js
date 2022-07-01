export default {
  SET_BUDGET_INGREDIENTS(state, ingredients) {
    state.ingredients = ingredients
  },
  SET_NEW_BUDGET_INGREDIENT(state, ingredient) {
    state.ingredients.data.push(ingredient)
  },
  SET_DESTROY_BUDGET_INGREDIENT(state, ingredientId) {
    const index = state.ingredients.data.findIndex(
      (ingredient) => ingredient.id === ingredientId
    )
    state.ingredients.data.splice(index, 1)
  },

  SET_LOADING(state, value) {
    state.loading = value
  },
}
