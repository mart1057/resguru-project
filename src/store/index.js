import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    login: false,
    errLogin: '',
    main: false,
    building: 0,
    buildingInfo: []
  },
  getters: {
  },
  mutations: {
    setMain(state, data) {
      state.main = data
    },
    setUser(state, data) {
      state.userInfo = data
    },
    setLogin(state, data) {
      state.login = data
    },
    setErr(state, data) {
      state.errLogin = data
    },
    setBuilding(state, data) {
      state.building = data
    },
    setBuildingInfo(state, data) {
      state.buildingInfo = data
    }
  },
  actions: {
    // Resolves to { ok: true } on success or { ok: false, message } on any
    // failure - the caller (Login.vue) shows the message inline. Never throws,
    // so it can't trip the global unhandledrejection toast in main.js.
    async loginUser({ commit }, user) {
      let auth
      try {
        auth = await axios.post('https://api.resguru.app/api/auth/local', {
          identifier: user.user,
          password: user.pass,
        })
      } catch (error) {
        console.log(error)
        return { ok: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' }
      }

      try {
        const detailRes = await fetch(
          'https://api.resguru.app/api/users/' + auth.data.user.id + '?populate=*'
        )
        const detail = await detailRes.json()

        if (detail && detail.role && detail.role.id == 6) {
          commit('setUser', detail)
          commit('setLogin', true)
          return { ok: true }
        }
        return { ok: false, message: 'บัญชีของคุณไม่มีสิทธิ์เข้าใช้งาน' }
      } catch (err) {
        console.log(err)
        return { ok: false, message: 'เกิดข้อผิดพลาด กรุณาลองเข้าสู่ระบบใหม่อีกครั้ง' }
      }
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
