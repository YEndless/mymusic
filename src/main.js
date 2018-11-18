import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'skplayer'

// Vue.use(skPlayer)
Vue.use(ElementUI)
Vue.use(jquery)
Vue.use(bootstrap)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('swipe', Swipe)  // 加这里
Vue.component('swipe-item', SwipeItem) // 加这里

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
