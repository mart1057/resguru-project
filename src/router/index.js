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
    component: DashBoard,
    meta: {
      title:'แดชบอร์ด',
      desc:'แดชบอร์ด'
    }
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
    component:Rooms,
    meta: {
      title:'ผังห้องพัก',
      desc:'ห้องพัก'
    }
  },
  {
    path: '/room-detail',
    name: 'room-detail',
    component:RoomDetail,
    meta: {
      title:'ห้อง',
      desc:'ห้องพัก - ห้อง'
    }
  },
  {
    path: '/fee',
    name: 'fee',
    component:MainMeter,
    meta: {
      title:'มิเตอร์',
      desc:'มิเตอร์'
    }
  },
  {
    path: '/announcement',
    name: 'announcement',
    component:Announcement,
    meta: {
      title:'ประกาศ',
      desc:'ประกาศ'
    }
  },
  {
    path: '/rental-contract',
    name: 'rental-contract',
    component:RentalContract,
    meta: {
      title:'การจัดการสัญญาเช่า',
      desc:'การจัดการสัญญาเช่า'
    }
  },
  {
    path: '/staff',
    name: 'staff',
    component:MainStaff,
    meta: {
      title:'บริการและการจัดการพนักงาน',
      desc:'บริการและการจัดการพนักงาน'
    }
  },
  {
    path: '/expenses',
    name: 'expenses',
    component:Expenses,
    meta: {
      title:'รายรับ-รายจ่าย',
      desc:'รายรับ-รายจ่าย'
    }
  },
  {
    path: '/payment',
    name: 'payment',
    component:Payment,
    meta: {
      title:'การจ่ายเงิน',
      desc:'การจ่ายเงิน'
    }
  },
  {
    path: '/payment-detail',
    name: 'payment-detail',
    component:PaymentDetail,
    meta: {
      title:'การจ่ายเงิน',
      desc:'การจ่ายเงิน'
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component:Setting,
    meta: {
      title:'ตั้งค่า',
      desc:'ตั้งค่า'
    }
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
