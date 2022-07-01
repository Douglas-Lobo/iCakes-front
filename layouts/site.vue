<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="container is-fluid">
      <div class="card is-shadowless">
        <div class="card-image">
          <figure class="image">
            <div class="img"></div>
          </figure>
        </div>
        <div class="card-content">
          <Nuxt />
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
export default {
  middleware: 'guest',
}
</script>

<style scoped>
body {
  height: 100%;
  background-color: rgb(243, 243, 243);
}
.img {
  background-image: url('~/assets/budget.jpg');
  height: 200px;
  filter: brightness(0.7);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
