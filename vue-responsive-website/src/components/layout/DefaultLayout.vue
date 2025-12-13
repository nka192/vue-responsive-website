<template>
  <div class="min-h-screen flex flex-col relative overflow-x-hidden">
    <!-- Header -->
    <PageHeader />

    <!-- Main Content -->
    <main class="grow">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style></style>
