<template>
  <div id="app">
    <Header/>

    <Portfolio/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'app',
  components: { Header, Portfolio },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
