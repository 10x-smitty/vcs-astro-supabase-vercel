<script setup>
import { ref, computed } from 'vue'

const fundData = [
  { name: "Precursor Ventures", logo: "/logos/precursor.png" },
  { name: "Armory Square Ventures", logo: "/logos/armory_square_ventures.png" },
  { name: "Portgate", logo: "/logos/portgate.png" },
  { name: "Rethink Capital", logo: "/logos/rethink.png" },
  { name: "SPIN", logo: "/logos/spin.png" },
  { name: "Vesey", logo: "/logos/vesey2.png" },
  { name: "Greylock Partners", logo: "/logos/greylock.png" },
  { name: "BBG Ventures", logo: "/logos/bbg.png" },
  { name: "Illuminate", logo: "/logos/illuminate.png", isClaimed: true },
  { name: "London & Partners", logo: "/logos/london_partners.png", isClaimed: true },
  { name: "Accel", logo: "/logos/accel.png", isClaimed: true },
  { name: "Loop Capital", logo: "/logos/loop_capital.png", isClaimed: true },
];

// Add reactive search state
const searchQuery = ref('')

// Update fund filtering to include search
const unclaimedFunds = computed(() => {
  return fundData
    .filter(fund => !fund.isClaimed)
    .filter(fund => 
      fund.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

const claimedFunds = computed(() => {
  return fundData
    .filter(fund => fund.isClaimed)
    .filter(fund => 
      fund.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>

<template>
  <section class="flex flex-wrap gap-5 items-center mt-5 w-full min-h-[66px] max-md:max-w-full" aria-labelledby="claim-fund-title">
    <!-- Section Header -->
    <div class="flex flex-wrap gap-5 items-start self-stretch my-auto min-w-[240px] w-[685px] max-md:max-w-full">
      <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[320px] max-md:max-w-full">
        <h2 id="claim-fund-title" class="text-3xl font-semibold leading-none text-gray-900 max-md:max-w-full">
          Claim Your Fund
        </h2>
        <p class="mt-1 text-base text-slate-600 max-md:max-w-full">
          Subcopy goes here
        </p>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="flex items-center self-stretch my-auto whitespace-nowrap min-w-[240px]">
      <button class="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3.5 py-3 my-auto w-28 text-sm font-semibold leading-none bg-white rounded-lg border border-gray-300 border-solid shadow-sm min-h-[44px] text-slate-700" aria-label="Open filters">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1fdbf4545b5d83e70e89b830b8d1c31d2aaa98f53f50ff6059363d25f86c470" alt="" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/>
        <span class="self-stretch px-0.5 my-auto">Filters</span>
      </button>
      <!-- Search Input -->
      <div class="flex flex-col self-stretch px-6 my-auto text-base text-gray-500 min-w-[240px] w-[279px] max-md:px-5">
        <div class="flex flex-col max-w-full w-[231px]">
          <div class="flex flex-col w-full">
            <div class="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
              <div class="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d854dab827c63b485abe7d7443478f26f0a2ca81c3b16d19f2feae9fe77e35e8" alt="Search icon" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/>
                <input 
                  v-model="searchQuery"
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search funds" 
                  class="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Unclaimed Funds List - Only show if there are results -->
  <div v-if="unclaimedFunds.length > 0" id="claim-fund-list" class="flex flex-wrap gap-3 items-start mt-5 w-full min-h-[262px] max-md:max-w-full">
    <article v-for="fund in unclaimedFunds" :key="fund.name" class="bg-white border border-gray-200 border-solid flex gap-8 items-start min-w-[240px] px-5 py-7 rounded-xl shadow-lg max-md:px-5">
      <img 
        loading="lazy" 
        :src="fund.logo" 
        :alt="`${fund.name} logo`" 
        class="object-contain p-1.5 border border-gray-300 rounded-lg shrink-0 aspect-square w-[42px]"
      />
      <div class="flex flex-col justify-between w-40 min-h-[69px]">
        <h3 class="text-base font-semibold leading-none text-gray-900">
          {{ fund.name }}
        </h3>
        <button class="flex gap-1 justify-center items-center py-1 pr-2 pl-1.5 mt-6 max-w-full text-xs font-medium text-center text-blue-600 rounded-md border border-blue-600 border-solid bg-zinc-100 w-[116px] focus:outline-none focus:ring-2 focus:ring-blue-500">
          Claim VC Profile
        </button>
      </div>
    </article>
  </div>

  <!-- Claimed Funds Section - Only show if there are results -->
  <template v-if="claimedFunds.length > 0">
    <h2 class="flex-1 shrink gap-2.5 mt-5 w-full text-base text-slate-600 max-md:max-w-full">
      Claimed Profiles
    </h2>
    <div id="claimed-fund-list" class="flex flex-wrap gap-3 items-start mt-5 w-full max-md:max-w-full">
      <article v-for="fund in claimedFunds" :key="fund.name" class="bg-white border border-gray-200 border-solid flex gap-8 items-start min-w-[240px] px-5 py-7 rounded-xl shadow-lg max-md:px-5">
        <img 
          loading="lazy" 
          :src="fund.logo" 
          :alt="`${fund.name} logo`" 
          class="object-contain p-1.5 rounded-lg border border-gray-300 shrink-0 aspect-square w-[42px]"
        />
        <div class="flex flex-col justify-between w-40 min-h-[69px]">
          <h3 class="text-base font-semibold leading-none text-gray-900">
            {{ fund.name }}
          </h3>
          <div class="flex items-center gap-4 mt-6">
              <button class="flex gap-1 justify-center items-center py-1 pr-2 pl-1.5 mt-1  max-w-full text-xs font-medium text-center text-gray-8000 rounded-md border border-gray-300 border-solid bg-white w-[116px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              Profile Claimed
              </button>
              <img src="/check-circle.svg"/>
          </div>
        </div>
      </article>
    </div>
  </template>

  <!-- Pagination -->
                    <nav class="flex flex-wrap gap-3 justify-center items-center self-center px-6 py-3.5 mt-5 max-w-full text-sm font-semibold leading-none whitespace-nowrap min-h-[68px] text-slate-700 w-[665px] max-md:px-5" aria-label="Pagination">
                        <div class="flex flex-1 shrink items-center self-stretch my-auto basis-0">
                            <button class="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Previous page">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42127f66eb362dd3acf907462bf1d12c3fa068aa34fc8a2c3ae7cb7276d4233e?placeholderIfAbsent=true&apiKey=b9aac72cde80481fbc31d8b06e910272" alt="" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/><span class="self-stretch px-0.5 my-auto">Previous</span>
                            </button>
                        </div>
                        <div class="flex gap-0.5 items-start self-stretch my-auto font-medium text-center min-w-[240px] text-slate-600" role="navigation" aria-label="Page navigation">
                            <button class="flex overflow-hidden flex-col justify-center items-center w-10 h-10 text-gray-800 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" aria-current="page"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">1</span>
                            </button>
                            <button class="flex overflow-hidden flex-col w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">2</span>
                            </button>
                            <button class="flex overflow-hidden flex-col w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">3</span>
                            </button><span class="flex overflow-hidden flex-col w-10 rounded-lg"> <span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">...</span> </span>
                            <button class="flex overflow-hidden flex-col w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">8</span>
                            </button>
                            <button class="flex overflow-hidden flex-col w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">9</span>
                            </button>
                            <button class="flex overflow-hidden flex-col w-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><span class="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">10</span>
                            </button>
                        </div>
                        <div class="flex flex-1 shrink items-center self-stretch my-auto basis-0">
                            <button class="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Next page"><span class="self-stretch px-0.5 my-auto">Next</span>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce0267be12e0c4eadf278726b545176e1ad5942e39e759b6c93156cb72e6499e?placeholderIfAbsent=true&apiKey=b9aac72cde80481fbc31d8b06e910272" alt="" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"/>
                            </button>
                        </div>
                    </nav>
</template> 