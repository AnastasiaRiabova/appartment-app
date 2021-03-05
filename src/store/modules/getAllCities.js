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
    async fetchCities ({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.get('/cities')

        commit('GET_CITIES', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default getAllCities
