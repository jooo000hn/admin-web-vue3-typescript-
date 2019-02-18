import Vue from 'vue';
import App from './views/shared/app';
import router from './routers';
import store from './store';
import components from '@/components';

import './registerServiceWorker';
Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 使用vue-cookie存储用户登录信息
// tslint:disable-next-line:no-var-requires
const VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

Vue.use(components);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
