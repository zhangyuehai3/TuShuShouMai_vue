import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL ='http://127.0.0.1:8083/zuoye/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
