//import '@/assets/layui/css/layui.css';
//import '@/assets/layui/layui.all.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './mock/mock';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

