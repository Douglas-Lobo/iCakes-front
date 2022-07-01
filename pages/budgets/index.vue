<template>
  <IndexTemplate />
</template>

<script>
export default {
  layout: 'site',
  async asyncData({ store }) {
    await store.dispatch('budgets/getAll')
  },
}
</script>

<style></style>
