<template>
  <div class="wraper">
   <h2>Portfolio <span class="txt4">/</span> Showcase</h2>
   <div class="boxes">
     <a v-for="item in works" class="box" :style="{background: item.img}" :href="item.link" target="_blank">
       <div>
         <h3 class="title">{{item.name}}</h3>
         <div class="work-bg" :style="{background: item.bac}"></div>
         <p class="description">{{item.description}}</p>
     </div>
    </a>
   </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        works: [
          {
            name: 'Hollow Quartet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'http://hollowquartet.pl',
            bac: 'rgba(227, 181, 5, .8)',
            img: "url('./src/assets/img/works/hq.jpg')",
          },
          {
            name: 'Marek Bracha',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(25, 114, 120, .8)',
            img: "url('./src/assets/img/works/marek.jpg')",
          },
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(190, 90, 78, .8)',
            img: "url('./src/assets/img/bg.jpg')",
          },
          {
            name: 'HTML Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(33, 29, 34, .8)',
            img: "url('./src/assets/img/works/template.png')",
          }
        ]
      }
    }
  }
</script>
