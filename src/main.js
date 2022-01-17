import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import AsyncComputed from 'vue-async-computed';
import { BNav } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueClipboard)
Vue.use(AsyncComputed);

Vue.component('v-select', vSelect);
Vue.directive('Nav', BNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
