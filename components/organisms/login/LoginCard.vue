<template>
  <div class="card">
    <div class="card-content">
      <div class="columns is-vcentered">
        <div class="column">
          <img class="cake" src="~/assets/cake.jpg" />
        </div>
        <div class="column">
          <div class="is-flex is-justify-content-center">
            <img class="logo" src="~/assets/icakes-logo.png" />
          </div>
          <div class="form">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.logo {
  width: 80%;
}
.cake {
  max-height: 500px;
}
.card-content {
  padding: 0px;
}
.column {
  padding-bottom: 6px;
  padding-left: 0px;
  padding-right: 0px;
}
.form {
  padding: 20px;
}
</style>
