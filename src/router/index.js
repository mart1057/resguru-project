import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import DashBoard from '@/views/dashboard/DashBoard'
import Home from '@/views/home/Home.vue'
import CreateBuilding from '@/views/home/CreateBuilding.vue'
import Rooms from '@/views/rooms/Rooms'
import RoomDetail from '@/views/rooms/RoomDetail'
import MainMeter from '@/views/meter/MainMeter'
import Announcement from '@/views/announcement/Announcement'
import RentalContract from '@/views/rental-contract/RentalContract.vue'
import MainStaff from '@/views/staff/MainStaff'
import Expenses from '@/views/expenses/Expenses'
import Payment from '@/views/payment/PayMent'
import PaymentDetail from '@/views/payment/components/PaymentDetail'
import  Setting from '@/views/setting/Setting'
import Plan from '@/views/plans/Plan'

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
    component:MainMeter
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
  {
    path: '/staff',
    name: 'staff',
    component:MainStaff
  },
  {
    path: '/expenses',
    name: 'expenses',
    component:Expenses
  },
  {
    path: '/payment',
    name: 'payment',
    component:Payment
  },
  {
    path: '/payment-detail',
    name: 'payment-detail',
    component:PaymentDetail
  },
  {
    path: '/setting',
    name: 'setting',
    component:Setting
  },
  {
    path: '/plan',
    name: 'plan',
    component:Plan
  },
  
  
 
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onReject || onResolve) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch(err => {
    if (err.name === 'NavigationDuplicated') {
      return err;
    }
    throw err;
  });
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
