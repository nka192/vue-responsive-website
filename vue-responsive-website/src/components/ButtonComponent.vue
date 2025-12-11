<template>
  <button
    :class="`mt-4 px-4 py-3 rounded-lg min-w-24 md:min-w-32 sm:text-xs md:text-sm font-medium ${bgColor} ${textColor} hover:${hoverColor}`"
    :style="{ width: width }"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, default: "Click Me" },
  width: { type: String, default: "auto" },
  bgColor: { type: String, default: "bg-blue-500" },
  textColor: { type: String, default: "text-white" },
  hoverColor: { type: String, default: "bg-blue-600" },
});
</script>

<style></style>
