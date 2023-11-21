// formatNumber.js
export default {
    install(Vue) {
      Vue.prototype.$formatNumber = (number) => {
        return number.toLocaleString();
      };
    }
  };
  