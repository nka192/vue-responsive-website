<template>
  <main>
    <img
      :src="getImage(image)"
      alt="Blog Post Image"
      class="object-cover h-56 w-full"
    />
    <div class="space-y-2 pt-5">
      <p class="text-sm text-blue-500">
        {{ date }} | {{ author }} | {{ comments?.length }} comments
      </p>
      <h2 class="text-xl font-medium text-gray-800 mt-2">{{ title }}</h2>
      <ButtonComponent text="Read More" />
    </div>
  </main>
</template>

<script setup>
import ButtonComponent from "../ButtonComponent.vue";

defineProps({
  id: Number,
  date: String,
  author: String,
  comments: Number,
  title: String,
  description: String,
  image: String,
});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style></style>
