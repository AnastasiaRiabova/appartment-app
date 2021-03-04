import axios from '../../plugins/axios.js'

const getAllCities = {
  state: {
    cities: []
  },
  getters: {
    toGetCities: ({ cities }) => cities
  },
  mutations: {
    GET_CITIES (state, response) {
      state.cities = response
    }
  },
  actions: {
    async fetchCities ({ commit }) {
      try {
        const { data } = await axios.get('/cities')

        commit('GET_CITIES', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        console.log('loader')
      }
    }
  }
}

export default getAllCities
