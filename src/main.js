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

// Safety net: a single unguarded fetch/promise or render error anywhere in
// the app used to be able to crash the whole page to a white screen / the
// dev-server's red error overlay instead of just failing that one action.
// These two handlers catch anything that slips through individual
// .catch()/try-catch blocks, log it for debugging, and show a toast
// instead of taking down the page.
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  Vue.prototype.$vs.notification({
    sticky: true,
    color: 'danger',
    position: 'top-right',
    title: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
  });
  event.preventDefault();
});

Vue.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info);
  Vue.prototype.$vs.notification({
    sticky: true,
    color: 'danger',
    position: 'top-right',
    title: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
  });
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
