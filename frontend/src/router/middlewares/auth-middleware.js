import store from '../../store'

export const checkAuthParams = (queryParams, next) => {
  if (queryParams.employee_number && queryParams.password)
    store.dispatch('user/loginAction', queryParams)
  else 
    next()
}