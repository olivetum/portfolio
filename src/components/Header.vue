<template>
<div>
  <div class="container full-flex top-bar">
    <h1>{{tml}}</h1>
    <img style="order: 4;" class="logo" :src="logo" />
    <div style="background-color: black; width: 22px; height: 18px; order: 1;" class="menu-button">

    </div>
  </div>

  <div class="container flex-center hello serif center-txt">
    <p>
      I am a graphic designer and web developer living and working in Warsaw.<br> <span class="desktop-only">Check out my work and tell me how I can help.</span>
    </p>
  </div>


</div>

</template>

<script>
  export default {
    data () {
      return {
        tml: 'Tumiładnie',
        logo: './src/assets/img/logo.svg'
      }
    }
  }
</script>
