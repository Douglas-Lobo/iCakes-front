<template>
  <nuxt-link v-slot="{ navigate }" :to="{ name: redirectPage }" custom>
    <div
      class="flex justify-center items-center bg-cover bg-no-repeat rounded-2xl shadow-lg transition duration-700 ease-in-out hover:scale-[1.03] hover:shadow-primary-900 cursor-pointer"
      :style="backgroundImage"
      @click="navigate"
    >
      <h1 class="text-white text-4xl">{{ name }}</h1>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    redirectPage: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      return ` background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${require(`~/assets/${this.imageName}`)})`
    },
  },
}
</script>
