<template>
  <div class="portfolio">
   <h2>Portfolio <span class="txt4">/</span> Showcase</h2>
   <div class="works">
     <div class="work-box" v-for="item in works" :style="{background: item.img}" >
       <h3 class="title">{{item.name}}</h3>
       <div class="work-bg" :style="{background: item.bac}"></div>
       <p class="description">{{item.description}}</p>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        works: [
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(25, 114, 120, .8)',
            img: "url('./src/assets/img/bg.jpg')",
          },
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(190, 90, 78, .8)',
            img: "url('./src/assets/img/bg.jpg')",
          },
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(227, 181, 5, .8)',
            img: "url('./src/assets/img/bg.jpg')",
          },
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bac: 'rgba(33, 29, 34, .8)',
            img: "url('./src/assets/img/bg.jpg')",
          }
        ]
      }
    }
  }
</script>
