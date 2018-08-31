<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/template/Header.vue'
import Footer from './components/template/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Footer
  },

}
</script>

<style>

</style>
