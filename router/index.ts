import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/pages/Home.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('/pages/Personal.vue')
    },
    {
      path: '/',
      name: 'policy',
      component: () => import('/pages/Policy.vue')
    }
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  ]
})

export default router
