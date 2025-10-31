import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Casas from '@/views/Casas.vue'
import Login from '@/views/Login.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/properties', name: 'Casas', component: Casas },
  { path: '/Login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

