const modalWindow = {
  state: {
    showModal: false

  },
  getters: {
    getModalWindow: ({ showModal }) => showModal

  },
  mutations: {
    SET_MODAL_WINDOW (state, bool) {
      state.showModal = bool
    }

  },
  actions: {
    toggleModalWindow ({ commit }, bool) {
      commit('SET_MODAL_WINDOW', bool)
    }

  }
}

export default modalWindow
