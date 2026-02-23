import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/tailwind.css'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueApexCharts from 'vue-apexcharts'

import axios from 'axios'
import VueAxios from 'vue-axios'
import notification from '@/components/hook/notify';
import formatNumber from '@/components/hook/formatNumber';



Vue.config.productionTip = false
Vue.use(Vuesax).use(IconsPlugin).use(BootstrapVue).use(VueApexCharts)
Vue.use(VueMaterial)
// Vue.use(axios);
Vue.use(VueAxios, axios)
Vue.use(notification);
Vue.use(formatNumber);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
