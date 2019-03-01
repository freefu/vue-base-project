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
// focus in ios bug
FastClick.prototype.focus = function (targetElement) {
  var length
  if (
    window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
