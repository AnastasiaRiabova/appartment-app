
const loader = {
  state: {
    showLoader: true
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
