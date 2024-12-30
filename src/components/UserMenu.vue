<template>
  <div class="relative">
    <!-- Profile Button -->
    <button
      @click="toggleMenu"
      class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 focus:outline-none"
    >
      <!-- You can replace this with an actual profile image -->
      <span class="text-gray-600 text-sm font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#667085" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
      </span>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <a
        href="#profile"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Your Profile
      </a>
      <a
        href="#settings"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Settings
      </a>
      <div class="border-t border-gray-100"></div>
      <a
        href="/api/auth/signout"
        class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        Sign out
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isMenuOpen = ref(false)
const userInitials = computed(() => {
  // Replace this with actual user data
  const name = 'Jay Smith'
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const signOut = () => {
  // Implement your sign out logic here
  console.log('Signing out...')
}
</script>
