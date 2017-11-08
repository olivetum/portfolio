<template>
  <div class="wraper">
   <h2>About <span class="txt3">/</span> Owerview</h2>
   <div class="boxes">
     <div class="box-tall about">
       <div>
         <div class="work-bg bg4"></div>
         <div style="position: relative; padding: 40px; color: white;">
             <h3>Hi</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum.</p>
           </div>
       </div>
     </div>

     <div class="box-tall nohover me"  :style="{background: me}" style="background-position: 0 35% !important;">
       <div>
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
