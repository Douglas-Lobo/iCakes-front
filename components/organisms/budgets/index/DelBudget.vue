<template>
  <button :class="dinClass" @click="delBudget()">
    <b-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    budgetId: {
      type: Number,
      required: true,
    },
    dinClass: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    async delBudget() {
      try {
        await this.$store.dispatch('budgets/delBudget', this.budgetId)
        this.$buefy.notification.open({
          message: 'Orçamento removido!',
          type: 'is-success',
        })
      } catch (error) {
        return error
      }
    },
  },
}
</script>

<style></style>
