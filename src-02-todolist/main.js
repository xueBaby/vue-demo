/**
 * 入口文件js
 */
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  components:{
    App
  },
  template: '<App />' //需要把App渲染到页面 index.html上
})
