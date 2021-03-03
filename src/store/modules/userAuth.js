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

    async toRegisterUser ({ commit }, request) {
      try {
        const { data } = await axios.post('/users/register', request)

        commit('GET_USER_INFO', data)
      } catch (error) {
        throw new Error(error)
        // console.log(error)
      } finally {
        console.log('loader')
      }
    },
    async toLoginUser ({ commit }, request) {
      try {
        const { data } = await axios.post('/users/login', request)

        commit('GET_USER_INFO', data)
      } catch (error) {
        throw new Error(error)
      } finally {
        console.log('loader')
      }
    },
    async toLogOutUser ({ commit, getters }) {
      // const { isAuth } = getters
      try {
        await axios.post('/users/logout')

        commit('LOGOUT_USER')
      } catch (error) {
        throw new Error(error)
      } finally {
        console.log('loader')
      }
    }
  }
}

export default userAuth
