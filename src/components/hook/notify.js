// notification.js
export default {
    install(Vue) {
      Vue.prototype.$showNotification = (color, title, position = 'top-right') => {
        // Using the Vuesax notification method
        Vue.prototype.$vs.notification({
          sticky: true,
          color,
          position,
          title
        });
      };
    }
  };
  