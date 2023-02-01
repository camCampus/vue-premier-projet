import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cities from "@/views/Cities.vue";
import City from "@/components/City.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cities", name: "Cities", component: Cities },
  { path: "/city", name: "City", component: City },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
