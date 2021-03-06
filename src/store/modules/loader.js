
const loader = {
  state: {
    showLoader: false
  },
  getters: {
    getLoader: ({ showLoader }) => showLoader
  },
  mutations: {
    SET_LOADER (state, bool) {
      state.showLoader = bool
    }

  },
  actions: {
    toggleLoader ({ commit }, bool) {
      commit('SET_LOADER', bool)
    }

  }
}

export default loader
