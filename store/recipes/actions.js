export default {
  async getAll({ commit }) {
    await this.$axios.$get('/recipes').then((res) => {
      commit('SET_RECIPES', res.data)
    })
  },
}
