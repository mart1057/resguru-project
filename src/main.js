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
import notification, { shouldShow } from '@/components/hook/notify';
import formatNumber from '@/components/hook/formatNumber';
import DateField from '@/components/DateField.vue';
import Avatar from '@/components/Avatar.vue';



Vue.config.productionTip = false
Vue.use(Vuesax).use(IconsPlugin).use(BootstrapVue).use(VueApexCharts)
Vue.use(VueMaterial)
// Vue.use(axios);
Vue.use(VueAxios, axios)
Vue.use(notification);
Vue.use(formatNumber);

// dd/mm/yyyy date picker, drop-in for <input type="date"> (v-model = "YYYY-MM-DD")
Vue.component('DateField', DateField);
// unified user/building photo slot with standard placeholders
Vue.component('Avatar', Avatar);

// Safety net for anything that slips past individual .catch()/try-catch.
// The visible recovery UX for render crashes is the error boundary in App.vue;
// these handlers just log and (at most) show ONE calm, auto-dismissing toast.
const GENERIC_ERROR = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';

function toastOnce(title) {
  if (!shouldShow(title, 6000)) return;
  Vue.prototype.$vs.notification({
    duration: 6000,
    color: 'danger',
    position: 'top-right',
    title,
  });
}

function isBenign(reason) {
  if (!reason) return true;
  const name = reason.name || '';
  if (/^Navigation(Duplicated|Redirected|Cancelled|Aborted)$/.test(name)) return true;
  const msg = String(reason.message || reason);
  if (/ResizeObserver loop/i.test(msg)) return true;
  if (/loading chunk \S+ failed|ChunkLoadError|loading css chunk/i.test(msg)) return true; // router.onError reloads
  if (axios.isCancel && axios.isCancel(reason)) return true;
  return false;
}

window.addEventListener('unhandledrejection', (event) => {
  if (isBenign(event.reason)) {
    event.preventDefault();
    return;
  }
  console.error('Unhandled promise rejection:', event.reason);
  toastOnce(GENERIC_ERROR);
  event.preventDefault();
});

Vue.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err, info);
  toastOnce(GENERIC_ERROR);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
