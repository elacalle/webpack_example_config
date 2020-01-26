import './styles/style.css'
import Vue from 'vue/dist/vue.js';
import cookie from './pages/index.html';

const cookieComponent = Vue.component('cookie', {template: cookie});

new Vue({
  el: '#app',
  data: {
    currentComponent: null
  },
  created() {
    this.currentComponent = cookieComponent;
  }
});

Vue.config.devtools = true;
