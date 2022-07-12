<template>
  <div v-if="error.statusCode === 404">
    <div class="container h-screen flex flex-col justify-center items-center">
      <img src="~/assets/404.png" class="h-3/6" />
      <h1 class="text-xl">Esse lugar parece meio vazio 😱</h1>
      <nuxt-link v-slot="{ navigate }" :to="{ name: 'index' }" custom>
        <a
          class="rounded-md px-3.5 py-2 mt-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary-900"
          @click="navigate"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="relative text-primary-900 transition duration-300 group-hover:text-white ease"
            >Voltar</span
          >
        </a>
      </nuxt-link>
    </div>
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
