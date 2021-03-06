// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './http';
import api from './api';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.prototype.qs = qs;
router.beforeEach((to,from,next)=>{
    if(window.localStorage.getItem('token') !== null){
        next();
        console.log(1);
    }
    else{
      if(to.path === '/'){
        next();
      }else{
        next('/');
      }
    }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
