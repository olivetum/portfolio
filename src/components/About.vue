<template>
  <div class="wraper">
   <h2>About <span class="txt3">/</span> Owerview</h2>
   <div class="boxes">
     <div class="box-tall about">
       <div>
         <div class="work-bg bg1"></div>
         <p class="description-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
     </div>

     <div class="box-tall nohover me"  :style="{background: me}" style="background-position: 0 35% !important;">
       <div>
         <h3 class="title-bottom">Mateusz Różalski</h3>
         <div class="box-bg"></div>
         <!-- <p class="description">Dolor sit amet</p> -->
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        me: "url('./src/assets/img/me.png')"
      }
    }
  }
</script>

<style>
</style>
