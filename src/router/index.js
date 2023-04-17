import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Pages/HomeView.vue';
import Login from '../components/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

  ]
})

export default router
