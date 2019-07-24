import ApiService from './api.service'
import TokenService from './storage.service'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.errorCode = errorCode
    this.message = message
  }
}

class RegistrationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.errorCode = errorCode
    this.message = message
  }
}

const UserService = {
  /**
    * Login the user and store the access token to TokenService. 
    * 
    * @returns access_token
    * @throws AuthenticationError 
  **/
  login: async (employee_number, password) => {
    const requestData = {
      method: 'POST',
      url: "/api/v1/login",
      data: {
        employee_number,
        password
      }
    }

    try {
      const response = await ApiService.customRequest(requestData)
      
      TokenService.saveToken(response.data.access_token)
      ApiService.setHeader()
      
      // NOTE: We haven't covered this yet in our ApiService 
      //       but don't worry about this just yet - I'll come back to it later
      // ApiService.mount401Interceptor();

      return response.data
    } 
    catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.message)
    }
  },

  /**
    * Register the user 
    * 
    * @returns status
    * @throws RegistrationError 
  **/
  register: async (name, username, password) => {
    const requestData = {
      method: 'POST',
      url: "/api/v1/register",
      data: {
        name: name,
        username: username,
        password: password
      }
    }
    
    try {
      const response = await ApiService.customRequest(requestData)

      return response.data
    } 
    catch (error) {
      throw new RegistrationError(error.response.status, error.response.data.message)
    }
  },

  /**
   * Logout the current user by removing the token from storage. 
   * 
   * Will also remove `Authorization Bearer <token>` header from future requests.
  **/
  async logout() {
    // Remove the token and remove Authorization header from Api Service as well
    const requestData = {
      method: 'POST',
      url: "/api/v1/logout",
      data: {
        access_token: TokenService.getToken()
      }
    }

    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.removeToken()
      ApiService.removeHeader()

      return response.data
      
      // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
      // ApiService.unmount401Interceptor()
    } 
    catch (error) {
      throw new RegistrationError(error.response.status, error.response.data.message)
    }
  }
}

export default UserService

export { UserService, AuthenticationError, RegistrationError }
