<template>
  <div class="wraper">
   <h2>About <span class="txt4">/</span> Owerview</h2>
   <div class="boxes">
     <div class="box-tall nohover" style="transform: translate3d(-10px, -10px, 0)">
       <div>
         <div class="work-bg" ></div>
         <div class="serif justify-txt" style="position: relative; padding: 40px;">
             <h3>Pleased to meet you.</h3>
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
