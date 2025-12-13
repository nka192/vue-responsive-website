<template>
  <main>
    <BgContainer
      title="About"
      bgImage="bg_3.jpg"
      :links="[
        { text: 'Home', to: '/' },
        { text: 'About Us', to: '/about' },
      ]"
    />
    <AboutUsSection />
    <TestimonySection />
    <StatisticsSection />
  </main>
</template>

<script setup>
import BgContainer from "../components/BgContainer.vue";
import AboutUsSection from "../components/AboutUsSection.vue";
import TestimonySection from "../components/home/TestimonySection.vue";
import StatisticsSection from "../components/home/StatisticsSection.vue";
</script>

<style></style>
