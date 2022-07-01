export default function ({ app, $axios, redirect, error }) {
  $axios.onRequest(() => {
    const token = app.$cookies.get('token')
    $axios.setHeader('Authorization', token)
  })

  $axios.onError((e) => {
    const code = e.response.status
    if (code === 401) {
      app.$cookies.set('token', null)
    } else if (code === 404) {
      error({ statusCode: 404, message: 'Nao encontrado!' })
    }
  })
}
