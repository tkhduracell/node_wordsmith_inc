import $ from 'jquery'
import Vue from 'vue'

import Root from './views/Root.vue'
import Router from './router'

import 'vueify/lib/insert-css'

Vue.config.productionTip = false

/* eslint-disable no-new */
$(function () {
  new Vue({
    el: '#app',
    router: Router,
    render: fn => fn(Root)
  })
})
