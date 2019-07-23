const App = {
  state: {
    drawer: true
  },

  getters: {},

  mutations: {
    TOGGLE_DRAWER (state, payload) {
      state.drawer = payload
    }
  },
  
  actions: {
    // dispatch('app/toggleAppDrawerAction')
    toggleAppDrawerAction ({ commit, state }) {
      if (state.drawer) commit('TOGGLE_DRAWER', false)
      else if (!state.drawer) commit('TOGGLE_DRAWER', true)
    }
  }
}

export default App;