import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakeProductView from '@/views/MakeProductView.vue'
import DeleteProductView from '@/views/DeleteProductView.vue'
import UpdateProductView from '@/views/UpdateProductView.vue'

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
    },
    {
      path: '/delete_product',
      name: 'delete-product',
      component: DeleteProductView
    },
    {
      path: '/update_product/:id',
      name: 'update-product',
      component: UpdateProductView,
      props: true
    }
    
  ]
})

export default router
