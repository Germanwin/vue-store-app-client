import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakeProductView from '@/views/MakeProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create_product',
      name: 'create-product',
      component: MakeProductView
    }
    
  ]
})

export default router
