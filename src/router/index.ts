import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from "../views/MainPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/MarketPageView.vue')
    }
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  ]
})

export default router
