import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BootPage from "@/pages/BootPage.vue";
import LearnView from "@/LearnView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
      redirect: "learn",
      children: [
        {
          path: "learn",
          component: LearnView,
        },
      ],
    },
    {
      path: "/boot",
      component: BootPage,
    },
  ],
});

export default router;
