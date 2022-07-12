<template>
  <div>
    <div
      class="flex flex-col bg-white dark:bg-slate-800 rounded-[20px] p-4 ring-1 ring-secondary-900/5 shadow-lg text-center hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-primary-900/40"
    >
      <h3 class="text-slate-900 dark:text-white text-2xl font-semibold">
        {{ name }}
      </h3>
      <p class="grow text-slate-500 dark:text-slate-400 my-3 text-sm">
        {{ description }}
      </p>
      <div class="grid grid-cols-2 gap-2 text-center">
        <div class="bg-slate-100 rounded-full text-slate-700 p-1">
          Margem: {{ profitPercent }}%
        </div>
        <div class="bg-green-100 rounded-full text-green-700 p-1">
          Venda: {{ total }}
        </div>
        <div class="bg-blue-100 rounded-full text-blue-700 p-1">
          Lucro: {{ profit }}
        </div>
        <div class="bg-red-100 rounded-full text-red p-1">
          Custo: {{ cost }}
        </div>
      </div>
      <div class="grid grid-cols-2 mt-3">
        <div
          class="rounded-bl-[20px] h-10 -ml-4 -mb-4 bg-slate-100 border-t border-r border-slate-200 flex justify-center items-center"
        >
          <EditBudget
            :budget-id="budgetId"
            icon="pencil-circle"
            din-class="hover:text-blue-500 transition duration-700 ease-in-out"
          />
        </div>
        <div
          class="rounded-br-[20px] h-10 -mr-4 -mb-4 bg-slate-100 border-t border-slate-200 flex justify-center items-center"
        >
          <DelBudget
            :budget-id="budgetId"
            icon="delete-circle"
            din-class="hover:text-red-500 transition duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    budgetId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    profitPercent: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    profit: {
      type: Number,
      required: true,
    },
  },
}
</script>
