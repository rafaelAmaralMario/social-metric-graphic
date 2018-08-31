<template>
  <div class="home">
    <highchart />
  </div>
</template>

<script>
import request from '@/helpers/request'
import constants  from '@/constants'
import highchart from '../highchart/Highchart.vue'

export default {
  name: 'home',
  components: {
    highchart
  }
}
</script>

<style scoped>
   div {
    margin-right: auto;
    margin-left:  auto;
    max-width: 960px;
    padding-right: 10px;
    padding-left:  10px;
    min-height: 80vh;
  }
</style>
