<template>
  <div class="home">
    Welcome to the PROJECT
  </div>
</template>

<script>
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

              });
    }
  },
  created() {
    // creating a custom resource.
    const action = {
        getData: {method: 'GET'}
    };
    this.resource = this.$resource('/api/{request}', {}, customActions);
  }
}
</script>

<style>

</style>
