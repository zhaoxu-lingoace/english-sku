import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BootPage from "@/pages/BootPage.vue";
import LearnView from "@/LearnView.vue";
import CoursePage from "@/pages/CoursePage.vue";
import UnityPage from "@/pages/UnityPage.vue";
import ImagePage from "@/pages/ImagePage.vue";

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
    {
      path: "/course",
      component: CoursePage,
    },
    {
      path: "/unity",
      component: UnityPage,
    },
    {
      path: "/image",
      component: ImagePage,
    },
  ],
});

export default router;
