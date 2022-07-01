export default {
  async login({ commit }, payload) {
    const { username, password } = payload
    await this.$axios
      .$post('/auth', {
        password,
        username,
      })
      .then((res) => {
        const { token } = res

        this.app.$cookies.set('token', `bearer ${token}`)
        commit('SET_TOKEN', token)
      })
  },

  async getUser({ commit }, payload) {
    await this.$axios
      .$get('/auth/user')
      .then((res) => {
        commit('SET_USER', res)
        commit('SET_TOKEN', payload)
      })
      .catch((error) => {
        return error
      })
  },
}
