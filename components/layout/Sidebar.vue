<template>
  <section>
    <b-sidebar
      :open="$getSidebarStatus"
      :fullheight="true"
      :overlay="true"
      :on-cancel="toggleSidebar"
      type="is-light"
    >
    </b-sidebar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('sidebar', ['$getSidebarStatus']),
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('sidebar/SET_TOGGLE_SIDEBAR')
    },
  },
}
</script>
