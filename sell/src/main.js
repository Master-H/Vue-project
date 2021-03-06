// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
// import jsonloader from 'json-loader';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';
import Hello from './components/goods/Hello'
// 因为在webpack.base.conf.js中设置了alia，所以下面可以简写
// import  'common/stylus/index.styl'

//引入到全局这样可以使用class='border-1px'实现真正1px底边
import  './common/stylus/index.styl'

//全局注册后，到处都可以
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false;

//下面行是一个跳过eslint的一个规则，因为eslint中实例必须，给变量
/* eslint-disable no-new */
let router = new VueRouter({
  //加了mode:'history'会导致build后监听接口刷新挂掉（首次加载不会），开启HTML5 History Mode后，尤其需要server端的支持
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
     {
      path: '/goods',
      component: goods
    },
     {
      path: '/ratings',
      component: ratings
    },
     {
      path: '/seller',
      component: seller
    }
    
 ],
 linkActiveClass: 'active'
     
})

 new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
