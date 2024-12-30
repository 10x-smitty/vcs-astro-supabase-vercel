<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  fundData: {
    type: Array,
    required: true
  }
});

const searchQuery = ref('');

const filteredUnclaimedFunds = computed(() => {
  return props.fundData
    .filter(fund => !fund.isClaimed)
    .filter(fund => 
      fund.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const filteredClaimedFunds = computed(() => {
  return props.fundData
    .filter(fund => fund.isClaimed)
    .filter(fund => 
      fund.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<template>
  <div class="flex items-center self-stretch whitespace-nowrap min-w-[240px]">
    <!-- Search input -->
    <div class="flex flex-col self-stretch px-6 my-auto text-base text-gray-500 min-w-[240px] w-[279px]">
      <div class="flex flex-col max-w-full w-[231px]">
        <div class="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <div class="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d854dab827c63b485abe7d7443478f26f0a2ca81c3b16d19f2feae9fe77e35e8" alt="Search icon" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/>
            <input 
              v-model="searchQuery"
              type="search" 
              placeholder="Search" 
              aria-label="Search funds" 
              class="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Unclaimed Funds -->
  <div id="claim-fund-list" class="flex flex-wrap gap-3 items-start mt-5 w-full min-h-[262px] max-md:max-w-full">
    <article 
      v-for="fund in filteredUnclaimedFunds" 
      :key="fund.name"
      class="bg-white border border-gray-200 border-solid flex gap-8 items-start min-w-[240px] px-5 py-7 rounded-xl shadow-lg max-md:px-5"
    >
      <!-- ... rest of your fund card template ... -->
    </article>
  </div>

  <!-- Claimed Funds -->
  <h2 class="flex-1 shrink gap-2.5 mt-5 w-full text-base text-slate-600 max-md:max-w-full">
    Claimed Profiles
  </h2>
  <div id="claimed-fund-list" class="flex flex-wrap gap-3 items-start mt-5 w-full max-md:max-w-full">
    <article 
      v-for="fund in filteredClaimedFunds" 
      :key="fund.name"
      class="bg-white border border-gray-200 border-solid flex gap-8 items-start min-w-[240px] px-5 py-7 rounded-xl shadow-lg max-md:px-5"
    >
      <!-- ... rest of your fund card template ... -->
    </article>
  </div>
</template> 