// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vSelect from 'vue-select';
import BootstrapVue from 'bootstrap-vue';
import AsyncComputed from 'vue-async-computed';
import VueClipboard from 'vue-clipboard2';
import VS2 from 'vue-script2';
import { Nav } from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';
import router from './router';

Vue.use(VS2);
Vue.use(Nav);
Vue.use(BootstrapVue);
Vue.use(AsyncComputed);
Vue.use(VueClipboard);

Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
