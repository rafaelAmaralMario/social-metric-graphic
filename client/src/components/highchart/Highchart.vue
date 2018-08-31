<template>
  <div class="highchart">
    HIIIIIIIIIIIII
  </div>
</template>

<script>
import request from '@/helpers/request'
import constants  from '@/constants'

export default {
  name: 'highchart',
  data() {
    return {
      graphicData : {}
    }
  },
  methods : {
    // sending a http request to get the graphic data from the api.
    fetchData() {
      const url = `${constants.SERVER.SERVICES_URL}/getSocialMetricData`;
      const method = 'GET'

      request(url, method)
        .then(response => {
          console.log(response)
          this.graphicData = response.data
        })
    }
  },
  created() {

  }
}
</script>

<style>

</style>
