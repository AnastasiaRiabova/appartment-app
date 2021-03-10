import axios from '../../plugins/axios.js'

const apartments = {
  state: {
    flats: [],
    filterFlats: [],
    notFound: ''
  },
  getters: {
    toGetApartments: ({ flats, filterFlats, notFound }) => {
      if (notFound !== '') {
        return []
      } else if (filterFlats.length !== 0) {
        return filterFlats
      } else { return flats }
    },
    getNotFound: ({ notFound }) => notFound

  },
  mutations: {
    GET_FLAT (state, response) {
      state.flats = response
    },
    FILTER_APRTM (state, value) {
      // console.log(value)
      if (value.city && value.price) {
        const filter = state.flats.filter(
          flat =>
            flat.price < value.price && flat.location.city === value.city
        )

        if (filter.length === 0) {
          state.notFound = 'no filtered apartments'
        } else {
          state.filterFlats = filter
          state.notFound = ''
        }
      } else {
        const filter = state.flats.filter(
          flat =>
            flat.price < value.price || flat.location.city === value.city
        )

        if (filter.length === 0) {
          state.notFound = 'no filtered apartments'
        } else {
          state.filterFlats = filter
          state.notFound = ''
        }
      }
    },
    CLEAR_FILTER (state) {
      state.filterFlats = []
      state.notFound = ''
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
    },
    clearFilter ({ commit }) {
      commit('CLEAR_FILTER')
    }
  }
}

export default apartments
