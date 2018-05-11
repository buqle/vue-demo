// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
//引入store
import store from './store/store'

import AsyncComputed from 'vue-async-computed' //引入异步计算属性插件

Vue.config.productionTip = false
Vue.use(AsyncComputed)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,router,
  render:h=>h(App)
});
