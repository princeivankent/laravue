import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VueMeta from 'vue-meta'
import TokenService from '../services/storage.service'
import { checkAuthParams } from './middlewares/auth-middleware'

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_NAME,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guest = to.matched.some(record => record.meta.guest)
  const isLoggedIn = !!TokenService.getToken()

  if(requiresAuth) {
    if (!isLoggedIn) {
      next('/login')
    }
    else {
      next()
    }
  } 
  else if (guest) {
    if (!isLoggedIn) {
      checkAuthParams(to.query, next)
    }
    else {
      next('/home')
    }
  }
  else next()
})

export default router