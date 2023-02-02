import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cities from "@/views/Cities.vue";
import City from "@/views/City.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cities", name: "Cities", component: Cities },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
