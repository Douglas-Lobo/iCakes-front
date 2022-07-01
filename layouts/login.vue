<template>
  <section class="hero is-fullheight is-align-items-center">
    <div class="hero-body">
      <Nuxt />
    </div>
  </section>
</template>
<script>
export default {
  middleware: 'authenticated',
}
</script>

<style>
html {
  overflow-y: auto;
}
.hero {
  background: #d9a7c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fffcdc,
    #d9a7c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fffcdc,
    #d9a7c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
