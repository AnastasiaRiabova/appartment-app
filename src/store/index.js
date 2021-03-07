import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from './modules/userAuth'
import getAllCities from './modules/getAllCities'
import createPersistedState from 'vuex-persistedstate'
import apartments from './modules/apartments'
import oneFlatInfo from './modules/oneFlatInfo'
import loader from './modules/loader'
import modalWindow from './modules/modalWindow'
import orderApartment from './modules/orderApartment'

Vue.use(Vuex)
const dataState = createPersistedState({
  paths: ['userAuth.token', 'userAuth.name']
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userAuth, getAllCities, apartments, oneFlatInfo, loader, modalWindow, orderApartment
  },
  plugins: [dataState]
})
