import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cities from "@/views/Cities.vue";
import Map from "@/views/Map.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cities", name: "Cities", component: Cities },
  { path: "/map", name: "Map", component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
