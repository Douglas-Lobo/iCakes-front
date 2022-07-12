<template>
  <div class="flex justify-center items-center py-3 bg-slate-900 h-15">
    <div class="absolute cursor-pointer left-[1rem]" @click="toggleSidebar()">
      <b-icon class="menu-icon" type="is-white" icon="menu"></b-icon>
    </div>
    <div class="w-24">
      <nuxt-link :to="{ name: 'index' }">
        <img src="~/assets/buefy.png" alt="log" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      this.$store.commit('sidebar/SET_TOGGLE_SIDEBAR')
    },
  },
}
</script>
