import Vue from 'vue';
import Lib from 'assets/Lib.js'
import wrapper from './app'


//加载data.json并全局变量
//import cmuiData from '../../../json/data.json';
//Vue.prototype.allCmuiData = function (){return cmuiData};


//加载vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routeConfig from './route-config';
const router = new VueRouter();
router.map(routeConfig);
router.start(wrapper, 'wrapper');


//加载vue-codemirror高亮code
// import VueCodeMirror from 'vue-codemirror';
// Vue.use(VueCodeMirror);




new Vue({
  el: 'body',
  components: { wrapper }
})
