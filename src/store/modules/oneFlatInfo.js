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
      console.log(response)
    },
    OWNER_INFO (state, response) {
      state.ownerInfo = response
      // console.log(state.ownerInfo)
    }
  },
  actions: {
    async fetchOneFlatInfo ({ commit, dispatch }, id) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.get(`/apartments/${id}`)
        commit('GET_ONE_FLAT_INFO', data)
        commit('OWNER_INFO', data.owner)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async toPostReview ({ dispatch }, { id, reviewBody }) {
      try {
        console.log(id, reviewBody)
        dispatch('toggleLoader', true, { root: true })
        // await axios.post(`/apartments/${id}/reviews`, reviewBody)
      } catch (error) {
        throw new Error(error)
        // console.log(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default oneFlatInfo
