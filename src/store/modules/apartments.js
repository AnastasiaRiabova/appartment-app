import axios from '../../plugins/axios.js'

const apartments = {
  state: {
    flats: []
  },
  getters: {
    toGetApartments: ({ flats }) => flats
  },
  mutations: {
    GET_FLAT (state, response) {
      state.flats = response
    }
  },
  actions: {
    async fetchApartments ({ commit }) {
      try {
        const { data } = await axios.get('/apartments')

        commit('GET_FLAT', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        console.log('loader')
      }
    }
  }
}

export default apartments
