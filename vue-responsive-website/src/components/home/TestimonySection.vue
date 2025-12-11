<template>
  <div class="bg-gray-100/90">
    <SectionHeading title="Happy Clients" description="Testimonial" />
    <section class="py-10 md:py-20 p-4">
      <Swiper
        :modules="[Autoplay]"
        :space-between="30"
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="w-full max-w-5xl"
      >
        <SwiperSlide v-for="(testimony, index) in testimonys" :key="index">
          <TestimonyCard
            :name="testimony.name"
            :position="testimony.position"
            :image="testimony.image"
            :comment="testimony.comment"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<script setup>
import SectionHeading from "../SectionHeading.vue";
import { testimonys } from "../../data/testimonyData";
import TestimonyCard from "../cards/TestimonyCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
</script>

<style></style>
