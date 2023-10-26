import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import DashBoard from '@/views/dashboard/DashBoard'
import Home from '@/views/home/Home.vue'
import CreateBuilding from '@/views/home/CreateBuilding.vue'
import Rooms from '@/views/rooms/Rooms'
import RoomDetail from '@/views/rooms/RoomDetail'
import Main from '@/views/meter/Main'
import Announcement from '@/views/announcement/Announcement'
import RentalContract from '@/views/rental-contract/RentalContract.vue'

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
  {
    path: '/room-detail',
    name: 'room-detail',
    component:RoomDetail
  },
  {
    path: '/fee',
    name: 'fee',
    component:Main
  },
  {
    path: '/announcement',
    name: 'announcement',
    component:Announcement
  },
  {
    path: '/rental-contract',
    name: 'rental-contract',
    component:RentalContract
  },
  
  
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
