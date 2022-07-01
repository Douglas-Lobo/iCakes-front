<template>
  <div class="navbar">
    <div class="sidebar-button is-clickable" @click="toggleSidebar()">
      <b-icon class="menu-icon" type="is-white" icon="menu"></b-icon>
    </div>
    <div class="logo">
      <nuxt-link :to="{ name: 'index' }">
        <img src="~/assets/buefy.png" alt="log" />
      </nuxt-link>
    </div>
    <div class="logout">
      <b-button type="is-danger" icon-right="location-exit">Sair</b-button>
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
<style scoped lang="scss">
.navbar {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: $grey-dark;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 6rem;
}
.menu-icon {
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
