export default {
  async storeBudgetIngredient({ commit }, ingredient) {
    const { budgetId, name, initialAmount, cost, usedAmount, usedUnit } =
      ingredient
    await this.$axios
      .$post(`budgets/${budgetId}/ingredients`, {
        name,
        initialAmount,
        cost,
        usedAmount,
        usedUnit,
      })
      .then((res) => {
        commit('SET_NEW_BUDGET_INGREDIENT', res)
      })
  },

  async changePage({ commit }, payload) {
    const { budgetId, page } = payload
    await this.$axios
      .$get(`/budgets/${budgetId}/ingredients?page=${page}`)
      .then((res) => {
        commit('SET_BUDGET_INGREDIENTS', res)
      })
  },

  async destroyBudgetIngredient({ commit }, payload) {
    const { budgetId, ingredientId } = payload
    commit('SET_LOADING', true)
    await this.$axios
      .delete(`budgets/${budgetId}/ingredients/${ingredientId}`)
      .then((_) => {
        commit('SET_DESTROY_BUDGET_INGREDIENT', ingredientId)
        commit('SET_LOADING', false)
      })
  },
  async getBudgetsIngredients({ commit }, budgetId) {
    commit('SET_LOADING', true)
    await this.$axios.$get(`budgets/${budgetId}/ingredients`).then((res) => {
      commit('SET_BUDGET_INGREDIENTS', res)
      commit('SET_LOADING', false)
    })
  },
}
