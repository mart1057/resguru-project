import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import DashBoard from '@/views/dashboard/DashBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashBoard 
  },

  {
    path: '/login',
    name: 'login',
    component: LoginRegis
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
