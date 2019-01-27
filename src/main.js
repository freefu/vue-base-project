import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/router/permission'

import 'nprogress/nprogress.css'
import './common/stylus/index.styl'

import 'lib-flexible/flexible.js'
import VueAnalytics from 'vue-analytics'
import FastClick from 'fastclick'

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  disableScriptLoader: true,
  router,
  autoTracking: {
    pageviewOnLoad: false
  },
  debug: {
    enabled: false
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
