import axios from '../../plugins/axios.js'

const userAuth = {
  state: {
    name: '',
    email: '',
    token: ''
  },
  getters: {
    toGetName: ({ name }) => name,
    toGetEmail: ({ email }) => email,
    isAuth: ({ token }) => token
  },
  mutations: {
    GET_USER_INFO (state, response) {
      state.name = response.user.name
      state.email = response.user.email
      state.token = response.token
    },
    LOGOUT_USER (state, data) {
      state.name = ''
      state.email = ''
      state.token = ''
    }
  },
  actions: {

    async toRegisterUser ({ commit, dispatch }, request) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.post('/users/register', request)

        commit('GET_USER_INFO', data)
      } catch (error) {
        throw new Error(error)
        // console.log(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async toLoginUser ({ commit, dispatch }, request) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const { data } = await axios.post('/users/login', request)

        commit('GET_USER_INFO', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async toLogOutUser ({ commit, dispatch }) {
      // const { isAuth } = getters
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.post('/users/logout')

        commit('LOGOUT_USER')
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    localStorageClean ({ commit }) {
      commit('LOGOUT_USER')
    }
  }
}

export default userAuth
