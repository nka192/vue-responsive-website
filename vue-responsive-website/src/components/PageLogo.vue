<template>
  <router-link to="/">
    <h1 class="uppercase text-xl font-bold cursor-pointer">
      <span :class="carClass">Car</span>
      <span class="text-green-500">Book</span>
    </h1>
  </router-link>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const isScrolled = ref(false);
const isMobile = ref(window.innerWidth < 768);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

const carClass = computed(() => {
  if (isMobile.value) return "text-black";
  return isScrolled.value ? "text-black" : "text-white";
});
</script>
<style></style>
