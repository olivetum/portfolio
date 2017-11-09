import Vue from 'vue'
import App from './App.vue'

import base from './assets/sass/base.min.css'

new Vue({
  el: '#app',
  render: h => h(App)
})


// let box = document.querySelectorAll('.box')
// for (var i = 0; i < box.length; i++) {
//
//   box[i].addEventListener('click', function () {
//       this.className += ' noHover'
//       this.getElementsByClassName('.modal-default-button').addEventListener('click', function () {
//         alert('lol')
//       })
//   });
// }
