import { UserService, AuthenticationError } from '../../services/auth.service'
import TokenService from '../../services/storage.service'
import JwtService from '../../services/jwt.service'
import router from '../../router'

const user = {
  state: {
    isAuthenticating: false,
    isSessionExpires: false,
    authenticationErrorCode: 0,
    authenticationError: '',
    accessToken: TokenService.getToken()
  },

  getters: {
    loggedIn: (state) => {
      return state.accessToken ? true : false
    },

    userDetails: (state) => {
      return JwtService.decrypt(state.accessToken)
    }
  },

  mutations: {
    loginRequest (state) {
      state.isAuthenticating = true;
      state.authenticationError = ''
      state.authenticationErrorCode = 0
    },

    loginSuccess (state, response) {
      state.accessToken = response.access_token
      state.isAuthenticating = false
    },

    loginError (state, {errorCode, errorMessage}) {
      state.isAuthenticating = false
      state.authenticationErrorCode = errorCode
      state.authenticationError = errorMessage
    },

    cancelAuthentication (state) {
      state.isAuthenticating = false
    },

    logoutSuccess (state) {
      state.accessToken = ''
    },

    RESET_ERRORS (state) {
      state.authenticationError = ''
      state.authenticationErrorCode = 0
    },

    // Error hooks
    unAuthorized (state, res) {
      state.authenticationErrorCode = res.status
      state.authenticationError = res.message
    }
  },

  actions: {
    async loginAction ({ commit }, payload) {
      commit('loginRequest')

      const { employee_number, password } = payload

      try {
        const response = await UserService.login(employee_number, password)
        commit('loginSuccess', response)

        router.push('/form')

        return true
      } 
      catch (e) {
        if (e instanceof AuthenticationError) {
          commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
        }

        return false
      }
    },

    async logoutAction ({ commit }) {
      await UserService.logout()
      commit('logoutSuccess')
      
      router.push('/login')
    },

    unAuthorized ({ commit }, message) {
      UserService.logout()
      commit('logoutSuccess')
      commit('unAuthorized', message)
      router.push('/login')
    }
  }
}

export default user
