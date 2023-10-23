import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import DashBoard from '@/views/dashboard/DashBoard'
import Home from '@/views/home/Home.vue'
import CreateBuilding from '@/views/home/CreateBuilding.vue'
import Rooms from '@/views/rooms/Rooms'

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
  {
    path: '/create_building',
    name: 'create_building',
    component:CreateBuilding 
  },
  {
    path: '/rooms',
    name: 'rooms',
    component:Rooms
  },
 
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
