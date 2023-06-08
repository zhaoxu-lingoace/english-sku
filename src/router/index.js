import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BootView from "@/views/BootView.vue";
import LearnView from "@/views/LearnView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "learn",
          component: LearnView,
        },
      ],
    },
    {
      path: "/boot",
      name: "boot",
      component: BootView,
    },
  ],
});

export default router;
