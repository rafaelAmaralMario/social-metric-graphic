<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from './components/Home.vue'
import headerTemplate from './components/template/Header.vue'
import footerTemplate from './components/template/Footer.vue'

export default {
  name: 'app',
  components: {
    headerTemplate,
    home,
    footerTemplate
  },

}
</script>

<style>

</style>
