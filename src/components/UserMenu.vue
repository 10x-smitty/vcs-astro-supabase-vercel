<template>
  <div class="relative">
    <!-- Profile Button -->
    <button
      @click="toggleMenu"
      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
    >
      <!-- You can replace this with an actual profile image -->
      <span class="text-gray-600 text-sm font-semibold">
        {{ userInitials }}
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
