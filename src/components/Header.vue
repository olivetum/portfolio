<template>
<div>
  <div class="container full-flex top-bar">
    <h1>{{tml}}</h1>
    <!-- <h4> I believe that good design can give a feeling of  order and expedience. Nn crowded, massy environment  in global communication era deliberate medium is a way to achieve goals and success.  I see design as a stepwise process – ideas become clear and message is sharpen to perfection. </h4> -->
    <img style="order: 4;" class="logo" :src="logo" />
    <!-- <div style="background-color: black; width: 22px; height: 18px; order: 1; z-index: 1000;" class="menu-button"></div> -->
  </div>

  <div class="container flex-center hello serif justify-txt">
    <p style="font-style: italic;">
      I believe that good design can give a sense of  order and purpose. In the crowded environment  of today’s global communication era a deliberate medium is a way to achieve goals and success.  I see design as a stepwise process – ideas become clear and the message sharpens to perfection.
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
