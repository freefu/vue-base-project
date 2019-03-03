import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/router/permission'

import 'nprogress/nprogress.css'
import './common/stylus/index.styl'
import './common/js/rem.js'

import Vant from 'vant'
import 'vant/lib/index.css'

import FastClick from 'fastclick'
Vue.use(Vant)

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
