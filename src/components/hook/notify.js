// notification.js
// Toasts auto-dismiss and de-dupe: a render error re-throws on every reactive
// update, so without this a single bad property access produces an endless
// stream of identical red toasts the user can't clear.

const lastShown = new Map();

export function shouldShow(title, windowMs = 4000) {
  const key = String(title || '');
  const now = Date.now();
  const prev = lastShown.get(key);
  if (prev && now - prev < windowMs) return false;
  lastShown.set(key, now);
  if (lastShown.size > 50) lastShown.clear();
  return true;
}

export default {
  install(Vue) {
    Vue.prototype.$showNotification = (color, title, position = 'top-right') => {
      if (!shouldShow(title)) return;
      Vue.prototype.$vs.notification({
        duration: color === 'danger' ? 6000 : 4000,
        color,
        position,
        title,
      });
    };
  },
};
