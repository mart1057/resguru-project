// formatNumber.js
export default {
  install(Vue) {
    Vue.prototype.$formatNumber = (number) => {
      // Check if the number is null or undefined
      if (number === null || number === undefined) {
        return '0';
      }
      // Format the number if it's not null
      return number.toLocaleString();
    };
  }
};
