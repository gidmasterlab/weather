import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/error/:id',
      name: 'error',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'error', params: { id: '404' } }
    }
  ]
})

export default router
