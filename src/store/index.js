import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    login:false
  },
  getters: {
  },
  mutations: {
    setUser(state, data) {
      state.userInfo = data
    },
    setLogin(state, data) {
      state.login = data
    },
  },
  actions: {
    loginUser({ commit }, user) {
      axios.post('http://203.170.190.170:1337/api' + '/auth/local', {
        "identifier": user.user,
        "password": user.pass
      }).then((resp) => {
        console.log(resp.data);
        fetch('http://203.170.190.170:1337/api/users/' + resp.data.user.id + '?populate=*')
        .then(response => response.json())
        .then((resp2) => {
          commit('setUser', resp.data)
          commit('setLogin', true)
        })
      })
    }
  },
  modules: {
  }
})
