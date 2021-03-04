import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from './modules/userAuth'
import getAllCities from './modules/getAllCities'
import createPersistedState from 'vuex-persistedstate'
import apartments from './modules/apartments'
import oneFlatInfo from './modules/oneFlatInfo'

Vue.use(Vuex)
const dataState = createPersistedState({
  paths: ['userAuth.token']
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userAuth, getAllCities, apartments, oneFlatInfo
  },
  plugins: [dataState]
})
