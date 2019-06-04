import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(iView);

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
