<template>
<div>
  <div class="container full-flex top-bar">
    <h1>{{tml}}</h1>
    <img style="order: 4;" class="logo" src="../assets/img/logo.svg" />
    <div style="background-color: black; width: 22px; height: 18px; order: 1;">

    </div>
  </div>

  <div class="container flex-center hello serif center-txt">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span class="desktop-only">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </p>
  </div>


</div>

</template>

<script>
  export default {
    data () {
      return {
        tml: 'Tumiładnie'
      }
    }
  }
</script>
