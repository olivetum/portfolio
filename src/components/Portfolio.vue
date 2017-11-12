<template>
  <div class="wraper">
   <h2>Portfolio <span class="txt4">/</span> Showcase</h2>
   <div class="boxes">

 <div v-for="item in works" class="box" :class="{noHover: item.showModal}" :style="{background: item.img}">
       <div>

         <h4 class="title"><span style="font-size: 50%; text-decoration: underline">{{item.type}}</span><br />{{item.name}}
           <i  v-if="item.modal"
                  id="show-modal"
                  @click="item.showModal = true"
                  style="border-bottom: 1px solid orange; margin-left: 5px;"
                  class="fa fa-picture-o"
                  aria-hidden="true"></i>
            <a :href="item.link" target="_blank">
              <i  v-if="!item.modal"
                  id="show-modal"
                  style="border-bottom: 1px solid orange; margin-left: 5px;"
                  class="fa fa-external-link"
                  aria-hidden="true">
                </i>
              </a>

          </h4>
         <div class="work-bg" :style="{background: item.bac}"></div>
         <div class="description-wraper">
           <p class="description">{{item.description}}</p>
         </div>
     </div>
     <modal v-if="item.showModal" @close="item.showModal = false">
       <div class="bombka" :style="{background: item.img}" slot="header"></div>

       <div class="modal-body bg1" :style="{background: item.bac}" slot="body">
         <h4 class="modal-title">{{item.name}}</h4>
         <p>{{item.description}}</p>
       </div>

     </modal>
   </div>
   </div>
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  export default {
    components: { Modal },
    data () {
      return {

        works: [
          {
            name: 'Hollow Quartet',
            description: 'Lorem ipsum dolor sit amet, \n consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            link: 'http://hollowquartet.pl',
            bac: 'rgba(227, 181, 5, .8)',
            img: "url('./src/assets/img/works/hq.jpg')",
          },
          {
            name: 'Marek Bracha',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            link: 'http://marekbracha.pl',
            bac: 'rgba(25, 114, 120, .8)',
            img: "url('./src/assets/img/works/marek.jpg')",
          },
          {
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Print',
            bac: 'rgba(190, 90, 78, .8)',
            img: "url('./src/assets/img/bg.jpg')",
            modal: true,
            showModal: false
          },
          {
            name: 'HTML Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            type: 'Website',
            bac: 'rgba(33, 29, 34, .8)',
            img: "url('./src/assets/img/works/template.png')",
            modal: false,
            showModal: false
          }
        ]
      }
    }
  }
</script>
