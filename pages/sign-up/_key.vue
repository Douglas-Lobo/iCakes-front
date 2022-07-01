<template>
  <SignUpCompleteTemplate />
</template>

<script>
export default {
  layout: 'login',
  async asyncData({ store, params }) {
    try {
      await store.dispatch('register/getKey', params.key)
    } catch (e) {}
  },
}
</script>

<style></style>
