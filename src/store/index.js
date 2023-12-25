import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    login:false,
    errLogin: '',
    main:true,
    building: 0,
    buildingInfo:{}
  },
  getters: {
  },
  mutations: {
    setMain(state,data){
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
    setBuilding(state,data){
      state.building = data
    },
    setBuildingInfo(state,data){
      state.buildingInfo = data
    }
  },
  actions: {
    loginUser({ commit }, user) {
      axios.post('https://api.resguru.app/api' + '/auth/local', {
        "identifier": user.user,
        "password": user.pass
      }).then((resp) => {
        console.log(resp.data);
        fetch('https://api.resguru.app/api/users/' + resp.data.user.id + '?populate=*')
        .then(response => response.json())
        .then((resp2) => {
          commit('setUser', resp2)
          commit('setLogin', true)
          localStorage.setItem("is_login", true)
        })
        // .catch((err)=>{
        //   console.log(err);
        //   commit('setErr', err.response.data.error.message);
        // })
      })
      .catch(error => {
        console.log(error)
        const errorMessage = 'Email หรือ Password ผิดพลาด';
        // this.$showNotification('danger', errorMessage); 
        alert(errorMessage)
      })
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
