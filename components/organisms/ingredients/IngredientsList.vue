<template>
  <div>
    <section>
      <b-table
        :data="isEmpty ? [] : budgetsIngredients"
        striped
        mobile-cards
        :loading="loading"
      >
        <b-table-column v-slot="props" field="id" label="ID">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column v-slot="props" field="name" label="Nome">
          {{ props.row.name.toUpperCase() }}
        </b-table-column>
        <b-table-column
          v-slot="props"
          field="initialAmount"
          label="Qtd comprada"
        >
          {{ props.row.initialAmount }}
        </b-table-column>
        <b-table-column v-slot="props" field="cost" label="Custo">
          {{ props.row.cost }}
        </b-table-column>
        <b-table-column v-slot="props" field="usedAmount" label="Qtd Utilizada">
          {{ props.row.usedAmount }}
        </b-table-column>
        <b-table-column v-slot="props" field="total" label="Total">
          {{ props.row.total }}
        </b-table-column>
        <b-table-column v-slot="props" field="actions" label="Ações">
          <BtnUpdateIngredient
            :ingredient-id="props.row.id"
            :budget-id="parseInt($route.params.budgetId)"
            size="is-small"
            type="is-info"
            icon="circle-edit-outline"
          />
          <BtnDestroyIngredient
            :ingredient-id="props.row.id"
            :budget-id="parseInt($route.params.budgetId)"
            :ingredient-name="props.row.name"
            size="is-small"
            type="is-danger"
            icon="delete"
          />
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">Nenhum ingrediente cadastrado!</div>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IngredientsList',
  props: {
    budgetsIngredients: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isEmpty: false,
    }
  },
}
</script>

<style></style>
