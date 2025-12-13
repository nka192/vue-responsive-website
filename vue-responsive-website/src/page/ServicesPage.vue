<template>
  <main>
    <BgContainer
      title="Services"
      bgImage="bg_3.jpg"
      :links="[
        { text: 'Home', to: '/' },
        { text: 'Services', to: '/services' },
      ]"
    />
    <ServicesListSection />
    <CallToActionSection />
  </main>
</template>

<script setup>
import BgContainer from "../components/BgContainer.vue";
import ServicesListSection from "../components/ServiceListSection.vue";
import CallToActionSection from "../components/CallToActionSection.vue";
</script>

<style></style>
