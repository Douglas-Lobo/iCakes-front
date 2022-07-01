<template>
  <b-table :data="$getBudget[0].ingredients" striped mobile-cards>
    <b-table-column v-slot="props" field="id" label="ID" width="40" numeric>
      {{ props.row.id }}
    </b-table-column>

    <b-table-column v-slot="props" field="name" label="Nome">
      {{ props.row.name }}
    </b-table-column>

    <b-table-column v-slot="props" field="initial_amount" label="Qtd inicial">
      {{ props.row.initial_amount }}
    </b-table-column>

    <b-table-column v-slot="props" field="cost" label="Custo">
      <span class="tag is-warning has-text-weight-bold">
        {{ 'R$ ' + props.row.cost }}
      </span>
    </b-table-column>

    <b-table-column v-slot="props" field="used_amount" label="Qtd usada">
      {{ props.row.used_amount + props.row.used_unit }}
    </b-table-column>

    <b-table-column v-slot="props" field="total" label="Total">
      <span class="tag is-success has-text-weight-bold">
        {{ 'R$ ' + props.row.total }}
      </span>
    </b-table-column>

    <template #empty>
      <div class="has-text-centered">Nenhum Ingrediente adicionado</div>
    </template>
  </b-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters('budgets', ['$getBudget']),
  },
}
</script>

<style></style>
