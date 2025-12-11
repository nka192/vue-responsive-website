<template>
  <main>
    <SectionHeading title="Featured Vehicles" description="What we offer" />
    <div class="w-full h-full py-10 md:py-20">
      <Swiper
        :modules="[Autoplay]"
        :space-between="30"
        navigation
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="w-4/5 drop-shadow-2xl"
      >
        <SwiperSlide v-for="(car, index) in cars" :key="index">
          <CarCard
            :id="car.id"
            :name="car.name"
            :brand="car.brand"
            :price="car.price"
            :image="car.image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import CarCard from "../cards/CarCard.vue";
import SectionHeading from "../SectionHeading.vue";
import { cars } from "../../data/carsData";
</script>

<style></style>
