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

// Build a Thai, user-facing error message that still carries something support
// can act on (an HTTP status, or "connection failed"). The full raw error is
// logged to the console for developers.
//   $errMsg(err, 'โหลดข้อมูลห้องพัก')
//     -> "โหลดข้อมูลห้องพักไม่สำเร็จ (รหัส 500) — ลองใหม่อีกครั้ง หากยังพบปัญหาโปรดแจ้งทีมสนับสนุน"
export function buildErrMsg(err, context) {
  try {
    console.error('[errMsg]' + (context ? ' ' + context : ''), err);
  } catch (e) { /* noop */ }
  const status = err && err.response && err.response.status;
  const netFail = err && (
    err.message === 'Failed to fetch' ||
    err.message === 'Network Error' ||
    err.code === 'ERR_NETWORK' ||
    err.code === 'ECONNABORTED'
  );
  const ref = status ? ` (รหัส ${status})` : netFail ? ' (เชื่อมต่อไม่ได้)' : '';
  const what = context ? `${context}ไม่สำเร็จ` : 'เกิดข้อผิดพลาด';
  return `${what}${ref} — ลองใหม่อีกครั้ง หากยังพบปัญหาโปรดแจ้งทีมสนับสนุน`;
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

    Vue.prototype.$errMsg = (err, context) => buildErrMsg(err, context);
  },
};
