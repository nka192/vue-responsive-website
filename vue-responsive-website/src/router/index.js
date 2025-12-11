import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import HomePage from "../page/HomePage.vue";
import AboutPage from "../page/AboutPage.vue";
import ServicesPage from "../page/ServicesPage.vue";
import PricingPage from "../page/PricingPage.vue";
import CarsPage from "../page/CarsPage.vue";
import BlogPage from "../page/BlogPage.vue";
import ContactPage from "../page/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage,
      },
      {
        path: "/services",
        name: "services",
        component: ServicesPage,
      },
      {
        path: "/pricing",
        name: "pricing",
        component: PricingPage,
      },
      {
        path: "/cars",
        name: "cars",
        component: CarsPage,
      },
      {
        path: "/blog",
        name: "blog",
        component: BlogPage,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
