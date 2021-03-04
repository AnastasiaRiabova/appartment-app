import axios from '../../plugins/axios.js'

const oneFlatInfo = {
  state: {
    info: [],
    ownerInfo: {}
  },
  getters: {
    toGetFlatInfo: ({ info }) => info,
    getOwnerInfo: ({ ownerInfo }) => ownerInfo
  },
  mutations: {
    GET_ONE_FLAT_INFO (state, response) {
      state.info = response
    },
    OWNER_INFO (state, response) {
      state.ownerInfo = response
      console.log(state.ownerInfo)
    }
  },
  actions: {
    async fetchOneFlatInfo ({ commit }, id) {
      try {
        const { data } = await axios.get(`/apartments/${id}`)
        commit('GET_ONE_FLAT_INFO', data)
        commit('OWNER_INFO', data.owner)
      } catch (error) {
        throw new Error(error)
      } finally {
        console.log('loader')
      }
    }
  }
}

export default oneFlatInfo
