import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RistorantiView from '../views/RistorantiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Ristoranti',
      name: 'Ristoranti',
      component: RistorantiView
    }
  ]
})

export default router
