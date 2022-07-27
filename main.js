import App from './App'
import * as http from './utils/http' // http请求接口
import config from '@/config' // 配置

Vue.prototype.$http = http
Vue.prototype.$config = config

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif