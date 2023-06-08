import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import BootPage from "@/views/BootPage.vue";
import LearnView from "@/views/LearnView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
      component: BootPage,
    },
  ],
});

export default router;
