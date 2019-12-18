const { add, mul } = require('./js/math')

console.log(add(10, 20));
console.log(mul(20, 30));


require('./css/normal.css')   // 依赖css文件
require('./css/special.less')   // 依赖less文件


import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: "<App></App>",
  components: {
    App
  }
})
