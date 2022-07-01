export default {
  async getKey({ commit }, key) {
    await this.$axios.$get(`/register/${key}`).then((res) => {
      commit('SET_USER', res)
    })
  },
  async storeUser(payload) {
    console.log(payload)
    const { email, redirectUrl } = payload
    await this.$axios.$post(`/register/`, {
      email,
      redirectUrl,
    })
  },
}
