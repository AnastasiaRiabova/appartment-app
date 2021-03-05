import axios from '../../plugins/axios.js'

const apartments = {
  state: {
    flats: [],
    filterFlats: []
  },
  getters: {
    toGetApartments: ({ flats, filterFlats }) => {
      if (filterFlats.length !== 0) {
        return filterFlats
      } else {
        return flats
      }
    }

  },
  mutations: {
    GET_FLAT (state, response) {
      state.flats = response
    },
    FILTER_APRTM (state, value) {
      console.log(value)
      if (value.city && value.price) {
        const filter = state.flats.filter(
          flat =>
            flat.price < value.price && flat.location.city === value.city
        )

        console.log(filter)
        state.filterFlats = filter
      } else {
        const filter = state.flats.filter(
          flat =>
            flat.price < value.price || flat.location.city === value.city
        )

        console.log(filter)
        state.filterFlats = filter
      }
    }
  },
  actions: {
    async fetchApartments ({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.get('/apartments')

        commit('GET_FLAT', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    filterApartments ({ commit }, value) {
      commit('FILTER_APRTM', value)
    }
  }
}

export default apartments
