import store from '@/store'

// Request config carrying the signed-in user's token. Pass it as the last
// argument of axios.post/put or the config of axios.get on the routes the
// backend protects with the is-building-staff policy (approvePayment,
// generateInvoice, regenerateinvoice, finalize-move-out, import meters,
// create-checkout-session). Returns {} when there is no token, so the call
// still goes out and the server answers 401 (shown by $errMsg) instead of
// the page crashing.
export function authHeaders() {
  const jwt = store.state.jwt
  return jwt ? { headers: { Authorization: 'Bearer ' + jwt } } : {}
}
