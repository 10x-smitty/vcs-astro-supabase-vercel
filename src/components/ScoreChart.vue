<template>
  <div class="flex relative flex-col justify-center items-center px-14 py-20 max-w-full min-h-[238px] w-[238px] max-md:px-5">
    <div class="z-0 text-sm font-semibold leading-none text-center text-slate-600">
      VI Score
    </div>
    <div class="flex absolute bottom-1 top-6 z-0 flex-col self-start pb-6 w-full left-[13px] max-w-[210px] right-[15px]">
      <div class="flex overflow-hidden relative z-10 flex-col items-start px-6 pt-1 pb-36 mt-0 aspect-[1.349] max-md:px-5 max-md:pb-24 max-md:mr-0">
        <svg
          id="score-chart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 224 167"
          fill="none"
          class="object-cover absolute inset-0 size-full"
        >
          <g clip-path="url(#clip0_score)">
            <!-- Bottom Left Background (Red: 350-450) -->
            <path
              d="M7.1 107.37C7.03 108.9 7 110.45 7 112C7 129.28 11.17 145.58 18.57 159.95"
              stroke="#F20000"
              stroke-opacity="0.15"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Bottom Left Fill (Red: 350-450) -->
            <path
              d="M7.1 107.37C7.03 108.9 7 110.45 7 112C7 129.28 11.17 145.58 18.57 159.95"
              :stroke="getSegmentColor(350)"
              :style="{ opacity: props.score >= 350 ? 1 : 0 }"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Top Left Background (Purple: 451-550) -->
            <path
              d="M32.4696 43.4399C21.8796 55.7099 14.0796 70.4699 10.0596 86.7099M42.8505 32.9902C39.1505 36.2302 35.6905 39.7202 32.4805 43.4402"
              stroke="#F200E9" 
              stroke-opacity="0.15" 
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Top Left Fill (Purple: 451-550) -->
            <path
              d="M32.4696 43.4399C21.8796 55.7099 14.0796 70.4699 10.0596 86.7099M42.8505 32.9902C39.1505 36.2302 35.6905 39.7202 32.4805 43.4402"
              :stroke="getSegmentGradient(451)"
              :style="{ opacity: props.score >= 451 ? 1 : 0 }"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Middle Background (Orange: 551-650) -->
            <path
              d="M70.0906 16.2026C65.5709 18.1415 61.2022 20.3924 57.0002 22.9392M167.16 22.64C151.13 12.72 132.23 7 112 7C91.7702 7 72.9602 12.7 56.9502 22.57"
              stroke="#F29100"
              stroke-opacity="0.15"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Middle Fill (Orange: 551-650) -->
            <path
              d="M70.0906 16.2026C65.5709 18.1415 61.2022 20.3924 57.0002 22.9392M167.16 22.64C151.13 12.72 132.23 7 112 7C91.7702 7 72.9602 12.7 56.9502 22.57"
              :stroke="getSegmentColor(551)"
              :style="{ opacity: props.score >= 551 ? 1 : 0 }"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Top Right Background (Yellow: 651-750) -->
            <path
              d="M191.61 43.5301C188.67 40.1201 185.52 36.9001 182.18 33.8901M215.92 96.9C213.01 76.68 204.33 58.31 191.61 43.53"
              stroke="#E8E200"
              stroke-opacity="0.15"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Top Right Fill (Yellow: 651-750) -->
            <path
              d="M191.61 43.5301C188.67 40.1201 185.52 36.9001 182.18 33.8901M215.92 96.9C213.01 76.68 204.33 58.31 191.61 43.53"
              :stroke="getSegmentColor(651)"
              :style="{ opacity: props.score >= 651 ? 1 : 0 }"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Bottom Right Background (Green: 751-850) -->
            <path
              d="M205.43 159.95C212 147.17 216.03 132.87 216.84 117.71"
              stroke="#538D08"
              stroke-opacity="0.15"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Bottom Right Fill (Green: 751-850) -->
            <path
              d="M205.43 159.95C212 147.17 216.03 132.87 216.84 117.71"
              :stroke="getSegmentColor(751)"
              :style="{ opacity: props.score >= 751 ? 1 : 0 }"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient id="purpleGradient" x1="43.6696" y1="44.2499" x2="-13.0804" y2="96.9999" gradientUnits="userSpaceOnUse">
              <stop offset="0.06" stop-color="#F200E9"/>
              <stop offset="0.81" stop-color="#F200E9"/>
              <stop offset="1" stop-color="#F20000"/>
            </linearGradient>
            <clipPath id="clip0_score">
              <rect width="223.85" height="166.95" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="flex gap-5 justify-between mt-2.5 text-sm font-semibold leading-none text-center text-slate-600">
        <div>350</div>
        <div>850</div>
      </div>
    </div>
    <div class="z-0 text-6xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:text-4xl">
      {{ score }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  score: number;
}

const props = defineProps<Props>();

const getSegmentColor = (segmentMin: number) => {
  // Get the segment range
  const ranges = {
    350: { min: 350, max: 450 },
    451: { min: 451, max: 550 },
    551: { min: 551, max: 650 },
    651: { min: 651, max: 750 },
    751: { min: 751, max: 850 }
  };

  const range = ranges[segmentMin as keyof typeof ranges];
  
  if (props.score < range.min) {
    return "#E0E0E0"; // Inactive state
  }

  // Calculate fill percentage for partial fills
  const fillPercentage = Math.min(100, Math.max(0, 
    ((props.score - range.min) / (range.max - range.min)) * 100
  ));

  // Updated colors with opacity based on fill percentage
  if (segmentMin <= 450) return `rgba(242, 0, 0, ${fillPercentage/100})`; // Red
  if (segmentMin <= 550) return `url(#purpleGradient)`; // Purple gradient
  if (segmentMin <= 650) return `rgba(255, 145, 0, ${fillPercentage/100})`; // Orange
  if (segmentMin <= 750) return `rgba(232, 226, 0, ${fillPercentage/100})`; // Yellow
  return `rgba(83, 141, 8, ${fillPercentage/100})`; // Green
};

const getSegmentGradient = (segmentMin: number) => {
  return props.score < segmentMin ? "#E0E0E0" : "url(#purpleGradient)";
};
</script>

