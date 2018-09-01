<template>
  <div id="app">
    <header-template />
    <main-template />
    <footer-template />
  </div>
</template>

<script>
import headerTemplate from './components/template/HeaderTemplate.vue'
import mainTemplate from './components/template/MainTemplate.vue'
import footerTemplate from './components/template/FooterTemplate.vue'

export default {
  name: 'app',
  components: {
    headerTemplate,
    mainTemplate,
    footerTemplate
  },

}
</script>

<style>
  .container {
    display: flex;
    align-content: center;
    justify-content: flex-end;
    font-family: 'Courier New', Courier, monospace;
    color: #FFF;
    padding: 0 20px;
  }
</style>
