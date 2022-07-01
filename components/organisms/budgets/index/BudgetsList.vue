<template>
  <div>
    <div class="columns is-multiline">
      <AddBudgetCard />
      <div
        v-for="budget in $getBudgets.data"
        :key="budget.id"
        class="column is-6-tablet is-4-desktop is-3-widescreen"
      >
        <div class="card budget-card">
          <nuxt-link
            v-slot="{ href, navigate }"
            custom
            :to="{
              name: 'budgets-budgetId-ingredients',
              params: { budgetId: budget.id },
            }"
          >
            <div
              class="card-content is-clickable"
              :href="href"
              @click="navigate"
            >
              <time>Criado em: {{ budget.createdAt }}</time>
              <p class="title">
                {{ budget.name }}
              </p>
              <p class="subtitle">{{ budget.description }}</p>

              <div class="columns">
                <div class="column">
                  <b-tag
                    class="has-text-weight-bold mb-1 tag-width"
                    rounded
                    type="is-warning"
                    >Margem: {{ budget.profitPercent }}%</b-tag
                  >
                  <b-tag
                    class="has-text-weight-bold tag-width"
                    rounded
                    type="is-info"
                    >Lucro: R$ {{ budget.profit }}</b-tag
                  >
                </div>
                <div class="column">
                  <b-tag
                    class="has-text-weight-bold mb-1 tag-width"
                    rounded
                    type="is-success"
                    >Custo: R$ {{ budget.cost }}</b-tag
                  >
                  <b-tag
                    class="has-text-weight-bold tag-width"
                    rounded
                    type="is-success"
                    >Preço: R$ {{ budget.total }}</b-tag
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
          <footer class="card-footer">
            <b-button
              class="card-footer-item"
              type="is-ghost"
              icon-right="circle-edit-outline"
            />
            <DelBudget din-class="card-footer-item" :budget-id="budget.id" />
          </footer>
        </div>
      </div>
    </div>
    <Pagination
      module="budgets"
      :total="$getBudgets.meta.total"
      :per-page="$getBudgets.meta.per_page"
      :current="$getBudgets.meta.current_page"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('budgets', ['$getBudgets']),
  },
}
</script>

<style scoped>
.tag-width {
  width: 100%;
}
.budget-card {
  transition: box-shadow 1s, transform 1s;
}
.budget-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 3px 11px 0px rgba(113, 77, 210, 0.23);
}
</style>
