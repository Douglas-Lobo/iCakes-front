<template>
  <b-pagination
    :current="current"
    :total="total"
    :per-page="perPage"
    :order="order"
  >
    <template #default="props">
      <b-pagination-button
        :page="props.page"
        @click.native="changePage(props.page.number)"
      >
        {{ props.page.number }}
      </b-pagination-button>
    </template>
    <template #next="props">
      <b-pagination-button
        :page="props.page"
        @click.native="changePage(props.page.number)"
      >
        Próximo
      </b-pagination-button>
    </template>
    <template #previous="props">
      <b-pagination-button
        :page="props.page"
        @click.native="changePage(props.page.number)"
      >
        Anterior
      </b-pagination-button>
    </template>
  </b-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    module: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    order: {
      type: String,
      default: 'is-centered',
    },
  },
  methods: {
    async changePage(page) {
      switch (this.module) {
        case 'budgets':
          await this.$store.dispatch(`${this.module}/changePage`, page)
          break
        case 'ingredients':
          await this.$store.dispatch(`${this.module}/changePage`, {
            page,
            budgetId: this.$route.params.budgetId,
          })
          break
        default:
          break
      }
    },
  },
}
</script>

<style></style>
