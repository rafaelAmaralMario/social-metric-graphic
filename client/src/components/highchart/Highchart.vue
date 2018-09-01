<template>
  <div class="highchart" id="social-metric-graphic">
GRAPHIC
  </div>
</template>

<script>
import request from '@/helpers/request'
import  highchartHelper from '@/helpers/highcharts'
import constants  from '@/constants'

export default {
  name: 'highchart',
  methods : {
    // sending a http request to get the graphic data from the api.
    fetchData() {
      const url = `${constants.SERVER.SERVICES_URL}getSocialMetricData`;
      const method = 'GET'
      request(url, method)
        .then(response => {
          highchartHelper.mountGraphic(response.data)
        })
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>

</style>
