import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegis from '@/views/login-register/LoginRegis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginRegis
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
