<template>
  <div class="home">
    Welcome to the PROJECT
    <button @click="fetchData()"></button>
    <p> {{ graphicData }}</p>
  </div>
</template>

<script>
import { constants } from '@/constants'
export default {
  name: 'home',
  data() {
    return {
      graphicData : {}
    }
  },
  methods : {
    // sending a http request to get the graphic data from the api.
    fetchData() {
      this.resource.getData({request: 'getSocialMetricData'})
        .then(response => {
            return response.json();
        })
        .then(data => {
          graphicData = data;
        });
    }
  },
  created() {
    // creating a custom resource.
    const action = {
        getData: {method: 'GET'}
    };
    this.resource = this.$resource(constants.SERVER.SERVICES_URL, {}, customActions);
  }
}
</script>

<style>

</style>
