import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/Login.vue'
import Register from '@/views/login-register/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginRegis
  },
  {
    path: '/register',
    name: 'register',
    component: Register 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
