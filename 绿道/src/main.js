import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import api from './api' // 导入api接口
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import echarts from 'echarts'
import 'babel-polyfill' // 兼容IE11
import 'url-search-params-polyfill' // 兼容IE11
import './utils/iconfont/iconfont.css'//引入字体图标
import _public from "./utils/public";//引入公共方法

Vue.use(Element)
Vue.use(animated)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$public = _public; // 将公共方法挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
