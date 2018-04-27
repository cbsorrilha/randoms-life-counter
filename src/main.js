import Vue from 'vue'
import App from './App.vue'
import store from './store'

import noSleep from 'nosleep.js'

function enableNoSleep () {
  noSleep.enable()
  document.removeEventListener('click', enableNoSleep, false)
}

// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener('click', enableNoSleep, false)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
