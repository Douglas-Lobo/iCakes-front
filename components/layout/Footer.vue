<template>
  <footer
    class="flex justify-center items-center bg-slate-900 h-8 absolute bottom-0 w-full"
  >
    <p class="text-white text-sm">iCakes - {{ getCurrentYear }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
