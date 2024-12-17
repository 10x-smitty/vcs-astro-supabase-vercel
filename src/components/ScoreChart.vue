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
            <!-- Bottom Left (Red: 350-450) -->
            <path
              d="M7.1 107.37C7.03 108.9 7 110.45 7 112C7 129.28 11.17 145.58 18.57 159.95"
              :stroke="getSegmentColor(350)"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Top Left (Purple: 451-550) -->
            <path
              d="M32.4696 43.4399C21.8796 55.7099 14.0796 70.4699 10.0596 86.7099"
              :stroke="getSegmentColor(451)"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Middle (Orange: 551-650) -->
            <path
              d="M167.16 22.64C151.13 12.72 132.23 7 112 7C91.7702 7 72.9602 12.7 56.9502 22.57"
              :stroke="getSegmentColor(551)"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Top Right (Yellow: 651-750) -->
            <path
              d="M215.92 96.9C213.01 76.68 204.33 58.31 191.61 43.53"
              :stroke="getSegmentColor(651)"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Bottom Right (Green: 751-850) -->
            <path
              d="M205.43 159.95C212 147.17 216.03 132.87 216.84 117.71"
              :stroke="getSegmentColor(751)"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
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
  if (props.score < segmentMin) {
    return "#E0E0E0"; // Inactive state
  }

  // Color sequence based on score ranges
  if (segmentMin <= 450) return "#F20000"; // Red (350-450)
  if (segmentMin <= 550) return "#F200E9"; // Purple (451-550)
  if (segmentMin <= 650) return "#FFA500"; // Orange (551-650)
  if (segmentMin <= 750) return "#FFD700"; // Yellow (651-750)
  return "#538D08"; // Green (751-850)
};
</script>
