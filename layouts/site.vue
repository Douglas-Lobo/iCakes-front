<template>
  <div class="bg-cover">
    <Navbar />
    <div class="container mb-3 mt-3 h-[calc(100vh_-_117.53px)]">
      <Nuxt />
    </div>
    <Footer />
  </div>
  <!-- <div
    :style="{
      backgroundImage: `url(${require('~/assets/site-background.jpg')})`,
    }"
  ></div> -->
</template>

<script>
export default {
  middleware: 'guest',
}
</script>
