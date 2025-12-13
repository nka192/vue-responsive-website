<template>
  <div class="text-gray-200">
    <h2 class="text-white text-xl font-semibold mb-2">{{ title }}</h2>
    <ul class="text-gray-200 space-y-3 mt-6">
      <li v-for="(link, index) in links" :key="index" class="cursor-pointer">
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: Array,
});
</script>

<style></style>
