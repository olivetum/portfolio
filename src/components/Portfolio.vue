<template>
  <div class="wraper">
   <h2>Portfolio <span class="txt4">/</span> Showcase</h2>
   <div class="boxes">

 <div v-for="item in works" class="box" :class="{noHover: item.showModal}" :style="{background: item.img}">
       <div>

         <h4 class="title">
           <span style="font-size: 50%; text-decoration: underline">{{item.type}}</span>
           <br>
           {{item.name}}
           <i  v-if="item.modal"
                  id="show-modal"
                  @click="item.showModal = true"
                  class="fa fa-picture-o"
                  style="  border-bottom: 1px solid rgb(227, 181, 5);"
                  aria-hidden="true"></i>
          </h4>
         <div class="work-bg" :style="{background: item.bac}"></div>
         <div class="description-wraper">
           <p class="description">
             {{item.description}}<br>
             <strong>{{item.data}}</strong>
           </p>

         </div>
     </div>
     <modal v-if="item.showModal" @close="item.showModal = false">
       <carousel  v-if="item.imgs"
                  :perPage="1"
                  :navigationEnabled="true"
                  paginationActiveColor="#e3b505"
                  slot="header">
         <slide v-for="picture in item.imgs" class="bombka">
            <img :src="picture.img" />
         </slide>
         <slide v-if="item.details">
           <div style="padding: 20px;">
             <h4 class="modal-title" style="color: #e3b505;">What was the problem?</h4>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
             <h4 class="modal-title" style="color: #e3b505;">The conception.</h4>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <h4 style="color: #e3b505B;">Use arrows or dots to change slide and see image assets.</h4>
           </div>
         </slide>
       </carousel>

       <div class="modal-body" slot="body">
         <h4 class="modal-title">{{item.name}}</h4>
         <p>{{item.description}}</p>
         <h4 v-if="item.details">You will find detailed information about project on last slide.</h4>
         <h4 v-if="item.link" class="modal-title">Visit:
           <a :href="item.link" target="_blank">
             <i class="fa fa-external-link"
                style="  border-bottom: 1px solid rgb(227, 181, 5);"
                aria-hidden="true"></i>
           </a>
          </h4>
       </div>
     </modal>
   </div>
   </div>
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  import { Carousel, Slide } from 'vue-carousel'
  import VueSilentbox from 'vue-silentbox'


  export default {
    components: { VueSilentbox, Carousel, Slide, Modal },
    data () {
      return {

        works: [
          {
            test: [{img1: 'lol'}],
            name: 'Kathy Simon',
            description: 'Album cover for a country music band from Poland.',
            type: 'Album cover',
            data: '2017',
            bac: 'rgba(227, 181, 5, 0.8)',
            img: "url('./src/assets/img/works/KathySimon/kathySimo_wide.png')",
            imgs: [
              {img: "./src/assets/img/works/KathySimon/kathySimo_wide.png"},
              {img: "./src/assets/img/works/KathySimon/KathySimon_EP_Wide.jpg"},
              {img: "./src/assets/img/works/KathySimon/KathySimon_EP_B_Wide.jpg"},
              {img: "./src/assets/img/works/KathySimon/KathySimon_Mockup_Wide.jpg"}
            ],
            modal: true,
            showModal: false
          },
          {
            name: 'Hollow Quartet',
            description: 'Lorem ipsum dolor sit amet, \n consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            link: 'http://hollowquartet.pl',
            bac: 'rgba(92, 92, 92, 0.8)',
            img: "url('./src/assets/img/works/HollowQuartet/hq.jpg')",
            imgs: [
              {img: "./src/assets/img/works/HollowQuartet/hq_1.jpg"},
              {img: "./src/assets/img/works/HollowQuartet/hq_2.jpg"}
            ],
            modal: true,
            showModal: false
          },
          {
            name: 'Marek Bracha',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            link: 'http://marekbracha.pl',
            bac: 'rgba(92, 92, 92, 0.8)',
            img: "url('./src/assets/img/works/MarekBRacha/marek.jpg')",
            imgs: [
              {img: "./src/assets/img/works/MarekBRacha/mb_1.jpg"},
              {img: "./src/assets/img/works/MarekBRacha/mb_2.jpg"}
            ],
            modal: true,
            showModal: false
          },
          {
            name: 'Posters',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Print',
            bac: 'rgba(227, 181, 5, 0.8)',
            img: "url('./src/assets/img/works/Posters/hq_wide.jpg')",
            imgs: [
              {img: "./src/assets/img/works/Posters/hq_wide.jpg"},
              {img: "./src/assets/img/works/Posters/imuz_koncert.jpg"},
              {img: "./src/assets/img/works/Posters/konkurs_g.jpg"},
              {img: "./src/assets/img/works/Posters/6Plyt.jpg"}
            ],
            modal: true,
            showModal: false
          },
          {
            name: 'HTML Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            bac: 'rgba(227, 181, 5, 0.8)',
            img: "url('./src/assets/img/works/template.png')",
            imgs: [
              {img: "./src/assets/img/works/MarekBRacha/marek.jpg"}
            ],
            modal: true,
            showModal: false
          }
        ]
      }
    }
  }
</script>
