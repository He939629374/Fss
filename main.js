import Vue from 'vue'
import App from './App'

import store from './store'
import Global from './store/Global.js'
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$global = Global

App.mpType = 'app'
const g = '1'
const app = new Vue({
	global,
    store,
    ...App
})
export default
{
  g
}
app.$mount()
