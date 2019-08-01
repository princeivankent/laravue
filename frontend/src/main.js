import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'

import ApiService from './services/api.service'
import TokenService from './services/storage.service'

global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
ApiService.init('http://localhost/laravue') // backend api

if (TokenService.getToken()) ApiService.setHeader()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
