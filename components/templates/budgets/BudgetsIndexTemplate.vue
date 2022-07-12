<template>
  <div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <BudgetStoreCard />
      <BudgetCard
        v-for="budget in $getBudgets.data"
        :key="budget.id"
        :budget-id="budget.id"
        :name="budget.name"
        :description="budget.description"
        :profit-percent="budget.profitPercent"
        :total="budget.total"
        :cost="budget.cost"
        :profit="budget.profit"
      />
    </div>
    <div class="">
      <Pagination
        module="budgets"
        :total="$getBudgets.meta.total"
        :per-page="$getBudgets.meta.per_page"
        :current="$getBudgets.meta.current_page"
      />
    </div>
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
