import axios from '../../plugins/axios.js'

const orderApartment = {
  state: {
    orderedApartment: ''
  },
  getters: {
    getOrders: ({ orderedApartment }) => orderedApartment
  },
  mutations: {
    GET_ORDERS (state, data) {
      state.orderedApartment = data
    }

  },
  actions: {
    async fetchOrders ({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.get('/orders')
        commit('GET_ORDERS', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async toOrdersApartment ({ dispatch }, order) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.post('/orders', order)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async deleteOrder ({ dispatch }, orderId) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.delete(`/orders/${orderId}`)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
export default orderApartment
