import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入mock数据
require('./mock')

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
