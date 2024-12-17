<template>
    <div class="flex flex-row gap-2 items-center">
        <a href="/signin" class="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md border border-gray-300">Sign In</a>
        <form action="/api/auth/signout">
            <button type="submit" class="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md border border-gray-300">Sign out</button>
        </form>
    </div>
</template>

<script setup lang="ts">
</script>