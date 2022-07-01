const route = '/budgets'
export default {
  async getAll({ commit }) {
    await this.$axios.$get(route).then((res) => {
      commit('SET_BUDGETS', res)
    })
  },

  async changePage({ commit }, page) {
    await this.$axios.$get(`${route}?page=${page}`).then((res) => {
      commit('SET_BUDGETS', res)
    })
  },

  async getBudget({ commit }, budgetId) {
    await this.$axios.$get(`${route}/${budgetId}`).then((res) => {
      commit('SET_BUDGET', res)
    })
  },
  async storeBudget({ commit }, payload) {
    const { name, description, profitPercent } = payload
    await this.$axios
      .$post(route, {
        name,
        description,
        profitPercent,
      })
      .then((res) => {
        commit('SET_NEWBUDGET', res)
      })
  },
  async updateBudget({ commit }, payload) {
    const { total, profit, cost } = payload.data
    const { budgetId } = payload

    await this.$axios
      .$put(`${route}/${budgetId}`, {
        total,
        profit,
        cost,
      })
      .then((res) => {})
  },
  async delBudget({ commit }, id) {
    await this.$axios.$delete(`${route}/${id}`).then(() => {
      commit('SET_REMOVEBUDGET', id)
    })
  },
}
