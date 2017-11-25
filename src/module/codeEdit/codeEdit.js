import Vue from 'vue'
import Lib from 'assets/Lib.js'
import codeEdit from './app'


import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routeConfig from './route-config';
const router = new VueRouter();
router.map(routeConfig);
router.start(codeEdit, 'code-edit');


new Vue({
  el: 'body',
  components: { codeEdit }
})
