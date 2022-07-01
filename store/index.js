export const actions = {
  async nuxtServerInit({ dispatch }) {
    const token = this.app.$cookies.get('token')
    await dispatch('users/getUser', token)
  },
}
