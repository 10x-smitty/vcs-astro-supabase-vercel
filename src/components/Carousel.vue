<template>
  <section id="featured-funds-carousel" class="flex flex-col mt-5 w-full max-md:max-w-full" aria-label="VC Profiles">
    <div class="flex flex-col mt-5 w-full max-md:max-w-full" aria-label="VC Profiles">
      <div class="flex flex-col w-full max-md:max-w-full">
        <div class="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <article
            v-for="company in visibleCompanies"
            :key="company.id"
            class="flex overflow-hidden flex-col flex-1 shrink items-center bg-white rounded-3xl border border-solid basis-0 border-zinc-300 min-w-[240px] shadow-[0px_8px_25px_rgba(0,0,0,0.05)] max-md:max-w-full"
          >
            <div class="flex flex-col self-stretch w-full max-md:max-w-full">
              <div class="px-6 pt-6 w-full max-md:px-5 max-md:max-w-full">
                <div class="flex max-md:flex-col">
                  <div class="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                    <div class="flex overflow-hidden flex-col justify-center items-center  mx-auto w-14 h-14 bg-white rounded-xl shadow-sm max-md:mt-10" :class="{ 'border border-gray-300 p-1': company.logo }">
                      <img :src="company.logo || '/companyIcon.svg'" :alt="`${company.name} logo`" class="object-contain rounded-lg h-full w-auto" />
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow max-md:mt-10">
                      <h2 class="text-lg font-semibold leading-loose text-gray-900">
                        <a :href="`/${company.urlPath}`" class="hover:text-blue-700">
                          {{ company.name }}
                        </a>
                      </h2>
                      <p class="mt-1 text-sm leading-5 text-slate-600 max-md:max-w-full line-clamp-3">
                        {{ company.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full min-h-[20px] max-md:max-w-full"></div>
              <div class="flex w-full bg-gray-200 fill-gray-200 min-h-[1px] max-md:max-w-full"></div>
            </div>
            <!--Replace with real data  -->
                <div class="mt-3 text-base leading-6 text-blue-700 underline decoration-auto decoration-solid underline-offset-auto w-[480px] max-md:max-w-full" data-astro-source-file="/Users/jsmith/Desktop/vcindex_astro/visible-velocity/src/pages/dashboard.astro" data-astro-source-loc="79:186"> 
                    <button class="text-left focus:outline-none focus:ring-2 focus:ring-blue-500" aria-expanded="false" data-astro-source-file="/Users/jsmith/Desktop/vcindex_astro/visible-velocity/src/pages/dashboard.astro" data-astro-source-loc="80:145">
                        <span class="line-clamp-3">{{ company.finalSummary.content }}</span><span class="font-bold text-blue-700 underline" data-astro-source-file="/Users/jsmith/Desktop/vcindex_astro/visible-velocity/src/pages/dashboard.astro" data-astro-source-loc="81:296">read more</span> 
                    </button> 
                </div>
            
            <!-- Metrics Section -->
            <div class="flex gap-3 justify-between items-center mt-3 max-w-full w-[480px]">
              <div class="flex flex-col self-stretch pr-2.5 pl-6 my-auto min-h-[244px] min-w-[240px] w-[271px] max-md:pl-5">
                <ScoreChart :score="company.vcScore.score" />
              </div>
              
              <!-- Performance Metrics -->
              <div class="flex flex-col self-stretch my-auto w-[198px]" role="group" aria-label="Performance Metrics">
                <template v-for="(value, key) in company.vcPrimaryMetrics" :key="key">
                  <div class="flex gap-4 items-start w-full mt-3">
                    <div class="flex flex-col flex-1 shrink w-full basis-0">
                      <div class="text-sm font-medium leading-none text-slate-700">
                        {{ key.charAt(0).toUpperCase() + key.slice(1) }}
                      </div>
                      <div class="flex gap-3 items-center w-full">
                        <div class="flex flex-col flex-1 shrink self-stretch my-auto rounded-lg basis-0">
                          <div class="flex flex-col items-start bg-gray-200 rounded max-md:pr-5">
                            <div 
                              class="flex shrink-0 h-2 bg-blue-700 rounded" 
                              :style="{ width: `${value}%` }"
                              role="progressbar" 
                              :aria-valuenow="value" 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="self-stretch my-auto text-sm font-medium leading-none text-slate-700">
                          {{ value }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    
    <!-- Pagination -->
    <nav id="featured-funds-pagination" class="flex gap-10 justify-between items-center self-center pt-4 mt-5 max-w-full w-[343px]" aria-label="Pagination">
      <button 
        @click="previousPage" 
        class="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" 
        aria-label="Previous page"
      >
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/42127f66eb362dd3acf907462bf1d12c3fa068aa34fc8a2c3ae7cb7276d4233e?placeholderIfAbsent=true&apiKey=b9aac72cde80481fbc31d8b06e910272" alt="Previous page arrow" class="object-contain self-stretch my-auto w-5 aspect-square"/>
      </button>
      <div class="self-stretch my-auto text-sm leading-none text-slate-700">
        <span class="font-medium">{{ currentPage }}</span>
        of 
        <span class="font-medium">{{ totalPages }}</span>
      </div>
      <button 
        @click="nextPage" 
        class="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-white rounded-lg border border-gray-300 border-solid shadow-sm" 
        aria-label="Next page"
      >
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce0267be12e0c4eadf278726b545176e1ad5942e39e759b6c93156cb72e6499e?placeholderIfAbsent=true&apiKey=b9aac72cde80481fbc31d8b06e910272" alt="Next page arrow" class="object-contain self-stretch my-auto w-5 aspect-square"/>
      </button>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { mockCompanyData } from '../data/companies.ts'
import ScoreChart from '../components/ScoreChart.vue'

// Sort companies by featureOrder when creating the array
const companies = Object.values(mockCompanyData).sort((a, b) => a.featureOrder - b.featureOrder)
const currentPage = ref(1)
const itemsPerPage = 2

const totalPages = Math.ceil(companies.length / itemsPerPage)

const visibleCompanies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return companies.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>
