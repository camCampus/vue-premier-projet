import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cities from "@/views/Cities.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cities", name: "Cities", component: Cities },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
