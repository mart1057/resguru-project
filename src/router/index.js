import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import DashBoard from '@/views/dashboard/DashBoard'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard 
  },

  {
    path: '/login',
    name: 'login',
    component: LoginRegis
  },
  {
    path: '/',
    name: 'home',
    component:Home
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
