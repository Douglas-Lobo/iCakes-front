<template>
  <button :class="dinClass">
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
}
</script>

<style></style>
