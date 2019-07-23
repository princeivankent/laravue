const notification = {
  state: {
    status: false,
    color: '',
    message: '',
    icon: '',
    timeOut: 5000
  },

  mutations: {
    SHOW: (state, { color, message, icon }) => {
      state.status = true
      state.color = color
      state.message = message
      state.icon = icon
    },

    HIDE: (state) => {
      state.status = false
      state.color = ''
      state.message = ''
      state.icon = ''
    }
  },

  actions: {
    showAction: ({commit, state}, payload) => {
      commit('SHOW', payload)

      setTimeout(() => {
        commit('HIDE')
      }, state.timeOut);
    },

    hideAction: ({commit}) => {
      commit('HIDE')
    }
  }
}

export default notification