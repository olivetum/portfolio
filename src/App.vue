<template>
  <div id="app">
    <Header/>

    <Portfolio/>

    <About/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'


export default {
  name: 'app',
  components: { Header, Portfolio, About },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
