import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RistorantiView from '../views/RistorantiView.vue'
import SingleRestaurant from '../views/SingleRestaurant.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Ristoranti',
      name: 'Ristoranti',
      component: RistorantiView
    },
    {
      path: "/Ristorante/:id",
      name: "SingleRestaurant",
      component: SingleRestaurant
  },
  ]
})

export default router
