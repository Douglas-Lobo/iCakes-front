export default {
  SET_BUDGETS(state, payload) {
    state.budgets = payload
  },
  SET_BUDGET(state, payload) {
    state.budget = payload
  },
  SET_NEWBUDGET(state, payload) {
    state.budgets.data.unshift(payload)
  },
  SET_REMOVEBUDGET(state, payload) {
    const index = state.budgets.data.findIndex(
      (budget) => budget.id === payload
    )
    state.budgets.data.splice(index, 1)
  },
}
