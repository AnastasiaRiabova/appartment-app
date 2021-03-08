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
    },
    DELETE_ORDER (state, id) {
      state.orderedApartment = state.orderedApartment.filter(el => el.id !== id)
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
    async toOrdersApartment ({ dispatch, commit }, order) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.post('/orders', order)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async deleteOrder ({ dispatch, commit }, orderId) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.delete(`/orders/${orderId}`)
        commit('DELETE_ORDER', orderId)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
export default orderApartment
