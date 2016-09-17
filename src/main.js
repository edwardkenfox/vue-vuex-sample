import Vuex from 'vuex'
import Vue from 'vue'
import store from './vuex/store'
Vue.use(Vuex)
/* eslint-disable no-new */

import App from './App'

new Vue({
  store,
  el: 'body',
  components: { App }
})
